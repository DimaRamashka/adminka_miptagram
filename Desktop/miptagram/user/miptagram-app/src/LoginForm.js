import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button'


class LoginForm extends Component {


state={
}


   

  render() {
    let styleforfields = {paddingLeft: '5px', margin: '10px', borderRadius: '4px', height: '3vh', width: '90%', fontSize: '2vh'}

    return (
      <Shadow2>
      <Main className="App" >
      <div style={{marginTop: '25%', overflow: 'hidden', fontStyle: 'italic', fontSize: '25px'}}>
        <p> {this.props.message} </p>
        <input id='login' type='text' style={styleforfields}/>
        <input id='pass' style={styleforfields} type='password'/>
        <div>
          <Button appearance='primary' onClick={() => 
          {
            let log = document.getElementById('login').value;
            let pass = document.getElementById('pass').value;
            console.log(log, pass)
            this.props.sendDataForSign(log, pass)
          }}> Submit  </Button>
        </div>  
      </div>  
      </Main>
      </Shadow2>
    );
  }
}

const Shadow2 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(128,128,128, 0.7);
  z-index: 100;
`;

const Main = styled.div`
  z-index: 2;
  position: fixed;
  width: 400px;
  height: 540px;
  top: 20%;
  left: 39%;
  background: rgba(256,256,256,1);
  border-radius: 3px;
  box-shadow: 0 0 2px grey;
  z-index: 101;
`;



export default LoginForm;