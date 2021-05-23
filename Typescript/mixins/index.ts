/*

Error Type:
Classes can only extend a single class.(1174)

*/

type report = {
  candidateInfo: string;
  redFlags: Array<string>;
  greenFlags: Array<string>;
  resume: string;
}

class Candidate {
  private candidateName: string;
  private city: string;
  private cv: any;
  constructor(name: string, city: string, cv: any) {
    this.candidateName = name;
    this.city = city;
    this.cv = cv;
  }
  getCandidateName() {
    return this.candidateName;
  }
  getCity() {
    return this.city;
  }
  getCv() {
    return this.cv;
  }
}

class Calendar {
  private interviewDate: any;
  private codeChallengeReviewDate: any;
  getInterviewDate() {
    return this.interviewDate;
  }
  getCodeChallengeReviewDate() {
    return this.codeChallengeReviewDate;
  }
  setInterviewDate(interviewDate: any) {
    this.interviewDate = interviewDate;
  }
  setCodeChallengeReviewDate(codeChallengeReviewDate: any) {
    this.codeChallengeReviewDate = codeChallengeReviewDate;
  }
}

class Interview {
  private firstInterview: report | undefined;
  private secondInterview: report | undefined;
  private approvedToCodeChallenge: boolean;
  constructor() {
    this.approvedToCodeChallenge = false;
    this.firstInterview = undefined;
    this.secondInterview = undefined;
  }
  setFistReport(report: report) {
    this.firstInterview = report;
  }
  setSecondInterview(report: report) {
    this.firstInterview = report;
  }
  setApprovedToCodeChallenge(needCodeChallenge: boolean) {
    this.approvedToCodeChallenge = needCodeChallenge;
  }
  getFirsInterview() {
    return this.firstInterview;
  }
  getSecondInterview() {
    return this.firstInterview;
  }
  getApprovedToCodeChallenge() {
    return this.approvedToCodeChallenge;
  }
}

class Consultant {
  private consultantName: string;
  constructor(name: string) {
    this.consultantName = name;
  }
  getConsultantName() {
    return this.consultantName;
  }
}

function applyMixins(derivedConstructor: any, baseConstructors: any[]) {
  baseConstructors.forEach(baseConstructor => {
    Object.getOwnPropertyNames(baseConstructor.prototype)
    .forEach(name => {
        Object.defineProperty(derivedConstructor.prototype, 
          name,
          (Object.getOwnPropertyDescriptor(baseConstructor.prototype, name)) as PropertyDescriptor & ThisType<any>
        );
      });
  });
}

// interfaces to extend    
interface IConstructor<T> {
  new(...args: any[]): T;
}

interface Employee extends Calendar, Calendar, Interview {}

function MixinExtend<T extends new (...args: any[]) => {}>(base: T): T {
  return class extends base {
    // your implementation
  }
};

const consultant = new Consultant("test")
applyMixins(consultant, [Calendar, Calendar]);

console.log(consultant)