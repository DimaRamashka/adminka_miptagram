import React, { Component } from 'react';
import styled from 'styled-components';


class Order extends Component {

  

     
  render() {
    let photos = this.props.photos;
    let type = this.props.photoType;
    if(type === 'photos1' || type === 'photos'){
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
  } else  if(type === 'photos2'){
    return (  
      <div style={{overflow: 'auto'}}> 
        {photos.map((photo, k) => {
          return(
            <Card10x15 key={k}>
            {photo.orientation % 2 !== 0 ? 
              <ImagePlace10x15 style={{backgroundImage: `url(${photo.url})`,backgroundRepeat: 'no-repeat',
                backgroundSize: `${photo.width*100}vw`, backgroundPosition: `-${photo.x*100}vw -${photo.y*150}vw`}}>
              </ImagePlace10x15>  
              :
              <ImagePlace10x15_2 style={{backgroundImage: `url(${photo.url})`,backgroundRepeat: 'no-repeat', transform: `rotate(${90}deg)`,
                backgroundSize: `${photo.width*150}vw ${photo.width*100}vw`, backgroundPosition: `-${photo.x*150}vw -${photo.y*100}vw `, top: '25vw', left: '-25vw'}}>
              </ImagePlace10x15_2> 
            }
            </Card10x15>
          );
        })}
      </div> 
    )
  } else{
    return(
      <A4 >
        {photos.map((photo, k) => {
          return(
            
              <ImagePlace_stickers key={k} style={{backgroundImage: `url(${photo.url})`,backgroundRepeat: 'no-repeat',
                backgroundSize: `${photo.width*49}vw`, backgroundPosition: `-${photo.x*49}vw -${photo.y*49}vw`}}>
              </ImagePlace_stickers> 
               
            
          );
        })}
        </A4>
    )
  }
    
  }
}

const Card = styled.div`
  width: 96.8vw;
  height: 150vw;
  position: relative;
  display: block;
`;
const Card10x15 = styled.div`
  width: 100vw;
  height: 150vw;
  position: relative;
  display: block;
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

const A4 = styled.div`
  width: 100vw;
  height: 141.4vw;

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
  top: 5.4vw;
  margin-bottom: 2.5vw;
  width: 87vw;
  height: 87vw;
`;

const ImagePlace10x15 = styled.div`
  position: relative;
  margin: auto;
  width: 100vw;
  height: 150vw;
`;
const ImagePlace10x15_2 = styled.div`
  position: relative;
  width: 150vw;
  height: 100vw;
`;


const ImagePlace_stickers = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.5vw 1vw 0.5vw 0.5vw ;
  top: 0;
  width: 45.5vw;
  height: 45.5vw;

`;

export default Order;
