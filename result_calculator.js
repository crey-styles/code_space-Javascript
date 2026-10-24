let students = {
    1001: {
        name: "Chinedu",
        scores: [70, 80, 90]
    },
    1002: {
        name: "Ada",
        scores: [85, 95, 100]
    },
    1003: {
        name: "Emeka",
        scores: [60, 65, 75]
    }
};

let round_average = 0;
let auth_id = Number(prompt("Enter Student ID: "));
if (students[auth_id]) {
    console.log("Welcome " + students[auth_id].name);
  let average = students[auth_id].scores;
  for (let sum = 0 ; sum < average.length ; sum++) {
    round_average += average[sum];
  }

  let summary = round_average / average.length;
    console.log("Average Score: " + summary);
}
else {
    console.log("Student Not Registered");
}