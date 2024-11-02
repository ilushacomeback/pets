import { PetType } from '@/interfaces/interfaces';

export const CardPet = (pet: PetType) => {
  const { name, breed, date, photos, city, description } = pet;
  return (
    <article className="flex flex-col gap-3">
      <h1 className="text-6xl">{name}</h1>
    </article>
  );
};
