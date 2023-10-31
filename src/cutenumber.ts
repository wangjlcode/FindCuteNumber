/* eslint-disable @typescript-eslint/no-unused-vars */
function isCuteNumberGreaterThan10(list: number[]): boolean{
    const evenNumbers = findAllEvenNumbers(list);
    const maxEvenNumber = findMaxNumber(evenNumbers);
    return isGreaterThan10(maxEvenNumber);
}


function findAllEvenNumbers(list: number[]): number[]{
    return list.filter( x => x%2 == 0 );
}


function findMaxNumber(list: number[]): number{
    return Math.max(...list);

}


function isGreaterThan10(num: number): boolean{
    return num > 10;
}


console.log(isCuteNumberGreaterThan10([2,7,9,4,5,12]))
console.log(isCuteNumberGreaterThan10([2,7,9,4,5,10]))