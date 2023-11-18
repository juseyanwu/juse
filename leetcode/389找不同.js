var findTheDifference = function(s, t) {
    let ssum = 0
    let tsum = 0
    for(i=0;i<s.length;i++){
        ssum+=s.charCodeAt(i)
    }
    for(j=0;j<t.length;j++){
        tsum+=t.charCodeAt(j)
    }
    let ans = tsum-ssum
    return fromCharCode(ans)
};

