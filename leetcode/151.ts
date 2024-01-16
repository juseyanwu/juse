function reverseWords(s: string): string {
    // 1.remove extra spaces
    function removeExtraSpaces(s:string[]):void{
        let slow:number = 0
        let fast:number = 0
        for(; fast<s.length; fast++){
            if(s[fast]!=' '){
                if(slow != 0){
                    s[slow++] = ' '
                }
                while(fast < s.length && s[fast] != ' '){
                    s[slow] = s[fast]
                    fast++
                    slow++
                }
            }
        }
        s.length = slow
    }

    // 2.reverse the words
    function reverseWordsInArr(s:string[], start:number, end:number):void{
        let slow = start
        let fast = end
        while(slow < fast){
            [s[slow], s[fast]] = [s[fast], s[slow]]
            slow++
            fast--
        }
    }
    let arr = Array.from(s);
    removeExtraSpaces(arr) // remove the extra spaces in string array;
    reverseWordsInArr(arr, 0 , arr.length - 1) // reverse the words in modified array

    // 3.reverse single word after second step:drlow - > world
    let begin: number = 0 
    for(let i = 0; i <= arr.length ; i++){
        if(arr[i] === ' ' || i === arr.length ){
            reverseWordsInArr(arr, begin , i - 1)
            begin = i + 1
        }
    }
    console.log('aaaa:',arr)
    return arr.join("")

};
