import { parseValue } from './index'
import { Shared } from './util' 
jest.mock('./util')


describe('Function parseValue', () => {
    let Mock_getCountryAppInstanceCode;
    let Mock_appInstanceIsHKIFWD;
    
    beforeEach(() => {
        Mock_getCountryAppInstanceCode = jest.spyOn(Shared, 'getCountryAppInstanceCode');
        Mock_appInstanceIsHKIFWD = jest.spyOn(Shared, 'appInstanceIsHKIFWD');
    })

    afterEach(() => {
        Mock_getCountryAppInstanceCode.mockRestore()
        Mock_appInstanceIsHKIFWD.mockRestore()
        jest.clearAllMocks();
        jest.clearAllTimers();
        
    })

    describe('Default', () => {
        test('[0] - on HK$100,508 should receive a number 100.51', () => {
            const value = "HK$100,508"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(100.51)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[1] - on HK$1.100,508 should receive a number 100.51', () => {
            const value = "HK$1.100,508"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(1100.51)
            expect(typeof result).not.toBe(typeof value)
        }) 
        test('[2] - on HK$1.100,508 should receive a number 100.508', () => {
            const value = "HK$1.100,508"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(1100.508)
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
        test('[1] - on HK$145.12 should receive a number 145.12', () => {
            const value = "HK$145.12"
            
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
    
            expect(result).toBe(145.12)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[2] - on HK$1,801.53 should receive a number 1801.53', () => {
            const value = "HK$1,801.53"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(1801.53)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[3] - on HK$1.801,53 should receive a number 1801.53', () => {
            const value = "HK$1.801,53"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(1801.53)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[4] - on HK$1.801,50 should receive a number 1801.50', () => {
            const value = "HK$1.801,50"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(1801.50)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[5] - on HK$1.801,50 should receive a number 1801.50', () => {
            const value = "HK$1.801,50"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(1801.50)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[6] - on HK$123.180.100,50 should receive a number 1801.50', () => {
            const value = "HK$123.180.100,50"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(123180100.50)
            expect(typeof result).not.toBe(typeof String)
        })
        test('[6] - on HK$80.100,508 should receive a number 80100,508', () => {
            const value = "HK$80.100,508"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('hk-HK-IFWD-ECOM')
            Mock_appInstanceIsHKIFWD.mockReturnValue(true)
            const result = parseValue(value)
            
            expect(result).toBe(80100.508)
            expect(typeof result).not.toBe(typeof String)
        })
    })
    describe('Instance vi-VN', () => {
        test('[0] - on ₫100,508 should receive a number 100.51', () => {
            const value = "₫100,508"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('vi-VN')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(100.51)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[1] - on ₫10.057.100,508 should receive a number 10057100.51', () => {
            const value = "₫10.057.100,508"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('vi-VN')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(10057100.51)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[2] - on Rp95000 should receive a number 95000', () => {
            const value = "Rp95000"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('vi-VN')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(95000)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[3] - on Rp145003987 should receive a number 145003987', () => {
            const value = "Rp145003987"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('vi-VN')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(145003987)
            expect(typeof result).not.toBe(typeof value)
        })
        test('[3] - on Rp1000000000 should receive a number 1000000000', () => {
            const value = "Rp1000000000"
    
            Mock_getCountryAppInstanceCode.mockReturnValue('vi-VN')
            Mock_appInstanceIsHKIFWD.mockReturnValue(false)
            const result = parseValue(value)
            
            expect(result).toBe(1000000000)
            expect(typeof result).not.toBe(typeof value)
        })
    })
})
