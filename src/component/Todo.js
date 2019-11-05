import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./Todo.css"

export class Todo extends React.Component {

    render() {
        return (
            <Card style={{marginTop: "10px"}}>
                <CardContent>
                    <p>{this.props.description}</p>
                    <p>{this.props.status} - {this.props.dueDate.format('DD-MM-YYYY')} </p>
                    <p>{this.props.responsible.name}</p>
                    { this.props.img ? <img src={"http://localhost:8080/"+this.props.img} width="100" height="100"/> : <div />}
                </CardContent>
            </Card>
        );
    }

}