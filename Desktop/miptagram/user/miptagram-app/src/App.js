import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TopChiesel from './TopChiesel.js';
import Question from './Question.js';
import Question1 from './Question.1.js';
import PhotoList from './PhotoList.js';
import PhotoChanger from './PhotoChanger.js';
import styled from 'styled-components';
import loading from './loading.gif';
import InstagramPhotoPicker from 'react-instagram-photo-picker';
import LoginForm from './LoginForm'
import Parse from 'parse'
import PersonDataPage from './PersonDataPage'



class App extends Component {


state={
  signState: 'Регистрация',
  lk: 'closed',
  phototype: 'photos'
}

componentDidMount() {
  Parse.initialize('ts5Lq50Tr1zgRATMC3hbjezDA3uDyi0b9fJf3ijV', 'ruLlVEq1J54FpxJBbkSOlfl9Nk220c6PT6YHCQZp');
  Parse.serverURL = 'https://parseapi.back4app.com/';
  let photos = localStorage.getItem('miptagramState')
  let user = Parse.User.current();
  user ? 
  this.setState({
    photos: JSON.parse(photos),
    signState: user.get('username')
  }) 
  :
  this.setState({
    photos: JSON.parse(photos)
  }) 
}

componentWillUpdate(nextProps, nextState) {
  if(nextState.photos !== undefined && nextState.photos !== null){
    localStorage.setItem('miptagramState', JSON.stringify(nextState.photos))  
  }
}






fileUploadHandler = (files) => {
  const fd = new FormData();
  let photos = this.state.photos ? this.state.photos : [];
  fd.append('file',files[0], files[0].name); 
  axios.post('https://www.englishpatient.org/api/upload',fd, {
      onUploadProgress: ProgressEvent => {
          this.setState({
            showLoading: true
          });
      }
  })
    .then(res => {
        this.setState(
        {
          showLoading: false,
          chosenPhoto: photos.length,
          photos: photos.concat([{
            x: 0,
            y: 0,
            url: res.data.url,
            quant: 1
          }])                
        })
    })
  }

   

