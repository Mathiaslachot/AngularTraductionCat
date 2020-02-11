export default class CatTranslator {
	static translateText(text) {
		let findWord = '',
			finalText = '';

		text.split('').map(char => {
			switch (char) {
				case '<':
					finalText += this.wordToMeow(findWord);
					findWord = null;
					finalText += char;
					break;
				case '>':
					findWord = '';
					finalText += char;
					break;
				case ' ':
				case ',':
				case '.':
				case '?':
				case '\n':
					finalText += this.wordToMeow(findWord);
					findWord = '';
					finalText += char;
					break;
				default:
					if (findWord === null) {
						finalText += char;
					} else {
						findWord += char;
					}
					break;
			}
		});

		return finalText;
	}

	static wordToMeow(word) {
		let stringToReturn = '';
		const charsList = ['m', 'm', 'm', 'm', 'e', 'e', 'e', 'o', 'o', 'w'];

		switch (word.length) {
			case 0:
				stringToReturn = '';
				break;
			case 1:
				stringToReturn = this.randownFrom(['i', 'a', 'u']);
				break;
			case 2:
				stringToReturn = this.randownFrom(['mi', 'iu', 'yu']);
				break;
			case 3:
				stringToReturn = this.randownFrom(['mia', 'miu', 'mou']);
				break;
			default:
				for (let i = 0; i < word.length; i++) {
					const currentList = charsList.slice(
						i === 0 ? 0 : charsList.lastIndexOf(charsList[i - 1]) + 1
					);
					stringToReturn += this.randownFrom(currentList);
				}
				break;
		}

		// make uppercase
		stringToReturn = stringToReturn
			.split('')
			.map((c, index) => {
				const isUpper = word[index] === word[index].toUpperCase();
				return isUpper ? c.toUpperCase() : c;
			})
			.join('');

		return stringToReturn;
	}

	static randownFrom(list) {
		const randown = Math.floor(Math.random() * Math.floor(list.length));
		return list[randown];
	}
}
