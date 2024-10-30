'use client';

import { ChangeEvent, useRef, useState } from 'react';

export default function Search() {
  const refMage = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<string[]>([]);

  const getUpload = (files: FileList) => {
    const res = [];
    for (const file in files) {
      if (files[file] instanceof Blob) {
        res.push(URL.createObjectURL(files[file]));
      }
    }
    return res;
  };

  const play = (e: ChangeEvent) => {
    console.log(typeof refMage.current?.files);
    const uploadFiles = getUpload(refMage.current?.files as FileList);
    setState(uploadFiles);
  };

  return (
    <div>
      <div>search page</div>
      <input type="file" name="photos" multiple onChange={play} ref={refMage} />
      {state.length > 0 && (
        <div className='flex flex-row gap-10'>
          {state.map((url) => (
            <img src={url} width={200} height={150} key={url}></img>
          ))}
        </div>
      )}
    </div>
  );
}
