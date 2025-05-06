const arr = [1, 2, 3, 4, 5];

const mapFunction = (x, y, z) => {
  console.log("Element * 2:", x * 2);      // 1
  console.log("Index:", y);                // 2
  console.log("Array reference:", z);      // 3
};

arr.map(mapFunction);

const filterFunction = (x, y, z) => {
  if (x % 2 === 0) {
    console.log("Even number:", x);        // 4
    console.log("Index:", y);              // 5
    console.log("Array reference:", z);    // 6
    return true;
  }
  return false;
};

arr.filter(filterFunction);
    