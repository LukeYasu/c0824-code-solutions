'use strict';
const orderHistory = [
  {
    orderDate: 'August 4, 2020',
    orderAmount: '$34.00',
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    items: [
      {
        itemName: 'JavaScript for impatient programmers',
        deliveryDate: 'Aug 8, 2020',
        author: 'Rauschmayer, Dr. Axel',
        returnWindow: 'closed on Sep 7, 2020',
        itemAmount: '$31.55',
      },
    ],
  },
  {
    orderDate: 'July 19, 2020',
    orderAmount: '$44.53',
    shipTo: 'JS Masher',
    deliveryMethod:
      'Your package was delivered. It was handed directly to a resident.',
    orderNumber: '113-9984268-1280257',
    items: [
      {
        itemName: 'The Timeless Way of Building',
        deliveryDate: 'Jul 20, 2020',
        author: 'Alexander, Christopher',
        returnWindow: 'closed on Aug 19, 2020',
        itemAmount: '$41.33',
      },
    ],
  },
  {
    orderDate: 'July 4, 2020',
    orderAmount: '$17.22',
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059405',
    items: [
      {
        itemName: 'Gamecube Controller Adapter',
        deliveryDate: 'Jul 20, 2020',
        returnWindow: 'closed on Aug 5, 2020',
        itemAmount: '$15.98',
      },
    ],
  },
  {
    orderDate: 'July 3, 2020',
    orderAmount: '$138.93',
    shipTo: 'JS Masher',
    orderNumber: '113-2883147-2648248',
    items: [
      {
        itemName:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        deliveryDate: 'Jul 5, 2020',
        returnWindow: 'closed on Aug 4, 2020',
        itemAmount: '$94.95',
      },
      {
        itemName: 'The Art of Sql',
        deliveryDate: 'Jul 5, 2020',
        returnWindow: 'closed on Aug 4, 2020',
        itemAmount: '$33.99',
      },
    ],
  },
];
console.log(orderHistory);
