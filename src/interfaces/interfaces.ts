export interface LinkType {
  name: string;
  path: string;
}

export interface PetType {
  id: string;
  name: string | null;
  date: number | null;
  breed: string;
  city: string;
  photos: string[];
  description: string;
}

const pets: PetType[] = [
  {
    id: 'q',
    name: 'name',
    date: 2015,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    date: 2010,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    date: 2017,
    breed: 'дворняжка',
    city: 'mskt',
    photos: ['one photo', 'two photo'],
    description: 'goop peds',
  },
  {
    id: 'q',
    name: 'name',
    date: 2019,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    date: 2024,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    date: 2015,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
];
