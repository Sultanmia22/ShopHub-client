import React from 'react';

function DescriptionText({children}) {
    return (
        <p className='text-gray-700 dark:text-gray-300'>{children}</p>
    );
}

export default DescriptionText;