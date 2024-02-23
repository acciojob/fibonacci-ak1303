function fibonacci(num) {
// your code here
	if(num<1)rerturn -1;
	if(num==1 || num==2)return num-1;
	let a=0;
	let b=1;
	let c=a+b;
	for(let i=3;i<num;i++){
		a=b;
		b=c;
		c=a+b;
	}
	return c;
}

module.exports = fibonacci;
