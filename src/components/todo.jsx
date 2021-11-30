import React, { Component } from 'react'
import Tasks from './tasks'
import Header from './header'
import Footer from './footer'
//import Modal from './modal'

class Todo extends Component {
    state = {
        todo : [
            {
                id: 1,
                task : 'Call Jhon by 12 pm',
                author : 'Genesis',
                priority : 'High'
            },
            {
                id : 2,
                task : 'Call Thankgod by 13 pm',
                author : 'Ebube',
                priority : 'Low'
            },
            {
                id : 3,
                task : 'Call Ezinne by 11 pm',
                author : 'Izuchi',
                priority : 'Meduim'
            },
            {
                id : 4,
                task : 'Call Emeka by 12 pm',
                author : 'Winner',
                priority : 'low'
            },

            {
                id : 5,
                task: 'Call Nneoma',
                author : 'Joyce',
                priority : 'High'
            }

        ]
    }

    hanleSubmit = (tasks) => {

        this.setState({
            todo: [...this.state.todo , tasks]
        })
    }

    deleteTask = (id) => {
      const {todo} = this.state;
      this.setState({
          todo : todo.filter((task) => {
              return task.id !== id
          })
      })
    }

    render() {
        const {todo } = this.state
        return (
            <li className="list-group-item">
                <div className="row d-flex justify-content-center container">
                    <div className="col-md-8">
                        <div className="card-hover-shadow-2x mb-3 card">
                                <Header />
                                <Tasks tasks={todo} deleteTask={this.deleteTask} />
                                <Footer modal={this.handleModal}/>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Todo


