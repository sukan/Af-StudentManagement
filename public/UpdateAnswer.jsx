'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useAlert, positions } from 'react-alert'
export default class UpdateAnswer extends Component {
    constructor(props) {
        super(props);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            file: ''
        }
    }

    onChangeFile(e) {
        this.setState({
            file: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const assignmentAnswer={
            file:this.state.file
        }
        axios.post('http://localhost:8083/studentanswer/add',assignmentAnswer).then(res=>console.log(res.data));
        this.setState({
            file: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                    <h4>Upload Answer</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className={"form-group"}>
                            <h6>Submission File</h6>
                            <input type="file" className="form-control" value={this.state.file} onChange={this.onChangeFile} required={true}/><br/>
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