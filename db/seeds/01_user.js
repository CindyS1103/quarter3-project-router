
exports.seed = function(knex, Promise) {

  return knex('user').del()
    .then(function () {

      return knex('user').insert([
        {name: 'Cindy Schlegel', email: 'fancymulberrys@aol.com', password: 'testtest', avatar_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4NeqpCY5wGW9ieHCUstJedBxiaCeMxLg8PYs_gLoO1gcuxtvoA'},
        {name: 'Mike Schlegel', email: 'Mikes3762@aol.com', password: 'testtest', avatar_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSpRhvw-11J8zO0RsAx0ezOp7FheF4x8HGqaNQnzqjyyUG4er'}

      ]);
    });
};
