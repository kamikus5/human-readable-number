const unitsWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozensWord = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
  let str = number.toString();
  
	if (number > 19 && number < 100) {
		if (str[1] === '0') {
			return dozensWord[str[0] - 2];
		}
		return dozensWord[str[0] - 2] + ' ' + unitsWord[str[1]];
	}
	if (number > 99) {
		if (str[1] === '0' && str[2] === '0') {
			return unitsWord[str[0]] + ' hundred';
		}
		else if (str[1] === '0') {
			return unitsWord[str[0]] + ' hundred ' + unitsWord[str[2]];
		} else if (str[1] === '1') {
			return unitsWord[str[0]] + ' hundred ' + unitsWord[str[1] + str[2]];
		} else if (str[2] === '0') {
			return unitsWord[str[0]] + ' hundred ' + dozensWord[str[1] - 2];
		} 
		return unitsWord[str[0]] + ' hundred ' + dozensWord[str[1] - 2] + ' ' + unitsWord[str[2]];
	}
	return unitsWord[number];
}
