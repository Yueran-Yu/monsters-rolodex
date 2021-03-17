import React from 'react';
import './search-box.styles.css';

// destructure the props as placeholder and handleChange
export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        // if we wanted to see or do something with our state right after we set  it
        // then we have to do it inside of this second argument function that will
        // get called right after the set state.
        onChange={handleChange}/>
)



