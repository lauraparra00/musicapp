import styled from "styled-components";

export const Header = styled.div`
    box-sizing: border-box;
    background: #C4BEBE;
    border: 1px solid #000000; 
    display: flex;
    justify-content:space-between;
    align-items: center; 

    @media screen {max-width: 1370px;
    
}

`;

export const Logo = styled.div`
    width: 20%;
    margin-left: 5%;
    align-items: center;
  
    `;
export const Logoh1 = styled.h1`
    margin: 0;
    display: flex;
    
   
`;

export const Nav = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-end;

`;

export const NavButton = styled.button`
    margin-right: 5%;
    padding: 2%;
    background: none;
    border: none; 
    &:hover{ cursor: pointer;
    background-color: rgb(137, 28, 239);
    color: white;}
    &:active{background-color: darkorange;}
`;

