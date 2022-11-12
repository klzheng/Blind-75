/**
 * @param {number[]} height
 * @return {number}
 */


// fn -> takes in an arr of numbers and returns the max volume of the container 
// height (arr) -> length >= 2, numbers only
// return integer -> number, max volume of container


// [1,8,6,2,5,4,8,3,7] -> 49
// [1,1] -> 1


// two pointers problem
// initialize left pointer, right pointer
// initialize maxVolume
// while left < right
//      calculate volume, check if volume > maxVolume
//      if arr[left] > arr[right], right--, else left++
// return maxVolume


var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let maxVolume = 0

    while (left < right) {

        const volume = (right - left) * Math.min(height[left], height[right])
        maxVolume = Math.max(maxVolume, volume)

        if (height[left] > height[right]) right--
        else left++
    }
    return maxVolume
};

// Time complexity: O(N)
// Space complexity: O(1)
