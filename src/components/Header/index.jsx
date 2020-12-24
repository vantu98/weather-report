import React, { useState, useEffect } from 'react';
import SearchField from '../Search/SearchField';
import axios from 'axios';
import queryString from 'query-string';
import PropTypes from 'prop-types';

Header.propTypes = {
    handleFetchData: PropTypes.func,
}

Header.defaultProps = {
    handleFetchData: null
}

function Header(props) {
    const { handleFetchData } = props;

    const [searchTerm, setSearchTerm] = useState({
        q: '',
        type: 'like',
        appid: '7c92ed76042f645c19a055e561b7a9c1',
        cnt: 30,
        sort: 'population',
        units: 'metric'
    })

    // const SEARCH_API = 'https://openweathermap.org/data/2.5/find?';
    const SEARCH_API = 'https://api.openweathermap.org/data/2.5/weather?';

    function onSearchTermChange(value) {
        setSearchTerm({ ...searchTerm, q: value })
    }

    useEffect(() => {
        const query = queryString.stringify(searchTerm);
        const resUrl = SEARCH_API + query;

        axios.get(resUrl)
            .then(res => {
                console.log(res.data);
                return res.data
            })
            .then(data => handleFetchData(data))
            .catch(error => console.log(error))

        return () => {

        }
    }, [searchTerm])


    return (
        <header className="w-full bg-transparent">
            <div className="container mx-auto">
                <SearchField handleChange={onSearchTermChange} />
            </div>
        </header>
    );
}

export default Header;