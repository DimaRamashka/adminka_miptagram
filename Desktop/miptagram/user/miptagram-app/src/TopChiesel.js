import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import './App.css';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import OrderInfo from './OrderInfoPanel';
import { relative } from 'upath';
import ReactFontFace from 'react-font-face'  
 
class TopChiesel extends Component {
  state={
    signState: this.props.signState
  }

  

  prizeAndQuantity(photos){
    let quantity = photos ? photos.reduce((sum, p) => (+sum + +p.quant), 0) : 0;
    let photoblock = quantity < 5 ? 4: quantity < 10 ? 9: quantity < 13 ? 12: quantity < 17 ? 16: quantity < 21 ? 20: quantity;
    let prize =(quantity === 0 ? 0 :quantity < 5 ? 100: quantity < 10 ? 180: quantity < 13 ? 250: quantity < 17? 300: quantity < 21? 400: `${quantity*17}`); 
    return(
       
        [quantity, prize, photoblock]
    )
  }
  
  render() {
    let messageTrigger = this.props.messageTrigger;
    let onBack = this.props.onBack;
    let [quantity, prize, photoblock] = this.prizeAndQuantity(this.props.photos);
    let onMakeOrder = this.props.onMakeOrder;
    let dropzonestyle={display: 'inline', fontSize: '15px', verticalAlign: 'middle', width: '140px', height: '30px'}
    let style_Photos_Or_Stickers={backgroundColor: '#DCDCDC'}
    return (
      
      <div style={{position: 'relative', width: '1000px', height: '0', margin: 'auto'}}>
      { this.props.showOrderData === true ?
      <div style={{position: 'fixed', zIndex: 101, backgroundColor: 'whitesmoke'}}>
          <OrderInfo photos={this.props.photos} logged={this.props.logged}
           goodbye={() => {
             this.props.showGoodBye()
           }}
           errorInput={() => {
             this.props.errorInput()
           }}
           remindToLog={() => {
             this.props.remindToLog()
           }}
           onBack={() => {
            onBack();
            
          }}/>
        </div> : null
        }
     <div style={{position: 'relative', width: '200px', height: '1px', }}> 
    <LeftPart>
    <div style={{position: 'relative', margin: 'auto', top: '10px', backgroundColor: 'white', borderRadius: '4px', width: '100%', padding: '0.05px 0', boxShadow : '0 0 2px rgba(0,0,0,0.5)'}}>
      <InternalDiv><span> Количество: {quantity}</span> <div style={{color: '#413E3E', display: 'inline-block', Position: 'relative'}}>/ {photoblock} </div> </InternalDiv>
      <InternalDiv> Цена: {prize} руб </InternalDiv>
    </div>   
      {this.props.showOrderData === true ?
        null
        : 
        <div style={{top: '30px', paddingTop: '30px', position: 'relative', borderTop: '1px solid grey '}}>
          <SpanInBut  onClick={() => {quantity < photoblock ? messageTrigger() : onMakeOrder()}}> 
          <img  style={{verticalAlign: 'middle', display: 'inline-block', marginTop: '2px', marginRight:'10px'}} border={'0px'} height={'30px'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/600px-Green_check.svg.png'}/>              
            {'    '}Создать заказ 
            
          </SpanInBut> 
          <SpanInBut>
            <Dropzone style={dropzonestyle} onDrop={this.props.onAdd}>
            
              
              <img  style={{verticalAlign: 'middle', display: 'inline-block', marginTop: '2px', marginRight:'10px'}} border={'0px'} height={'30px'} src={'http://image.flaticon.com/icons/svg/65/65225.svg'}/>              
              {'    '} Фото с компьютера
            </Dropzone>
            </SpanInBut>
            <SpanInBut   onClick={() => {this.props.showInst()}}> 
            
            <img style={{verticalAlign: 'middle',display: 'inline-block', marginTop: '2px', marginRight:'10px'}} border={'0px'} height={'32px'} src={'https://www.freeiconspng.com/uploads/instagram-icon-png-transparent--danasrfb-top-26.png'}/>             
            {'              '} Фото из Instagram
            </SpanInBut>
          
        </div>
      }
    </LeftPart>
     
    </div>
    <div style={{position: 'relative', width: '700px', height: '100px'}}>
    </div>
    <div style={{position: 'relative', width: '200px', height: '1px', left: '800px'}}>
    <RightPart>
      { this.props.photoType === 'photos' ?
      <div>
      <SpanInBut style={style_Photos_Or_Stickers}>
        <img  style={{verticalAlign: 'middle', display: 'inline-block', marginTop: '2px', marginRight:'8px'}} border={'0px'} height={'30px'} src={'https://cdn3.iconfinder.com/data/icons/audiovisual-production-outlined-pixel-perfect/64/vp-07-512.png'}/> 
        {'   '} Фото 10x17 
      </SpanInBut>
      <SpanInBut> 
      <img  style={{verticalAlign: 'middle', display: 'inline-block', marginTop: '2px', marginRight:'8px'}} border={'0px'} height={'30px'} src={'https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/stickers-512.png'}/> 
       {'   '} Стикеры 6x6
      </SpanInBut>
      </div>
      :
      <div>
        <SpanInBut >
          <img  style={{verticalAlign: 'middle', display: 'inline-block', marginTop: '2px', marginRight:'8px'}} border={'0px'} height={'30px'} src={'https://cdn3.iconfinder.com/data/icons/audiovisual-production-outlined-pixel-perfect/64/vp-07-512.png'}/> 
          {'   '} Фото 10x17 
        </SpanInBut>
        <SpanInBut style={style_Photos_Or_Stickers}> 
          <img  style={{verticalAlign: 'middle', display: 'inline-block', marginTop: '2px', marginRight:'8px'}} border={'0px'} height={'30px'} src={'https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/stickers-512.png'}/> 
          {'   '} Стикеры 6x6
        </SpanInBut>
      </div>
      }
    </RightPart>
    </div>  
      <div style={{zIndex: 99, position: 'fixed',top: '0', width: '100%', height: '30px', left: '0px', backgroundColor: 'whitesmoke'}}>
      </div>
      <MainWrapper>
        <MiptagramWrapper>  
          <a href="http://miptagram.ru" style={{textDecoration:'none', color: 'white'}}> 
            MIPTAGRAM
          </a> 
        </MiptagramWrapper> 
        {this.props.signState === 'Регистрация' ? 
        <div style={{textAlign: 'right', width: '20%', display: 'inline-block', position: 'relative', left: '50%'}}>
          <span>
            <Log onClick={this.props.signStart}> {this.props.signState} </Log>
            <Log onClick={this.props.loginStart}> Вход </Log>
          </span>
        </div>
        :
        <div style={{textAlign: 'right', width: '10%', display: 'inline-block', position: 'relative', left: '50%'}}>
        <span>
        <Log onClick={this.props.signStart}> {this.props.signState} </Log>
        </span>
        </div>
        }

        
      </MainWrapper>
      
      </div>
    );
  }
}

const MainWrapper = styled.div`
  position: fixed;
  text-align: left;
  top: 0.8%;
  left: 0.7%;
  width: 98.6%;
  background-image: url(http://www.brandgradients.com/img/backgrounds/instagram-hex-colors-gradient-background.png);
  background-size: 100% 150% ; 
  font-weight: bold;
  font-size: 21px;
  color: whitesmoke;
  padding: 2px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); 
  z-index: 100;
`;

const MiptagramWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin: auto;
  height: 23px;
  left: 10%;
  font-family: Lobster;
  z-index: 120;
  :hover{
    cursor: pointer;
  }
`;

const InternalDiv = styled.div`
  position: relative;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
  text-align: center;
  font-family: Lobster;
  font-size: 18px;
`;

const Log = styled.div`
  position: relative;
  display: inline-block;
  font-family: lobster ;
  padding: 5px;
  :hover{
    cursor: pointer;
    box-shadow: 0 0 0.5px black;
    border-radius: 1.5px;
  }
`;

const SpanInBut = styled.div`
  position: relative; 
  text-align: left;
  vertical-align: middle;
  opacity: 0.9;
  margin: 0 auto;
  color: black	;
  width: 97%;
  height: 40px;
  border-radius: 2px;
  padding-left: 8px;
  padding-top: 5px;
  font-size: 15px;
  font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif  ;
  margin-top: 6px;
  margin-bottom: 6px;
  z-index: 82;
  :hover{
    cursor: pointer;
    background-color: #DCDCDC;
  }
  `;




const LeftPart = styled.div`
  top: 60px;
  width: 190px;
  height: 100%;
  position: fixed;
  font-size: 13px;
  display: block;
  z-index: 81;
  margin-left: 10px;
  backgroundColor: whitesmoke;
  
`;

const RightPart = styled.div`
  top: 69px;
  width: 220px;
  height: 400px;
  position: fixed;
  padding
  font-size: 13px;
  display: block;
  z-index: 81;
  background-color: white;
  box-shadow: 0 0 2px rgba(0,0,0, 0.4);
  border-radius: 4px;
  padding: 10px 0;
`;
 
export default TopChiesel;