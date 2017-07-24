import React, { Component } from 'react';

class AddForm extends Component {
    constructor(){
        super();
        this.state={value: ''};

        this.handleChange = this.handleChange.bind(this);
    }
    
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){

        return(
        <div className="row">
           <div className={this.state.value.length > 20   ? "col-12 has-danger" : "col-12"}>

                <div className="input-group">
                    <input className="form-control" type="text" id="inlineFormInput" value={this.state.value} onChange={this.handleChange} placeholder= "New todo" aria-label="Add todo" />
                    
                    <span className="input-group-btn"> 
                        <button className={this.state.value.length > 20  ? "btn btn-sm btn-success disabled" :"btn btn-sm btn-success"} onClick={()=>{
                        this.props.add(this.state.value);
                        this.setState({value:''}); 
                        }}>Add todo</button>
                    </span>
                </div>

                 {this.state.value.length > 20  ? 
                  <div className="form-control-feedback">limit of 20 simbols</div> : null} 

            </div>
        </div>
        )
    }
}

export default AddForm;
