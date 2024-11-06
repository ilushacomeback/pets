'use client'

import { FileLoader } from '@/components/FileLoader';
import { FieldName } from '@/components/ui/forms/create';
import { FieldBirthday } from '@/components/ui/forms/create';
import { Cities } from '@/components/Cities';
import { Submit } from '@/components/ui/forms/create';
import { Breeds } from '@/components/Breeds';
import { FormEvent } from 'react';

export default function Create() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(data.get('photos'));
  };

  return (
    <form
      action=""
      encType="multipart/form-data"
      className="flex flex-col h-screen w-60 m-auto my-16"
      onSubmit={handleSubmit}
    >
      <FieldName />
      <FieldBirthday />
      <Breeds />
      <Cities />
      <FileLoader />
      <Submit />
    </form>
  );
}
