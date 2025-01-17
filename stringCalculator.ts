export default function add(numbersStr: string) {
  if (numbersStr === "") return 0;
  let sumOfNums = 0,
    nums: number[] = [],
    delimiter = ',',
    hasNegativeNumbers = false,
    negativeNumsList: number[] = [];
  if (numbersStr.substring(0, 2) === "//") {
    if (numbersStr[2] === '[') {

      let delimitersEndIndex = numbersStr.indexOf('\n') - 1;
      let delimiterList = numbersStr.substring(3, delimitersEndIndex).split(']['); // eliminating first opening and last closing square brackets

      let tempNumsStr = numbersStr.substring(delimitersEndIndex + 2).split('\n');
      for (let delimiter of delimiterList) {
        tempNumsStr = tempNumsStr.join(delimiter).split(delimiter);
      }
      nums = tempNumsStr.map(Number);
    }
    else {
      delimiter = numbersStr[2];
      nums = numbersStr.substring(4).split('\n').join(delimiter).split(delimiter).map(Number);
    }
  }
  else nums = numbersStr.split('\n').join(delimiter).split(delimiter).map(Number);
  for (let num of nums) {
    if (num < 0 || hasNegativeNumbers) {
      if (num < 0) negativeNumsList.push(num);
      hasNegativeNumbers = true;
    }
    else {
      if (num <= 1000) sumOfNums += num;
    }
  }
  if (hasNegativeNumbers) throw new Error(`negatives not allowed ${negativeNumsList.join(',')}`);
  return sumOfNums;
}

/**
 kata inputs
 1. "", "1,2"
 2. "1,2,3,4"
 3. "1,2\n3,4"
 4: "//;\n1;2\n3;4"
 5: "//;\n1;-2/n-3;4"
 6: "//;\n1;2;3\n4;1001\n2000"
 7: "//[***]\n1***2\n3***1001***4"
 8: "//[*][%]\n1*2\n3%1001%4"
 9: "//[***][%%]\n1***2\n3%%1001%%4"
 */