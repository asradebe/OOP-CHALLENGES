class Person{
    constructor(name, surname, age, gender, interests) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
  sayHello() {
        return "Hello I am " + `${this.name}` + " " + `${this.surname}` + ". I am " + `${this.age}` + " and " + "I am a " + `${this.gender}` + ". I am interested in " + `${this.interests}` + ".";
   }
}
    
let Person_1 = new Person("Nosipho", "Masondo", 8, "Female", "dancing and singing");
let Person_2 = new Person("Thando", "Ngwane", 16, "Male", "playing games and drawing");
console.log(Person_1.sayHello());
console.log(Person_2.sayHello());