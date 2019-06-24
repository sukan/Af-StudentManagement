'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useAlert, positions } from 'react-alert'
export default class CreateAssignment extends Component {
    constructor(props) {
        super(props);
        this.onChangeDuedate = this.onChangeDuedate.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeComments = this. onChangeComments.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            duedate: '',
            file: '',
            comments: ''
        }
    }

    onChangeDuedate(e) {
        this.setState({
            duedate: e.target.value
        });
    }

    onChangeFile(e) {
        this.setState({
            file: e.target.value
        });
    }

    onChangeComments(e){
        this.setState({
            comments: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const newassignment={
            duedate:this.state.duedate,
            file:this.state.file,
            comments:this.state.comments
        }
        axios.post('http://localhost:8083/assignment/add',newassignment).then(res=>console.log(res.data));
        this.setState({
            duedate: '',
            file: '',
            comments: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <h4>New Assignment</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Due Date</h6>
                            <input type="date" className="form-control" value={this.state.duedate} onChange={this.onChangeDuedate} required={true}/><br/>
                            <h6>Assignment File</h6>
                            <input type="file" className="form-control" value={this.state.file} onChange={this.onChangeFile} required={true}/><br/>
                            <h6>Submission Comments</h6>
                            <input type="text" className="form-control" value={this.state.comments} onChange={this.onChangeComments}/><br/>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Submit</button>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                            {/*<Route exact path="/singup" render={() => {window.location.href="Admin.jsx"}} />*/}
                        </div>
                    </form>
                </Router>
            </div>
        );
    }
}