import { BaseHandler } from './BaseHandler';
import { Resume } from './Resume'

export class HR extends BaseHandler<Resume> {
    handle(resume: Resume): Resume {
        if (resume.getExperienceYears() > 3 && resume.getTech().includes("javascript")) {
            super.handle(resume);
        }
        
        resume.setApproval(false);
        return resume
    }
}