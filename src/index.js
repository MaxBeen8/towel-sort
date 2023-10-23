
// You should implement your task here.

// module.exports = 
function towelSort (matrix) {
    let arr = [];
    if (matrix === null) {
        console.log (arr)
    }
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        let columnindex = i % 2 === 0 ? j : (matrix[i].length - 1 -j);
         arr.push = matrix[i][columnindex];
    }
  }
  console.log(arr)
}

towelSort();
