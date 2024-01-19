import { useState, useRef, useEffect } from 'react';

function Neke() {
  const [tekst, setText]=useState(false);
  const reference = useRef(0);

  useEffect((e) => {
    reference.current++;
  }, [tekst])
  
  return (
    <>
      <div>
        <p id='nekaj'>
          Neki tekst z druge funkcije
        </p>
        <button onClick={(e)=>{setText(!tekst)}}>klikni me</button>
      </div>
      <span>{tekst? "prvi tekst": "drugi tekst"}</span>
      <div>{reference.current}</div>
    </>
  )
}

export default Neke;