import { parseValue } from './index'
import { Shared } from './util' 
jest.mock('./util')


describe('Function parseValue', () => {
    let Mock_getCountryAppInstanceCode;
    let Mock_appInstanceIsHKIFWD;
    let Mock_getCurrencySymbol;
    let Mock_appInstanceIsID;
    let Mock_appInstanceIsVNIBP;
    
    beforeAll(() => {
        Mock_getCountryAppInstanceCode = jest.spyOn(Shared, 'getCountryAppInstanceCode');
        Mock_appInstanceIsHKIFWD = jest.spyOn(Shared, 'appInstanceIsHKIFWD');
        Mock_getCurrencySymbol = jest.spyOn(Shared, 'getCurrencySymbol');
        Mock_appInstanceIsID = jest.spyOn(Shared, 'appInstanceIsID');
        Mock_appInstanceIsVNIBP = jest.spyOn(Shared, 'appInstanceIsVNIBP');
    })

    afterEach(() => {
        Mock_getCountryAppInstanceCode.mockRestore()
        Mock_appInstanceIsHKIFWD.mockRestore()
        Mock_getCurrencySymbol.mockRestore()
        Mock_appInstanceIsID.mockRestore()
        Mock_appInstanceIsVNIBP.mockRestore()
        jest.clearAllMocks();
        jest.clearAllTimers();
        
    })

    describe('Default', () => {
        beforeEach(() => {
            Mock_getCountryAppInstanceCode.mockReturnValue('')
            Mock_appInstanceIsVNIBP.mockReturnValue(false)
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            Mock_getCurrencySymbol.mockReturnValue('')
            Mock_appInstanceIsID.mockReturnValue(false)
        })

        test('[0] - on HK$100,508 should receive a number 100.51', () => {
            const value = "HK$100,508"
    
            const result = parseValue(value)
            
            expect(result).toBe(100.51)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[1] - on HK$1.100,508 should receive a number 100.51', () => {
            const value = "HK$1.100,508"
    
            const result = parseValue(value)
            
            expect(result).toBe(1100.51)
            expect(typeof result).not.toBe(typeof value)
        }) 
        test('[2] - on HK$1.100,508 should receive a number 100.51', () => {
            const value = "HK$1.100,508"
    
            const result = parseValue(value)
            
            expect(result).toBe(1100.51)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[3] - Should return the same input when is not a string', () => {
            const value = 1234
            
            Mock_getCountryAppInstanceCode.mockReturnValue('')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(value)
            expect(typeof result).toBe(typeof value)
            
        })
        test('[5] - on input value ₫€$1234.345$#$€HKVI Should return only the number', () => {
            const value = '₫€$1234.345$#$€HKVI'
            
            Mock_getCountryAppInstanceCode.mockReturnValue('')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(1234.35)
            expect(typeof result).not.toBe(typeof value)
            
        })
        test('[5] - on input value 1,500.75 Should return 1500.75', () => {
            const value = '1,500.75'
            
            Mock_getCountryAppInstanceCode.mockReturnValue('')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(1500.75)
            expect(typeof result).not.toBe(typeof value)
        })
    })
    describe('Instance HK-IFWD', () => {
        beforeEach(() => {
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsVNIBP.mockReturnValue(false)
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            Mock_getCurrencySymbol.mockReturnValue('HK$')
            Mock_appInstanceIsID.mockReturnValue(false)
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
            expect(typeof result).not.toBe(typeof String)
        })
        test('[6] - on HK$80.100,508 should receive a number 80100,508', () => {
            const value = "HK$80.100,508"
    
            const result = parseValue(value)
            
            expect(result).toBe(80100.508)
            expect(typeof result).not.toBe(typeof String)
        })
    })
    describe('Instance vi-VN', () => {
        
        beforeEach(() => {
            Mock_getCountryAppInstanceCode.mockReturnValue('vi-VN')
            Mock_appInstanceIsVNIBP.mockReturnValue(true)
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            Mock_getCurrencySymbol.mockReturnValue('₫')
            Mock_appInstanceIsID.mockReturnValue(false)
        })
        
        test('[0] - on ₫100,508 should receive a number 100.51', () => {
            const value = "₫1,100,000"
    
            const result = parseValue(value)
            
            expect(result).toBe(1100000)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[1] - on ₫10.057.100,508 should receive a number 1005710051', () => {
            const value = "₫10.057.100.508"
    
            const result = parseValue(value)
            
            expect(result).toBe(10057100508)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[2] - on Rp95000 should receive a number 95000', () => {
            const value = "Rp95000"
    
            const result = parseValue(value)
            
            expect(result).toBe(95000)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[3] - on Rp145003987 should receive a number 145003987', () => {
            const value = "Rp1.003.987"
    
            const result = parseValue(value)
            
            expect(result).toBe(1003987)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[3] - on Rp1000000000 should receive a number 100000000', () => {
            const value = "Rp1.000"

            const result = parseValue(value)

            expect(result).toBe(1000)
            expect(typeof result).not.toBe(typeof value)
        })
    })
})
