# Behavioral

In software engineering, behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

> Chain of Responsibility

Problem

There is a potentially variable number of "handler" or "processing element" or "node" objects, and a stream of requests that must be handled. Need to efficiently process the requests without hard-wiring handler relationships and precedence, or request-to-handler mappings.


Real Wold Example:

In the web development we have handle many input steps in case of checkout page in the e-commerce, in same cases we will need it the following step:
    - login step or register step
    - address confirmation or address deliver
    - payment 
    - success/error

In this senary we can use this pattern to let the code more expressive, for the things are do it.
With this pattern we can chain the process that data need pass.


```ts

class 


```