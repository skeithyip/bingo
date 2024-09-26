export const items = [
  // Ice Cream (5)
  // '100 Plus', // 4x
  'Cornetto mini', // 12x (Buy 1)
  'Kit Kat Mini', // 6x (Buy 2)
  // 'L Cremeria Mini', // 6x (buy 2)
  // 'Magnolia Fruito', // 6x (buy 2)
  // 'Potong', // 7x + 6x (buy 1 7x, 1 6x)

  // Savouries (4)
  // 'OCK Fish Tofu', // 3x (Buy 3)
  // 'OCK Fishball', // 3x (Buy 3)
  // 'OCK Chicken Nugget', // 3x (Buy 3)
  // 'OCK Chicken Wing', // 3x (Buy 3)

  // Snacks (15)
  'Lobster Peanut',
  'Potato chips',
  'Seaweed',
  'Pokey', // ?

  'Mamee Monster',
  'Mala Peanuts',
  'Lava Bites',
  'Cream Collon',
  'Ice Jam',
  'Pawn Cracker',
  'Nutella',
  'Gummy Pizza',
  'Tiramisu',
  'Waffer',
  'Haw Flake',
  'Oreo',

  // 'Ferrero Rocher', // Is this halal?
  // 'Kit kat Dark Borneo', // (Buy 1)
  // 'Kit Kat x Milo', // 10x (Buy 1)
  // 'Mini Lollipops', // 25x, Fairprice (Buy 1)
  // 'Oreo - Coca-Cola', // Fairprice Halal? (Buy 1)

  // 'Reese', // 3x (Buy 3)
  // 'Twisties', // Serve in plate (Buy 1)
  // 'Wan Wan Senbei', // 16x (Buy 1)

  // Sweets (5)
  'Himalaya Salt',
  'Popping Candy',
  'Hacks',
  'Kopiko',
  'Chewing Gum',

  'Mentos Sour', // (Buy 1)
  // 'Natural Sour Chews', // (Buy 1)

  // Drinks (5)
  'Banana Milk',
  'Ribena Light',
  'Green tea', // 6x (Buy 2)
  'Vitagen',
  'Milo', // 6x (Buy 2)
  'Coke', // 6x (Buy 2)

  // 'Coke mini', // 6x

  // 'Yakult', // 10x (Buy 1)
] as const;

export type Item = (typeof items)[number];

export const icecreams: Item[] = [
  'Cornetto mini', // 12x
];

export const snacks: Item[] = [
  'Lobster Peanut',
  'Potato chips',
  'Seaweed',
  'Pokey',
  'Mamee Monster',
  'Mala Peanuts',
  'Lava Bites',
  'Cream Collon',
  'Ice Jam',
  'Pawn Cracker',
  'Nutella',
  'Gummy Pizza',
  'Tiramisu',
  'Waffer',
  'Haw Flake',
  'Oreo',
];

export const sweets: Item[] = [
  'Himalaya Salt',
  'Popping Candy',
  'Hacks',
  'Kopiko',
  'Chewing Gum',
  'Mentos Sour',
];

export const drinks: Item[] = [
  'Banana Milk',
  'Green tea', // 6x (Buy 2)
  'Vitagen', // 6x (Buy 2)
  'Milo', // 6x (Buy 2)
  'Coke', // 6x (Buy 2)
  'Ribena Light',
];
