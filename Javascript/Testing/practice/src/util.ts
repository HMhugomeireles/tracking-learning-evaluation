// jest-ignore
const INSTANCES = ['vi-VN', 'hk-HK-IBP', 'hk-HK-IFWD-ECOM', 'default']

const Shared = {
    getCountryAppInstanceCode: () => INSTANCES[2],
    appInstanceIsHKIFWD: () => true
}


export {
    Shared,
    INSTANCES
}