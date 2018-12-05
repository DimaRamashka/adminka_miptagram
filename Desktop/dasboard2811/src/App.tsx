import {changepageIndex, setApiEdit} from './actions/actions';
import { Tabs } from 'antd';
import './App.scss';
import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,  Link, Route, Switch, Redirect} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import cookie  from 'js-cookie';
import State from './interfaces/interface';
import Configuration from './components/Configuration'
import configuration from './interfaces/configuration';

interface Props {
  pageIndex: string,
  apiKeyEdit: string, 

  setApiEdit: (apiKey: string) => void
}


class App extends React.Component<Props, any> {

  

  componentDidMount() {
    cookie.set('sessionId', 'XZGC1PPTLUUUOOZ8UD0F5');
    let hash = window.location.href; //url of the current page
    let arHash = hash.split('/conf/'); //this creates an array with key ([0] element) and value ([1] element)
    let id =  arHash[1]; 
    this.props.setApiEdit(id);
  }
  
  

  public render() {
    console.log(this.props.apiKeyEdit)
    return (
      <div className="App">
      
      <NavBar/>
      <BrowserRouter >
      
      <div className='n1ed_dashboard_main' >
      <Switch>
      <Route path='/edit/conf/'>
      <Tabs defaultActiveKey="edit" key='config' className='n1ed_dashboard_conf_list'>
          <Tabs.TabPane tab={<Link to="/" > Dashboard</Link>} key="dashboard"  >
            <Dashboard/>
          </Tabs.TabPane>
          <Tabs.TabPane tab={<Link to={`/edit/conf/${this.props.apiKeyEdit}`} > Edit configuration</Link>} key="edit" >
           <Configuration />
          </Tabs.TabPane>
          

        </Tabs>
      </Route>
      <Route path='/'>
        <Tabs defaultActiveKey={'dashboard'} key='list' className='n1ed_dashboard_conf_list'>
          <Tabs.TabPane tab={<Link to="/" > Dashboard</Link>} key="dashboard"  >
            <Dashboard/>
          </Tabs.TabPane>
          <Tabs.TabPane tab={<Link to="/billing" > Billing</Link>} key="billing" >
           Billing
          </Tabs.TabPane>
          <Tabs.TabPane tab={<Link to="/profile" > Profile</Link>} key="profile" >
           <Profile/>
          </Tabs.TabPane>

        </Tabs>
        
      </Route>
      <Redirect to='/' />
      </Switch>
      
      </div>

      </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}


const mapStateToProps = (state: State) => {
  return{
    pageIndex: state.navigation.pageIndex,
    apiKeyEdit: state.navigation.apiKeyEdit
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return{
    change_pageIndex: (type: string) => {
      dispatch(changepageIndex(type))
    },
    setApiEdit: (apiKey: string) => {
      dispatch(setApiEdit(apiKey))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
