import { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';

function Neke() {
  const [tekst, setText]=useState(false);
  const reference = useRef(0);

  useEffect((e) => {
    reference.current++;
    Cookies.set("value", reference.current.toString());
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
      <div>{Cookies.get("value")}</div>
    </>
  )
}

export default Neke;