import React from 'react'
import { useParams } from 'react-router'

export const Post = ({match}) => {

    const { id } = useParams();

    return (
        <div>
            <h2>Id is = {match.params.id} </h2>
        </div>
    )
}
