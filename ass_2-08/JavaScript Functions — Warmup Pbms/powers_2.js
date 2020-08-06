function powersOfTwo(n){
  dummy=[]
  for(i=0;i<=n;i++)
  {
  	dummy.push(Math.pow(2,i))
  }
  return dummy
}
console.log(powersOfTwo(10))