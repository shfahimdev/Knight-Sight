import { blackPawn } from "../data/pieces.js";
import { blackRook } from "../data/pieces.js";
import { blackKnight } from "../data/pieces.js";
import { blackBishop } from "../data/pieces.js";
import { blackQueen } from "../data/pieces.js";
import { blackKing } from "../data/pieces.js";
import { whitePawn } from "../data/pieces.js";
import { whiteRook } from "../data/pieces.js";
import { whiteKnight } from "../data/pieces.js";
import { whiteBishop } from "../data/pieces.js";
import { whiteQueen } from "../data/pieces.js";
import { whiteKing } from "../data/pieces.js";

const ROOT_DIV = document.getElementById("root");

const pieceRenderer = data => {
    data.forEach(rank => {
        rank.forEach(square => {
            
            if (square.piece) {
                const squareDiv = document.getElementById(square.id);
                
                const piece = document.createElement("img");
                piece.src = square.piece.img;
                squareDiv.appendChild(piece);
                
                
            }
        });
    });
    
}

const initialBoardRenderer = data => {
    data.forEach(element => {
        const rankEl = document.createElement("div");
        ROOT_DIV.appendChild(rankEl);
        rankEl.classList.add("rankRow")
        
        element.forEach(square => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color, "square");
            squareDiv.id = square.id;
            rankEl.appendChild(squareDiv)

            
            // Pawn Rendering
            if (square.id[1] == 7)
                square.piece = blackPawn(square.id)

            if (square.id[1] == 2) 
                square.piece = whitePawn(square.id)
            
            // Rook Rendering
            if (square.id == "a8" || square.id == "h8")
                square.piece = blackRook(square.id)

            if (square.id == "a1" || square.id == "h1")
                square.piece = whiteRook(square.id)

            // Knight Rendering
            if (square.id == "b8" || square.id == "g8")
                square.piece = blackKnight(square.id)

            if (square.id == "b1" || square.id == "g1")
                square.piece = whiteKnight(square.id)

            // Bishop Rendering
            if (square.id == "c8" || square.id == "f8")
                square.piece = blackBishop(square.id)

            if (square.id == "c1" || square.id == "f1")
                square.piece = whiteBishop(square.id)

            // Queen Rendering
            if (square.id == "d8")
                square.piece = blackQueen(square.id)

            if (square.id == "d1")
                square.piece = whiteQueen(square.id)

            // King Rendering
            if (square.id == "e8")
                square.piece = blackKing(square.id)

            if (square.id == "e1")
                square.piece = whiteKing(square.id)
        });
    });
    
    pieceRenderer(data);
}


export {initialBoardRenderer};