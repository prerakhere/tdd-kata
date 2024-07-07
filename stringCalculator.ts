export default function add(numbersStr: string) {
  if (numbersStr === "") return 0;
  let sumOfNums = 0, nums: number[] = [];
  nums = numbersStr.split(',').map(Number);
  for (let num of nums) sumOfNums += num;
  return sumOfNums;
}


/**
 kata inputs
 1. "", "1,2"
 2. "1,2,3,4"
 */