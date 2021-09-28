import './App.css';

import React, {useState, useEffect} from 'react';

const data = [
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

function Row(props) {
    const classes = ["person "];
    const [flashOn, setFlashOn] = useState(true);
    if (props.selected) {
        classes.push("selected");
        classes.push(flashOn ? "flashOn" : "flashOff");
    }
    useEffect(() => {
            function handleTimeout() {
                console.log("in handleTimeout");
                setFlashOn(!flashOn);
            }

            if (props.selected) {
                const timer = setTimeout(handleTimeout, 1000);
                return () => clearTimeout(timer);
            } else {
                return () => 0;
            }
        }
    )
    console.log(classes);
    return <div className={classes.join(" ")}
                key={props.id}
                id={props.id}
                onClick={(e) => {
                    console.log('onclick', e);
                    props.onRowClick(e.currentTarget.id);
                }}
    >
        <div className="name">{props.name}</div>
        <div className="email">{props.email}</div>
        <div className="phone">{props.phone}</div>
    </div>
}

function People(props) {
    const [selectedId, setSelectedId] = useState(null);
    console.log('People', props);
    return props.list.map(a => <Row
        onRowClick={(id) =>
            setSelectedId(id === selectedId ? null : id)}
        selected={a.id === selectedId}
        key={a.id}
        {...a} />);
}

function App() {
    return <div>
        <h1>People</h1>
        <People list={data}/></div>;
}

export default App;
