'use client';

import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';

export function FileLoader() {
  const refImage = useRef<HTMLInputElement>(null);
  const [linksImages, setLinksImages] = useState<string[]>([]);

  const getLinksForImages = (files: FileList) => {
    const res = [];
    for (const file in files) {
      if (files[file] instanceof Blob) {
        res.push(URL.createObjectURL(files[file]));
      }
    }
    return res;
  };

  const play = (e: ChangeEvent) => {
    const uploadFiles = getLinksForImages(refImage.current?.files as FileList);
    setLinksImages((prev) => [...prev, ...uploadFiles]);
    console.log(linksImages);
  };

  return (
    <>
      <label htmlFor="photos" className='p-2 hover:cursor-pointer border rounded mt-2'>Прикрепите фото:</label>
      <input
        type="file"
        name="photos"
        multiple
        onChange={play}
        id="photos"
        ref={refImage}
        hidden
      />
      {linksImages.length > 0 && (
        <div className="flex flex-row gap-1 mt-5 flex-wrap">
          {linksImages.map((url) => (
            <Image
              src={url}
              key={url}
              alt={url}
              width={100}
              height={100}
              style={{
                width: 50,
                height: 50,
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid #999c9975',
                overflow: 'hidden',
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
