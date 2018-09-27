import React, { Component } from 'react';
import Parse from 'parse';
import styled from 'styled-components';
import List from './List';
import Order from './Order';

import Spinner from '@atlaskit/spinner'

class App extends Component {


 
  
  state={
    orders: undefined,
    chosenOrder: undefined,
    logged: false,
    error: false
  }
  
  componentDidMount(){
    Parse.initialize('ts5Lq50Tr1zgRATMC3hbjezDA3uDyi0b9fJf3ijV', 'ruLlVEq1J54FpxJBbkSOlfl9Nk220c6PT6YHCQZp');
    Parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.User.current() ?
      this.setState({
        logged: true
      })
    : null }
  

  

  
     
  render() {
    let {orders, loading} = this.state; 
    if(this.state.logged === true) {
      if(this.state.orders === undefined){
        Parse.Cloud.run('getTableOrders',{},
        {success:
          (rslt) => {
            this.setState({
              logged: true,
              orders: rslt.reverse()
            })
          },
        error: 
        (err) => {
          console.log(err)
        } 
        })

      
      }
      return (    
      <div> 
       
        {this.state.chosenOrder !== undefined ?
          <Order photos={this.state.chosenOrder} photoType={this.state.photoType}/>
        :  
        <div>
          {this.state.orders !== undefined ?
            <List table={this.state.orders} onChosen={
              (order, type) => {
                this.setState({
                  chosenOrder: order,
                  photoType: type
                })
              }
            }/>
          : null }
        </div>
        }
        </div> 
      );
    }
    if(this.state.logged === false) {    
    return(
      <Forma>
        <Div2>
        
        <Div> <h2> Войдите как Admin </h2> </Div>
        
        <Div>
        Login:
          <input id='login'/>
        </Div>
        <Div>
        Password:    
        <input type="password" id='pass'/>
        </Div>
        <Div>
        <button onClick={()=>{
          let login = document.getElementById('login').value;
          let pass = document.getElementById('pass').value;

          Parse.User.logIn(login, pass).then(
            (results) => {
                this.setState(
                  {
                    logged: true
                  }
                )
            },
            (error) => {
                console.log('User doesn`t exist')
            }
          )
          
        }}>
          Submit
        </button>  
        </Div>
        </Div2>
      </Forma>
    );
  }
     
    
  }
}
const Div2 = styled.div`
  position: realtive;
  margin: auto;
  height: 40%;
  display: inline;
  vertical-align: 50%;
`;
const Div = styled.div`
  margin: auto;
  margin-top: 15px;
`;
const Forma = styled.div`
  position: absolute;
  width: 50vw;
  height: 40vh;
  top: 20vh;
  left: 25vw;
  background-color: whitesmoke;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: center;
`;

export default App;
