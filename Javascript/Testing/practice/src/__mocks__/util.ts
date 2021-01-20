const INSTANCES = {
    VIVN: 'vi-VN', 
    HKIBP: 'hk-HK-IBP', 
    HKIFWDECOM: 'hk-HK-IFWD-ECOM',
}

const Shared = {
    getCountryAppInstanceCode: jest.fn(),
    appInstanceIsHKIFWD: jest.fn()
}


export {
    Shared,
    INSTANCES
}