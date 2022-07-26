var twoSum = function (nums, target) {
  const sumupToGetTarget = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        sumupToGetTarget.push(i, j);
        break;
      }
    }

    if (sumupToGetTarget.length > 0) break;
  }
  return sumupToGetTarget;
};

var twoSumHashed = function (nums, target) {
  const hashTable = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      hashTable[nums[i]].push(i);
    } else {
      hashTable[nums[i]] = [i];
    }
  }
  let difference;
  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i];
    if (difference >= 0 && hashTable[difference]) {
      if (difference === nums[i] && hashTable[difference].length > 1) {
        return [i, hashTable[difference][1]];
      }
      if (difference === nums[i]) continue;
      return [i, hashTable[difference][0]];
    }
  }
  return null;
};

console.log(twoSumHashed([2, 5, 5, 3], 10));
