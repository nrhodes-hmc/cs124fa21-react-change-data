import Person from "./Person";

import React, {useState} from 'react';

function People(props) {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <div>
            <h1>People ({selectedId === null? 0 : 1}/{props.list.length} selected)</h1>
            {props.list.map(a => <Person
                onRowClick={(id) =>
                    setSelectedId(id)}
                selected={a.id === selectedId}
                key={a.id}
                {...a} />)}
        </div>);
}

export default People;