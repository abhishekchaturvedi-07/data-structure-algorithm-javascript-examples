// Plain JS
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) {
//       var temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }

// ES6
function selectionSort(arr) {
  const swap = (arr, exc1, exc2) => {
    [arr[exc1], arr[exc2]] = [arr[exc2], arr[exc1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      console.log(arr, i , min)
      swap(arr, i, min);
    }
  }
  return arr;
}

selectionSort([8, 12, 2, 34, 1, 11]);

selectionSort([8, 12, 2, 34, 1, 11]);
