# Creational


https://beforesemicolon.medium.com/10-javascript-design-patterns-to-improve-your-code-with-44c6f6c2ea94

This is one of the most common creational design patterns and one of my favorites when it comes to creating objects. This pattern allows you to separate the implementation and creation of a particular object. It also allows for a controlled way to create objects abstracting away any complexity or the need to interact with a particular object or API directly.

Another thing it allows us to do is to create an object whose class or constructor is only known at runtime. If you ever used Express.js for Node you used its app factory(createApplication) when you created the express app. The constructor that creates the app for you is created at runtime and the factory exposes just enough stuff for you to interact with and handles all the mess away from you.