export const items = [
  'Ferrero Rocher',
  'Kinder bueno',
  'Kit Kat',
  'Hershey kisses',
  'M and Ms',
  'Toblerone',
  'Reese',
  'Skittles',
  'Sour sweet',
  'Strepsils',
  'Himalaya salt',
  'Tic tac',
  'Mentos',
  'Twisties',
  'Wan wan senbei',
  'Hello panda',
  'Pocky',
  'Magnum mini',
  'Haagen daz',
  'Udders',
  'Sugalight',
  'Mamee Monster Snack',
  'Fishball',
  'Crab Nugget',
  'Sotong Head',
] as const;

export type Item = (typeof items)[number];

export const icecreams: Item[] = [
  'Magnum mini',
  'Haagen daz',
  'Udders',
  'Sugalight',
];

export const savouries: Item[] = ['Fishball', 'Crab Nugget', 'Sotong Head'];

export const snacks: Item[] = [
  'Ferrero Rocher',
  'Kinder bueno',
  'Kit Kat',
  'Hershey kisses',
  'M and Ms',
  'Toblerone',
  'Reese',
  'Skittles',
  'Twisties',
  'Wan wan senbei',
  'Hello panda',
  'Pocky',
  'Mamee Monster Snack',
];

export const sweets: Item[] = [
  'Sour sweet',
  'Strepsils',
  'Himalaya salt',
  'Tic tac',
  'Mentos',
];

export const drinks: Item[] = [];
