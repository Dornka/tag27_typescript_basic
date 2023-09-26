type Student = {

    firstName:string
    lastName:string
    age:number
    grades: Note[];

}

type Note = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "F"


const student: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A",2,"F",3,1,"B",2,5],
};

function studentAusgeben(student: Student){

    const {firstName, lastName, age, grades }    = student;
    console.log(`${firstName} ${lastName} (${age})`);
    console.log("=".repeat(30));
    console.log("Noten:", grades.join(","));
}

studentAusgeben(student);
