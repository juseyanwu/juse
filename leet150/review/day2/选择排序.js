/* 选择排序 */
function selectionSort(nums) {
    let n = nums.length;
    // 外循环：未排序区间为 [i, n-1]
    for (let i = 0; i < n - 1; i++) {
        // 内循环：找到未排序区间内的最小元素
        let k = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[k]) {
                k = j; // 记录最小元素的索引
            }
        }
        // 将该最小元素与未排序区间的首个元素交换
        let tmp = nums[i]
        nums[i] = nums[k]
        nums[k] = tmp
        // [nums[i], nums[k]] = [nums[k], nums[i]];
    }
}
let arr = [4,2,5,6,3,1,7,5,2]
selectionSort(arr)

console.log(arr);

// 选择排序要注意的是外循环 [i, n-1] 为未排序区间