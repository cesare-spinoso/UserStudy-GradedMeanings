var PROLIFERATE_SUBMIT_URL = "https://webhook.site/1bc59970-feb0-419b-b34b-06281604911a";
var REDIRECT_URL = "https://app.prolific.com/submissions/complete?cc=CH9FR7LI";

function get_url_param(name, defaultValue) {
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var tmpURL = window.location.href;
    var results = regex.exec(tmpURL);
    return results == null ? defaultValue : results[1];
}

function htmlify(obj) {
    if (Array.isArray(obj)) {
        return "[" + obj.map(htmlify).join(",") + "]";
    } else if (typeof obj === "object") {
        var strs = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                strs.push("<li>" + htmlify(key) + ": " + htmlify(obj[key]) + "</li>");
            }
        }
        return "{<ul>" + strs.join("") + "</ul>}";
    } else if (typeof obj === "string") {
        return '"' + obj + '"';
    } else if (typeof obj === "undefined") {
        return "[undefined]";
    } else {
        return obj.toString();
    }
}

var proliferate = {
    "submit": function (expdata, success_fct, failure_fct) {
        var PROLIFIC_PID = get_url_param("PROLIFIC_PID", "NONE");
        var SESSION_ID = get_url_param("SESSION_ID", "NONE");
        var STUDY_ID = get_url_param("STUDY_ID", "NONE");

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

        $.post(PROLIFERATE_SUBMIT_URL, {
            "data": JSON.stringify(expdata),
            "prolific_pid": PROLIFIC_PID,
            "session_id": SESSION_ID,
            "study_id": STUDY_ID
        }).done(function (data) {
            if (typeof success_fct === "function") {
                success_fct(data);
                return;
            }
            // Always redirect on success
            window.location.href = REDIRECT_URL;
        }).fail(function (data) {
            if (typeof failure_fct === "function") {
                failure_fct(data);
                return;
            }
            if ($("#thanks").length > 0) {
                $("#thanks").html("<p><strong>Oooops, an error occurred!</strong></p>" +
                    "<p>Please message the researcher to get compensated. " +
                    "We apologize for any inconvenience caused.</p>");
            } else {
                alert("Oooops, an error occurred! \n\n" +
                    "Please message the researcher to get compensated. " +
                    "We apologize for any inconvenience caused.");
            }
        });
    }
};



// for backwards compatibility with mmturkey.js
var turk = {
    "previewMode": false,
    "submit": proliferate.submit
};


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
