import { initialBoard } from "./data/data.js";
import { initialBoardRenderer } from "./render/main.js";
import { globalEvent } from "./events/global.js";

const globalState = initialBoard();

// Render Initial Board
initialBoardRenderer(globalState);
globalEvent();

export { globalState };
