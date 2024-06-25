#! usr/bin/env node
import inqurier from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programeStart = async (persons) => {
    do {
        console.log("Welcome!");
        const answer = await inqurier.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (answer.select == "staff") {
            console.log("you approach the staff room.Please feel free to ask any question.");
        }
        else if (answer.select == "student") {
            const answer = await inqurier.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == answer.student);
            if (!student) {
                const name = new Student(answer.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name} Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name} Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (answer.select == "exit") {
            console.log("Exiting the programe....");
            process.exit();
        }
    } while (true);
};
programeStart(persons);
