import { BaseHandler } from './BaseHandler';
import { Resume } from './Resume'

export class SE extends BaseHandler<Resume> {
    handle(resume: Resume): Resume {
        if (resume.getQuestionOne() === false) {
            resume.setLevel(1);
        }
        if (resume.getQuestionOne() === false) {
            resume.setLevel(1);
        }
        return resume;
    }
}