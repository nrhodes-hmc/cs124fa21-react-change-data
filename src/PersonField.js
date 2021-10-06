function PersonField(props) {
    return <input type="text"
           className={props.field}
           onChange={
               event=>props.onPersonFieldChanged(props.id, props.field, event.target.value)
           }
           value={props[props.field]} />
}

export default PersonField;
