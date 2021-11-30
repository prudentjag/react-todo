const ModalForm = () => {

    return (
        <form action="" method="post" id="updatesubject" enctype="multipart/form-data">
            <div className="modal-body">
                <h4>Make your changes</h4>
                <input type="hidden" id="id" name="id" className="idUpdate"/>

                <div className="col  form-group has-feedback">
                    <input type="text" className="form-control has-feedback-left" id="edit_name" name="edit_name" placeholder="Name of college" />
                    <span className="text-danger error-text name_error" ></span>
                    <span className="fa fa-thumb-tack form-control-feedback left" aria-hidden="true"></span>
                </div>	
                
                <div className="col  form-group has-feedback">
                    <input name="edit_programme" id="edit_programme" className="form-control has-feedback-left"/>
                    <span className="text-danger error-text name_error" ></span>
                    <span className="fa fa-thumb-tack form-control-feedback left" aria-hidden="true"></span>
                </div>

                <div className="col form-group has-feedback">
                    <select type="text" className="form-control has-feedback-left" id="edit_teacher" name="edit_teacher" placeholder="Subject teacher"  required>
                        <option value="">Select</option>
                    </select>
                        <span className="text-danger error-text fee_error" >
                            <strong></strong>
                        </span>
                    <span className="fa fa-thumb-tack form-control-feedback left" aria-hidden="true"></span>
                </div>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" id="updateform">Save changes</button>
            </div>
        </form>
    )
}



const Modal = () => {
    return (

        <div className="modal fade bs-example-modal-sm" id="updatesubjectmodal" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel2">Add Task</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <ModalForm />
                </div>
            </div>
        </div>
    
    )
}

export default Modal