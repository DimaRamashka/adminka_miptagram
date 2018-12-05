import styled from 'styled-components';
import React from 'react';

function Footer (){
    return(
        <FooterWrap>
            <ul>
                <span>
                   <h1>N1ED</h1> 
                   <div>Documentation</div>
                   <div>Quick Start</div>
                </span>
                
                

            </ul>
        </FooterWrap>
    )
} 
    

const FooterWrap = styled.div`
    background-color: rgba(209, 224, 232, 0.18);
    border: 0;
    color: rgba(51, 51, 51, 0.87);
    padding: 50px 0;
    flex-shrink: 0;
    width: 100%;
    z-index: 1;
    position: 
`;
export  default Footer;