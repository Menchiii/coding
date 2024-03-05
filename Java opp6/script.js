
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    introduce(){
    console.log(`${this.firstName} and my last name is ${this.lastName}`);
    }
}

let Student1 = new Student ("Sally", "Lopez");

Student1.introduce()