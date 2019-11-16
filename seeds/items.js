exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { id: 1,
          cat_id: 1,
          title: 'Black dress',
          description: 'Tam M. Excelent condition',
          email: 'pinkgirl@email.com',
          image_path: 'image1'
        },
        { id: 2,
          cat_id: 4,
          title: 'Shield',
          description: 'Used only at Narnia battle. Not needed anymore',
          email: 'warrior@email.com',
          image_path: 'image2'
        },
        { id: 3,
          cat_id: 2,
          title: 'Earphone',
          description: 'Good condition. Updated to a new one',
          email: 'user@email.com',
          image_path: 'image1'
        },
        { id: 4,
          cat_id: 2,
          title: 'Black dress',
          description: 'Tam M. Excelent condition',
          email: 'user1@email.com',
          image_path: 'image1'
        },
        {id: 5, 
          cat_id: 1, 
          title: 'Black dress',
          description: 'Tam M. Excelent condition',
          email: 'user1@email.com',
          image_path: 'image1'
        },
        {id: 6, 
          cat_id: 1, 
          title: 'Black dress',
          description: 'Tam M. Excelent condition',
          email: 'user1@email.com',
          image_path: 'image1'
        },
        {id: 7, 
          cat_id: 1, 
          title: 'Black dress',
          description: 'Tam M. Excelent condition',
          email: 'user1@email.com',
          image_path: 'image1'
        },
        {id: 8, 
          cat_id: 1, 
          title: 'Black dress',
          description: 'Tam M. Excelent condition',
          email: 'user1@email.com',
          image_path: 'image1'
        }
      ])
    })
};
