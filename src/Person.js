import './Person.css';

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
        <div className="name">{props.name}</div>
        <div className="email">{props.email}</div>
        <div className="phone">{props.phone}</div>
    </div>
}
export default Person;
