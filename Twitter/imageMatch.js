function countMatches(grid1, grid2) {
    let gridOne = grid1.filter(n => typeof (n) !== 'number').map(n => n.split(''));
    let gridTwo = grid2.filter(n => typeof (n) !== 'number').map(n => n.split(''));
    
    let islands = countIslands(gridOne);
  
    let matches = Array.from({
        length: islands.count + 1
    }).fill(true);

    islands.images.forEach((a, x) => a.forEach((v, y) => matches[v] = matches[v] && gridTwo[x][y] && v));
    
    return matches.reduce((s, b) => s + !!b, 0);
}

function countIslands(grid) {
    let markIsland = function (grid, x, y, count) {

        if (grid[x] && grid[x][y] === -1) {
            grid[x][y] = count;

            markIsland(grid, x - 1, y, count);
            markIsland(grid, x + 1, y, count);
            markIsland(grid, x, y - 1, count);
            markIsland(grid, x, y + 1, count);
            return true;
        }
    };

    let count = 0;
    let images = grid.map(a => a.map(v => -v));
    
    images.forEach((a, x, aa) => a.forEach((_, y) => markIsland(aa, x, y, count) && count++));
    return {
        images,
        count: count - 1
    };
}

const sample1 = [
    4,
    '0100',
    '1001',
    '0011',
    '0011'
]
const sample2 = [
    4,
    '0101',
    '1001',
    '0011',
    '0011'
]
const sample3 = [
    3,
    '001',
    '011',
    '100'
]
const sample4 = [
    3,
    '001',
    '011',
    '101',
]
const sample5 = [
    4,
    '0010',
    '0111',
    '0100',
    '1111'
]
const sample6 = [
    4,
    '0010',
    '0111',
    '0110',
    '1111'
]


console.log(countMatches(sample5, sample6));