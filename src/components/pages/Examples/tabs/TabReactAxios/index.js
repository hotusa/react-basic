import React,{useState} from 'react'
import axios from 'axios'

export default function TabReactAxios () {

    const [data, setData] = useState(undefined)

    const submit = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
            .then(result => {
                if (result.status === 200) {
                    setData(result.data)
                }
            })
    }

    return (
        <>
            <button className="btn btn-primary" onClick={()=>submit()}>Enviar petición POST</button>
            <div>
                <code>{data ? JSON.stringify(data) : '' }</code>
            </div>
        </>
    )
}