import './Person.css';

import PersonField from './PersonField.js'

function Person(props) {

    return <tr className={"person"}>
        <td><input type={"checkbox"} checked={props.selected}
               onChange={()=>props.onToggleSelected(props.id)}/>
        </td>
        <PersonField field="name" {...props}/>
        <PersonField field="email" {...props}/>
        <PersonField field="phone" {...props}/>
    </tr>
}

export default Person;
