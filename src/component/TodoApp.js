import React, { Component } from 'react';
import { TodoList } from "./TodoList";
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import moment from "moment";

export class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <TextField
                        id="text"
                        label="Text"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        margin="normal" />
                    <br />
                    <br />
                    <TextField
                        id="priority"
                        label="Priority"
                        type="number"
                        value={this.state.priority}
                        onChange={this.handlePriorityChange}
                        margin="normal" />
                    <br />
                    <br />
                    {/*<TextField
                        id="due-date"
                        label="Due-Date"
                        type="date"
                        defaultValue={this.state.dueDate}
                        onChange={this.handleDateChange}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }} />*/}

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    <br />
                    <Button variant="outlined" color="secondary" type="submit">
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br />
                <br />
                <TodoList todoList={this.state.items} />
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        console.log(date)
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log(this.state);

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}

