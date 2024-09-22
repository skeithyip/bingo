export const items = [
  // Ice Cream (5)
  // '100 Plus', // 4x
  'Cornetto mini', // 12x (Buy 1)
  'Kit Kat Mini', // 6x (Buy 2)
  'L Cremeria Mini', // 6x (buy 2)
  'Magnolia Fruito', // 6x (buy 2)
  'Potong', // 7x + 6x (buy 1 7x, 1 6x)

  // Savouries (4)
  'OCK Fish Tofu', // 3x (Buy 3)
  'OCK Fishball', // 3x (Buy 3)
  'OCK Chicken Nugget', // 3x (Buy 3)
  'OCK Crab Nugget', // 3x (Buy 3)

  // Snacks (10)
  'Ferrero Rocher', // Is this halal?
  'Kit kat Dark Borneo', // (Buy 1)
  'Kit Kat x Milo', // 10x (Buy 1)
  'Mamee Monster Snack', // 12x (Buy 1)
  'Mini Lollipops', // 25x, Fairprice (Buy 1)
  'Oreo - Coca-Cola', // Fairprice Halal? (Buy 1)
  'Potato chips', // Serve in plate (Buy 1)
  'Reese', // 3x (Buy 3)
  'Twisties', // Serve in plate (Buy 1)
  'Wan Wan Senbei', // 16x (Buy 1)

  // Sweets (2)
  'Mentos Sour', // (Buy 1)
  'Natural Sour Chews', // (Buy 1)

  // Drinks (5)
  // 'Coke mini', // 6x
  'Green tea', // 6x (Buy 2)
  'Ice lemon tea', // 6x (Buy 2)
  'Milo', // 6x (Buy 2)
  'Orange juice', // 6x (Buy 2)
  'Yakult', // 10x (Buy 1)
] as const;

export type Item = (typeof items)[number];

export const icecreams: Item[] = [
  // '100 Plus', // 4x
  'Cornetto mini', // 12x
  'Kit Kat Mini', // 6x
  'L Cremeria Mini', // 6x
  'Magnolia Fruito', // 6x
  'Potong', // 7x + 6x
];

export const savouries: Item[] = [
  'OCK Fish Tofu', // 3x
  'OCK Fishball', // 3x
  'OCK Chicken Nugget', // 3x
  'OCK Crab Nugget', // 3x
];

export const snacks: Item[] = [
  'Ferrero Rocher', // Is this halal?
  'Kit kat Dark Borneo', //
  'Kit Kat x Milo', // 10x
  'Mamee Monster Snack', // 12x (to break into smaller piece)
  'Mini Lollipops', // 25x, Fairprice
  'Oreo - Coca-Cola', // Fairprice Halal?
  'Potato chips', // Serve in plate
  'Reese', // 3x
  'Twisties', // Serve in plate
  'Wan Wan Senbei', // 16x
];

export const sweets: Item[] = ['Mentos Sour', 'Natural Sour Chews'];

export const drinks: Item[] = [
  'Green tea', // 6x
  'Ice lemon tea', // 6x
  'Milo', // 6x
  'Orange juice', // 6x
  'Yakult', // 10x
];
