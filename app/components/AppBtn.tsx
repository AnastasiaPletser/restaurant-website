'use client'

import React from 'react';
import './appBtn.css'

export default function AppBtn({name}: {name: string}) {

    const handleScrollTo = (section: string) => {
        // go to booking a table section
    };
    return (
        <a
        className='app-btn scroll to d-none d-lg-flex'
        onClick={()=> handleScrollTo('book-a-table')}
        >
            {name}
        </a>
    );
}
