export default function add(numbersStr: string) {
  if (numbersStr === "") return 0;
  return Number(numbersStr[0]) + Number(numbersStr[2]);
}


/**
 kata inputs
 1. "", "1,2"
 */