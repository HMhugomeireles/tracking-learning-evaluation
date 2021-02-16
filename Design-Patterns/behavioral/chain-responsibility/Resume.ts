export class Resume {
    private name: string;
    private age: number;
    private experienceYears: number;
    private tech: string[];
    private questionOne: boolean;
    private questionTwo: boolean;
    private level: number;
    private approval: boolean;

    constructor(
        name: string, 
        age: number, 
        experienceYears: number, 
        tech: string[], 
        questionOne: boolean, 
        questionTwo: boolean) {
            this.name = name;
            this.age = age;
            this.experienceYears = experienceYears;
            this.tech = tech;
            this.questionOne = questionOne;
            this.questionTwo = questionTwo;
            this.level = 0;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getExperienceYears() {
        return this.experienceYears;
    }
    getTech() {
        return this.tech;
    }
    getQuestionOne() {
        return this.questionOne;
    }
    getQuestionTwo() {
        return this.questionTwo;
    }
    setApproval(value: boolean) {
        this.approval = value;
    }
    setLevel(value: number) {
        this.level += value;
    }
    log() {
        return {
            name: this.name,
            age: this.age,
            experienceYears: this.experienceYears,
            tech: this.tech,
            questionOne: this.questionOne,
            questionTwo: this.questionTwo,
            level: this.level,
            approval: this.approval
        }
    }
}