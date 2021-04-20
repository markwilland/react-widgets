import React, { useState } from 'react';

const Search = ({props}) => {
    const [term, setTerm] = useState('');

    

    const onFormChange = (event) => {
        setTerm(event);
        console.log(term);
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