'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useAlert, positions } from 'react-alert'
import ReactDOM from "react-dom";
import Login from "./CreateCourse";
export default class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.onChangefaculty = this.onChangefaculty.bind(this);
        this.onChangeinstructor_name = this.onChangeinstructor_name.bind(this);
        this.onChangeinstructor_empno = this. onChangeinstructor_empno.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            faculty: '',
            instructor_name: '',
            email: '',
            instructor_empno: ''
        }
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangefaculty(e) {
        this.setState({
            faculty: e.target.value
        });
    }

    onChangeinstructor_name(e) {
        this.setState({
            instructor_name: e.target.value
        });
    }

    onChangeinstructor_empno(e){
        this.setState({
            instructor_empno: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newinstructor={
            faculty:this.state.faculty,
            instructor_name:this.state.instructor_name,
            email:this.state.email,
            instructor_empno:this.state.instructor_empno
        }
        axios.post('http://localhost:8083/instructor/add',newinstructor).then(res=> {
            if (res) {
                alert('New instructor added successfully!');
                console.log(res);
                ReactDOM.render(<vinstructors/>, document.getElementById('root'));
            } else {
                alert('Adding new instructor is failed.Please try again!');
                return res.status(500).json({message: 'Error'});
            }
        });
        this.setState({
            faculty: '',
            instructor_name: '',
            email: '',
            instructor_empno: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <h4>New Instructor</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Instructor Name</h6>
                            <input type="text" className="form-control" value={this.state.instructor_name} onChange={this.onChangeinstructor_name} required={true}/><br/>
                            <h6>Employee ID</h6>
                            <input type="text" className="form-control" value={this.state.instructor_empno} onChange={this.onChangeinstructor_empno} required={true}/><br/>
                            <h6>Email</h6>
                            <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeemail} required={true}/><br/>
                            <h6>Faculty</h6>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="computing"
                                           value="Computing"
                                           checked={this.state.faculty === "Computing"}
                                           onChange={this.onChangefaculty} required={true}/>
                                    <label className="form-check-label">Computing</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="business"
                                           value="Business"
                                           checked={this.state.faculty === "Business"}
                                           onChange={this.onChangefaculty}/>
                                    <label className="form-check-label">Business</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="engineering"
                                           value="Engineering"
                                           checked={this.state.faculty === "Engineering"}
                                           onChange={this.onChangefaculty}/>
                                    <label className="form-check-label">Engineering</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="faculty"
                                           id="HumanitiesAndSciences"
                                           value="HumanitiesAndSciences"
                                           checked={this.state.faculty === "HumanitiesAndSciences"}
                                           onChange={this.onChangefaculty}/>
                                    <label className="form-check-label">Humanities And Sciences</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Save</button>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                        </div>
                    </form>
                </Router>
            </div>
        );
    }
}