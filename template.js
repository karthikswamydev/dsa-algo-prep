const card = [12, 11, 10, 9, 8, 7, 6];
// const target = 8;

const linearSearch = (card, target) => {
  let result = -1;
  for (let i = 0; i < card.length; i++) {
    result = card[i] === target ? i : result;
  }
  return result;
};

// console.log(linearSearch(card, target));

const fibonacci = (n) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

// console.log(fibonacci(4));

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    console.log(i, "index");
    result = result * i;
  }
  return result;
};

// console.log(factorial(5));

// const arr = [1, 2, 3, 4, 5, 6, 7];

const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

// console.log(binarySearch(arr, 7));

const bubbleSort = (buarr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < buarr.length - 1; i++) {
      if (buarr[i] < buarr[i + 1]) {
        let temp = buarr[i];
        buarr[i] = buarr[i + 1];
        buarr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return buarr;
};

// const buarr = [8, 20, -4, 4, 3];
// console.log(bubbleSort(buarr));
const arr = [8, 20, -4, 4, 3];

const quickSort = (arr) => {
  if (arr < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// console.log(quickSort(arr));

const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums, target) => {
  const newnum = new Map();
  console.log(newnum, "newnum");

  for (i = 0; i < arr.length; i++) {
    const complement = target - nums[i];
    console.log(complement, "comple");

    if (newnum.has(complement)) {
      return [newnum.get(complement), i];
    }
    newnum.set(nums[i], i);
  }
  [];
};

// console.log(twoSum(nums, target));

const palindrom = (n) => {
  const num = n.toString();
  // console.log(typeof num);
  const d = num.split("").reverse().join("");
  // console.log(d);
  return num === d;
};

// console.log([palindrom(121)]);

const convertRoman = (s) => {
  const mapRoman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = mapRoman[s[i]];
    let next = mapRoman[s[i + 1]];

    next && curr < next ? (result -= curr) : (result += curr);
  }

  return result;
};
console.log(convertRoman("MCMXCIV"));
