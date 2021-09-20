import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
    margin: 0 auto;
    padding: 0;
    width: 70%;
    background-color: #fff;
    height: 600px;
`;

const MainContainer = ()=>{
    return(
        <>
            <StyledContainer>Styled Container</StyledContainer>
        </>
    );
}

export default MainContainer;