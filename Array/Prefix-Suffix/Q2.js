/* # Trapping Rain Water

**Problem Statement:**

Given an array of integers `heights` representing an elevation map where the width of each bar is 1, compute how much water can be trapped between the bars.

**Constraints:**

*   1 <= `heights.length` <= 2 * 10^4
*   0 <= `heights[i]` <= 10^5

**Examples:**

*   **Input:** `heights` = [0,1,0,2,1,0,1,3,2,1,2,1]
    **Output:** 6
    **Explanation:** The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*   **Input:** `heights` = [4,2,0,3,2,5]
    **Output:** 9

**Follow-up**
Could you solve it in O(n) time and O(1) space?
 */

// Solution

function trappingRainWater(heights) {
    let left = 0, right = heights.length - 1;
    let leftMax = 0, rightMax = 0;
    let trappedWater = 0;
  
    while (left < right) {
      if (heights[left] < heights[right]) {
        if (heights[left] >= leftMax) {
          leftMax = heights[left];
        } else {
          trappedWater += leftMax - heights[left];
        }
        left++;
      } else {
        if (heights[right] >= rightMax) {
          rightMax = heights[right];
        } else {
          trappedWater += rightMax - heights[right];
        }
        right--;
      }
    }
  
    return trappedWater;
  }