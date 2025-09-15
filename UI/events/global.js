import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight } from "../render/main.js";
import { highlight_state } from "../helper/constants.js";
import { removePrevHighlights } from "../render/main.js";

const whitePawnClick = ({ piece }) => {
    removePrevHighlights();
    const current_pos = piece.current_position;
    const flatArray = globalState.flat();
    if (current_pos[1] == 2) {
        const highlightedSquareIds = [
            `${current_pos[0]}${Number(current_pos[1]) + 1}`,
            `${current_pos[0]}${Number(current_pos[1]) + 2}`,
        ];

        highlightedSquareIds.forEach((highlight) => {
            globalState.forEach((row) => {
                row.forEach((square) => {
                    if (square.id == highlight) {
                        square.highlight = true;
                    }
                });
            });

            renderHighlight(highlight);
        });
    }
};

const globalEvent = () => {
    ROOT_DIV.addEventListener("click", (event) => {
        if (event.target.localName === "img") {
            const clickID = event.target.parentNode.id;
            const flatArray = globalState.flat();

            let square = flatArray.find((elem) => elem.id === clickID);

            if (square.piece.piece_name === "WHITE_PAWN") {
                whitePawnClick(square);
            }
        } else {
            removePrevHighlights();
        }
    });
};

export { globalEvent };
