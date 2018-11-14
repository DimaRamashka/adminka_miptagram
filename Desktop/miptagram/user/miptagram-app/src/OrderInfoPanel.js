import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import Parse from 'parse'

class OrderInfo extends Component {
  state={
      k: undefined,
      tel: ''
  }

  
  componentDidMount(){
    Parse.initialize('ts5Lq50Tr1zgRATMC3hbjezDA3uDyi0b9fJf3ijV', 'ruLlVEq1J54FpxJBbkSOlfl9Nk220c6PT6YHCQZp')
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  handleChangeTel(event) {
        
        event.target.value[event.target.value.length-1] === '1' || event.target.value[event.target.value.length-1] === '2' || 
        event.target.value[event.target.value.length-1] === '3' || event.target.value[event.target.value.length-1] === '4' || 
        event.target.value[event.target.value.length-1] === '5' || event.target.value[event.target.value.length-1] === '6' ||
        event.target.value[event.target.value.length-1] === '7' || event.target.value[event.target.value.length-1] === '8' || 
        event.target.value[event.target.value.length-1] === '9' || event.target.value[event.target.value.length-1] === '0' ||
        event.target.value[event.target.value.length-1] === undefined ? 
        this.setState({
            tel: event.target.value
        }) : null
    
  }

  updateOrderTable(data) {
      
    return new Promise 
    ( 
        (resolve, reject) => { 
            Parse.Cloud.run('createOrder', {data: data},{
            success:
                (res) => {                
                    localStorage.removeItem('miptagramOrder');
                    resolve()
                },
                error: 
                (err) => {
                    console.log('err');
                    reject()
                }
            })
        }
    )    
    // let Obj = Parse.Object.extend('Orders');
    // let obj = new Obj();
    // obj.set(data);
    // obj.save().then((res) => {
    //     console.log(res);
    //     localStorage.removeItem('miptagramOrder');
    // })
    
  }

  render() {
    let styleForHostel = {backgroundColor: '#87CEFA'};
    let hostels = ['1', '2', '3', '4', 'профилак', '6', '7', '8', '9', '10', '11', '12'];
    let onBack = this.props.onBack;
    return (
        <BlackWrapper >
        <MainDiv>
                      
        <InfoBlock style={{margin: '7px'}}>
           <ForString> {'Ваше имя:   '} </ForString>
            <input id='name' type='text'/>
        </InfoBlock>
        <div style={{display: 'inline', width: '110px', position: 'relative'}} > 
         {'Общежитие:    '}
        </div> 
        <div style={{display: 'inline', width: '150px',position: 'relative'}} >  
        {
            hostels.map((hostel, k) => {
                let styleButton=(k === this.state.k) ?  styleForHostel :{};
                return(
                <Hostel style={styleButton} key={k} onClick={() => {this.setState({k: k})}}>
                    {hostel}
                </Hostel>
                )    
            })
        }   
        </div>
        <InfoBlock >
            <ForString>   {'Комната:   '} </ForString>
            <input id='room' type='text'/>
        </InfoBlock>
        <InfoBlock >
            <ForString> {'Телефон: +7 '}</ForString>
            <input  id='tel' type='text' maxLength="10" value={this.state.tel} onChange={(event) => {this.handleChangeTel(event)}}/>
        </InfoBlock>    
        <InfoBlock>
            <ForString> {'Комментарий:'}</ForString>
            <textarea id='comment'  cols='20' style={{height: '130px', borderRadius: '4px'}}/>
        </InfoBlock> 
        <InfoBlock>
                <ForString> 
                <span> <Button appearance='primary' onClick={() => {
                        let data = {
                                    photos: this.props.photos,
                                    name: document.getElementById("name").value,
                                    hostel: this.state.k,
                                    room: document.getElementById("room").value,
                                    tel: this.state.tel,
                                    comment: document.getElementById("comment").value
                                    }
                        data.tel.length < 10 || data.name === undefined || data.hostel === undefined ?
                        this.props.errorInput() :
                        this.props.logged !== 'Регистрация' ?                       
                           
                                this.updateOrderTable(data).then( () => {
                                    this.props.goodbye()    
                                }
                                )
                            
                        : this.props.remindToLog()                        
                    }}> Подтвердить </Button>
                 </span>
                   <span> <Button appearance='danger' onClick={() => {onBack()}}> Вернуться  </Button> </span>
                </ForString>
            </InfoBlock>    
        </MainDiv>
        </BlackWrapper>
    );
  }
}
const InfoBlock = styled.div`
    margin: auto;
    margin-top: 15px;
    vertical-align: top;
`;

const BlackWrapper = styled.div`
    animation-name: blacking;
    animation-duration: 0.4s;
    position: fixed; 
    left: 0px; 
    top: 0px; 
    width: 100%; 
    height: 100%; 
    z-index: 100;
    background: rgba(0,0,0, 0.7);
    @keyframes  blacking {
        from { rgba(0,0,0, 0); }
        to { rgba(0,0,0, 0.7); }
      }
`;

const ForString = styled.div`
    margin: 5px;
    width: 90%;
    display: inline-block;
    vertical-align: top;
`;
const Hostel = styled.div`
    position: relative;
    display: inline-block;
    padding: 7px;
    margin: 3px;
    margin-top: 7px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #DCDCDC;
    cursor: pointer;
    :hover{
        opacity: 0.6;
    }
`;

const MainDiv = styled.div`
    position: relative;
    width: 450px;
    margin: auto;
    margin-top: 10vh;
    padding-top: 50px;
    animation-name:expand;
    animation-duration: 0.4s;
    font-weight: bold;
    font-size: 18px;
    font-family: Lobster;
    height: 70%; 
    border-radius: 3px;
    overflow: auto;
    background: rgba(256,256,256, 0.9);
    @keyframes  expand {
      from { margin-top: -50vh; }
      to { margin-top: 10vh; }
    }
`;
 
export default OrderInfo;