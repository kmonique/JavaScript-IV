// CODE here for your Lambda Classes
class People{
    constructor(peopleAttributes){
        this.name = peopleAttributes.name;
        this.age = peopleAttributes.age;
        this.location = peopleAttributes.location;
        this.gender = peopleAttributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}. I am a ${this.age} year old ${this.gender} from ${this.location}`;
    }
}

class Instructor extends People{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name}, recieves a perfect score on ${subject}`;
    }
    changeGrade(student) {
        let random = Math.random();
        if (student.grade < 100){
            if(random > .4 ){
                student.grade = student.grade + (random * 10);
                return `${student.name}'s grade improved to ${student.grade}. ${this.name} is pleased`;
            }
            student.grade = student.grade - (random * 10);
            return `${student.name}'s grade dropped to ${student.grade}. ${this.name} will gladly help them improve`;
        }
    }
}

class Student extends People{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects(subjectarray){
        subjectarray.forEach(function (item){
            console.log(item);
        });
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun Sprint Challenge for ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(projmanAttributes){
        super(projmanAttributes);
        this.gradClass = projmanAttributes.gradClass;
        this.favInstructor = projmanAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel stand up time!`
    }
    debugCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Dan = new Instructor({
    name: 'Dan',
    location: 'My Computer',
    age: 32,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I got the swag`,
  });

  const John = new ProjectManager({
    name: 'John',
    location: 'Somewhere',
    age: 27,
    gender: 'Male',
    favLanguage: 'LESS',
    specialty: 'Web Design',
    catchPhrase: `Emoji King`,
    gradClass: "CS4",
    favInstructor: "Dan",
  });

  const Bobby = new Student({
    name: 'Bobby',
    location: 'My Moms House',
    age: 56,
    gender: 'Female',
    previousBackground: "none",
    className: "CPT3",
    favSubjects: ['Html', 'CSS', 'JavaScript', 'back-end stuff'],
    grade: 90,
  });

  //Instructor Methods
  console.log(Dan.speak());
  console.log(Dan.demo("Javascript IV"));
  console.log(Dan.grade(Bobby, "React \n"));

  //Project Manager Methods
  console.log(John.speak());
  console.log(John.standUp("cpt4_pm_johnny_bravo"));
  console.log(John.debugCode(Bobby, "Redux \n"));

  //Student Methods
  console.log(Bobby.speak());
  Bobby.listsSubjects(Bobby.favSubjects);
  console.log(Bobby.PRAssignment("Python"));
  console.log(Bobby.sprintChallenge("Elm \n"));

  //Stretch Goals
  console.log(Dan.changeGrade(Bobby));
  console.log(John.changeGrade(Bobby));