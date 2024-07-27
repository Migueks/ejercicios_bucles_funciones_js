const artists = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  {
    name: "David Bowie",
    influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
  },
  {
    name: "Eddie Vedder",
    influences: ["The Who", "Neil Young", "Jim Morrison"],
  },
  {
    name: "Freddie Mercury",
    influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
  },
  {
    name: "John Lennon",
    influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
  },
];

for (let i = 0; i < artists.length; i++) {
  let artist = artists[i];
  for (let j = 0; j < artist.influences.length; j++) {
    let influencias = artist.influences[j];
    console.log(`${artist.name} fue influenciado por: ${influencias}`);
  }
}
