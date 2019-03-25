function countMatches(grid1, grid2) {
    let gridOne = grid1.filter(n => typeof(n) !== 'number');
    let gridTwo = grid2.filter(n => typeof(n) !== 'number');

    //this only gives number of connected region in each grid, but what i want to get is number of islands that match perfectly when the grids are overlayed.
    return `We have ${countIslands(gridOne)} island(s) in grid 1 and ${countIslands(gridTwo)} island(s) in grid 2`
}

function countIslands(grid) {
    let markIsland = function (grid, x, y, visited) {
        if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) return;


        if (visited[x][y] === true) return;
        visited[x][y] = true;

        if (grid[x][y] === '0') return;

        markIsland(grid, x - 1, y, visited);
        markIsland(grid, x + 1, y, visited);
        markIsland(grid, x, y - 1, visited);
        markIsland(grid, x, y + 1, visited);
    };

    let visited = [];

    for (let i = 0; i < grid.length; i++) {
        visited[i] = [];
    }

    let count = 0;

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (!visited[x][y] && grid[x][y] === '1') {
                count++;
                markIsland(grid, x, y, visited);
            }
            visited[x][y] = true;
        }
    }
    
    return count;
}

const sample1 = [
    4,
    ['0', '1', '0', '0'],
    ['1', '0', '0', '1'],
    ['0', '0', '1', '1'],
    ['0', '0', '1', '1']
]
const sample2 = [
    4,
    ['0', '1', '0', '1'],
    ['1', '0', '0', '1'],
    ['0', '0', '1', '1'],
    ['0', '0', '1', '1']
]
const sample3 = [
    3,
    ['0', '0', '1'],
    ['0', '1', '1'],
    ['1', '0', '0']
]
const sample4 = [
    3,
    ['0', '0', '1'],
    ['0', '1', '1'],
    ['1', '0', '1', ]
]

console.log(countMatches(sample1, sample2));