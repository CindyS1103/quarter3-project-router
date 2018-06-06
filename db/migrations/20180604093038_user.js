
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password');
    table.string('avatar_img');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
