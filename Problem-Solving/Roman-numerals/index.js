/**

    Write a decoder of roman numerals, 
    which receives roman numeral as a string and returns an integer number.

    Roman symbols cheatsheet:

 */

const romanTable = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}


function decoderRomanNumerals(romanNumeral) {
    const romanSplit = romanNumeral.split('')
    
    function validation() {
        if (typeof romanNumeral !== 'string') {
            return new Error('Type is not String');
        }

        const keys = Object.keys(romanTable);
        
        for (const letter of romanSplit) {
            for (const key of keys) {
                if (letter !== key) {
                    return new Error('Not roman numeral');
                }
            }
        }
    }

    try {
        validation();

        let accumulator = 0
        for (let position = 0; position < romanSplit.length; position++) {
            const firstVale = romanTable[romanSplit[position]]

            if (position === romanSplit.length - 1) {
                accumulator += firstVale
                break;
            }

            const secondVale = romanTable[romanSplit[position + 1]]

            if (firstVale === secondVale) {
                accumulator += firstVale
            }

            if (firstVale < secondVale) {
                accumulator -= secondVale - firstVale
            }


            if (firstVale > secondVale) {
                accumulator = secondVale + firstVale
            }


        }
        
        return accumulator;
    } catch (error) {
        return new Error('Not roman numeral');
    }

}

console.log("[II] - ", decoderRomanNumerals('II')) // 2
console.log("[IV] - ", decoderRomanNumerals('IV')) // 4
console.log("[XX] - ", decoderRomanNumerals('XX')) // 20

console.log("[LX] - ", decoderRomanNumerals('LX')) // 60
console.log("[XL] - ", decoderRomanNumerals('XL')) // 40
console.log("[ii] - ", decoderRomanNumerals('ii')) // ERROR 'Not roman numeral'

console.log("[CCC] - ", decoderRomanNumerals('CCC')) // 300
console.log("[D] - ", decoderRomanNumerals('D')) // 500
console.log("[M] - ", decoderRomanNumerals('M')) // 1000

console.log("[MCXIV] - ", decoderRomanNumerals('MCXIV')) // 1114
console.log("[MMCMXCIII] - ", decoderRomanNumerals('MMCMXCIII')) // 2993



a -> 1
a -> 5 - a
a -> 4

