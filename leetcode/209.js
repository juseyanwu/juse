/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // 得到数组的长度
    let arrLeng = nums.length;
    // 判断是否为空数组
    if (arrLeng === 0) return 0;
    // 子数组长度
    // ans 初始化的时候必须给一个大数 ，否则在进行 Math.min() 的时候返回值始终是 0 
    let ans = Number.MAX_SAFE_INTEGER;
    // 定义指针
    let start = 0, end = 0;
    // 子数组总和
    let sum = 0;
    while (end < arrLeng) {
        // 刚开始 start 指针不动，end指针向尾部移动
        sum += nums[end];
        // 子数组总和 >= target , 这是 sum 符合要求的情况
        while (sum >= target) {
            // 通过 end 指针与 start 指针得出此次子数组的长度
            let sonLeng = end - start + 1;
            // 由于要长度最小的子数组，所以将 sonLeng 与 之前的 ans 对比，取最小值
            // 始终确保 ans 是最小的
            ans = Math.min(ans, sonLeng);
            // 在移动 end 指针时已经得到了一个答案，但不能保证为最优解
            // 所以此时开始将 start 指针向end指针处移动一格，让 end 再次去寻找符合要求的 sum
            sum -= nums[start];
            start++;
        }
        // 未找到符合要求的 sum ，故 end 指针继续向后移动
        end++;
    }
    // 在返回的过程中 还需要与 Number.MAX_SAFE_INTEGER 进行三目运算
    // 因为还存在将 nums 数组都遍历完了，sum 的值都 !== target
    // 说明此时没有长度最小的子数组，返回 0 即可
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};