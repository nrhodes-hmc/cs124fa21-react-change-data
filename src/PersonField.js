function PersonField(props) {
    return <td><input type="text"
                      className={"person " + props.field}
                      onChange={
                          event => props.onPersonFieldChanged(props.id, props.field, event.target.value)
                      }
                      value={props[props.field]}/></td>
}

export default PersonField;
