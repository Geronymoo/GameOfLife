let width = 600;
let height = 600;
let cellSize = 20;
let rows;
let cols;
let grid;

function setup() {
    resetSketch();
}

function draw() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            fill(255);
            console.log(i)
            console.log(j)
            //rect(i * cellSize, j.cellSize, cellSize, cellSize);
        }
    }
}

function resetSketch() {
    rows = width / cellSize;
    cols = height / cellSize;
    createCanvas(width, height)
    background(0);
    grid = make2DArray(cols, rows);
}

function make2DArray(cols, rows) {
    arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}