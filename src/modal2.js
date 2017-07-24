import React from 'react';

class Modal extends React.Component {
    constructor(props){
      super(props);
      this.state={value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

     handleChange(event) {
        this.setState({value: event.target.value});
    } 

     handleClose() {
        this.setState({value: ''},()=>{
          console.log(this.state.value);
        });
    } 

    render() {

        return (
          <div>

  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog"  role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="myModalLabel">Editing "{this.props.selectedItem.text}"</h4>
          <button type="button" className="close" aria-label="Close" data-dismiss="modal" onClick={this.handleClose}><span aria-hidden="true">&times;</span></button>
        </div>
        <div className="modal-body">
          <div className={this.state.value.length > 20   ? "form-group has-warning" : "form-group"}>
            <label className="col-form-label">Enter new name</label>
            <input className="form-control" type="text" id="editFormInput" value={this.state.value} onChange={this.handleChange}/> 
            {this.state.value.length > 20 ? 
                  <div className="form-control-feedback">limit of 20 simbols</div> : null}       
          </div>
        <div className="float-right">
          <button type="button" className="btn btn-secondary mr-2" data-dismiss="modal" onClick={this.handleClose}>Close</button>
          <button type="button" className={this.state.value.length > 20  ? 
                                          "btn btn-primary disabled" : 
                                          "btn btn-primary"} 
                                data-dismiss="modal" onClick={()=>{
                                                      this.props.edit(this.state.value);
                                                      this.setState({value:''}); 
                                                      }}>Edit todo
          </button>
         </div>
        </div>
      </div>
    </div>
  </div>
          </div>

        );
    }
}
export default Modal;