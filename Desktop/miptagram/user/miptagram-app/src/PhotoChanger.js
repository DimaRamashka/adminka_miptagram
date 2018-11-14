import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import MiptagramPhoto from './MiptagramPhotoForCropper.js';

class PhotoChanger extends Component {


state={
    showNotif: true,
    font: 'Veranda',
    x: this.props.x,
    y: this.props.y,
    quant: this.props.quant,
    text: this.props.text,
    width: 261
}


  render() {
      let onSavePhoto = this.props.onSavePhoto;
      let onCancel = this.props.onCancel;
      let onDeletePhoto = this.props.onDelete;
      let url = this.props.url; 
    return (
        
        <div>
        {this.state.showNotif === true ?   
            <Notif>
                <InternalNotif>
                    <h1> Здесь Вы можете отредактировать Ваше фото </h1>
                </InternalNotif>
            </Notif>  
        : null}
        {this.state.showNotif === true ?         
           setTimeout( function() { this.setState({showNotif: false}); }.bind(this), 2600 )
        : null}
            <LeftPart>
                
                  <Cropper 
                    ref={r => this.cropper = r }                   
                    src={url} 
                    aspectRatio={1/ 1} 
                    guides={false}
                    zoomable={false} 
                    viewMode={1}   
                    movable={false}
                    style={{width: '100%', height: '100%', position: 'relative'}}
                    crop={(e) => {
                        let data = this.cropper.getCropBoxData();
                        let data2 = this.cropper.getCanvasData();
                        let canv = this.cropper.getImageData();
                        this.setState(
                        {
                            x: (data.left-data2.left)/data.width ,
                            y: (data.top-data2.top)/data.width ,
                            width: canv.width/data.width
                        });
                        
                    }}           
                  />
                  
         </LeftPart>
        <RightPart>
            <h2 style={{ margin: 'auto',marginTop: '15px', backgroundColor: 'whitesmoke', borderRadius: '6px', width: '200px', padding: '3px'}}> Preview </h2>
            <ForText> <ForButton> <Button appearance={'primary'} onClick={() => {
                onSavePhoto(this.state.x, this.state.y, this.state.width, this.state.text, this.state.quant, this.state.font)}
             }> Save </Button>  </ForButton>
             <ForButton><Button appearance={'warning'} onClick={() => {onCancel();}}> Cancel </Button> </ForButton>
             <ForButton><Button appearance={'danger'} onClick={() => {onDeletePhoto();}}> Delete </Button> </ForButton>
             </ForText>
            <MiptagramPhoto url={url} x={this.state.x} y={this.state.y} width={this.state.width} text={this.state.text} font={this.state.font} quant={this.state.quant}/>
            
            
             
             <ForText>
                 Текст под фото:
            <div><textarea  style={{fontFamily: `${this.state.font}`, boxShadow: '0.4px 0.8px  0.1em grey', borderRadius: '4px'}} maxLength="120" cols='30' wrap="soft" rows={4} value={this.state.text} 
                    onBlur={(e) => this.placeholder = "Your text"}  onChange={e => {
                        this.setState({
                            text: e.target.value
                        });
                    }}  ></textarea></div>
            </ForText> 
            <ForText>
             Шрифт :<ForButton> <Button onClick={() => {this.setState({font: "Helvetica "})}} > <span > M </span> </Button> </ForButton>
             <ForButton> <Button onClick={() => {this.setState({font: "Arial Black"})}} ><span style={{fontFamily: 'Arial Black'}}> M</span></Button> </ForButton>
             <ForButton> <Button onClick={() => {this.setState({font: "Cursive "})}} ><span style={{fontFamily: 'Cursive'}}> M</span></Button> </ForButton>
             <ForButton> <Button onClick={() => {this.setState({font: 'Mistral '})}}><span style={{fontFamily: 'Mistral'}}> M </span ></Button></ForButton>
             <ForButton> <Button onClick={() => {this.setState({font: 'Comic Sans Ms '})}}><span style={{fontFamily: 'Comic Sans'}}> M</span></Button></ForButton>
             <ForButton> <Button onClick={() => {this.setState({font: 'algerian'})}}><span style={{fontFamily: 'algerian'}}> M</span></Button></ForButton>
             </ForText>
            <ForText>
                Количество : 
                <Button onClick={() => {
                    this.setState({
                        quant: this.state.quant > 1 ? this.state.quant - 1 : this.state.quant
                    })
                }}> - </Button>
                {' '}{  this.state.quant }{' '}
                <Button onClick={() => {
                    this.setState({
                        quant: this.state.quant + 1 
                    })
                }}> + </Button>
            </ForText>    
            
        </RightPart>        
      
        </div>
    );

  }
}

const Notif = styled.div`
    animation-name: appear;
    animation-duration: 2.6s;
    position: fixed;
    width: 75vw;
    height: 100vh;
    background-color: grey;
    opacity: 0.6;
    z-index: 1000;  
    @keyframes  appear {
        from { opacity: 0; }
        20% {opacity: 0;}
        50% { opacity: 0.65; }
        to { opacity: 0.1;}
      }
`;

const InternalNotif = styled.div`
    position: relative;
    width: 40vw;
    height: 30vh;
    top: 30vh;
    background-color: black;
    margin: auto;   
    border-radius: 5px;
    box-shadow: 1.5px 1.5px  0.3em 0.3em yellow;
    text-align: center;
    padding-top: 10vh;
    color: white; 
    font-family: cursive;
`;
const ForButton = styled.div`
    margin: 8px;
    position: relative;
    display: inline-block;
`;
const ForText = styled.div`
    margin: auto;
    padding: 5px;
    vertical-align: top;
    padding-top: 15px;
    position: relative;
    width: 90%;
`;
const LeftPart = styled.div`
    width: 75%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    position: fixed;
    left: 0px;
    box-shadow:  10px  5px 0.8em 0.8em #F5F5F5;
`;
const RightPart = styled.div`
    width: 25%;
    height: 100%;
    right: 0px;
    display: inline-block;
    vertical-align: top;
    position: fixed;
    overflow: auto;
`;



export default PhotoChanger;