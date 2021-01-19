import {parseValue} from './index'


describe('Function parseValue', () => {
    const INSTANCES = ['vi-VN', 'hk-HK-IBP', 'hk-HK-IFWD-ECOM', 'default']

    let Mock_Shared_getCountryAppInstanceCode;
    let Mock_Shared_appInstanceIsHKIFWD;

    beforeEach(() => {
        Mock_Shared_getCountryAppInstanceCode = jest.fn().mockReturnValue(INSTANCES[2]);
        Mock_Shared_appInstanceIsHKIFWD = jest.fn().mockReturnValue(true);
    })

    test('[0] - Should return the same input when is not a string', () => {
        const value = 1234
        const result = parseValue(value)
        expect(result).toBe(value)
        expect(typeof result).toBe(typeof value)
    })
    test('[1] - on HK$145.12 should receive a number 145.12', () => {
        const value = "HK$145.12"
        
        const result = parseValue(value)

        expect(result).toBe(145.12)
        expect(typeof result).not.toBe(typeof value)
    })
    
    test('[2] - on HK$1,801.53 should receive a number 1801.53', () => {
        const value = "HK$1,801.53"

        const result = parseValue(value)
        
        expect(result).toBe(1801.53)
        expect(typeof result).not.toBe(typeof value)
    })

    test('[3] - on HK$1.801,53 should receive a number 1801.53', () => {
        const value = "HK$1.801,53"

        const result = parseValue(value)
        
        expect(result).toBe(1801.53)
        expect(typeof result).not.toBe(typeof value)
    })
    //------------- new 
    test('[4] - on HK$1.801,50 should receive a number 1801.50', () => {
        const value = "HK$1.801,50"

        const result = parseValue(value)
        
        expect(result).toBe(1801.50)
        expect(typeof result).not.toBe(typeof value)
    })
    test('[5] - on HK$1.801,50 should receive a number 1801.50', () => {
        const value = "HK$1.801,50"

        const result = parseValue(value)
        
        expect(result).toBe(1801.50)
        expect(typeof result).not.toBe(typeof value)
    })
    test('[6] - on HK$123.180.100,50 should receive a number 1801.50', () => {
        const value = "HK$123.180.100,50"

        const result = parseValue(value)
        
        expect(result).toBe(123180100.50)
        expect(typeof result).not.toBe(typeof value)
    })
    test('[7] - on HK$123.180.100,50467523 should receive a number 1801.50', () => {
        const value = "HK$123.180.100,508"
        jest.doMock('Shared', () => {
            return {
                getCountryAppInstanceCode: () => INSTANCES[2],
                appInstanceIsHKIFWD: () => false
            }
        })

        const result = parseValue(value)
        
        expect(result).toBe(123180100.51)
        expect(typeof result).not.toBe(typeof value)
    })
})
