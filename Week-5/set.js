
hasDuplicate = MyArray =>  {
    const mySet = new Set(MyArray);
    return mySet.size !== MyArray.length ? true : false ;
}

console.log(hasDuplicate([1,5,-1,2])); //true
console.log(hasDuplicate([2,3,-1,3])); //true
console.log(hasDuplicate([3,6,4,5])); //false