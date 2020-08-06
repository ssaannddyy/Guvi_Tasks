var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
for(let e2 of ar2)
 {
 ar1.push(e2);
 }
 return ar1;
}