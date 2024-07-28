const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
  { name: "Electro", power: "magnetism" },
  { name: "Nightmare", power: "power absorption" },
];

function findMutantByPower(mutants, power) {
  let totalMutants = [];
  for (const mutant of mutants) {
    if (power === mutant.power) {
      totalMutants.push(mutant.name);
    }
  }
  if (totalMutants.length > 0) {
    console.log(
      "Los muntantes con el poder " + power + " son: " + totalMutants
    );
  } else {
    console.log("No se ha encontrado ningún mutante con el poder " + power);
  }
}

findMutantByPower(mutants, "power absorption");
