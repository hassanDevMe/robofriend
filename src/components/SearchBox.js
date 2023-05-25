import React from 'react';

const SearchBox = ({onChangeSearch}) => {
    return (
    <div >

        <input className='pa3 ma8 ba b--green bg-light-blue'
        type="search" 
        placeholder="Search Robot" 
        onChange={onChangeSearch}
        />

    </div>
    );
}

export default SearchBox;