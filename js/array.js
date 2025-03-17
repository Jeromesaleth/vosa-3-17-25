//find()
//this is used to find user id and etc
//this is seqentiel order ,then condion satisfied for first element ,,then only one element display
//to find 50 lesss then num 

const numbers = [54,40,88,65,22,5,]

const result = numbers.find((num) => {
    return num < 50
})
console.log(result);//40


const numbers = [54,40,88,65,22,5,]

const result = numbers.findLast((num) => {    
    return num < 50
})
console.log(result);//5

// Flatt()
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const FalatArray = matrix.flat()
  console.log(FalatArray);//[ 
