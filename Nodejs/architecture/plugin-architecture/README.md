# Plugin architecture pattern - The plug and play in nodejs

Wikipedia:

[Plugin computing](https://en.wikipedia.org/wiki/Plug-in_%28computing%29)

What is a Plugin?

The concept of plugin is module then solves specific problem and is easy to connect and use. Ok but this is to must abstract, let me simplify.
I'm use one thing for write this this is use like a plugin, I'm talk about the key board you just plug and play.
In terms of nerd the in nodejs you use npm or yarn for install modules that use this pattern.

My explication:

This architecture consist in have the main module, normally call Core, where this module will have the business rules, data access, security, logger.
The plugin is small module/lib that will help you to have extensions of the main(core).

This requires some understanding of fundamental oop concepts, such as interfaces and factories.

World example:
Thing about the browser, you can have the main application for other words the CORE and install extension to increase same default functionality.

Positive:

- Extensibility
- Flexibility
- Isolation
- Custom process logic

Negative:

- If not apply the pattern the right way will create lot of complexity in application and in the futures developments

### Resources

[Article - Medium](https://medium.com/omarelgabrys-blog/plug-in-architecture-dec207291800)
[Article - Advantages](http://blog.nuclex-games.com/tutorials/cxx/plugin-architecture/)