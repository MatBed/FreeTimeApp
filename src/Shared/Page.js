import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import TasksPage from '../Tasks/TasksPage';
import NotesPage from '../Notes/NotesPage';
import ErrorPage from '../Shared/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/tasks" component={TasksPage} />
                <Route path="/notes" component={NotesPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;