
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog', (table)=>{
    table.increments();
    table.string('post_name');
    table.date('date');
    table.text('post_body');
    table.string('post_img');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog')
};
