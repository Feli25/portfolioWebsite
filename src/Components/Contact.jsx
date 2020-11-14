import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
import mailbox from '../globals/mailBox.jpg';
import emailjs from 'emailjs-com';
import Recaptcha from "react-recaptcha";

const mapStateToProps = state => ({
  ...state
})


class Contact extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
   submitContact = () =>{
    var {fname, lname, mail, subject, message} = this.props.simpleReducer
    var emailSplit = mail.split("")
    if(!fname || !lname || !mail || !subject || !message || !emailSplit.includes("@") || !emailSplit.includes(".")){
      this.props.dispatch({type:"UPDATE_STORE", name:"errMessage", value:"Please fill out all the fields correctly!"})
      return;
    }
    this.props.dispatch({type:"UPDATE_STORE", name:"errMessage", value:"Sending...."})
    let templateParams = {
      subject: subject,
      message: `
      <h2>From ${fname} ${lname},</h2>
      <p>Email: ${mail}</p>
      <p>Message: ${message}</p>`}

    emailjs.send('gmail', 'contactformportfolio', templateParams, "user_AOqEsp5L6NpkcR7qV1jTn")
      .then(response=> {
        console.log('SUCCESS!', response.status, response.text);
        this.props.dispatch({type:"UPDATE_WITH_STATE", newState:{
          fname:"",
          lname:"",
          mail:"",
          subject:"",
          message:"",
          errMessage:"Successfully submitted!"
        }})
      })
      .catch(err=>{
        console.log('FAILED...', err);
        this.props.dispatch({type:"UPDATE_WITH_STATE", newState:{
          errMessage:"Something went wrong..."
        }})
      })
  }
  verifiedCaptcha=(response)=>{
    if(response){
        this.props.dispatch({type:"UPDATE_STORE", name:"captchaVerified", value:true})
    }
  }
  render() {
    var {fname, lname, mail, subject, message, errMessage, captchaVerified} = this.props.simpleReducer
      return(
        <section id="contact">
          <div class="title">
            <h2>Contact</h2>
          </div>
          <div className="contact">
            <div className="wrapForm">
              <h3>Contact</h3>
              <p>For all pricing or faq, please fill out the form below</p>
              <div>
                <p>Name <span>&#42;</span></p>
                <div className='formNameWrap'>
                  <input placeholder="First Name" name="fname" value={fname} onChange={this.updateStore}/>
                  <input placeholder="Last Name" name="lname" value={lname} onChange={this.updateStore}/>
                </div>
              </div>
              <div>
                <p>Email Address <span>&#42;</span></p>
                <input placeholder="Email Address" name="mail" value={mail} onChange={this.updateStore}/>
              </div>
              <div>
                <p>Subject <span>&#42;</span></p>
                <input placeholder="Subject" name="subject" value={subject} onChange={this.updateStore}/>
              </div>
              <div>
                <p>Type your message <span>&#42;</span></p>
                <textarea placeholder="Message" name="message" value={message} onChange={this.updateStore}/>
              </div>
              <Recaptcha
                sitekey="6LcTrPgUAAAAAFfn6TLUm0erW9CTzXPXqnZ9Zvrr"
                render="explicit"
                verifyCallback={this.verifiedCaptcha}
                onloadCallback={()=>{console.log("HAS LOADED CAPTCHA")}}
              />
              <div>
                <button onClick={this.submitContact}
                disabled={!captchaVerified}
                >Submit</button>
              </div>
              {errMessage && <div>{errMessage}</div>}
            </div>
            <div className="contactImg">
              <img src={mailbox} className='img' alt=""/>
            </div>
          </div>
        </section>
      ); 
    }
 }
 

export default connect(mapStateToProps)(Contact);