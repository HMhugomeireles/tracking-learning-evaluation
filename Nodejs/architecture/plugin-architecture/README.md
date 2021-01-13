# Plugin architecture pattern - The plug and play in nodejs

Wikipedia:

[Plugin computing](https://en.wikipedia.org/wiki/Plug-in_%28computing%29)

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
[](http://blog.nuclex-games.com/tutorials/cxx/plugin-architecture/)