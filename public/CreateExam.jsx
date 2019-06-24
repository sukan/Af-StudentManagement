'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useAlert, positions } from 'react-alert'
import ReactDOM from "react-dom";
import Login from "./CreateInstructor";

const Instructor = (props)=>(
    <tr>
        <td>{props.instructor.name}</td>
    </tr>

);


export default class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.onChangeExamID = this.onChangeExamID.bind(this);
        this.onChangeExamname = this.onChangeExamname.bind(this);
        this.onChangeModule = this.onChangeModule.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeInstructor = this.onChangeInstructor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            examID: '',
            exam_name : '',
            module: '',
            date: '',
            instructor : []

        }
    }

    onChangeExamID(e) {
        this.setState({
            examID: e.target.value
        });
    }

    onChangeExamname(e) {
        this.setState({
            exam_name : e.target.value
        })
    }


    onChangeModule(e) {
        this.setState({
            module: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeInstructor(e){
        this.setState({
            instructor: e.target.value
        });
    }

    instructorList()
    {
        return this.state.courses.map((current,i)=>{
            return <Instructor instructors = {current} key={i}/>;

        })

    }


    onSubmit(e) {
        e.preventDefault();
        const newExam={
            examID:this.state.examID,
            exam_name:this.state.exam_name,
            module:this.state.module,
            date:this.state.date,
            instructor:this.state.instructor
        }
        axios.post('http://localhost:8083/Exam/add',newExam).then(res=> {
            if (res) {
                alert('New Exam added successfully!');
                console.log(res);
                ReactDOM.render(<vadmins/>, document.getElementById('root'));
            } else {
                alert('Adding new Exam is failed.Please try again!');
                return res.status(500).json({message: 'Error'});
            }
        });
        this.setState({
            examID: '',
            exam_name : '',
            module: '',
            date: '',
            instructor: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <h4>Create Exam</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Exam ID</h6>
                            <input type="text" className="form-control" value={this.state.examID} onChange={this.onChangeExamID} required={true}/><br/>
                            <h6>Exam Name </h6>
                            <input type="text" className="form-control" value={this.state.exam_name} onChange={this.onChangeExamname} required={true}/><br/>
                            <h6>Module</h6>
                            <input type="text" className="form-control" value={this.state.module} onChange={this.onChangeModule} required={true}/><br/>
                            <h6>Date</h6>
                            <input type="date" className="form-control" value={this.state.date} onChange={this.onChangeDate} required={true}/><br/>
                            <h6>Instructor name :</h6>
                            {this.instructorList()}

                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Save</button>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                        </div>
                    </form>
                </Router>
            </div>
        );
    }
}