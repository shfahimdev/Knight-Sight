import { initialBoard } from "./data/data.js";
import { initialBoardRenderer } from "./render/main.js";

const globalState = initialBoard();

// Render Initial Board
initialBoardRenderer(globalState); 
