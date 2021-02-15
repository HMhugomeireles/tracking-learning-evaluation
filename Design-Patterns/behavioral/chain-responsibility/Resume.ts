export class Resume {
    private name: string;
    private age: number;
    private experienceYears: number;
    private tech: string[];
    private questionOne: boolean;
    private questionTwo: boolean;

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
}