import React from 'react'
import AddEdit from './AddEdit'
import ViewAll from './ViewAll'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addNewStudent,showFormView} from '../mystore/MyActions'

class Main extends React.Component{

    showFormForAdd = () => {
        this.props.showFormView(true);
    }

    render(){
        return <div className="container" style={{paddingTop:20}}>
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={this.showFormForAdd}>Add</button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-danger float-right" onClick={()=>{this.props.showFormView(false)}}>Close</button>
                </div>
            </div>
            <hr></hr>
            {this.props.showForm ? <AddEdit/> : ''}
            {this.props.showForm ? '' : <ViewAll/>}
        </div>

    }

}

const mapStateToPros = (state) => {
    const {studentObject} = state;
    console.log(studentObject);
    return studentObject;
}

const mapDispathToPros = (dispatch) => {
    return bindActionCreators({addNewStudent,showFormView},dispatch);
}

export default connect(mapStateToPros,mapDispathToPros)(Main)

