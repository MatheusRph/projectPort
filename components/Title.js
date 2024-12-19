import React from 'react';

export default function Title({ children, className, ...props } ){
    return(
        <>      
            <p className={`title ${className}`} {...props}>
                {children}
            </p>
        </>
    )
}