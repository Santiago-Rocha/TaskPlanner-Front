import React from 'react';
import { Todo } from './Todo'


export class TodoList extends React.Component {


    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            let filName = todo.responsible.name.match(".*" + this.props.filter.name + ".*")
            let filStatus = todo.status.match(".*" + this.props.filter.status + ".*")
            let filDate = this.props.filter.dueDate;
            console.log(filDate)
            if (todo.responsible.name.length == (filName == null ? 0 :  filName[0].length) &&
                todo.status.length == (filStatus == null ? 0 :  filStatus[0].length) &&
                (filDate ? todo.dueDate.format('YYYY-MM-DD') == filDate.format('YYYY-MM-DD') :  true)) {
                return (
                    <div key={i}>
                        <Todo description={todo.description} dueDate={todo.dueDate} status={todo.status} responsible={todo.responsible} />
                    </div>
                );
            }
        });

        return (
            <div className="cardContainer">
                {todoList}
            </div>

        );


    }

}