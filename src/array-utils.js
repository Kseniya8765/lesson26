export const sortIncrease = (arr) => {
    let arr2 = arr.slice();
    arr2.sort(function (a, b) {
      return a - b;
    });
    return arr2;
  };
  
  export const sortDecrease = (arr) => {
    let arr3 = arr.slice();
    arr3.sort(function (a, b) {
      return b - a;
    });
    return arr3;
  };