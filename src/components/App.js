import React from 'react';
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

const App = props => {
        return (
            <div>
                <Dropdown />
            </div>
        );    
}

export default App;