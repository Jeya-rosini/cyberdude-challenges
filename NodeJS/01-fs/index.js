const fs = require("fs");
// console.log(fs);

const place = require("./Data/places.json");
// console.log(place);

for (i = 0; i < place.length; i++) {
  fs.mkdir("states", (err) => {
    if (err) {
      console.log(err);
    }
  });

  fs.writeFile(
    `states/${place[i].state}`,
    `Capital : ${place[i].capital},
    Traditional Dress: Men - ${place[i].dress.men},
                       Women- ${place[i].dress.women},
    Famous Food: ${place[i].food},`,
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("state file was created");
    }
  );
}
