import { BaseHandler } from './BaseHandler';
import { Resume } from './Resume'

class HR extends BaseHandler<Resume> {
    handle(data: T) {
        if (this.nextHandler) {
            return this.nextHandler.handle(data);
        }
        return data
    }
}