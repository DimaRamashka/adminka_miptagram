import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';





class MiptogramPhoto extends Component {

    
    

 state={
    url: '',
    text: '',
    quant: this.props.quant, 
    x: this.props.x,
    y: this.props.y
 }   



  render() {
      let url=this.props.url;
      let onChoose = this.props.onChoose;
    return (
        <MainDiv onClick={() => {onChoose()}}>
            <PhotoDiv style={{backgroundImage: `url(${url})`,backgroundRepeat: 'no-repeat',
            backgroundSize: `${this.props.width*87*X}px`, backgroundPosition: `-${this.props.x*87*X}px -${this.props.y*87*X}px`}}>
            </PhotoDiv>  
            <ForText style={{fontFamily: `${this.props.font}`}}>
                {this.props.text}
            </ForText> 
            <Watermark> 
                miptagram.ru    
            </Watermark>   
            
        </MainDiv>
        
        
    );
  }
}
const X = 5;

const PhotoDiv = styled.div`
  position: relative;
  margin: auto;
  margin-top: ${X*6.5}px;
  margin-bottom: ${X*2.5}px;
  width: ${X*87}px;
  height: ${X*87}px;
`;

// const ForQuantity = styled.div`
//   position: absolute;
//   top: ${X*4}px;
//   text-align: left;
//   right: ${X*5}px;
//   width: ${X*10}px;
//   height: ${X*8}px;
//   color: #C0C0C0;
//   padding: ${X*2}px;
//   background-color: whitesmoke;
//   border-radius: ${X*3.5}px;
//   z-index: 10;
// `;

const ForText = styled.div`
  position: relative;
  margin: auto;
  text-align: left;
  margin-bottom: ${X*2.5}px;
  width: ${X*87}px;
  height: ${X*10}px;
  font-size: ${X*3.5}px
`;

const Watermark = styled.div`
  position: relative;
  margin: auto;
  text-align: right;
  width: ${X*87}px;
  font-size:${X*2}px;
  color: #DCDCDC;
`;

const MainDiv = styled.div`
  display: block;
  background-color: white;
  width: ${X*100}px;
  height: ${X*117}px;
  margin: auto;
  margin-top: 45px;
  margin-bottom: 45px;
  border: 1px solid #DCDCDC;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1); 
  :hover{
    box-shadow: 0 0 8px rgba(0,0,0,0.3); 
    cursor: pointer;
  }
`;

export default MiptogramPhoto;