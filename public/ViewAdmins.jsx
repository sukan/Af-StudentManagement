import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const Admins = (props)=>(
    <tr>
        <td>{props.admins.admin_name}</td>
        <td>{props.admins.admin_empno}</td>
        <td>{props.admins.email}</td>
        <td>{props.admins.faculty}</td>
        <td>
            <Link to={"/admin"}>Edit</Link>
        </td>
    </tr>

);

export default class ViewAdmins extends Component {
    constructor(props){
        super(props);
        this.state={admins:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:8083/admin/all').then(res=>{
            this.setState({admins:res.data});
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }


    adminList()
    {
        return this.state.admins.map((current,i)=>{
            return <Admins admins = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Admins</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Admin Name</th>
                        <th>Employee Number</th>
                        <th>Email</th>
                        <th>Faculty</th>
                        <th>Editing</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.adminList()}
                    </tbody>
                </table>
            </div>
        )
    }
}