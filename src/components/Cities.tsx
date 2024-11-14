'use client';

import { ChangeEvent, MouseEvent, useState } from 'react';
import { useThrottledCallback } from 'use-debounce';
import { Label, Input } from '@/components/ui/forms/create';
import clsx from 'clsx';
import { PropsActionForm } from '@/interfaces/interfaces';

export function Cities({ state }: PropsActionForm) {
  const url = process.env.NEXT_PUBLIC_CITY_URL as string;
  const token = process.env.NEXT_PUBLIC_CITY_TOKEN;
  const [query, setQuery] = useState<string>('');
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState<string>('');
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false)

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

  const getCity = useThrottledCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      const response = await fetch(url, options);
      const data = await response.json();
      setCities(data.suggestions);
    },
    500
  );

  return (
    <div>
      <Label htmlFor="city">Город:</Label>
      <div
        className={clsx({
          'border-2  border-lime-300 rounded': cities.length > 0 && !currentCity,
        })}
      >
        {currentCity ? (
          <div className="flex justify-between">
            <span>{currentCity}</span>
            <button onClick={() => {
              setCurrentCity('')
              setIsInputFocus(true)
            }} className="opacity-50">
              <em>ред.</em>
            </button>
          </div>
        ) : (
          <Input
            name="city"
            id="city"
            type="text"
            className={clsx('mt-0', {
              'border-t-0 border-l-0 border-r-0 rounded-b-none': cities.length > 0,
              'border-lime-300': isInputFocus
            })}
            placeholder="Начните вводить город..."
            onChange={getCity}
            autoFocus={!!isInputFocus}
            onFocus={() => setIsInputFocus(true)}
            onBlur={() => {
              setIsInputFocus(false)
              setCities([])
            }}
            autoComplete="off"
          />
        )}
        {cities.length > 0 && !currentCity && (
          <ul className="flex flex-col gap-1 max-h-56 overflow-y-auto px-2 py-2
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
          ">
            {cities.map((city: { value: string }) => (
              <li
                key={city.value}
                onMouseDown={(e: MouseEvent<HTMLLIElement>) =>{ 
                  setCurrentCity(
                    (e.target as HTMLLIElement).textContent as string
                  )
                  if (state.current) {
                    state.current.city = (e.target as HTMLLIElement).textContent as string
                  }
                }}
                className="border-b hover:border-red-400 mt-2 duration-300"
              >
                {city.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
