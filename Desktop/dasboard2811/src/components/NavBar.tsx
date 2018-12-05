import styled from 'styled-components';
import * as React from 'react';

function NavBar (){
    return(
        <Bar>
            <ul>
                <span style={{margin: '0 15px 0 105px'}}>
                    Demo
                </span>
                
                <span style={{margin: '0 15px'}}>
                    Download
                </span>
                <span style={{margin: '0 15px'}}>
                    Documentation
                </span>
                <span style={{margin: '0 15px'}}>
                    Dashboard
                </span>

            </ul>
        </Bar>
    )
} 
    

const Bar = styled.div`
    padding: 7px 80px;
    justify-content: flex-start;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    font-weight: 400;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
`;
export  default NavBar;