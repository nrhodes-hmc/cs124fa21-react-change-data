import Person from "./Person";
import './People.css'
import trashicon from './trash_icon.png'

import React, {useEffect, useRef, useState} from 'react';

function People(props) {
    const [selectedIds, setSelectedIds] = useState([]);
    const allSelected = selectedIds.length > 0 && selectedIds.length === props.list.length;
    const someSelected = selectedIds.length > 0 && selectedIds.length !== props.list.length;
    const checkboxRef = useRef(null); // so we can refer to select all checkbox in DOM

    useEffect(() => {
        // Set the indeterminate property. Can't be done in HTML or in CSS.
        checkboxRef.current.indeterminate = someSelected;
        return null;
    }, [someSelected])

    function handleDelete() {
        props.onDeletePeople(selectedIds);
        setSelectedIds([]);
    }

    function toggleSelected(personId) {
        if (selectedIds.includes(personId)) {
            const filtered = selectedIds.filter(p => p !== personId);
            setSelectedIds(filtered);
        } else {
            setSelectedIds([...selectedIds, personId]);
        }
    }

    function handleToggleAll(e) {
        if (e.target.checked) {
            setSelectedIds(props.list.map(p => p.id))
        } else {
            setSelectedIds([]);
        }
    }

    const numSelectedString = `${selectedIds.length} of ${props.list.length} selected`;
    return (
        <>
            <div className="buttons">
                {selectedIds.length > 0 &&
                <button className="delete-button"
                        type="button"
                        onClick={
                            () => {
                                handleDelete();
                            }}>
                    <img width="12" src={trashicon}/>
                </button>}
                <button className="add-button" type="button" onClick={props.onAddPerson}>
                    Add
                </button>
            </div>
            <table className="people">
                <thead>
                <tr>
                    <th><input type="checkbox"
                               checked={allSelected}
                               ref={checkboxRef}
                               disabled={props.list.length === 0 && "disabled"}
                               onClick={handleToggleAll}/></th>
                    <th className={"name header"}
                        id="nameheader"
                        scope="col">
                        Name
                    </th>
                    <th className={"email header"}
                        id="emailheader"
                        scope="col">
                        Email
                    </th>
                    <th className={"email header"}
                        id="phoneheader"
                        scope="col">
                        Phone
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.list.map(a => <Person
                    onToggleSelected={(id) =>
                        toggleSelected(id)}
                    onPersonFieldChanged={props.onPersonFieldChanged}
                    selected={selectedIds.includes(a.id)}
                    key={a.id}
                    {...a} />)}
                </tbody>
            </table>
            <h1 id="h1">People ({numSelectedString})</h1>
        </>);
}

export default People;