function decimalToBinary(num) {
  // your code here
	if (num === 0) {
        return "0";
    }

    let binary = "";

    while (num > 0) {
        let remainder = num % 2;

        binary = remainder + binary;

        num = Math.floor(num / 2);
    }

    return binary;
}
//const num = parseInt(prompt("Enter a number."));
//alert(decimalToBinary(num));
