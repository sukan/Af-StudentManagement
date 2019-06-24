'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Login from './Login';
export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangerole = this.onChangerole.bind(this);
        this.onChangepassword = this. onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            role: '',
            password: ''
        }
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangerole(e) {
        this.setState({
            role: e.target.value
        });
    }

    onChangepassword(e){
        this.setState({
            password: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newuser={
            email:this.state.email,
            role:this.state.role,
            password:this.state.password
        }
        axios.post('http://localhost:8083/user/add',newuser).then(res=>{
            if (res)
            {
                alert('Successfully Registered!');
                console.log(res);
                ReactDOM.render(<Login/>,document.getElementById('root'));
            }
            else
            {
                alert('Registration is failed.Please try again!');
                return res.status(500).json({message: 'Error'});
            }
        });
        this.setState({
            email: '',
            role: '',
            password: ''
        })

    }

    render() {
        return (
            <div style={{"marginTop": 20}}>
                <Router>
                <form onSubmit={this.onSubmit} id={'root'}>
                    <div className={"form-group"}>
                        <h6>Email</h6>
                        <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeemail} required={true}/>
                        <h6>Role</h6>
                        <input type="text" className="form-control" value={this.state.role} onChange={this.onChangerole} required={true}/>
                        <h6>Password</h6>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangepassword} required={true}/><br/>
                        <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Signup</button>
                        <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}} >Cancel</button>
                    </div>
                </form>
                </Router>
            </div>
        );
    }

}

