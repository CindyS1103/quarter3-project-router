
exports.seed = function(knex, Promise) {

  return knex('contacts').del()
    .then(function () {

      return knex('contacts').insert([
        {name: 'Todd Nettle', email: 'ToddN@gmail.com', phone: '480-679-1245', message: 'Please contact me to discuss a future project in which I will need your services to complete.'},
        {name: 'Adam Smith', email: 'AdamS@gmail.com', phone: '602-345-1195', message: 'I would like a quote on a project I am working on, please contact me at your earliest convenience.'}
      ]);
    });
};
