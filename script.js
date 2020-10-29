const width = +prompt('Ширина матрицы?');
const height = +prompt('Высота матрицы?');

function matrix(width, height) {
    let result = new Array(height).fill().map(() => new Array(width).fill(''));

    return result;
}

console.log(matrix(width, height));