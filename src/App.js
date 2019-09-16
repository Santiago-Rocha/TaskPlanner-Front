import React from 'react';
import './App.css';
import Menux from './component/Menu.js';
import { TodoList } from './component/TodoList';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

const items = [{
  description: "some description text ",
  responsible: {
    name: "Santiago Carrillo",
    email: "sancarbar@gmail"
  },
  status: "ready",
  dueDate: moment(new Date(156464645646))
}]

function App() {
  return (
    <div style={{backgroundColor : "#f5f5f5"}}>
      <Menux />
      <TodoList todoList={items} />
    </div>

  );

}

export default App;
