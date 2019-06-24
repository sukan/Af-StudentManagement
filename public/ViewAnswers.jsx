import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const Answers = (props)=>(
    <tr>
        <td>{props.answers.date}</td>
        <td>{props.answers.file}</td>
        <td>
            <Link to={"/assignment"}>Grading</Link>
        </td>
    </tr>

);

export default class ViewAnswers extends Component {
    constructor(props){
        super(props);
        this.state={answers:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:8083/studentanswer/all').then(res=>{
            this.setState({answers:res.data});
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }


    answerList()
    {
        return this.state.answers.map((current,i)=>{
            return <Answers answers = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Answers</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Submitted Date</th>
                        <th>File Name</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.answerList()}
                    </tbody>
                </table>
            </div>
        )
    }
}