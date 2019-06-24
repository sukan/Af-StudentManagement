import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateAssignment from './CreateAssignment';
import ViewAssignments from './ViewAssignments'
import ViewAnswers from './ViewAnswers'
import CreateExam from './CreateExam'
export default class InstructorJob extends React.Component {
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
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/assignment">New Assignment</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/viwass">View Assignments</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/viewans">View Answers</Link></button>
                            <button type="submit" className="btn btn-warning" style={{float:'right',marginRight:'50px'}}><Link to="/exam">Create Exam</Link></button>

                        </div>
                    </div>
                    <Route exact path="/assignment" render={props => {
                        return <CreateAssignment/>
                    }}/>
                    <Route exact path="/viwass" render={props => {
                        return <ViewAssignments/>
                    }}/>
                    <Route exact path="/viewans" render={props => {
                        return <ViewAnswers/>
                    }}/>
                    <Route exact path="/exam" render={props => {
                        return <CreateExam/>
                    }}/>
                </div>
            </Router>
        </div>;
    }
}
