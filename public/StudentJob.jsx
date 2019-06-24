import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import StudentViewAssignments from './StudentViewAssignments';
import ViewMarks from './ViewMarks'
import UpdateAnswer from './UpdateAnswer'
import StudentViewCourses from './StudentViewCourses'
export default class StudentJob extends React.Component {
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
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/upload">Upload Assignments</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/vmarks">View Marks</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/viewcourses">View Courses</Link></button>
                            <Link to="/uploading"/>
                        </div>
                    </div>
                    <Route exact path="/upload" render={props => {
                        return <StudentViewAssignments/>
                    }}/>
                    <Route exact path="/vmarks" render={props => {
                        return <ViewMarks/>
                    }}/>
                    <Route exact path="/uploading" render={props => {
                        return <UpdateAnswer/>
                    }}/>
                    <Route exact path="/viewcourses" render={props => {
                        return <StudentViewCourses/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
