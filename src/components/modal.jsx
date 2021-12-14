import {Button ,Modal, Form} from 'react-bootstrap';
import { useState } from 'react';


 const AddTask = ({ onAdd }) =>
{
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [task ,  setTask] = useState('')
    const [priority , setPriority] = useState('')
    const [author, setAuthor] = useState('')

    // const handleChange = (event) => {
    //     setTask(event.target.value)
    //     setPriority(event.target.value)
    //     setAuthor(event.target.value)
    // }

    const handleSubmit = (event) => {
      event.preventDefault()

      if(task === ''){
        alert('All input fields needed')
        return false
      }

      onAdd({task,priority,author})

      setTask('')
      setAuthor('')
      setPriority('')
      handleClose()
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add task
        </Button>
        <Form >
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                      <div className="col  form-group has-feedback">
                          <input 
                            type="text" 
                            className="form-control has-feedback-left" 
                            id="Task" 
                            name="Task" 
                            placeholder="Task"
                            value ={task}
                            onChange={(e) => setTask(e.target.value)}
                             />
                          <span className="text-danger error-text name_error" ></span>
                      </div>	
                    
                      <div className="col  form-group has-feedback">
                          <input name="Author" id="Author" value={author} className="form-control has-feedback-left" onChange={(e) => setAuthor(e.target.value)}/>
                          <span className="text-danger error-text name_error" ></span>
                      </div>

                      <div className="col form-group has-feedback">
                          <select className="form-control has-feedback-left" id="Priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                              <option value="">Select</option>
                              <option value="High">High</option>
                              <option value="Meduim">Meduim</option>
                          </select>
                              <span className="text-danger error-text fee_error" >
                                  <strong></strong>
                              </span>
                      </div>
                
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="dark" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    );
  
}


  export default AddTask  
  
