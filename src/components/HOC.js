import React, {useEffect, useState, useRef} from 'react'

export default function withDataFetching(WrappedComponent) {
    return function (props) {

        const unmount = useRef(false);
        const [user, setUser] = useState('')

        useEffect(() => {
            console.log('HOC')
            init()
            return () => {
                unmount.current = true
            }
        }, [])

        const init = () => {
            setUser('Pepe')
        }


        return (
            <div className="container">
                <WrappedComponent {...props} user={user}/>
            </div>
        )
    }
}