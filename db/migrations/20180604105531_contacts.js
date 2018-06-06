
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', (table)=>{
    table.increments();
    table.string('name');
    table.string('email');
    table.string('phone');
    table.text('message');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
