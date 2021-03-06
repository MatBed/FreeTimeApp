import React from 'react';
import '../Styles/Task.css';

const Task = (props) => {
    return (
        <div className="card myCard">
            <div className="card-body">
                <h5 className="card-title">{props.task.Title}</h5>
                <hr />
                <p className="card-text">{props.task.Description}</p>
                <button className="btn btn-outline-danger deleteButton" onClick={() => props.deleteAction(props.task.id)}>X</button>
                {props.task.Status !== 'Done' ? <button className="btn btn-outline-dark moveButton" onClick={() => props.changeStatus(props.task.id)}>-{'>'}</button> : ''}
            </div>
        </div>
    );
}

export default Task;