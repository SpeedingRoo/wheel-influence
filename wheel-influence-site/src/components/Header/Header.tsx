import * as React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.header`
    margin: 0 auto;
    height: 240px;
    width: auto;
    background-color: #1c501c;
`;

const StyleHeaderH1 = styled.h1`
    margin: 0 auto;
    color: #e0e276;
`;

const StyleHeaderH2 = styled.h2`
    margin: 0 auto;
    color: #d3d3d3;
`;

const Header = ()=>{

    return (
        <>
            <StyleHeader>
                <StyleHeaderH1> Wheel Influence </StyleHeaderH1>
                <StyleHeaderH2> 车轮影响力 - 维州路考学习平台</StyleHeaderH2>
            </StyleHeader>
        </>
    )

}

export default Header;