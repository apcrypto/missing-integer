function solution(A) {
        let min = 1
        A.sort(function(a,b){
           return a - b
        })

        for (let i in A) {
            if (A[i] > -1 && A[i] === min) {
                    min++
            }
        }

        return min
}
