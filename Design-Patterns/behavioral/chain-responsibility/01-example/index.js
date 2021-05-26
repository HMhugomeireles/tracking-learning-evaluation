
const CustomerOrderInterface = {
  orderId: 0,
  totalAmount: 0,
  byAccess: 0,
  closeLocal: 0,
  isPayed: false,
  justifications: null
}

const AccessDictionary = {
  1: "LINK",
  2: "NORMAL"
};

const CloseLocalDictionary = {
  1: "APP",
  2: "CASHIER"
};

const handles = {
  byLinkAccess: (customerOrder = CustomerOrderInterface) => {
    return AccessDictionary[customerOrder.byAccess] === "LINK";
  },
  byNotPayedInCashier: (customerOrder = CustomerOrderInterface) => {
    const sentToTheCashier = CloseLocalDictionary[customerOrder.closeLocal] === "CASHIER";

    return sentToTheCashier && !customerOrder.isPayed;
  },
  byJustifiedInCashier: (customerOrder = CustomerOrderInterface) => {
    const sentToTheCashier = CloseLocalDictionary[customerOrder.closeLocal] === "CASHIER";
    const wasJustified = customerOrder.justifications !== null;

    return sentToTheCashier && wasJustified;
  }
};

export const handleCustomerOrders = (customerOrders = [CustomerOrderInterface]) => {
  return customerOrders.filter((customerOrder) => Object.values(handles).some((handle) => handle(customerOrder)));
};