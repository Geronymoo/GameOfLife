let width = 800;
let height = 800;
let cellSize = 10;
let rows;
let cols;
let grid;
let generationCount = 0;

function setup() {
    frameRate(60);
    resetSketch();
}

function draw() {
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 0) {
                fill(255);
            } else {
                fill(0);
            }
            noStroke();
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
    stroke(0);
    noFill();
    rect(0,0,width-1,height-1)
    stroke(0);
    fill(255);
    rect(0, height-35, 120, 34);
    textSize(32);
    fill(0);
    text(nf(generationCount,6), 5, height-5);

    generationStep();
}

function resetSketch() {
    rows = width / cellSize;
    cols = height / cellSize;
    createCanvas(width, height)
    background(0);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            value = floor(random(0, 8));
            if (value == 2){
                grid[i][j] = 1;
            } else {
                grid[i][j] = 0;
            }
            
        }
    }
}

function make2DArray(cols, rows) {
    arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function generationStep() {
    generationCount++;
    let temp_grid = make2DArray(cols, rows);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let alive = getNumberOfAliveNeighbors(i, j);
            if (grid[i][j] == 0) {
                if (alive == 3) {
                    temp_grid[i][j] = 1;
                } else {
                    temp_grid[i][j] = 0;
                }
            } else {
                if (alive == 0 || alive == 1) {
                    temp_grid[i][j] = 0;
                } else if (alive == 2 || alive == 3) {
                    temp_grid[i][j] = 1;
                } else {
                    temp_grid[i][j] = 0;
                }
            }
        }
    }
    grid = temp_grid;
}

function getNumberOfAliveNeighbors(row, col) {
    let result = 0
    result += checkNeighbor(row - 1, col);
    result += checkNeighbor(row - 1, col + 1);
    result += checkNeighbor(row, col + 1);
    result += checkNeighbor(row + 1, col + 1);
    result += checkNeighbor(row + 1, col);
    result += checkNeighbor(row + 1, col - 1);
    result += checkNeighbor(row, col - 1);
    result += checkNeighbor(row - 1, col - 1);
    return result;
}


function checkNeighbor(row, col) {
    if (row < 0 || col < 0 || row > rows - 1 || col > cols - 1) {
        return 0;
    } else {
        return grid[row][col];
    }
}