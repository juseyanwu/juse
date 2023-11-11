var plusOne = function(digits) {
        var carry = 0
        if(digits[digits.length - 1] + 1 == 10){ // 判定最后一位为9 
            digits[digits.length - 1] = 0 
            carry = 1 // 进位值carry = 1
            for(var i = digits.length-2;i >= 0; i--){ // 遍历之后的
                digits[i] += carry // 加上进位值
                carry = 0 // 进位值归零
                if(digits[i] == 10){ // 如果恰好又是9 又进位
                    digits[i] = 0
                    carry = 1 // 进位值为1
                }
            }
            if(carry == 1){ // 最后还存在进位值1的话说明全是9
                digits[0] = 0
                digits.unshift(1) // 直接全变成0并且最前面加1 
            }
        }else{ // 最后一位不为9 直接加1
            digits[digits.length - 1] += 1n
            return digits
        } 
        return digits
    };