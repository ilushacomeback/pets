'use client';

import { ChangeEvent, useRef, useState } from 'react';

export default function Search() {
  const refMage = useRef(null);
  const [state, setState] = useState([])

  const play = (e: ChangeEvent) => {
    console.log(e);
    console.log(refMage.current.files)
    setState((prev) => [...prev, URL.createObjectURL(refMage.current.files[0])])
  };

  return (
    <div>
      <div>search page</div>
      <input type="file" multiple onChange={play} ref={refMage} />
      {state.length > 0 && state.map((url) => (
        <img src={url} width={50} height={50} key={url}></img>
      ))}
    </div>
  );
}
