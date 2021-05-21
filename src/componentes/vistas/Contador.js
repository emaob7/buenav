import React, {Fragment, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";


function Contador (){
    const [text, setText] = useLocalStorage('text', '')
    const [times, setTimes] = useLocalStorage('times', 0)
    return (
        <Fragment> 
            <textarea
            onChange = {e=> setText(e.target.value)}
            value = {text}
            placeholder = 'Que esta pasando!'
            />
            <button onClick ={() => setTimes(times + 1)}>twitear</button>
            <span>{times} veces twiteado</span>

        </Fragment>

    )
}
 
export default Contador;