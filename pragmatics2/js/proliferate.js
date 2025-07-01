var PROLIFERATE_SUBMIT_URL = "https://webhook.site/1bc59970-feb0-419b-b34b-06281604911a";
var PROLIFERATE_PING_URL = "https://webhook.site/1bc59970-feb0-419b-b34b-06281604911a";
var REDIRECT_URL = "https://app.prolific.com/submissions/complete?cc=CH9FR7LI"; // NOTE: Should change everytime


function get_url_param(name, defaultValue) {
    var regexS = "[\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var tmpURL = window.location.href;
    var results = regex.exec(tmpURL);
    if (results == null) {
        return defaultValue;
    } else {
        return results[1];
    }
}

function htmlify(obj) {
    if (obj instanceof Array) {
        return "[" + obj.map(function (o) { return htmlify(o) }).join(",") + "]";
    } else if (typeof obj == "object") {
        var strs = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var str = "<li>" + htmlify(key) + ": " + htmlify(obj[key]) + "</li>";
                strs.push(str);
            }
        }
        return "{<ul>" + strs.join("") + "</ul>}";
    } else if (typeof obj == "string") {
        return '"' + obj + '"';
    } else if (typeof obj == "undefined") {
        return "[undefined]"
    } else {
        return obj.toString();
    }
};



var proliferate = {
    "submit": function (expdata) {
        var PROLIFIC_PID = get_url_param("PROLIFIC_PID", "NONE");
        var SESSION_ID = get_url_param("SESSION_ID", "NONE");
        var STUDY_ID = get_url_param("STUDY_ID", "NONE");
        var submit_url = PROLIFERATE_SUBMIT_URL;
        // debug mode?
        if (PROLIFIC_PID === "NONE" || SESSION_ID === "NONE" || STUDY_ID === "NONE") {
            var data_html = htmlify(expdata);
            var div = $("<div></div>");
            div.css({
                "font-family": '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", sans-serif',
                "font-size": '14px',
                "float": 'right',
                "padding": '1em',
                "background": '#dfdfdf'
            });
            div.html("<p><b>Debug mode</b></p>Here is the data that would have been submitted: <ul>" + data_html + "</ul>");
            $("body").append(div);
            return;
        }

        if ($("#thanks").length > 0 && $("#uploading-text").length === 0) {
            $("#thanks").html('<p class="big" id="uploading-text">Uploading data... Please don\'t close this window!</p>' +
                '<p class="big" id="thanks-text">Thanks for your time!</p>');
        }

        $("#uploading-text").show();
        $("#thanks-text").hide();

        fetch(submit_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                "data": JSON.stringify(expdata),
                "prolific_id": PROLIFIC_PID,
                "session_id": SESSION_ID,
                "experiment_id": STUDY_ID,
                "batch": get_url_param("batch", "NONE"),
                "alt": get_url_param("alt", "NONE"),
                "condition": get_url_param("condition", "NONE")
            })
        })
            .then(response => {
                console.log("Response status: " + response.status);
                if (!response.ok) throw response;
                return response.json();
            })
            .then(data => {
                console.log("Response data: ", data);

                var completionURL = REDIRECT_URL;
                var completionHTML = 'Thanks for your time!<br><br>' +
                    'If you are not redirected within two seconds, click on the following completion URL:' +
                    '<br> <a href="' + completionURL + '">' + completionURL + '</a>';

                $("#uploading-text").html(completionHTML);
                window.setTimeout(function () {
                    window.location.href = completionURL;
                }, 2000);
            })
            .catch(error => {
                console.error("Error submitting data:", error);

                alert("Oooops, an error occurred! \n\n" +
                    "Please message the researcher. " +
                    "We apologize for any inconvenience caused.");
            }
            );

    }
}


// implement ping
$(document).ready(function () {
    if (get_url_param("PROLIFIC_PID", "NONE") != "NONE" && get_url_param("SESSION_ID", "NONE") != "NONE" && get_url_param("STUDY_ID", "NONE") != "NONE") {
        window.setInterval(function () {
            var formdata = {
                "active": true,
                "experiment_id": get_url_param("STUDY_ID", "NONE"),
                "participant_id": get_url_param("PROLIFIC_PID", "NONE"),
                "session_id": get_url_param("SESSION_ID", "NONE"),
                "batch": get_url_param("batch", "NONE"),
                "alt": get_url_param("alt", "NONE"),
                "condition": get_url_param("condition", "NONE")
            };
            var ping_url = PROLIFERATE_PING_URL;
            $.post(ping_url, formdata);
        }, 60000);
    }
});
