const width = +prompt('Ширина матрицы?');
const height = +prompt('Высота матрицы?');

function matrix(width, height) {
    let result = new Array(height).fill().map(() => new Array(width).fill('')),
        counter = 1,
        startCol = 0,
        endCol = width - 1,
        startRow = 0,
        endRow = height - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let g = endCol; g >= startCol; g--) {
            result[endRow][g] = counter;
            counter++;
        }
        endRow--;

        for (let h = endRow; h >= startRow; h--) {
            result[h][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
}

console.log(matrix(width, height));