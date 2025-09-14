const square = (color, id, piece) => {
    return {color, id, piece}
}

const rankRow = (rankId) => {
    const rankRow = [];
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"]

    if (rankId % 2 == 0) {
        files.forEach((file, index) => {
            if (index % 2 == 0) {
                rankRow.push(square("white", file + rankId, null))
            } else {
                rankRow.push(square("black", file + rankId, null))
            }
        });
    } else {
        files.forEach((file, index) => {
            if (index % 2 == 0) {
                rankRow.push(square("black", file + rankId, null))
            } else {
                rankRow.push(square("white", file + rankId, null))
            }
        });
    }

    return rankRow;
} 

const initialBoard = () => {
    return [
        rankRow(8),
        rankRow(7),
        rankRow(6),
        rankRow(5),
        rankRow(4),
        rankRow(3),
        rankRow(2),
        rankRow(1),
    ]
}


export {initialBoard};