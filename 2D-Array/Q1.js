
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// const sol = new Solution();
// const result = sol.spiralOrder(matrix);
// console.log(result); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// const matrix2 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// const result2 = sol.spiralOrder(matrix2);
// console.log(result2); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]



class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let answer=[]
        let colR=0;let colL=matrix[0].length-1; 
        let rowStart=0;let rowEnd=matrix.length-1;
        let count=0;
        console.log("rowEnd--> ",rowEnd,colL);
        while(count<=matrix.length*matrix.length-1){
            for(let i=colR;(i<=colL) && (count<=matrix.length*matrix.length);i++){
                console.log("i--> ",i,rowStart);
                answer.push(matrix[rowStart][i]);
                count++;
            }
            rowStart++;
             for(let i=rowStart;(i<=rowEnd) && (count<=matrix.length*matrix.length);i++){
                  console.log("i1--> ",i,rowStart);
                answer.push(matrix[i][colL]);
                count++;
                console.log("answer12--> ",answer);
            }
            colL--;
            console.log("colL--> ",colL);
            for(let i=colL;(i>=colR) && (count<=matrix.length*matrix.length);i--){
                  console.log("i2--> ",i,rowStart);
                 answer.push(matrix[rowEnd][i]);
                count++;
            }
            rowEnd--;
             for(let i=rowEnd;(i>=rowStart) && (count<=matrix.length*matrix.length);i--){
                answer.push(matrix[i][colR]);
                count++;
            }
            colR++;
        }  
        return answer; 
    }
}
