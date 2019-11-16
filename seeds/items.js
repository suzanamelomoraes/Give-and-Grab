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
          description: 'Good condition. Updated to a new one. Prefer blue color',
          email: 'badtaste@email.com',
          image_path: 'image3'
        },
        { id: 4,
          cat_id: 1,
          title: 'Feet of hobbit',
          description: 'Given as birthday gift but did not fit me',
          email: 'elf@email.com',
          image_path: 'image4'
        },
        { id: 5,
          cat_id: 3,
          title: 'Black stool',
          description: 'Good condition. Used for play guittar but decided to dance now',
          email: 'dancer@email.com',
          image_path: 'image5'
        },
        { id: 6,
          cat_id: 2,
          title: 'HP mouse',
          description: 'Good condition. Works well. Updated for a wireless one',
          email: 'techboy@email.com',
          image_path: 'image6'
        },
        { id: 7,
          cat_id: 4,
          title: 'Collins Dictionary',
          description: 'Not needed. Decided to learn Klingon. Easier than English',
          email: 'kirk@email.com',
          image_path: 'image7'
        },
        { id: 8,
          cat_id: 3,
          title: 'Cat fount',
          description: 'Almost new. Just opened to show to my cat but she thinks she is a dog',
          email: 'catlady@email.com',
          image_path: 'image8'
        }
      ])
    })
}
