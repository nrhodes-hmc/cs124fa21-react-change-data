import './Person.css';

import PersonField from './PersonField.js'
function Person(props) {
    const classes = ["person "];
    if (props.selected) {
        classes.push("selected");
    }

    return <div className={classes.join(" ")}
                key={props.id}
                id={props.id}
                onClick={(e) => {
                    props.onRowClick(e.currentTarget.id);
                }}
        >
        <PersonField field="name" {...props}/>
        <PersonField field="email" {...props}/>
        <PersonField field="phone" {...props}/>
    </div>
}
export default Person;
