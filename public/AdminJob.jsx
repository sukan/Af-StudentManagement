import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateCourse from './CreateCourse';
import CreateAdmin from './CreateAdmin'
import CreateInstructor from './CreateInstructor'
import ViewCourses from './ViewCourses'
import ViewAdmins from './ViewAdmins'
import ViewInstructors from './ViewInstructors'
export default class AdminJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    render() {
        return <div style={{"marginTop": 20}}>
            <br/>
            <Router>
                <div>
                    <div>
                        <div>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'30px'}}><Link to="/course">New Course</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'30px'}}><Link to="/admin">New Admin</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'30px'}}><Link to="/instructor">New Instructor</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'30px'}}><Link to="/vcourses">View Courses</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'30px'}}><Link to="/vadmins">View Admins</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'30px'}}><Link to="/vinstructors">View Instructors</Link></button>
                        </div>
                    </div>
                    <Route exact path="/course" render={props => {
                        return <CreateCourse/>
                    }}/>
                    <Route exact path="/admin" render={props => {
                        return <CreateAdmin/>
                    }}/>
                    <Route exact path="/instructor" render={props => {
                        return <CreateInstructor/>
                    }}/>
                    <Route exact path="/vcourses" render={props => {
                        return <ViewCourses/>
                    }}/>
                    <Route exact path="/vadmins" render={props => {
                        return <ViewAdmins/>
                    }}/>
                    <Route exact path="/vinstructors" render={props => {
                        return <ViewInstructors/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
