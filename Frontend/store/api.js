import axios from "axios";
// const readline = require("readline");
import readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a recipe query: ", function (query) {
//   const apiKey = "c70rb3uXDARiI9/uabi+xA==RBG04OIzqsOg0lGV";
//   const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;

//   axios
//     .get(url, {
//       headers: {
//         "X-Api-Key": apiKey,
//       },
//     })
//     .then(function (response) {
//       console.log(response.data);
//       rl.close();
//     })
//     .catch(function (error) {
//       console.error("Error:", error.response.data);
//       rl.close();
//     });
// });

// rl.on("close", function () {
//   process.exit(0);
// });
function temp() {
  {
    const apiKey = "c70rb3uXDARiI9/uabi+xA==RBG04OIzqsOg0lGV";
    const url = `https://api.api-ninjas.com/v1/recipe?query=${"icecream"}`;

    axios
      .get(url, {
        headers: {
          "X-Api-Key": apiKey,
        },
      })
      .then(function (response) {
        console.log(response.data);
        // rl.close();
      })
      .catch(function (error) {
        console.error("Error:", error.response.data);
        // rl.close();
      });
  }
}
temp();
