// JS version
// /* function sort(arr){
//   console.log('oldArr = ', arr)
//   for(var i=arr.length; i > 0 ; i-- ){
//         for(var j=0; j < i-1; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1])
//             {
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     console.log('one pass complete')
//     }
//   console.log('newArr = ', arr)
// } */

// ES6 version
// function sort(arr){
// 	console.log('oldArr = ', arr)
// 	const swap = (arr, exc1, exc2) => {
// 		[arr[exc1], arr[exc2]] = [arr[exc2], arr[exc1]]
// 	}
// 	for(var i=arr.length; i > 0 ; i-- ){
//         for(var j=0; j < i-1; j++){
// 						console.log(arr, arr[j], arr[j+1])
//              swap(arr, j , j+1)
//         }
// 		console.log('one pass complete')
//     }
//   console.log('newArr = ', arr)
// }

// Optimized way with noSwap
function sort(arr) {
  var noSwap;
  console.log('oldArr = ', arr);
  for (var i = arr.length; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      console.log('noswaps');
      break;
    }
    console.log('one pass complete');
  }
  console.log('newArr = ', arr);
}

sort([12, 4, 13, 54, 11, 3]);
