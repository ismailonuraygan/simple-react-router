import React from 'react'
import { useLocation, useParams } from 'react-router'

export const Post = ({match}) => {

    const { id } = useParams();

    const query = new URLSearchParams(useLocation().search)

    return (
        <div>
            <h2>Id is = {id} </h2>
            <h2>{query.get("name")}</h2>
            <h2>{query.get("surname")}</h2>

        </div>
    )
}
