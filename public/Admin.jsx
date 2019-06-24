import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login'
import AdminJob from './AdminJob'
import InstructorJob from './InstructorJob'
import StudentJob from './StudentJob'
export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }
    //
    // componentDidMount() {
    //     fetch('/api/messages', {method: 'GET'})
    //         .then(res => res.json())
    //         .then(jsonRes => {
    //             this.setState({message: jsonRes.message});
    //         })
    //         .catch(err => {
    //             this.setState({message: 'An error occurred'});
    //         });
    // }

    render() {
        return <div>
            <h4 style={{float:'left'}}>STUDENT-INSTRUCTOR INFORMATION SYSTEM</h4>
            <br/>
            <Router>
                <div>
                    <div>
                        <div>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'40px'}}><Link to="/login">Login</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'40px'}}><Link to="/singup">Signup</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'40px'}}><Link to="/admin1">Admin</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'40px'}}><Link to="/instructor1">Instructor</Link></button>
                            <button type="submit" className="btn btn-warning"><Link to="/student1">Student</Link></button>
                        </div>
                    </div>
                    <Route exact path="/singup" render={props => {
                        return <Signup/>
                    }}/>
                    <Route exact path="/login" render={props => {
                        return <Login/>
                    }}/>
                    <Route exact path="/admin1" render={props => {
                        return <AdminJob/>
                    }}/>
                    <Route exact path="/instructor1" render={props => {
                        return <InstructorJob/>
                    }}/>
                    <Route exact path="/student1" render={props => {
                        return <StudentJob/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
