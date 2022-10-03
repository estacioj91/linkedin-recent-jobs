import { getSelectionRange } from '@testing-library/user-event/dist/utils'
import {useState, useEffect} from 'react'

function getStorage(key, initial){
    let savedValue = JSON.parse(localStorage.getItem(key));

    if(savedValue){
        return savedValue
    }
    else {
        return initial;
    }
}

export default function useLocalStorage(key, initial) {
    const [storage, setStorage]  = useState(() => {
        return getStorage(key, initial)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storage))
    },[storage])

    return [storage, setStorage]
}
