import React, { useState } from 'react';

export default function TodoForm (props) {
    const [ newTodoItem, setNewTodoItem ] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        props.add(newTodoItem);
        setNewTodoItem("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="item"
                    value={newTodoItem}
                    placeholder="Type in your todo and click add to add to list"
                    onChange={(e) => setNewTodoItem(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};
