import './App.css';

import People from './People';

import {useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

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
    const [data, setData] = useState(initialData);

    function handleDeletePeople(personIds) {
        setData(data.filter(person => !personIds.includes(person.id)))
    }

    function handleAddPerson() {
        setData([...data, {
            id: generateUniqueID(),
            name: "",
            email: "",
            phone: ""
        }])
    }

    function handlePersonFieldChanged(personId, field, value) {
        setData(data.map(
            person => person.id !== personId
                ? person
                : {...person, [field]: value}))
    }


    return <div className="app">
        <People list={data}
                onDeletePeople={handleDeletePeople}
                onAddPerson={handleAddPerson}
                onPersonFieldChanged={handlePersonFieldChanged}
        />
        </div>;
}

export default App;
