var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   s=s.split("") 
   s.reverse()
   return s.join("")
}