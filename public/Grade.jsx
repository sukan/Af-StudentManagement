'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useAlert, positions } from 'react-alert'
export default class Grade extends Component {
    constructor(props) {
        super(props);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeMarks = this. onChangeMarks.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            file: '',
            marks: ''
        }
    }

    onChangeFile(e) {
        this.setState({
            file: e.target.value
        });
    }

    onChangeMarks(e){
        this.setState({
            marks: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const marks={
            file:this.state.file,
            marks:this.state.marks
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
                    <h4>Grading</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Answer File</h6>
                            <input type="text" className="form-control" value={this.state.file} onChange={this.onChangeFile} required={true}/><br/>
                            <h6>Marks</h6>
                            <input type="text" className="form-control" value={this.state.comments} onChange={this.onChangeComments}/><br/>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Sumbit</button>
                            <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                            {/*<Route exact path="/singup" render={() => {window.location.href="Admin.jsx"}} />*/}
                        </div>
                    </form>
                </Router>
            </div>
        );
    }
}