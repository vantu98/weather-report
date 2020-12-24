import React, { useState, useRef } from 'react';

function SearchField(props) {
    const { handleChange } = props;
    const typingTimeoutRef = useRef(null)

    function handleChangeSearchTerm(e) {
        const value = e.target.value.trim();

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            handleChange(value)
        }, 300);
    }

    return (
        <form className="w-full lg:w-1/2 xl:w-1/2 mx-auto p-2">
            <input
                type="text"
                name="search"
                id="search"
                className="w-full p-2 px-4 rounded-lg border text-gray-800"
                placeholder="City or Zipcode"
                onChange={handleChangeSearchTerm}
            />
        </form>
    );
}

export default SearchField; 