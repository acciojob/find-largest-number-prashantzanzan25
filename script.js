*function findLargest(a, b, c) {
  //your code here
	if (a >= b && a >= c) {
		return a;
	} 
	else if (b >= a && b >= c) {
		return b;
	} 
	else {
		return c;
	}
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
