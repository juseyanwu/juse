var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let sent = new Set()
    for (const word of words){
        let ans = ''
        for(const x of word){
          ans = ans + morse[x.charCodeAt()-'a'.charCodeAt()]
        }
        sent.add(ans)
    }
    return sent.size
};