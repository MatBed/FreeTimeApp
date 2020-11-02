import React from 'react';

const Task = (props) => {
    return (
        <>
            <li className="list-group-item">
                {props.task.Title}
                <hr />
                {props.task.Description}
                <br />
                Time: {props.task.Time}
            </li>
        </>
    );
}

export default Task;