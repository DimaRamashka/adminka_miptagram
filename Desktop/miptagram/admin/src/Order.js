import React, { Component } from 'react';
import styled from 'styled-components';


class Order extends Component {

  

     
  render() {
    let photos = this.props.photos;
    let type = this.props.photoType;
    if(type === 'photos'){
    return (  
      <div style={{overflow: 'auto'}}> 
        {photos.map((photo, k) => {
          return(
            <Card key={k}>
              <ImagePlace style={{backgroundImage: `url(${photo.url})`,backgroundRepeat: 'no-repeat',
                backgroundSize: `${photo.width*87}vw`, backgroundPosition: `-${photo.x*87}vw -${photo.y*87}vw`}}>
              </ImagePlace> 
              <ForText>
                {photo.text}
              </ForText>
              <Watermark>
                miptagram.ru
              </Watermark>  
            </Card>
          );
        })}
      </div> 
    );
  } else{
    return(
      <div style={{overflow: 'auto'}}> 
        {photos.map((photo, k) => {
          return(
            <Card key={k}>
              <ImagePlace_stickers style={{backgroundImage: `url(${photo.url})`,backgroundRepeat: 'no-repeat',
                backgroundSize: `${photo.width*99}vw`, backgroundPosition: `-${photo.x*99}vw -${photo.y*99}vw`}}>
              </ImagePlace_stickers> 
               
            </Card>
          );
        })}
      </div> 
    )
  }
    
  }
}

const Card = styled.div`
  width: 100vw;
  height: 150vw;
  position: relative;
`;
const Div = styled.div`
  .element::-webkit-scrollbar { width: 0; }
`;
const ForText = styled.div`
top: 6.5vw;
position: relative;
margin: auto;
text-align: left;
margin-bottom: 2vw;
width: 87vw;
height: 10vw;
font-size: 3.5vw
margin-bottom: 2.5vw;
`;

const Watermark = styled.div`
  position: relative;
  margin: auto;
  text-align: right;
  width: 87vw;
  font-size: 2vw;
  color: #DCDCDC;
  top: 6.5vw;
`;

const ImagePlace = styled.div`
  position: relative;
  margin: auto;
  top: 6.5vw;
  margin-bottom: 2.5vw;
  width: 87vw;
  height: 87vw;

`;
const ImagePlace_stickers = styled.div`
  position: relative;
  margin: auto;
  top: 0.5vw;
  width: 99vw;
  height: 99vw;

`;

export default Order;
