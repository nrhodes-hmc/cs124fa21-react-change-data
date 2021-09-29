import './App.css';

import People from './People';

import { useState } from 'react';

const initialData = [
    {
        id: "1276",
        name: "Neil Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: "787",
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }
];



function App() {
    const [data, ] = useState(initialData);
    return <div>
        <People list={data}/></div>;
}

export default App;
