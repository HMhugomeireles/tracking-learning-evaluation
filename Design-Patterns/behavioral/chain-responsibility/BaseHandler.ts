/**
 * 
 */
export class BaseHandler<T> {
    protected nextHandler: BaseHandler<T> | null;

    setNextHandler(handler: BaseHandler<T>): BaseHandler<T> {
        this.nextHandler = handler;
        return handler;
    }

    handle(data: T): T {
        if (this.nextHandler) {
            return this.nextHandler.handle(data);
        }
        return data
    }
}