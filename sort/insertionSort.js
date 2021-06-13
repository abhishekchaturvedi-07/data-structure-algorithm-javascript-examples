function insertionSort(arr){
    for(var i = 1; i< arr.length; i ++)
    {
        
           var currentVal = arr[i]
//             console.log('i and curentVal- ',i, currentVal)

            for(var j = i-1; j >=0 && arr[j] > currentVal; j--)
            {
                arr[j+1] = arr[j]
            }
            arr[j+1] = currentVal
            
            console.log(arr, currentVal, arr[j])
    }
}
insertionSort([4,2,34,7,3,1,0])