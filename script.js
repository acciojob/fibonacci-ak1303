function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c=a+b;
	for(let i=2;i<nums;i++){
		a=b;
		b=c;
		c=a+b;
	}
	return c;
}

module.exports = fibonacci;
