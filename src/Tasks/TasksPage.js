import React, { Component } from 'react';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css'


class TasksPage extends Component {
    state = {
        tasks: [
            {
                id: 1,
                Title: 'TV',
                Description: 'Watch tv series.',
                Status: 'ToDo',
                Time: 1
            },
            {
                id: 2,
                Title: 'Games',
                Description: 'Play in games.',
                Status: 'ToDo',
                Time: 4
            },
            {
                id: 3,
                Title: 'Programming',
                Description: 'Learn new libraries.',
                Status: 'InProgress',
                Time: 3
            },
            {
                id: 4,
                Title: 'Work',
                Description: 'Go to work',
                Status: 'Done',
                Time: 8
            },
        ]
    }

    deleteHandle = (id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id);
        this.setState({
            tasks
        })
    }

    render() {
        const toDo = this.state.tasks.filter(task => task.Status === 'ToDo')
        const inProgress = this.state.tasks.filter(task => task.Status === 'InProgress')
        const done = this.state.tasks.filter(task => task.Status === 'Done')

        const toDoTasks = toDo.map(task => <Task key={task.id} task={task} deleteAction={this.deleteHandle} />)
        const inProgressTasks = inProgress.map(task => <Task key={task.id} task={task} deleteAction={this.deleteHandle} />)
        const doneTasks = done.map(task => <Task key={task.id} task={task} deleteAction={this.deleteHandle} />)


        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h3>To do tasks</h3>
                        <hr />
                        <div>
                            {toDoTasks}
                        </div>
                    </div>
                    <div className="col-sm">
                        <h3>In progress tasks</h3>
                        <hr />
                        <div>
                            {inProgressTasks}
                        </div>
                    </div>
                    <div className="col-sm">
                        <h3>Done tasks</h3>
                        <hr />
                        <div>
                            {doneTasks}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TasksPage;