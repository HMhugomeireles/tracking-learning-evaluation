import { BaseHandler } from './BaseHandler'
import { HR } from './HR'
import { SE } from './SE'
import { Resume } from './Resume'

function main() {
    const interview = new Resume("John Doe", 30, 8, ["javascript", "typescript", "css", "html"], false, false);

    const evaluation = new BaseHandler();
    evaluation
        .setNextHandler(new HR)
        .setNextHandler(new SE)

    const feedback = evaluation.handle(interview);
    console.log(feedback.log())
}

main()