import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: fixed;
width: 100%;
height: 10vh;
background: #af2a1c
z-index: 99999;
color: white;
font-size: 20pt;
display: flex;
justify-content:center;
align-items: center;
`

class Header extends Component {
    render() {
        return (
            <Container>
                חדשות המשפט
            </Container>
        );
    }
}

export default Header;