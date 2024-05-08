#! /urs/bin/env node
class CV {
  name: string;
  email: string;
  phone: string;
  education: string[];
  experience: string[];

  constructor(
    name: string,
    email: string,
    phone: string,
    education: string[],
    experience: string[]
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.education = education;
    this.experience = experience;
  }
  display(): void {
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
let education: string[] = ["Learning TypeScript from Governor Initiavite"];
let experience: string[] = ["0"];

let myCV = new CV(
  "Iqra Sheikh",
  "sheikhiqra1001@gmail.com",
  "0334-6729061",
  education,
  experience
);

myCV.display();
  