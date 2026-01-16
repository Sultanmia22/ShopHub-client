'use client'
import React from 'react';

function Title({children}) {
    return (
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold  bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>{children}</h1>
    );
}

export default Title;