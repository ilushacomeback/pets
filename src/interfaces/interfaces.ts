export interface LinkType {
  name: string;
  path: string;
}

export interface Breed {
  id: string;
  name: string;
}

export interface PetType {
  id: string;
  name: string | null;
  date: number | null;
  breed: Breed[];
  city: string;
  photos: string[];
  description: string;
}