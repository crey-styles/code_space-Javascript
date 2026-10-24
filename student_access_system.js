let students = {
    1001: {
        name: "Chinedu",
        score: 85
    },
    1002: {
        name: "Ada",
        score: 92
    },
    1003: {
        name: "Emeka",
        score: 76
    }
};

// Your task is to write a program that asks the user for a student ID and displays that student's name and score.

function sa_system(id){
    const auth_main = Number(prompt("Welcome to the Heskini University input your student ID: "));
    if (students[auth_main]) {
        return "Welcome " + students[auth_main].name + " Your score is " + students[auth_main].score;

    }
    else {
        return "Student not found";
    }
}

console.log(sa_system());