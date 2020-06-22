import React, {Component} from 'react';
import './comment.css';

class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            message:''
          
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



   handleSubmit = (event) => {
       event.preventDefault()
       const data = this.state
       
       this.setState(
            { message : this.state.value,
             value:'' }
        );
        console.log(data)
   }

   handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            value: event.target.value
        })
   }

  render(){  
      const{value, message} = this.state; 
      
    return (
        <div >
            <h1>Type a message, then press Enter or "Send Message" to view</h1>
            
            <form onSubmit={this.handleSubmit}>
                <p><input type='text' placeholder = 'Your Message' value = {this.state.value}  onChange={this.handleInputChange} id = 'input'/></p>
                <p><button>Send Message</button></p>
            </form>
           <div id = 'message'> <p> Message is : {message}</p> </div>   
           <footer></footer>        
        </div>
      );
  }
}
export default Comment;
