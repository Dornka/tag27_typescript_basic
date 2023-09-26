type Student = {

    firstName:string
    lastName:string
    age:number
    grades: Note[];

}

type Note = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "F" | undefined


const studenten: Student[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2],
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1],
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5],
    },
];

function alleStudentenAusgeben(studenten: Student[]) {
    studenten.forEach((student, index) => {
        console.log(`${student.firstName} ${student.lastName} (${student.age})`);
        console.log("=".repeat(30));
        console.log("Noten:", student.grades.map((grade) => (grade !== undefined ? grade : "*")).join(","));

        if (index !== studenten.length - 1) {
            console.log();
        }
    });
}

alleStudentenAusgeben(studenten);
