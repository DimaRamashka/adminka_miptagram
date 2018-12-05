import React from 'react';
import { List, Button, Divider, Tooltip, Modal, Input} from 'antd';
import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import axios from 'axios';
import cookie from 'js-cookie';
import { keysLoadedChange, updateNameAndMail, domainsLoadedChange, updateAddDomainState, setApiEdit, changepageIndex } from './../actions/actions';
import './Dashboard.scss';
import State from '../interfaces/interface';
import configuration from '../interfaces/configuration';
import {Route,  Link} from "react-router-dom";

interface Props {

    addDomainState: boolean,
    pageIndex: string,
    keysLoaded: Array<{}>,
    domainsLoaded: Array<{}>,
    apiKeyEdit: string,

    keysLoadedChange: (keys: Array<{}>) => void,
    domainsLoadedChange: (keys: any) => void,
    updateAddDomainState:(keys: any) => void,
    updateNameAndMail: (name: string, mail: string) => void,
    setApiEdit: (apiKeyEdit: string) => void,
    changepageIndex: (pageIndex: string) => void
}





class Dashboard extends React.Component<Props, State> {

    // componentWillUpdate(next: any, prev: any) {
    //     console.log(next, prev)
    // }

    componentDidMount() {
        let fd = new FormData();
        let sid : string | any = cookie.get('sessionId');
        fd.set('sessionId', sid );
        axios({
            method: 'post',
            url: 'https://o.n1ed.com/dashboard/user/get',
            data: fd
        }).then((res: any) => {
            this.props.keysLoadedChange(res.data.data.confs);
            this.props.domainsLoadedChange(res.data.data.domains);
            this.props.updateNameAndMail(res.data.data.user.email, res.data.data.user.name);
        });
    }

    render() {
        let API_KEYS = this.props.keysLoaded ? this.props.keysLoaded : [];
        let DOMAINS = this.props.domainsLoaded ? this.props.domainsLoaded : [];
        return(
            <div id='dashboard'>
                <List renderItem={undefined}>
                    <List.Item key='button'>
                        <Button type='primary' className='button_center' onClick={() => {
                            let fd = new FormData();
                            let sid : string | any = cookie.get('sessionId');
                            fd.set('sessionId', sid );
                            axios({
                                method: 'post',
                                url: 'https://o.n1ed.com/dashboard/conf/create',
                                data: fd
                            }).then((res: any) => {
                                let NEW_API_KEYS = API_KEYS.concat([
                                    {
                                    'title':res.data.data.title,
                                    'apiKey': res.data.data.apiKey,
                                    'bootstrap': res.data.data.bootstrap,
                                    'conf': res.data.data.conf,
                                    'domains': res.data.data.domains,
                                    'isVerifiedUser': res.data.data.isVerifiedUser
                                    }
                                ]);
                                this.props.keysLoadedChange(NEW_API_KEYS);
                            });
                            
                        }}>
                            Add configuration
                        </Button>
                    </List.Item>
                    {API_KEYS.map((key: any) => {
                        let API_KEY = key.apiKey;
                        return(
                         
                            <List.Item key={API_KEY}  > 
                            <Tooltip title='Click to copy API key'>
                                <Button>
                                    {key.apiKey} 
                                </Button>
                            </Tooltip>
                                
                                    
                            <Link to={`/edit/conf/${API_KEY}`}> 
                                <Button type='primary'  onClick={() => {
                                    this.props.setApiEdit(API_KEY);
                                    this.props.changepageIndex('edit');
                                }
                                }>
                                    Edit
                                </Button>
                            </Link>
                                    
                                
                            
                            </List.Item>
                        )
                    }) }
                    
                </List>
                <Divider type='vertical' style={{height: 'inherit'}}/>
                <List renderItem={undefined}>
                    <List.Item key='button' >
                        <Button type='primary' className='button_center' onClick={() => {
                            this.props.updateAddDomainState(true);
                        }}>
                            Add a domain
                        </Button>
                    </List.Item>
                    {DOMAINS.map((domain: any) => {
                        return(
                            <List.Item key={domain.domain} > 
                                    {domain.domain} 
                                    <Button type='danger'>
                                        Delete
                                    </Button>
                                
                            </List.Item>
                        )
                    }) }
                </List>
                 <Modal
                    title='Domain: ' 
                    visible={this.props.addDomainState}       
                    onCancel={() => this.props.updateAddDomainState(false)} 
                >
                    Domain: <Input  placeholder='domain.com'/>
                    Note: adding new domain may cause your plan change
                </Modal> 
            </div>
        );
    }
};

const mapStateToProps = (state: State) => {
    return{
      addDomainState: state.navigation.addDomainState,
      pageIndex: state.navigation.pageIndex,
      keysLoaded: state.navigation.keysLoaded,
      domainsLoaded: state.navigation.domainsLoaded,
      apiKeyEdit: state.navigation.apiKeyEdit
    }
  };
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        keysLoadedChange: (keys: Array<{}>) => {
            dispatch(keysLoadedChange(keys))
        },
        domainsLoadedChange: (domains: Array<{}>) => {
            dispatch(domainsLoadedChange(domains))
        },
        updateNameAndMail: (name: string, mail: string) => {
          dispatch(updateNameAndMail(name, mail))
        },
        updateAddDomainState: (addDomainState: boolean) => {
            dispatch(updateAddDomainState(addDomainState))
        },
        setApiEdit: (apiKey: string) => {
            dispatch(setApiEdit(apiKey))
        },
        changepageIndex: (pageIndex: string) => {
            dispatch(changepageIndex(pageIndex))
        }
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);