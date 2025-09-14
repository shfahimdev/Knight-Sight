const initialBoardRenderer = (data) => {
    data.forEach(element => {
        element.forEach(square => {
            console.log(square);
        });
    });
}

export {initialBoardRenderer};