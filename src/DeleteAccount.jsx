import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DeleteAccount() {
    return (
        <>
            <div>Delete Account</div>
            <NavLink to="/">go back</NavLink>
        </>
    )
}