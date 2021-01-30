const INSTANCES = {
    IDID: 'id-ID',
    VIVN: 'vi-VN', 
    HKIBP: 'hk-HK-IBP', 
    HKIFWDECOM: 'hk-HK-IFWD-ECOM',
}

const Shared = {
    getCountryAppInstanceCode: jest.fn(),
    appInstanceIsHKIFWD: jest.fn(),
    appInstanceIsVNIBP: jest.fn(),
    appInstanceIsID: jest.fn(),
    getCurrencySymbol: jest.fn(),
}


export {
    Shared
}