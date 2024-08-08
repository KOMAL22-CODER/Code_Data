num=12345
sum=0
while(num!=0){
  let r=num%10;
  sum=sum+r;
  num=Number.parseInt(num/10);

}
console.log(sum)