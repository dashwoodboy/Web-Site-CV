import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NavContactButton() {
    const navigate = useNavigate()
    return(
        <button className='contact_button' onClick={() => navigate('/contact')}>Contact</button>
    )
}