const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  //EN la siguiente línea formateo el parámetro para que la primera letra siempre sea mayúsculas y el resto en minúsuclas para que no de ningún tipo de error con el objeto capitals
  const pais = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

  if (capitals[pais]) {
    return `La capital de ${pais} es ${capitals[pais]}`;
  } else {
    return `Lo siento, la capital de ${pais} la desconozco`;
  }
}

console.log(getCapital("Spain"));
console.log(getCapital("Ireland"));
console.log(getCapital("Argentina"));
