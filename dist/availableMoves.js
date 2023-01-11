"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAdjacentCharacter = (char, num) => String.fromCharCode(char.charCodeAt(0) + num);
const availableMoves = (position) => {
    if (!position)
        return []; // If cell not selected, return empty array
    const [col, row] = position.split(""); // Position is of format `C5` (column + row)
    const movesList = [];
    // Top-left (TL) quadrant
    if (col != "A") {
        // Lower TL
        if (col != "B" && row != "8")
            movesList.push(getAdjacentCharacter(col, -2) + (Number(row) + 1));
        // Upper TL
        if (row < "7")
            movesList.push(getAdjacentCharacter(col, -1) + (Number(row) + 2));
    }
    // Top-right (TR) quadrant
    if (col != "H") {
        // Lower TR
        if (row < "7")
            movesList.push(getAdjacentCharacter(col, 1) + (Number(row) + 2));
        // Upper TR
        if (col != "G" && row != "8")
            movesList.push(getAdjacentCharacter(col, 2) + (Number(row) + 1));
    }
    // Bottom-right (BR) quadrant
    if (col != "H") {
        // Lower BR
        if (row > "2")
            movesList.push(getAdjacentCharacter(col, 1) + (Number(row) - 2));
        // Upper BR
        if (col != "G" && row != "1")
            movesList.push(getAdjacentCharacter(col, 2) + (Number(row) - 1));
    }
    // Bottom-left (BL) quadrant
    if (col != "A") {
        // Lower BL
        if (col != "B" && row != "1")
            movesList.push(getAdjacentCharacter(col, -2) + (Number(row) - 1));
        // Upper BL
        if (row > "2")
            movesList.push(getAdjacentCharacter(col, -1) + (Number(row) - 2));
    }
    return movesList;
};
exports.default = availableMoves;
