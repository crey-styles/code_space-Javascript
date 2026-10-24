let idAccess = {
  1001: {
    name : "Maduka Chinedu",
    ranks : "Supreme Kai",
    password : 2026001,
    strengths : ["Fire Breath", "Ice Breaker", "Power Stars"]
  },

  1002: {
    name : "Chibunna Dike",
    ranks : "Destroyer Lord",
    password : 2026002,
    strengths: ["Hakai", "Ultra Instincs", "Fire Storm"]
  }
}

let config = Number(prompt("Input your Access Token: "));

if (idAccess[config]) {
  const authMain = Number(prompt("Input Password: "));
  if (authMain === idAccess[config].password){
    console.log("Welcome " + idAccess[config].name);
    let tryset;
    do {
      let tryset = prompt("Do you want to continue? y/n ");
  } while (tryset !== 'y' || tryset !== 'Y' || tryset !== 'n' || tryset !== 'N') {
      console.log(tryset);
    }  
    
  } else {
    console.log("Error System Currently on Lock Down ");
  }

} else {
  console.log("Invalid access tokens ");
}


console.log(config);
