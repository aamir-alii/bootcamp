const multiMatrices = (A,B) => {
    if(!A.length || A[0].length != B.length) return console.log("cann't be multiplied!")
    const C = [];
    for(let i=0; i<A.length; i++){
        let result = [];
        for(let j=0;j<A[i].length; j++){
            let sum = 0;
            for( let k = 0; k < B[0].length; k++){
                sum += A[i][k] * B[k][j]; 
            }
            result.push(sum);
        }
        C.push(result);
    }
    for(let i = 0;i < C.length; i++){
        text = '';
        for(let j = 0; j < C[i].length; j++ ){
            text += C[i][j] + " ";
        }
        console.log(text);
    }
}

multiMatrices([[2, 3], [3, 4]], [[1, 2], [3, 4]])