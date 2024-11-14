'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { allBreeds } from '@/data/breeds';
import { Breed } from '@/interfaces/interfaces';
import { Label, Input } from '@/components/ui/forms/create';
import clsx from 'clsx';

function filterBreeds(name: string) {
  const regex = new RegExp('' + name + '', 'gi');
  const currentBreeds = allBreeds.filter((breed) => regex.test(breed.name));
  return currentBreeds;
}

export function Breeds() {
  const [checkedBreeds, setCheckedBreeds] = useState<Record<string, string>>(
    {}
  );
  const [findBreed, setFindBreed] = useState<string>('');
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  const removeCheck = (breedID: string) => {
    setCheckedBreeds((prev) => {
      const { [breedID]: check, ...rest } = prev;
      return { ...rest };
    });
  };

  const handleFindBreed = (e: ChangeEvent<HTMLInputElement>) => {
    setFindBreed(e.target.value);
    const currentBreeds = filterBreeds(e.target.value);
    setBreeds(currentBreeds);
  };

  const handleChecked = (id: string, name: string) => {
    if (!(id in checkedBreeds)) {
      setCheckedBreeds((prev) => ({ ...prev, [id]: name }));
      setFindBreed('');
      setBreeds([]);
    } else {
      removeCheck(id);
    }
    setFindBreed('')
  };

  return (
    <div>
      <Label htmlFor="breed">Выберите породу:</Label>

      {Object.keys(checkedBreeds).length > 0 && (
        <div className="flex flex-wrap mt-2">
          {Object.keys(checkedBreeds).map((id) => (
            <div
              key={id}
              className="flex items-center align-middle mr-2 border rounded pl-2 mb-1"
            >
              <span className="text-wrap">{checkedBreeds[id]}</span>
              <button className="" onClick={() => removeCheck(id)}>
                <Image src="/exit.svg" alt="exit" width={36} height={36} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div
        className={clsx({
          'border-2  border-lime-300 rounded': breeds.length > 0,
        })}
      >
        <Input
          type="text"
          id="breed"
          name="breed"
          className={clsx('mt-0', {
            'border-t-0 border-l-0 border-r-0 rounded-b-none': breeds.length > 0,
            'border-lime-300': inputFocus
          })}
          placeholder="Начните вводить породу..."
          spellCheck={false}
          autoComplete="off"
          value={findBreed}
          onChange={handleFindBreed}
          onFocus={(e) => setInputFocus(true)}
          onBlur={(e) => {
            setInputFocus(false);
            setBreeds([]);
          }}
        />
        {breeds.length > 0 && (
          <ul
            className="flex flex-col gap-1 max-h-56 overflow-y-auto px-2 py-2
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            {breeds.map((breed) => (
              <li
                key={breed.id}
                className="flex border-b py-3 h-full"
                onMouseDown={(e) => handleChecked(breed.id, breed.name)}
              >
                <input
                  type="checkbox"
                  id={breed.id}
                  value={breed.name}
                  name="breed"
                  className="mr-3"
                  //   onChange={(e) => !e.target.checked && removeCheck(breed.id)}
                  defaultChecked={!!checkedBreeds[breed.id]}
                />
                <label htmlFor={breed.id} className="w-full leading-5">
                  {breed.name}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
