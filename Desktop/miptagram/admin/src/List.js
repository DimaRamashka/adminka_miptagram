import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './icons/change.png';
import Button from '@atlaskit/button';
import Parse from 'parse';

class List extends Component {

 state={
   orderProperty: false,
   status: 'new'
 }

changeOrder = (id, status) => {
 Parse.Cloud.run("changeOrder", {id: id, status: status})
  .then((res) => {
    this.setState({
      orderProperty: false
    })
  })
}
     
  render() {
      let list = this.props.table;
      console.log(list)
    return (  
      <div style={{ position: 'relative', width: '99.8vw', left: 0, minWidth: '1500px', top: '50px'}}> 
        <OrderWrapper1>
            <OrderProperty style={{width: '10%'}}> ID </OrderProperty>
            <OrderProperty> Дата </OrderProperty>
            <OrderProperty> VK </OrderProperty>
            <OrderProperty> Тип </OrderProperty>
            <OrderProperty > Телефон </OrderProperty>
            <OrderProperty> Общежитие </OrderProperty>
            <OrderProperty> Комната </OrderProperty>
            <OrderProperty style={{width: '9%'}}> Имя </OrderProperty>
            <OrderProperty style={{width: '15%'}}> Комментарий </OrderProperty>
            <OrderProperty> Конверт </OrderProperty>
            <OrderProperty> Статус </OrderProperty>
          </OrderWrapper1> 
        {list.map((order, k) => {
        let key = k;
        return(
          <div key={key}>
          <button style={{ marginTop: '5px', position: 'absolute', padding: 0, width: '40px',  display: 'inline-block' , verticalAlign: 'middle', left: '1.5%', border: '0px solid black', borderRadius: '8px', alignItems: 'center'}} onClick={() => {
            this.setState({
              orderProperty: order,
              status: order.attributes.status
            })

          }}> <img src={logo} height='30px'/> </button>
          <OrderWrapper style={ order.attributes.status === 'Распечатан' ? {backgroundColor: '#6495ED'}:
            order.attributes.status === 'Доставлен' ? {backgroundColor: 'green'}: order.attributes.status === 'Отменен' ? {backgroundColor: 'red'}: null}  onClick={() => {this.props.onChosen(order.attributes.photos, order.attributes.photoType)}}>
            <OrderProperty style={{width: '10%'}}> {order.id} </OrderProperty>
            <OrderProperty> {order.id} </OrderProperty>
            <OrderProperty> {order.attributes.vk_id} </OrderProperty>
            <OrderProperty> {order.attributes.photoType} </OrderProperty>
            <OrderProperty > {order.attributes.tel} </OrderProperty>
            <OrderProperty> {order.attributes.hostel} </OrderProperty>
            <OrderProperty> {order.attributes.room} </OrderProperty>
            <OrderProperty style={{width: '9%'}}> {order.attributes.name} </OrderProperty>
            <OrderProperty style={{width: '15%'}}> {order.attributes.comment} </OrderProperty>
            <OrderProperty> {order.attributes.convert} </OrderProperty>
            <OrderProperty> {order.attributes.status} </OrderProperty>
          </OrderWrapper> 
          </div>
        );      
        })}
        {this.state.orderProperty !== false ? 
        <Shadow>
          <OrderPage>
            <div style={{width: 'auto', margin: '20px auto ', position: 'relative', fontWeight: 'bold', fontSize: '20px', border: '1px solid whitesmoke', borderRadius: '5px', padding: '15px'}}>
             <p> ID: {this.state.orderProperty.id}  </p>
             <p> VK: {this.state.orderProperty.attributes.vk_id}  </p>
             <p> Hostel: {this.state.orderProperty.attributes.hostel} </p>
             <p> Room: {this.state.orderProperty.attributes.room} </p>
            </div>
            <div style={{ width: '608px', margin: 'auto'}}>
            <Button1 style={this.state.status === 'new' ? {} : {background: 'rgba(1,1,1, 0.311)'}} onClick={() =>{
              this.setState({
                status: 'new'
              })
            }}>
              <p> New </p>
            </Button1>
            <Button2 style={this.state.status === 'Распечатан' ? {} : {background: 'rgba(1,1,1, 0.311)'}} onClick={() =>{
              this.setState({
                status: 'Распечатан'
              })
            }}>
             <p> Распечатан </p>
            </Button2>
            <Button3 style={this.state.status === 'Доставлен' ? {} : {background: 'rgba(1,1,1, 0.311)'}} onClick={() =>{
              this.setState({
                status: 'Доставлен'
              })
            }}>
             <p> Доставлен </p>
            </Button3>
            <Button4 style={this.state.status === 'Отменен' ? {} : {background: 'rgba(1,1,1, 0.311)'}} onClick={() =>{
              this.setState({
                status: 'Отменен'
              })
            }}>
             <p> Отменен </p>
            </Button4>
            </div>
            <div style={{margin: 'auto', paddingTop: '25px', position: 'relative', width: '200px'}}>
            <span> <Button appearance='primary'  onClick={() => {
              this.changeOrder(this.state.orderProperty.id, this.state.status)
            }}>
              Save
              </Button>
            </span>
            <span>    <Button appearance='warning'>
                  Delete Order
                  </Button>
                  </span>  
             </div>     
          <Close onClick={() => {
            this.setState({
              orderProperty: false
            })
          }}>
          <img alt='x' height={'20px'} src='https://dharmamerchantservices.com/wp-content/uploads/2015/04/close.png' />
          </Close>
            </OrderPage>
          </Shadow>
          : null}
      </div> 
    );
     
    
  }
}

