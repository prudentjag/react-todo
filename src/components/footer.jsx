
import AddTask from './modal'


const Footer = ({ onAdd }) => {
    return (
        <div className="d-block text-right card-footer">
            <button className="mr-2 btn btn-link btn-sm">Cancel</button>
            <AddTask onAdd={onAdd} />
            {/* <button className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm" onClick={ () => props.modal()}>Add Task</button> */}
        </div>
    )
}
export default Footer