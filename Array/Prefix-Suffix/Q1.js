/* # Products of Array Except Self

**Problem Statement:**

Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.

**Constraints:**

*   2 <= `nums.length` <= 1000
*   -20 <= `nums[i]` <= 20

**Examples:**

*   **Input:** `nums` = [1, 2, 4, 6]
    **Output:** [48, 24, 12, 8]
*   **Input:** `nums` = [-1, 0, 1, 2, 3]
    **Output:** [0, -6, 0, 0, 0]

**Follow-up**

Could you solve it in O(n) time without using the division operation? */

// Solution

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    let prefix = 1;
    for (let i = 0; i < n; i++) {
      output[i] = prefix;
      prefix *= nums[i];
    }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
      output[i] *= suffix;
      suffix *= nums[i];
    }
    return output;
  }

