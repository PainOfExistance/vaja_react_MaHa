import { useEffect, useState } from 'react';
import { useRef } from 'react';

function Frag() {
    const [tekst, setText] = useState("");
    const reference = useRef(0);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/books").then(y=>y.json()).then(x=>{setText(x)}).catch(e=>{console.log(e)})
    })

    return (
        <>
            <div>
                <input type={"text"} ref={reference} value={reference.current.value} />
                <button onClick={(e) => { console.log(reference.current.value) }}>klikn</button>
                {tekst}
            </div>
        </>
    )
}

export default Frag;