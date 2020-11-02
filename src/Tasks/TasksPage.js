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
                id: 1,
                Title: 'Work',
                Description: 'Go to work',
                Status: 'Done',
                Time: 8
            },
        ]
    }

    render() {
        const toDo = this.state.tasks.filter(task => task.Status === 'ToDo')
        const inProgress = this.state.tasks.filter(task => task.Status === 'InProgress')
        const done = this.state.tasks.filter(task => task.Status === 'Done')

        const toDoTasks = toDo.map(task => <Task key={task.id} task={task} />)
        const inProgressTasks = inProgress.map(task => <Task key={task.id} task={task} />)
        const doneTasks = done.map(task => <Task key={task.id} task={task} />)


        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        To do tasks
                        <hr />
                        <div>
                            <ul className="list-group">
                                {toDoTasks}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        In progress tasks
                        <hr />
                        <div>
                            <ul className="list-group">
                                {inProgressTasks}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        Done tasks
                        <hr />
                        <div>
                            <ul className="list-group">
                                {doneTasks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TasksPage;