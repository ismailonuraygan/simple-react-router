import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export const Messages = ({login}) => {

    const history = useHistory();

    useEffect(() => {
        if(!login) {
            history.push("/Home")
        }
    },[])

    return (
        <div>
            <h1>Messages Page</h1>
        </div>
    )
}
