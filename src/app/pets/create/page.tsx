'use client';

import { FileLoader } from '@/components/FileLoader';
import { FieldName } from '@/components/ui/forms/create';
import { FieldBirthday } from '@/components/ui/forms/create';
import { Cities } from '@/components/Cities';
import { Submit } from '@/components/ui/forms/create';
import { Breeds } from '@/components/Breeds';
import { FormEvent, useState, Profiler, useRef } from 'react';
import { FormState } from '@/interfaces/interfaces';



export default function Create() {
  const state = useRef<FormState>({
    name: '',
    date: '',
    breeds: [],
    city: '',
    images: [],
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, date, breeds, city, images } = state.current
    console.log(name, date, city, breeds, images)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('date', date);
    formData.append('breeds', JSON.stringify(breeds));
    formData.append('city', city);
    images.forEach((image) => {
      formData.append('image', image);
    });
  };

  return (
    <form
      action=""
      encType="multipart/form-data"
      className="flex flex-col gap-3 w-60 m-auto mt-14"
      onSubmit={handleSubmit}
    >
      <Profiler id="name" onRender={() => console.log('name')}>
        <FieldName state={state} />
      </Profiler>
      <Profiler id="date" onRender={() => console.log('date')}>
        <FieldBirthday state={state} />
      </Profiler>
      <Profiler id="breed" onRender={() => console.log('breed')}>
        <Breeds state={state} />
      </Profiler>
      <Cities state={state} />
      <FileLoader state={state} />
      <Submit />
    </form>
  );
}
