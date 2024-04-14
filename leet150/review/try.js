function swap(nums,i,j){
    let tmp = nums[i]
    nums[i] = nums[j]
    nums [j] = tmp
}

function partition(nums,left,right){
    let i = left
    let j = right
    while(i<j){
        while(i<j && nums[j] >= nums[left]){
            j--
        }
        while(i<j && nums[i] <= nums[left]){
            i++
        }
        swap(nums,i,j)
    }
    swap(nums,i,left)
    return i
}

function quickSort(nums,left,right){
    if(left>=right) return

    const pivot = partition(nums,left,right)

    quickSort(nums,left,pivot-1)
    quickSort(nums,pivot+1,right)
}

let arr = [7,5,9,1,3,7,4,6,8,5,0,8]

quickSort(arr,0,11)

console.log(arr);