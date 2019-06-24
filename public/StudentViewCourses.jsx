import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const Courses = (props)=>(
    <tr>
        <td>{props.courses.module_name}</td>
        <td>{props.courses.enroll}</td>
    </tr>

);

export default class StudentViewCourses extends Component {
    constructor(props){
        super(props);
        this.state={courses:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:8083/course/all').then(res=>{
            this.setState({courses:res.data});
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }


    courseList()
    {
        return this.state.courses.map((current,i)=>{
            return <Courses courses = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Courses</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Module Name</th>
                        <th>Enrollment Key</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.courseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}