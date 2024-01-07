// STRETCH
const cars = [
    {
      vin: "1FMZU63E2YZC53720",
      make: "toyota",
      model: "prius",
      mileage: 100000,
      title: "clean",
      transmission: "manual",
    },
    {
      vin: "1FT8W3BT3BEA79020",
      make: "toyota",
      model: "corola",
      mileage: 111111,
      title: "salvage",
    },
    {
      vin: "KMHDH4AE8FU270117",
      make: "Ford",
      model: "F-150",
      mileage: 30000,
    },
  ];
  
  // exports.seed = function (knex) {
  //   return knex("cars")
  //     .truncate()
  //     .then(() => {
  //       return knex("cars").insert(cars);
  //     });
  // };
  
  exports.seed = async function (knex) {
    await knex("cars").truncate();
    await knex("cars").insert(cars);
  };