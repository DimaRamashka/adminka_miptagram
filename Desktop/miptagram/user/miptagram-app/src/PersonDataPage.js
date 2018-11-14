import React, { Component } from 'react';
import Parse from 'parse'
import styled from 'styled-components';
import Button from '@atlaskit/button'



class PersonDataPage extends Component {


state={
}

componentDidMount() {
}

componentWillUpdate(nextProps, nextState) {
}





  render() {
    let styleforfields = {paddingLeft: '5px', margin: '10px', borderRadius: '4px', height: '3vh', width: '90%', fontSize: '2vh'}
    return (
      <Shadow2>
      <Main className="App" >
        <p> <h1>  {this.props.name} </h1> </p>
        <Button appearance='warning' onClick={() => {
          this.props.logoutuser()
        }} > Выйти </Button>
      </Main>
      </Shadow2>
    );
  }
}

const Shadow2 = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(128,128,128, 0.7);
  z-index: 120;
`;

const Main = styled.div`

  font-style: italic;
  position: fixed;
  width: 26vw;
  height: 40vh;
  top: 20vh;
  left: 39vw;
  background: rgba(256,256,256,1);
  border-radius: 3px;
  box-shadow: 0 0 2px grey;
  z-index: 2;
`;


export default PersonDataPage;
