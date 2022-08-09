import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Metadata = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #8c8c8c;
    align-items: center;
`;

const Logo = styled.img`
height: 40px;
width: 40px;
border-radius: 100%;
margin-left: 11px;
box-shadow: 0 0 8px 0px #888888;

`

const getAuthor = () => {
    return "אליהו נאמן ושות׳ - משרד עורכי דין"
}

const Author = (props) => (
    <Metadata>
        <Logo src={logo} alt="Logo" />
        {getAuthor()} | {props.date}
    </Metadata>
)

export default Author;