import React,{Component} from 'react';
import axios from 'axios';

const Marks = (props)=>(
    <tr>
        <td>{props.stu.file}</td>
        <td>{props.stu.marks}</td>
    </tr>
);

export default class ViewMarks extends Component {
    constructor(props){
        super(props);
        this.state={grades:[]}
    }

    componentDidMount() {
        // axios.get('http://localhost:3000/book/all').then((req,res)=>{
        //     console.log(res.data);
        //     res.send(res.data);
        // });
        this.getdata()

    }
    getdata(){
        axios.get('student/all')
            .then(data => {// <== Change is her
                console.log(data.data);
                this.state.grades.push(data.data);
            })
    }


    gradestList()
    {
        return this.state.grades.map((current,i)=>{
            return <Marks stu = {current} key={i}/>;

        })

    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h3>Assignments Marks</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Marks</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.gradestList()}
                    </tbody>
                </table>
            </div>
        )
    }
}