import * as pieces from "../data/pieces.js";
import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";

const pieceRenderer = (data) => {
    data.forEach((rank) => {
        rank.forEach((square) => {
            if (square.piece) {
                const squareDiv = document.getElementById(square.id);
                const piece = document.createElement("img");

                piece.src = square.piece.img;
                squareDiv.style.cursor = "pointer";
                squareDiv.appendChild(piece);
            }
        });
    });
};

const initialBoardRenderer = (data) => {
    data.forEach((element) => {
        const rankEl = document.createElement("div");
        ROOT_DIV.appendChild(rankEl);
        rankEl.classList.add("rankRow");

        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color, "square");
            squareDiv.id = square.id;
            rankEl.appendChild(squareDiv);

            // Pawn Rendering
            if (square.id[1] == 7) square.piece = pieces.blackPawn(square.id);

            if (square.id[1] == 2) square.piece = pieces.whitePawn(square.id);

            // Rook Rendering
            if (square.id == "a8" || square.id == "h8")
                square.piece = pieces.blackRook(square.id);

            if (square.id == "a1" || square.id == "h1")
                square.piece = pieces.whiteRook(square.id);

            // Knight Rendering
            if (square.id == "b8" || square.id == "g8")
                square.piece = pieces.blackKnight(square.id);

            if (square.id == "b1" || square.id == "g1")
                square.piece = pieces.whiteKnight(square.id);

            // Bishop Rendering
            if (square.id == "c8" || square.id == "f8")
                square.piece = pieces.blackBishop(square.id);

            if (square.id == "c1" || square.id == "f1")
                square.piece = pieces.whiteBishop(square.id);

            // Queen Rendering
            if (square.id == "d8") square.piece = pieces.blackQueen(square.id);

            if (square.id == "d1") square.piece = pieces.whiteQueen(square.id);

            // King Rendering
            if (square.id == "e8") square.piece = pieces.blackKing(square.id);

            if (square.id == "e1") square.piece = pieces.whiteKing(square.id);
        });
    });

    pieceRenderer(data);
};

const renderHighlight = (squareId) => {
    const highlightSpan = document.createElement("span");
    highlightSpan.classList.add("highlight");
    document.getElementById(squareId).appendChild(highlightSpan);
};

const removePrevHighlights = () => {
    Array.from(ROOT_DIV.children).forEach((row) => {
        Array.from(row.children).forEach((square) => {
            Array.from(square.children).forEach((child) => {
                if (child.tagName !== "IMG") {
                    square.removeChild(child);
                }
            });
        });
    });
};

export { initialBoardRenderer, renderHighlight, removePrevHighlights };
