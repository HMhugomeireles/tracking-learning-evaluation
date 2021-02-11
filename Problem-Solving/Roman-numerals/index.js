/**

    Write a decoder of roman numerals, 
    which receives roman numeral as a string and returns an integer number.

    Roman symbols cheatsheet:

 */


function decoderRomanNumerals(romanNumeral) {
    return null;
}

decoderRomanNumerals('II') // 2
decoderRomanNumerals('IV') // 4
decoderRomanNumerals('XX') // 20

decoderRomanNumerals('LX') // 60
decoderRomanNumerals('XL') // 40
decoderRomanNumerals('ii') // ERROR 'Not roman numeral'

decoderRomanNumerals('CCC') // 300
decoderRomanNumerals('D') // 500
decoderRomanNumerals('M') // 1000

decoderRomanNumerals('MCXIV') // 1114
decoderRomanNumerals('MMCMXCIII') // 2993

Symbol     Value 
I          1     
V          5     
X          10    
L          50    
C          100   
D          500   
M          1000 
