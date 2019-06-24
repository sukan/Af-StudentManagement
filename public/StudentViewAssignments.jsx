import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const Assignments = (props)=>(
    <tr>
        <td>{props.assignments.duedate}</td>
        <td>{props.assignments.file}</td>
        <td>
            <Link to={"/uploading"}>Edit</Link>
        </td>
    </tr>
);

export default class StudentViewAssignments extends Component {
    constructor(props){
        super(props);
        this.state={assignments:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:8083/assignment/all').then(res=>{
            this.setState({assignments:res.data});
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });

    }

    assignmentList()
    {
        return this.state.assignments.map((current,i)=>{
            return <Assignments assignments = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Assignments List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Due Date</th>
                        <th>File Name</th>
                        <th>Submission</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.assignmentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}