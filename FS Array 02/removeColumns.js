// Write a function removeColumns that accepts two arguments

// originalGrid (two-dimensional array)
// numColums (number)
// removeColumns should return a new grid with the correct number of columns removed.


function removeColumns(grid, numCol){
    for (i = 0; i < grid.length; i++){
        grid[i].splice(-numCol, numCol);
    }

    return grid;
}
console.log(removeColumns([[1, 2, 3],
               [1, 2, 3],
               [1, 2, 3],
               [1, 2, 3]], 2));
/* => [[1],
       [1],
       [1],
       [1]]
*/