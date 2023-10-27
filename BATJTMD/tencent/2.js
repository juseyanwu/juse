// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";//模板

//         format = format.replace('x',numbers[1]);//考点常有

//     return format;
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// var l1 = [9,9,9,9,9,9,9]
// var x = l1.val
// console.log(x);



var removeDuplicates = function(nums) {
    let x = nums.lenth
    while(x=0){
        return x
    }
    let fast = 1
    let slow = 1
    while(fast<nums.lenth){
        if(nums[fast]!==nums[fast-1]){
            nums[slow]=nums[fast]
            ++slow
        }
        ++fast
    }
    return slow
};
