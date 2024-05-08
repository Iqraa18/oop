#! /urs/bin/env node
class CV {
    name;
    email;
    phone;
    education;
    experience;
    constructor(name, email, phone, education, experience) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.education = education;
        this.experience = experience;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.phone);
        console.log("Education:", this.education);
        console.log("Experience:", this.experience);
        this.education.forEach((edu) => {
            console.log("-", edu);
        });
        console.log("Exprience");
        this.experience.forEach((exp) => {
            console.log("-", exp);
        });
    }
}
let education = ["Learning TypeScript from Governor Initiavite"];
let experience = ["0"];
let myCV = new CV("Iqra Sheikh", "sheikhiqra1001@gmail.com", "0334-6729061", education, experience);
myCV.display();
export {};
