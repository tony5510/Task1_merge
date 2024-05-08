function merge(nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let insertPos = m + n - 1;
    
    for (; insertPos >= 0; insertPos--) {
        if (index2 < 0) {
            break;
        } else if (index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[insertPos] = nums1[index1];
            index1--;
        } else {
            nums1[insertPos] = nums2[index2];
            index2--;
        }
    }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