const Button1 = styled.div`
    width: 150px;
    height: 50px;
    position: relative;
    display: inline-block;
    background-color: rgba(10,10,100, 0.8);
    font-weight: bold;
    color: white;
    text-align: center;
    border-radius: 5px 0 0 5px;
    border: 1px solid black;
    :hover{
        cursor: pointer;
        border: 1px solid grey;
    }

`;

const Button2 = styled.div`
    width: 150px;
    height: 50px;
    display: inline-block;
    position: relative;
    background-color: #6495ED;
    text-align: center;
    font-weight: bold;
    color: white;
    border: 1px solid black;
    :hover{
        cursor: pointer;
        border: 1px solid grey;
    }

`;

const Button3 = styled.div`
    width: 150px;
    height: 50px;
    display: inline-block;
    position: relative;
    background-color: rgba(10,200,10, 0.8);
    text-align: center;
    font-weight: bold;
    color: white;
    border: 1px solid black;
    :hover{
        cursor: pointer;
        border: 1px solid grey;
    }

`;

const Button4 = styled.div`
    width: 150px;
    height: 50px;
    display: inline-block;
    position: relative;
    background-color: rgba(200,10,10, 0.8);
    text-align: center;
    font-weight: bold;
    color: white;
    border-radius: 0 5px 5px 0;
    border: 1px solid black;
    :hover{
        cursor: pointer;
        border: 1px solid grey;
    }

`;

const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 40px;
    :hover{
        cursor: pointer
        box-shadow: 0 0 2px grey;
    }

`;

const OrderPage = styled.div`
    position: relative;
  width: 40%;
  min-width: 800px;
  margin: auto;
  padding: 50px;
  height: 600px;
  background-color: white;
  margin-top: 200px;
  border-radius: 4px;
  overflow: auto;
`;

const Shadow = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  background: rgba(1,1,1, 0.466);
`;

const OrderWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 40px;
  width: 90%;
  vertical-align: middle;
  background-color: white;
  margin: auto;
  margin-left: 5%;
  margin-right: 5%;
  border: 1px  solid rgba(1,1,1, 0.1);
  :hover{
    cursor: pointer;
    background-color: whitesmoke;
  }
`;
const OrderWrapper1 = styled.div`
  position: relative;
  width: 90%;
  display: inline-block;
  height: 30px;
  padding-top: 8px;
  background: rgba(0,0,0, 0.05);
  margin: auto;
  margin-left: 5%;
  margin-right: 5%;
  font-weight: bold;
  border: 1px solid rgba(1,1,1, 0.1);
  border-radius: 3px 3px 0 0 ;
`;
const OrderProperty = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  width: 7%;
  overflow: hidden;
  height: 40px;
  vertical-align: top;
  border-left: 0.1px solid rgba(1,1,1, 0.7);
  border-right: 0.1px solid rgba(1,1,1, 0.7);
`;
export default List;
