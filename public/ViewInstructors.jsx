import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const Instructors = (props)=>(
    <tr>
        <td>{props.instructors.instructor_name}</td>
        <td>{props.instructors.instructor_empno}</td>
        <td>{props.instructors.email}</td>
        <td>{props.instructors.faculty}</td>
        <td>
            <Link to={"/instructor"}>Edit</Link>
        </td>
    </tr>

);

export default class ViewInstructors extends Component {
    constructor(props){
        super(props);
        this.state={instructors:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:8083/instructor/all').then(res=>{
            this.setState({instructors:res.data});
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }


    instructorList()
    {
        return this.state.instructors.map((current,i)=>{
            return <Instructors instructors = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Instructors</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Instructor Name</th>
                        <th>Employee Number</th>
                        <th>Email</th>
                        <th>Faculty</th>
                        <th>Editing</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.instructorList()}
                    </tbody>
                </table>
            </div>
        )
    }
}