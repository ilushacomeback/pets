export interface LinkType {
  name: string;
  path: string;
}

export interface PetType {
  id: string;
  name: string | null;
  year: number | null;
  breed: string;
  city: string;
  photos: string[];
  description: string;
}

const pets: PetType[] = [
  {
    id: 'q',
    name: 'name',
    year: 2015,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    year: 2010,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    year: 2017,
    breed: 'дворняжка',
    city: 'mskt',
    photos: ['one photo', 'two photo'],
    description: 'goop peds',
  },
  {
    id: 'q',
    name: 'name',
    year: 2019,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    year: 2024,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
  {
    id: 'q',
    name: 'name',
    year: 2015,
    breed: 'дворняжка',
    city: 'msk',
    photos: ['one photo', 'two photo'],
    description: 'goop pes',
  },
];
