import React from 'react';
import Todo from './todo/Todo'
import classes from './app.module.css'
const App = () => {
    return (
        <div className={classes.todo}>
            <Todo/>
        </div>
    );
};

export default App;