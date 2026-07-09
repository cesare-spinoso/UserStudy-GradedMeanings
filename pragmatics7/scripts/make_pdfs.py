"""Renders the two pragmatics7 stimulus PDFs from scripts/stimuli_dump.json
(produced by dump_stimuli.js). Uses matplotlib only (no LaTeX / wkhtmltopdf
dependency needed).

Run: node scripts/dump_stimuli.js && python3 scripts/make_pdfs.py
"""
import json
import textwrap
from pathlib import Path

import matplotlib
matplotlib.use("pdf")
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages
from matplotlib.patches import Circle, RegularPolygon, FancyBboxPatch

HERE = Path(__file__).parent
DUMP_PATH = HERE / "stimuli_dump.json"
OUT_DIR = HERE.parent / "stimuli_pdfs"
OUT_DIR.mkdir(exist_ok=True)

COLOR_HEX = {
    "blue": "#2196f3",
    "red": "#e53935",
    "green": "#43a047",
    "yellow": "#fdd835",
    "purple": "#8e24aa",
    "orange": "#fb8c00",
}

PAGE_SIZE = (8.5, 11)


def wrap(text, width=95):
    return "\n".join(textwrap.wrap(text, width=width)) if text else ""


def make_natural_pdf(items):
    out_path = OUT_DIR / "natural_text_examples.pdf"
    with PdfPages(out_path) as pdf:
        # Cover page
        fig = plt.figure(figsize=PAGE_SIZE)
        fig.text(0.5, 0.6, "pragmatics7", ha="center", va="center", fontsize=28, weight="bold")
        fig.text(0.5, 0.52, "Natural-Language Stimuli — Full Catalog", ha="center", va="center", fontsize=16)
        fig.text(0.5, 0.45, f"{len(items)} unique scenarios, each with a Weak and Strong utterance", ha="center", fontsize=11, color="#555555")
        plt.axis("off")
        pdf.savefig(fig)
        plt.close(fig)

        items_per_page = 4
        for page_start in range(0, len(items), items_per_page):
            page_items = items[page_start:page_start + items_per_page]
            fig = plt.figure(figsize=PAGE_SIZE)
            fig.suptitle(f"Natural-language stimuli ({page_start + 1}–{page_start + len(page_items)} of {len(items)})",
                         fontsize=12, y=0.98)
            n = len(page_items)
            for i, item in enumerate(page_items):
                top = 0.90 - i * (0.90 / items_per_page)
                height = 0.90 / items_per_page - 0.03
                ax = fig.add_axes([0.06, top - height, 0.88, height])
                ax.axis("off")
                ax.add_patch(FancyBboxPatch((0, 0), 1, 1, boxstyle="round,pad=0.01,rounding_size=0.02",
                                             transform=ax.transAxes, linewidth=1, edgecolor="#cccccc",
                                             facecolor="#fafafa"))
                body = (
                    f"[{item['scenario_id']}]\n\n"
                    f"Scenario: {wrap(item['scenario'])}\n\n"
                    f"Utterances:  Weak = “{item['weak_utterance']}”   "
                    f"Strong = “{item['strong_utterance']}”\n\n"
                    f"Question: {wrap(item['question'])}"
                )
                ax.text(0.03, 0.93, body, transform=ax.transAxes, fontsize=9.3,
                        va="top", ha="left", family="DejaVu Sans", wrap=True)
            pdf.savefig(fig)
            plt.close(fig)
    print(f"Wrote {out_path}")


def draw_shape(ax, cx, cy, color, shape, size=0.11):
    hex_color = COLOR_HEX.get(color, "#888888")
    if shape == "circle":
        ax.add_patch(Circle((cx, cy), size, facecolor=hex_color, edgecolor="none"))
    elif shape == "triangle":
        ax.add_patch(RegularPolygon((cx, cy), numVertices=3, radius=size * 1.15,
                                     orientation=0, facecolor=hex_color, edgecolor="none"))
    else:  # square
        s = size * 1.7
        ax.add_patch(plt.Rectangle((cx - s / 2, cy - s / 2), s, s, facecolor=hex_color, edgecolor="none"))


def make_refgame_pdf(items):
    out_path = OUT_DIR / "object_stimuli.pdf"
    with PdfPages(out_path) as pdf:
        fig = plt.figure(figsize=PAGE_SIZE)
        fig.text(0.5, 0.6, "pragmatics7", ha="center", va="center", fontsize=28, weight="bold")
        fig.text(0.5, 0.52, "Reference-Game (Object) Stimuli — Full Catalog", ha="center", va="center", fontsize=16)
        fig.text(0.5, 0.45, f"{len(items)} unique color/shape contexts, each with a Weak and Strong utterance",
                 ha="center", fontsize=11, color="#555555")
        plt.axis("off")
        pdf.savefig(fig)
        plt.close(fig)

        items_per_page = 3
        for page_start in range(0, len(items), items_per_page):
            page_items = items[page_start:page_start + items_per_page]
            fig = plt.figure(figsize=PAGE_SIZE)
            fig.suptitle(f"Object stimuli ({page_start + 1}–{page_start + len(page_items)} of {len(items)})",
                         fontsize=12, y=0.98)
            n = len(page_items)
            slot_h = 0.90 / items_per_page
            for i, item in enumerate(page_items):
                top = 0.90 - i * slot_h
                # object row (small axes just for the 3 shapes)
                shape_ax = fig.add_axes([0.06, top - slot_h * 0.42, 0.30, slot_h * 0.40])
                shape_ax.set_xlim(0, 1)
                shape_ax.set_ylim(0, 1)
                shape_ax.set_aspect("equal")
                shape_ax.axis("off")
                shape_ax.add_patch(FancyBboxPatch((0, 0), 1, 1, boxstyle="round,pad=0.01,rounding_size=0.02",
                                                   transform=shape_ax.transAxes, linewidth=1, edgecolor="#cccccc",
                                                   facecolor="#fafafa"))
                display = item["display"]
                xs = [0.22, 0.5, 0.78]
                for obj, x in zip(display, xs):
                    draw_shape(shape_ax, x, 0.55, obj["color"], obj["shape"], size=0.13)
                    shape_ax.text(x, 0.18, f"{obj['color']}\n{obj['shape']}", ha="center", va="top", fontsize=6.3)

                text_ax = fig.add_axes([0.40, top - slot_h * 0.90, 0.55, slot_h * 0.85])
                text_ax.axis("off")
                body = (
                    f"[{item['context_id']}] {item['mainName']} & {item['secondName']}\n\n"
                    f"Scenario: {wrap(item['scenario'], width=70)}\n\n"
                    f"Utterances:  Weak = “{item['weak_utterance']}”\n"
                    f"                    Strong = “{item['strong_utterance']}”\n\n"
                    f"Question: {wrap(item['question'], width=70)}"
                )
                text_ax.text(0.0, 0.98, body, transform=text_ax.transAxes, fontsize=8.6,
                             va="top", ha="left", family="DejaVu Sans")
            pdf.savefig(fig)
            plt.close(fig)
    print(f"Wrote {out_path}")


def main():
    data = json.loads(DUMP_PATH.read_text())
    make_natural_pdf(data["natural"])
    make_refgame_pdf(data["refgame"])


if __name__ == "__main__":
    main()
