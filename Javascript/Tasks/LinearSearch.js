// Binary Search Algorithm

const arr=[3,4,7,9,33,40,41];
    const key=40;
    const result=binarySearch(arr,key)

    if(result!==-1) console.log(`Element ${key} found at index ${result}.`);
    else console.log(`Element ${key} not found in the array.`);

    function binarySearch(arr,target) {
        let start=0;
        let end=arr.length-1;

        while(start<=end) {
            const mid=(start + end)/2;
            if(arr[mid]===target) return mid;
        }
        if(arr[mid]<target) start=mid+1;
        else end=mid-1;
        return -1;
}