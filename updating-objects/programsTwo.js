// 1. Direct Assignment

const person = {
  name: "manojkumar g",
  rollNo: 23,
  address: {
    place: "dharamasagar",
    pincode: 583223,
  },
};

// Direct assignment
person.name = "rajkumar";
person.rollNo = 45;
person.address.pincode = 0;

console.log(person);

//   2. Using Spread--------------------------------------------------

const person = {
  name: "manojkumar g",
  rollNo: 23,
  address: {
    place: "dharamasagar",
    pincode: 583223,
  },
};

// Using spread operator
const update = {
  ...person,
  name: "rajkumar",
  rollNo: 45,
  address: {
    ...person.address,
    pincode: 0,
  },
};

console.log(update);

// 3. Using Object.assign-----------------------------------------

const person = {
  name: "manojkumar g",
  rollNo: 23,
  address: {
    place: "dharamasagar",
    pincode: 583223,
  },
};

// Using Object.assign to create a new object
const updatep = Object.assign({}, person, {
  name: "rajkumar",
  rollNo: 45,
  address: Object.assign({}, person.address, {
    pincode: 0,
  }),
});

console.log(updatep);

// 4 Using Object.defineProperty---------------------

const person = {
  name: "manojkumar g",
  rollNo: 23,
  address: {
    place: "dharamasagar",
    pincode: 583223,
  },
};

// Using Object.defineProperty
Object.defineProperty(person, "name", {
  value: "rajkumar",
  writable: true, // or false to make it read-only
});

Object.defineProperty(person.address, "pincode", {
  value: 0,
  writable: true,
});

console.log(person);

// 5. Using Functions------------------------------------

const person = {
  name: "manojkumar g",
  rollNo: 23,
  address: {
    place: "dharamasagar",
    pincode: 583223,
  },
};

function updatePerson(person, updates) {
  return {
    ...person,
    ...updates,
    address: {
      ...person.address,
      ...updates.address,
    },
  };
}

const updates = {
  name: "rajkumar",
  rollNo: 45,
  address: {
    pincode: 0,
  },
};

const updatedPerson2 = updatePerson(person, updates);

console.log(updatedPerson2);

// 6. Using Libraries

const _ = require("lodash");

const person = {
  name: "manojkumar g",
  rollNo: 23,
  address: {
    place: "dharamasagar",
    pincode: 583223,
  },
};

const updates1 = {
  name: "rajkumar",
  rollNo: 45,
  address: {
    pincode: 0,
  },
};

const updatedPerson1 = _.merge({}, person, updates1);

console.log(updatedPerson1);
