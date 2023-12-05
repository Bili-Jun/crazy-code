use std::collections::HashMap;

/**
 * 两数之和
 */
struct Solution {
}

impl Solution {
    /**
     * 嵌套循环实现
     */
    fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        for val in 0..nums.len() {
            for val1 in val + 1..nums.len() {
                if nums[val] + nums[val1] == target {
                    return vec![val as i32, val1 as i32]
                }
            }
        }

        unreachable!()
    }
    /**
     * HashMap实现
     */
    pub fn two_sum_v2(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();
        for val in 0..nums.len() {
            if let Some(&val1) = map.get(&(target-nums[val])) {
                return vec![val as i32, val1 as i32]
            }
            map.insert(nums[val], val);
        }

        unreachable!()
    }
}

fn main() {
    let result = Solution::two_sum(vec![1,2, 3, 7], 9);
    let result2 = Solution::two_sum_v2(vec![1,2, 3, 7], 9);
    println!("v1 nums: [1,2, 3, 7], target: 9, result: {:?}", result);
    println!("v2 nums: [1,2, 3, 7], target: 9, result: {:?}", result2);
}
