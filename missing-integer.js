function solution(A) {
        let num = 1
        A.sort(function(a,b){
           return a - b
        })

        for (let i in A) {
            if (A[i] > -1 && A[i] === num) {
                    min++
            }
        }

        return num
}
