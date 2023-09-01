import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks.map(task => ({ ...task, completed: false })),
    };
    console.log(this.state.tasks);
  }

  toggleTaskCompletion(index) {
    this.setState(prevState => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return { tasks: updatedTasks };
    });
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li
              key={index}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
              onClick={() => this.toggleTaskCompletion(index)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;