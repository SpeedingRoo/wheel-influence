import * as React from 'react';
import styled from 'styled-components';
import MainContainer from '../MainContainer/MainContainer';

const StyledBody = styled.body`
    margin: 0 auto;
    position: relative;
    width: auto;
    height: 900px;
    background-color: #d6d6d6;
`;

const Body = ()=>{
    return (
        <>
            <StyledBody>
                <MainContainer/>
                styled body
            </StyledBody>
        </>
    )
}

export default Body;