import React, { useState, useRender} from 'react';

const Todo = (props) => {
    console.log("will", props);
    return (
        <div
            className={`item${props.item.completed ? "completed" : ""}`}
            onClick={() => props.toggleTodoCompleted(props.item.id)}
            >
            {props.item.todo}
        </div>
    );

};

export default Todo;
