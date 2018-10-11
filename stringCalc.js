//stringCalc.js
class stringCalculator {
	add(numString) {
			if(!numString) {
				return 0;
			}
			
			return this.sum(
				this.checkNegatives(
					this.splitNumString(numString)
					)
				);
	}
	
	splitNumString(numString) {
		//only take the numbers from the styring, split by the delimiter
		let delimiter = /,|\n/;
		let input = numString;
		
		const numArr = input.split(delimiter);
		return numArr.map(Number);
	}
	
	checkNegatives(numString) {
		//checks each item in numString and adds them to a seperate array if they are a negative number. Prints the list if the error is thrown
		const neg = numString.filter((i) => i < 0);
		if(neg.length > 0) {
			throw new Error(`Negatives not allowed: ${neg}`);
		}
		return numString;
	}
	
	sum(string) {
		 //array.reduce iterates through the array, summing up the elements saving me some code work, brilliant!
		return string.reduce((accumulator, element) => accumulator + element);
	}
};

module.exports = {
  stringCalculator
};