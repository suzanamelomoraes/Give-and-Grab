exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, name: 'clothes' },
        { id: 2, name: 'eletronics' },
        { id: 3, name: 'home' },
        { id: 4, name: 'other' }
      ])
    })
};
