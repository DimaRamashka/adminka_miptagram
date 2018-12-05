import React from 'react';
import { List, Form, Input, Button, Checkbox, Tooltip} from 'antd';
import {connect} from 'react-redux';
import State from '../interfaces/interface';
import './Configuration.scss'

interface Props{
    apiKeyEdit: {},
    pageIndex: string
}

class Configuration extends React.Component<Props> {
    render() {


        return(
            <div>
            <div className='n1ed_dashboard_edit_conf_toolbar'>
                <div className='n1ed_dashboard_apiKey_and_domains'> API key</div>
                <div className='n1ed_dashboard_apiKey_and_domains'>
                <Tooltip title='Click to copy API key'>
                    <Button type='primary'>
                        {this.props.apiKeyEdit}
                    </Button>
                </Tooltip>
                </div> 
                <div className='n1ed_dashboard_apiKey_and_domains'> Domains </div>
                <div className='n1ed_dashboard_apiKey_and_domains'>
                    <Checkbox.Group>
                        <Checkbox> domain</Checkbox>
                    </Checkbox.Group>
                </div>
                </div>
                <div className='n1ed_dashboard edit_conf_2cols '>
                    <div className='n1ed_dashboard switch'>

                    </div>
                </div>

            </div>
        );
    }
};

const mapStateToProps = (state: State) => {
    return{
      pageIndex: state.navigation.pageIndex,
      apiKeyEdit: state.navigation.apiKeyEdit
    }
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return{
      // add_API_key: () => {
      //   dispatch(add_API_key())
      // }
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Configuration);