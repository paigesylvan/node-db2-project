exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("vin", 17).unique().notNullable();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 256).notNullable();
    tbl.integer("mileage").unsigned().notNullable(); //unsigned = not negative
    tbl.string("title", 128);
    tbl.string("transmission", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
