import React from 'react';
import { List, Form, Input, Button} from 'antd';
import {connect} from 'react-redux';
import State from '../interfaces/interface';

interface Props{
        name: string
        mail: string
        pageIndex: string
}

class Profile extends React.Component<Props> {
    render() {


        return(
            <div id='dashboard'>
                <List renderItem={undefined}>
                    <List.Item>
                        <Form layout='horizontal'>
                            <Form.Item label='E-mail:'  >
                                {this.props.mail}
                            </Form.Item>
                            <Form.Item label='Your name:' >
                                {this.props.name !== '' ? this.props.name : '-'}
                            </Form.Item>
                        </Form>
                    </List.Item>
                    <List.Item>
                        
                        <Form >
                            <Form.Item >
                                <h3>Change password</h3>
                            </Form.Item>
                            <Form.Item label='New password: '>
                                <Input type='password'/>
                            </Form.Item>
                            <Form.Item >
                                <Button type='primary'>Save password</Button> 
                            </Form.Item>
                        </Form>
                    </List.Item>
                    
                </List>

            </div>
        );
    }
};

const mapStateToProps = (state: State) => {
    return{
      pageIndex: state.navigation.pageIndex,
      mail: state.profile.mail,
      name: state.profile.name
    }
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return{
      // add_API_key: () => {
      //   dispatch(add_API_key())
      // }
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);