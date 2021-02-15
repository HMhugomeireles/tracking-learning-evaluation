# Behavioral

In software engineering, behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

> Chain of Responsibility

Problem

There is a potentially variable number of "handler" or "processing element" or "node" objects, and a stream of requests that must be handled. Need to efficiently process the requests without hard-wiring handler relationships and precedence, or request-to-handler mappings.

Real Wold Example:
---

One real wold application is the process of recruitment of a company, when we have the stage of apply resumer(input data), HR filter the resume(department of HR evaluation of data), SE coding testing(validate questions and give feedback), Hr give feedback.

Let's assume the input date is the follow:

```json

{
    "name": "John Doe",
    "age": 30,
    "experienceYears": 8,
    "tech": ["javascript", "typescript", "css", "html"],
    "questionOne": true,
    "questionTwo": false
}

```

When the data is sended the process can pass for all steps of fold down.

---

In this senary we can use this pattern to let the code more expressive, for the things are do it.
With this pattern we can chain the process that data need to flow.

when use it:

- more than one object amy process a request
- execute several handlers in a particular order
- handlers can be specified dynamically

Benefits:

- reduces coupling
- reduces complexity of objects
- adds flexibility, allow to add or remove handlers dynamically
