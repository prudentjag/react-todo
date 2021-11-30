
const Todos = props => {

    const tasks = props.tasks.map((value, index) => {

        return( 

            <li className="list-group-item" key={value.id}>
                <div className="todo-indicator bg-warning"></div>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-2">
                            <div className="custom-checkbox custom-control">
                                <input className="custom-control-input" id={'exampleCustomCheckbox'+value.id} type="checkbox" />
                                <label className="custom-control-label" htmlFor={'exampleCustomCheckbox'+value.id}>&nbsp;</label> 
                            </div>
                        </div>
                        <div className="widget-content-left">
                            <div className="widget-heading">{value.task}<div className="badge badge-danger ml-2">{value.priority}</div>
                            </div>
                            <div className="widget-subheading"><i>By {value.author}</i></div>
                        </div>
                        <div className="widget-content-right"> 
                            <button className="border-0 btn-transition btn btn-outline-success"> <i className="fa fa-check"></i></button> 
                            <button className="border-0 btn-transition btn  btn-danger" onClick={() => props.deleteTask(value.id)}> <i className="fa fa-trash" ></i>Delete </button> 
                        </div>
                    </div>
                </div>
            </li>

        )
        
    })

    return tasks
}

const Tasks = (props) => {
        const {tasks , deleteTask} = props;
        return (
            <div className="scroll-area-sm card-body">
                <perfect-scrollbar className="ps-show-limits">
                    <div style={{ position: 'static' }} className="ps ps--active-y">
                        <div className="ps-content">
                            <ul className=" list-group list-group-flush">
                                {tasks.length > 0 ? <Todos tasks={tasks} deleteTask={deleteTask} /> : 'take Your self Out You free'}
                            </ul>
                        </div>
                    </div>
                </perfect-scrollbar>
            </div>
        )
}

export default Tasks