import React, { useState } from 'react';
//import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a fav library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    }, 
    {
        label: 'The color Green',
        value: 'green'
    }, 
    {
        label: 'The color Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown selected={selected} options={options} onSelectedChange={setSelected} />
        </div>
    );    
}
