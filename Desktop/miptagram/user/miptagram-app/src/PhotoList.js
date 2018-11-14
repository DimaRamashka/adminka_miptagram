import React, { Component } from 'react';
import './App.css';
import MiptagramPhoto from './MiptagramPhoto.js';

class PhotoList extends Component {
    
 state={
    uploadProgress: undefined
 }   

 

  render() {
      let onChoosen=this.props.onChoose;
    return (
        <div>
            {
            this.props.photos.map((photo, k) => {
                let key = photo.url + k;
                return(
                    
                    <div  key={key} > 
                        <MiptagramPhoto url={photo.url} x={photo.x} y={photo.y} width={photo.width} text={photo.text} quant={photo.quant} font={photo.font}
                        onChoose={
                            () => {onChoosen(k)}
                        }/>
                    </div>
                );
            })
            }
            
        </div>
    );
  }
}

export default PhotoList;