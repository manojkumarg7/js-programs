const person = {
  name: "manojkumar g",
  rollNo: 23,
  address: {
    place: "dharamasagar",
    pincode: 583223,
    city: "banglore",
    games: {
      first: "cricket",
      second: "chess",
      third: "foootbal",
    },
  },
};

// person.name = "rajkumar";
// normal way to update
const update = {
  ...person,
  rollNo: 45,
};
// console.log(update);
// updating nesting objects
// const person = {
//     name: "manojkumar g",
//     rollNo: 23,
//     address: {
//       place: "dharamasagar",
//       pincode: 583223,
//     },
//   };

// Correct way to update nested object properties
const updates = {
  ...person,
  rollNo: 45,
  name: "killer",
  address: {
    ...person.address,
    pincode: 0o0, // using octal literal syntax correctly
    city: "Mysore",
    games: {
      ...person.address.games,
      one: "kabaddi",
      first: "lagori",
    },
  },
};

console.log(updates);
