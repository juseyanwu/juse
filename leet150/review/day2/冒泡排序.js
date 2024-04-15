function bubbleSort(nums) {
    for(let i = nums.length-1;i>0;i--){
        for(let j = 0;j<i;j++){
            if(nums[j]>nums[j+1]){
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;

                // [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }
        }
    }
}



// /* 冒泡排序（标志优化）*/
// function bubbleSortWithFlag(nums) {
//     // 外循环：未排序区间为 [0, i]
//     for (let i = nums.length - 1; i > 0; i--) {
//         let flag = false; // 初始化标志位
//         // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
//         for (let j = 0; j < i; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 // 交换 nums[j] 与 nums[j + 1]
//                 let tmp = nums[j];
//                 nums[j] = nums[j + 1];
//                 nums[j + 1] = tmp;
//                 flag = true; // 记录交换元素
//             }
//         }
//         if (!flag) break; // 此轮“冒泡”未交换任何元素，直接跳出
//     }
// }

//优化后，用flag记录
let arr = [2,5,3,2,6,2,1,8,4,9,0]
bubbleSort(arr)
console.log(arr);



// function bubbleSort(nums){
//     for(let i = nums.length-1; i > 0 ; i++){
//         for(let j = 0;j < i; j ++){
//             if(nums[j]>nums[j+1]){
//                 let tmp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = tmp
//             }
//         }
//     }
// }
