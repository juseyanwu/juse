var romanToInt = function(s) {
    let x = new Map();
    x.set('I',1)
    x.set('V',5)
    x.set('X',10)
    x.set('L',50)
    x.set('C',100)
    x.set('D',500)
    x.set('M',1000)
    let ans = 0
    for(i=0;i<s.length;i++){
        if(i<s.length-1&&(x.get(s[i]))<(x.get(s[i+1]))){
            ans=ans-x.get(s[i])
        }
        else{
            ans=ans+x.get(s[i])
        }
    }
    return ans
}