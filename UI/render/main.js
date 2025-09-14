const ROOT_DIV = document.getElementById("root");

const initialBoardRenderer = (data) => {
    data.forEach(element => {
        const rankEl = document.createElement("div");
        ROOT_DIV.appendChild(rankEl);
        rankEl.classList.add("rankRow")
        
        
        element.forEach(square => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color, "square")
            rankEl.appendChild(squareDiv)
        });
    });
}

export {initialBoardRenderer};