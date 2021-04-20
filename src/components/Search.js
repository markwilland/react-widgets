import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({props}) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);


    console.log(results);
    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })

            setResults(data);
        };

        searchWiki();
    }, [term]);


    const onFormChange = (event) => {
        setTerm(event);
    }

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input value={term} onChange={e => onFormChange(e.target.value)} className="input" />
                </div>
            </div>
        </div>
    );
}

export default Search;