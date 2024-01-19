import { useEffect, useState } from 'react';
import { useRef } from 'react';

function Frag() {
    const [tekst, setText] = useState(false);
    const reference = useRef(0);

    return (
        <>
            <div>
                <input type={"text"} ref={reference} value={reference.current.value} />
                <button onClick={(e) => { console.log(reference.current.value) }}>klikn</button>
            </div>
        </>
    )
}

export default Frag;