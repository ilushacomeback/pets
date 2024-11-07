'use client';

import { ChangeEvent, MouseEvent, useState } from 'react';
import { useThrottledCallback } from 'use-debounce';
import { Label, Input } from '@/components/ui/forms/create'

export function Cities() {
  const url = process.env.NEXT_PUBLIC_CITY_URL as string;
  const token = process.env.NEXT_PUBLIC_CITY_TOKEN;
  const [query, setQuery] = useState<string>('');
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState<string>('');

  const options: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: query, count: 20 }),
  };

  const getCity = useThrottledCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const response = await fetch(url, options);
    const data = await response.json();
    setCities(data.suggestions);
  }, 500)

  return (
    <div>
      <Label htmlFor="city">
        Город:
      </Label>
      {currentCity ? (
        <div className="flex justify-between">
          <span>{currentCity}</span>
          <button onClick={() => setCurrentCity('')} className="opacity-50">
            <em>ред.</em>
          </button>
        </div>
      ) : (
        <Input
          name="city"
          id="city"
          type="text"
          placeholder="Начните вводить город..."
          onChange={getCity}
          autoComplete="off"
        />
      )}
      {cities.length > 0 && !currentCity && (
        <ul className="min-h-52 overflow-y-auto">
          {cities.map((city: { value: string }) => (
            <li
              key={city.value}
              onClick={(e: MouseEvent<HTMLLIElement>) =>
                setCurrentCity(
                  (e.target as HTMLLIElement).textContent as string
                )
              }
              className="border-b hover:border-red-400 mt-2 duration-300"
            >
              {city.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
