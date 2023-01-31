function sumaPares(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        suma += nums[i];
      }
    }
    
    return suma
  }
  
  console.log(sumaPares([1,2,3,4,5]));
  