  render() {
    let photoNumber = this.state.chosenPhoto;
    return (
      <div className="App" style={{overflow: 'auto', position: 'absolute',width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'whitesmoke'}}>
       <div style={{position: 'absolute', zIndex: 1000}}>  
      <InstagramPhotoPicker
        ref={ref => this.instaDialog = ref}
        clientId='af2ceaf5ec5a4d13b185a02a0b17d8aa'
        onPhotosPicked={urls => {
          let photos = this.state.photos ? this.state.photos : [];
          let newPhotos = photos.concat(urls.map((url) => {return {url: url, quant: 1}}));
          this.setState({
            photos: newPhotos
          })
        
        }
        }
      />
      </div>
      {this.state.showLoading === true ?
        <Loading>
          <img src={loading} alt="Loading..."/>
        </Loading>   : null}
        {this.state.showRemindToLog === true ?
        <Question1 message='Войдите или зарегестрируйтесь' 
          onContinue={
            () => {
              this.setState({
                showError: false,
                showLastMessage: false,
                showRemindToLog: false
              })
            }
          }/>
          : null}
      {
        this.state.showError === true ?
        <Question1 message='Проверте введенные данные' onContinue={() => {this.setState({
          showError: false,
          showLastMessage: false
        })}}/> : 
      this.state.showLastMessage === true ? 
      <Question1 message={'Ваш заказ успешно создан'} onContinue={() => {this.setState({
        photos : [],
        chosenPhoto: undefined,
        showOrderData: false,
        showLoading: false, 
        showQuestion: false, 
        showLastMessage: false
      })}}/> : null
    }
      {this.state.showQuestion === true ?
      <Question onHide={() => {
        this.setState({
          showQuestion: false
        })
      }}
    
      onContinue={() => {
        this.setState({
          showQuestion: false,
          showOrderData: true
        })
      }} message='Вы можете добавить еще фото за те же деньги'/> : null}
      
      
       {this.state.chosenPhoto !== undefined ? 
       <PhotoChanger x={this.state.photos[photoNumber].x} y={this.state.photos[photoNumber].y} quant={this.state.photos[photoNumber].quant} text={this.state.photos[photoNumber].text}  url={this.state.photos[photoNumber].url} 
       onSavePhoto={( x, y, width, text, quant, font) => {
         let photo = this.state.photos.filter((p,k) => (k === photoNumber))[0];
         let mPhoto = {...photo,
                        x: x,
                        y: y,
                        quant: quant,
                        width: width,
                        text: text, 
                        font: font
                      }
         let photos = this.state.photos.filter((p,k) => (k !== photoNumber)).concat(mPhoto);
         this.setState({
          photos: photos,
          chosenPhoto: undefined
         }) }
       } 
       onCancel={() => {
         this.setState({
          chosenPhoto: undefined
         })
       }}
       onDelete={() => {
         let photos = this.state.photos.filter((p,k) => (k !== this.state.chosenPhoto));
         this.setState({
           photos: photos,
          chosenPhoto: undefined
         })
       }} /> 

       : 
       <div>
      
       <TopChiesel photoType={this.state.phototype} logged={this.state.signState} signState={this.state.signState} photos={this.state.photos} onBack={() => {this.setState({showOrderData: false})}}  showOrderData={this.state.showOrderData} onAdd={this.fileUploadHandler} 
        messageTrigger={() => {
          this.setState({
            showQuestion: true
          })
        }}
        loginStart={() => {
          this.setState({
            signState: 'Вход ',
            showOrderData: false
          })
        
        }}
        signStart={() =>{
          this.state.signState === 'Регистрация' ?
            this.setState({
              signState: 'Регистрация ',
              showOrderData: false
            })
          :
            this.setState({
              lk: 'opened'
            })
        }}
        remindToLog={() => {
          this.setState({
            showRemindToLog: true
          })
        }}
        showGoodBye={() => {
          this.setState({
            showLastMessage: true
          })
        }}
        errorInput={() => {
          this.setState({
            showError: true
          })
        }}
        onMakeOrder={() => {
         this.setState({
           showOrderData: true
         })
       }}
        showInst={() => {
          this.instaDialog.showDialog();
          
        }} />
        {this.state.signState === 'Регистрация ' ? 
          <LoginForm message='Sign up with' sendDataForSign={(log, pass) => {
            let user = new Parse.User();
            user.set("username", log);
            user.set("password", pass);
            user.signUp().then((user) =>{
              this.setState({
                signState: log
              })
            });
            
            
            
          }}/> 
        : this.state.signState === 'Вход ' ? 
          <LoginForm message='Log in with' sendDataForSign={(log, pass) => {
            Parse.User.logIn(log, pass).then(
              (results) => {
                this.setState({
                  signState: log
                })
              }
            )
          }}/>
          : this.state.lk === 'opened'  ? 
          <PersonDataPage name={this.state.signState} logoutuser={() => {
            Parse.User.logOut().then(() => {
              this.setState({
                signState: 'Регистрация',
                lk: 'closed'
              })
            })
          }}/>
          : null }
      <div style={{position: 'relative', width: '1000px', margin: '0 auto'}}>    
       <PhotoPart>
      {this.state.photos && this.state.photos.length !== 0 ?
      
      <PhotoList  photos={this.state.photos} 
        onChoose={(k) => {
          this.setState({
            chosenPhoto: k
          })
        }}/> 
      :
      <h2> Здесь будут отображаться Ваши фото </h2>
      }
     
      </PhotoPart>
      </div>
      </div>
       }
        
      </div>
    );
  }
}

const Loading = styled.div`
  padding-top: 100px;
  position: relative;
  z-index: 100;
  width: 72%;
  height: 100%;
  left: 28%;
  animation-name:dark;
  animation-duration: 5s;
  @keyframes  dark {
    from { opacity: 0.1; }
    50% { opacity: 0.7; }
    to { opacity:0.1;  }
  }
`;

const PhotoPart = styled.div`
  position: absolute;
  width: 1000px;
  margin: auto;
  margin-top: 24px;
  autofocus: true;
  overflow: auto;
`;



export default App;
