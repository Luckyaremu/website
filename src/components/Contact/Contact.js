import React, { Component } from 'react'
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


export default class contact extends Component {
  state={
    firstname:'',
    lastname:'',
    email:'',
    message:'',
    sent:false
  }
  
  
  handleFirstname=(e)=>{
    this.setState({
      firstname:e.target.value
    })
  }
  
  
  handleLastname=(e)=>{
    this.setState({
      lastname:e.target.value
    })
  }
  
  
  handleEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  
  
  handleMessage=(e)=>{
    this.setState({
      message:e.target.value
    })
  }


formSubmit =(e)=>{
  e.preventDefault();

  let data = {
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    email: this.state.email,
    message: this.state.message
  }

  axios.post('/api/forma', data)
  .then(res=>{
    this.setState({
      sent:true,  
    }, this.resetForm())
  }).catch(()=>{
    console.log("message not sent")
  })
}


resetForm=()=>{
  this.setState({
    firstname:'',
    lastname:'',
    email:'',
    message:'',
  })

setTimeout(()=>{
  this.setState({
    sent:false
  })
}, 3000)

}
  


  render() {
    return (
      <div className="container1">
        <h6 style={{ fontSize: "1.6em" }}>
              <span className="white"> Lets get in touch! Send me a message </span>
            </h6>
      <form className="container2" onSubmit={this.formSubmit}>
  
    <div className="singleItem">
      <label htmlFor="firstname" span className="white">First Name</label>
      <input type="text" name="firstname" className="firstname" placeholder="enter your first name here"
      value={this.state.firstname}
      onChange={this.handleFirstname}
      />
      </div>
  
  
      <div className="singleItem">
      <label htmlFor="lastname" span className="white">Last Name</label>
      <input type="text" name="lastname" className="lastname" placeholder="enter your last name here" 
       value={this.state.lastname}
       onChange={this.handleLastname}/>
      </div>
  
          
    <div className="singleItem">
      <label htmlFor="email" span className="white">Email</label>
      <input type="text" name="email" className="email" placeholder="enter your Email here" 
       value={this.state.email}
       onChange={this.handleEmail}
       required
      />
      </div>
  
      <div className="textArea singleItem">
      <label htmlFor="message" span className="white"> Message </label>
      <textarea name="message" id="" cols="30" rows="5" placeholder="your message here"
       value={this.state.message}
       onChange={this.handleMessage}
      ></textarea>
      </div>
  
      <div className={this.state.sent ?"msg msgAppear":"msg"}> Message has been sent </div>
      <div className="btn">
        <button type="submit"> Submit </button>
      </div>
      </form>
    </div>
    )
  }
}
