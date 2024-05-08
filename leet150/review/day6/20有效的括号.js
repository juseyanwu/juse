var isValid = function(s) {
    let stack = [];
    let obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for(let i = 0 ; i < s.length ; i++){
        let cur = s[i]
        if(cur in obj){
            stack.push(cur)
        }
        else{
            if(stack.length === 0) return false  //栈空的话说明右括号多了
            let top = stack.pop()
            if(cur != obj[top]) return false    //左右括号不匹配
        }
    }

    return stack.length === 0  // 如果不为零会return false 左括号多了
}