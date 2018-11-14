import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Button from '@atlaskit/button';





class Question extends Component {



 state={

 }   



  render() {
      let onHide = this.props.onHide;
      let onContinue = this.props.onContinue;
    return (<div>
        <MainDiv >
        </MainDiv>
            <Message> 
               <h2> {this.props.message} </h2>
               <ForButtons>
                <span> <Button appearance='primary' onClick={() => {onHide();}}> Добавить еще </Button> </span>
                <span> <Button appearance='warning' onClick={() => {onContinue();}}> Продолжить оформление </Button> </span>
            </ForButtons>
            </Message>  
            </div>
            
        
    );
  }
}

const Message = styled.div`
    z-index: 1001;
    top: 30%;
    left: 20%;
    margin: auto;
    position: fixed;
    width: 60%;
    height: 20%;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    background-color: black;
    color: whitesmoke;
    opacity: 0.9;
`;

const ForButtons = styled.div`
    top: 80%;
    position: relative; 
    display: inline;
    margin: auto;
`;

const MainDiv = styled.div`
    animation-name: fire;
    animation-duration: 0.2s;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(0,0,0, 0.7);
    @keyframes  fire {
        from { opacity: 0.1; }
        to { opacity: 0.7 }
    }
`;

export default Question;