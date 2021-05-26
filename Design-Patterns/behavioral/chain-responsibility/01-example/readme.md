# Understanding the problem

Let’s say that we are developing software for restaurants, and that there is a customerOrder object, containing the details of a customer purchase.
We need to filter a list containing several of these objects, and the filter will be based on precise business rules, which are:
- Orders that were placed by a user who accessed the system via an external link.
- Orders that were directed to the cashier, but are not yet paid.
- Orders that were justified at the cashier — where the cashier operator closed the order, identifying the amount the customer paid for either cash, debit or credit card.
In addition to these first requirements listed above, they are likely to increase or change depending on stakeholder feedback.
