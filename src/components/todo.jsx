// import React, { Component } from 'react'
import React, { useState } from 'react'
import Tasks from './tasks'
import Header from './header'
import Footer from './footer'
//import Button  from 'react-bootstrap/Button'

const Todo = () =>  {
    
    const [tasks , setTask] = useState([
        
    ])

    
    

    const deleteTask = (id) => {
      setTask(tasks.filter((task) => task.id !== id ))
    }

    const addTask = (task) => {
        // Generate random numbers
        const id = Math.floor(Math.random() * 100) + 1
        //Adding id to task
        const newTask = {id , ...task }
        // Adding tasks to state
        setTask([...tasks , newTask])
    }

        return (
            <li className="list-group-item">
                <div className="row d-flex justify-content-center container">
                    <div className="col-md-8">
                        <div className="card-hover-shadow-2x mb-3 card">
                                <Header />
                                <Tasks  tasks={tasks} onDelete={deleteTask}/>
                                <Footer onAdd={addTask}/>
                        </div>
                    </div>
                </div>
            </li>
        )
}

export default Todo


