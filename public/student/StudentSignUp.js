import React, {Component} from 'react';
import '../../styles/common/Form.css';
import ReactDOM from "react-dom";
import StudentLogin from "../student/StudentLogin";

class StudentSignUp extends Component {

   constructor(props){
       super(props);

       this.state={
           username:'',
           password:'',
           securityQuestion:'',
           securityAnswer:'',
           phone:'',
           fullName:'',
           email:'',
           formErrors:{
               email:'',
               password:'',
               securityQuestion:'',
               securityAnswer:'',
               phone:'',
               fullName:''

           },
           usernameValid:false,
           passwordValid:false,
           securityQuestionValid:false,
           securityAnswerValid:false,
           phoneValid:false,
           fullNameValid:false,
           emailValid:false,
           formValid:false
       }

   }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }


    validateField(fieldName,value){
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
        let securityQuestionValid = this.state.securityQuestionValid;
        let securityAnswerValid = this.state.securityAnswerValid;
        let phoneValid = this.state.phoneValid;
        let fullNameValid = this.state.fullNameValid;
        let emailValid = this.state.emailValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.length ==10;
                fieldValidationErrors.username = usernameValid ? '': ' Enter IT number correctly';
                break;

            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' Password is too short(Min - 6 Characters)';
                break;

            case 'securityQuestion':
                securityQuestionValid = value.length >= 6;
                fieldValidationErrors.securityQuestion = securityQuestionValid ? '': ' Security Question is invalid (Min - 6 Characters)';
                break;

            case 'securityAnswer':
                let letterNumber = /^[0-9a-zA-Z]+$/;
                securityAnswerValid = value.length >= 1
                fieldValidationErrors.securityAnswer = securityAnswerValid ? '': 'Security Answer is invalid';
                break;

            case 'phone':
                phoneValid = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i);
                fieldValidationErrors.phone = phoneValid ? '': 'Phone Number is invalid';
                break;

            case 'fullName':
                let letters = /^[A-Za-z]+$/;
                fullNameValid = value.length >= 6;
                fieldValidationErrors.fullName = fullNameValid ? '': 'Full Name is invalid';
                break;

            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
                break;

            default:
                break;

        }

        this.setState({
            formErrors:fieldValidationErrors,
            usernameValid:usernameValid,
            passwordValid:passwordValid,
            securityQuestionValid:securityQuestionValid,
            securityAnswerValid:securityAnswerValid,
            phoneValid:phoneValid,
            fullNameValid:fullNameValid,
            emailValid:emailValid
        },this.validateForm);

   }

   validateForm(){
       this.setState({formValid:this.state.usernameValid && this.state.passwordValid && this.state.securityQuestionValid &&  this.state.securityAnswerValid && this.state.phoneValid  && this.state.fullNameValid && this.state.emailValid});
        console.log(this.state.formValid);
   }

    directToStudentLogin = (e) => {
        e.preventDefault();
        ReactDOM.render(<StudentLogin/>,document.getElementById('root'))
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const fullName = this.refs.fullName.value;
        const username = (this.refs.username.value).toUpperCase();
        const password=  this.refs.password.value;
        const securityQuestion=this.refs.securityQuestion.value;
        const securityAnswer = this.refs.securityAnswer.value;
        const phone = this.refs.phone.value;
        const email=this.refs.email.value;



        console.log(fullName);
        console.log(username);
        console.log(password);
        console.log(securityQuestion);
        console.log(securityAnswer);
        console.log(phone);
        console.log(email);


        fetch('http://localhost:5000/api/student/' + username,{
            method :'GET',
            headers:{'Content-Type' : 'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data=>{
            let student = JSON.stringify(data.student);
            console.log(student);

            if (student != '[]'){
                this.setState({
                    formErrors: { username : "IT number is already in use"}
                })
            } else{

                let data = {
                    "fullName":fullName,
                    "username":username,
                    "password":password,
                    "securityQuestion":securityQuestion,
                    "securityAnswer":securityAnswer,
                    "phone":phone,
                    "email":email
                }
                fetch('http://localhost:5000/api/student',{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers:{"Content-Type" : "application/json"}
                }).then(res=>{
                    return res.json();
                }).then(data=>{
                    console.log(data);

                    console.log(data.addedObject.username)

                    alert(`Student with username :${data.addedObject.username}  was successfully created`);


                    ReactDOM.render(<StudentLogin/>,document.getElementById('root'))
                    // this.props.history.push('/CreateInstructor')
                    // browserHistory.push('/CreateInstructor')

                    // window.location.replace("http://localhost:3000/CreateInstructor")

                    // browserHistory.goBack()

                    // const { history } = this.props;
                    // history.push("/CreateInstructor")

                    // const history = createHashHistory()
                    // history.push("/CreateInstructor")
                }).catch(err=>{
                    console.log(`Error : ${err}`);
                });
            }
        }).catch(err=>{
            console.log(`Error : ${err}`);
        })



    }



    render() {
        return (
            <div>
                <div className="backgroundImageWithMargin" >
                    <br/><br/><br/><br/><br/><br/>
                    <form className="borderStyle demoForm">

                        <h3 className="display-4 TextAlign">Student Sign Up</h3>
                        <br/>

                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text"  className="form-control" name="fullName"
                                   placeholder="Full Name"
                                   value={this.state.fullName}
                                   onChange={this.handleUserInput}
                                   ref="fullName"
                            />
                            <span className="help-block font-italic text-danger">{this.state.formErrors.fullName}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text"  className="form-control" name="phone"
                                   placeholder="Phone"
                                   value={this.state.phone}
                                   onChange={this.handleUserInput}
                                   ref="phone"
                            />
                            <span className="help-block font-italic text-danger">{this.state.formErrors.phone}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"  className="form-control" name="email"
                                   placeholder="Email"
                                   value={this.state.email}
                                   onChange={this.handleUserInput}
                                   ref="email"
                            />
                            <span className="help-block font-italic text-danger">{this.state.formErrors.email}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"  className="form-control" name="username"
                                   placeholder="Username"
                                   value={this.state.username}
                                   onChange={this.handleUserInput}
                                   ref="username"
                            />
                            <span className="help-block font-italic text-danger">{this.state.formErrors.username}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" required className="form-control" name="password"
                                   placeholder="Password"
                                   value={this.state.password}
                                   onChange={this.handleUserInput}
                                   ref="password"
                            />
                            <span className="help-block font-italic text-danger">{this.state.formErrors.password}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="securityQuestion">Security Question</label>
                            <input type="text"  className="form-control" name="securityQuestion"
                                   placeholder="Security Question"
                                   value={this.state.securityQuestion}
                                   onChange={this.handleUserInput}
                                   ref="securityQuestion"
                            />
                            <span className="help-block font-italic text-danger">{this.state.formErrors.securityQuestion}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="securityAnswer">Security Answer</label>
                            <input type="text"  className="form-control" name="securityAnswer"
                                   placeholder="Security Answer"
                                   value={this.state.securityAnswer}
                                   onChange={this.handleUserInput}
                                   ref="securityAnswer"
                            />
                            <span className="help-block font-italic text-danger">{this.state.formErrors.securityAnswer}</span>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.onSubmit}>SignUp</button>
                        <button  className="btn btn-primary btn-outline-light ml-3 "  onClick={this.directToStudentLogin}>Student Login</button>
                    </form>


                </div>
            </div>

        );
    }
}

export default StudentSignUp;