let Asiman = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];
  
  
  for (let i = 0; i < Asiman.length; i++) {
    let asiman = Asiman[i];
    if (asiman.age >= 18) {
      console.log(asiman.name + " kinoya gede biler.");
    } else {
      console.log(asiman.name + " kinoya gede bilmez.");
    }
  }
  