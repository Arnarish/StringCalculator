class stringCalculator {
	add(numString) {
			if(!numString) {
				return 0;
			}
			
			
			return this.sum(
				this.splitNumString(numString)
				);
	}
	
	splitNumString(numString) {
		//only take the numbers from the styring, split by the delimiter
		let delimiter = /,|\n/;
		let input = numString;
		
		const numArr = input.split(delimiter);
		return numArr.map(Number);
	}
	
	sum(string) {
		 //array.reduce iterates through the array, summing up the elements saving me some code work, brilliant!
		return string.reduce((accumulator, element) => accumulator + element);
	}
};

module.exports = {
  stringCalculator
};