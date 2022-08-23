import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 10em;
  background-color: rgb(243, 234, 228);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evently;
  border-radius: 8px;
  overflow: hidden;
  border: #9a90a7 5px none;
  box-shadow: 2px 2px 5px #925dbc;  

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  @media screen and (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    padding-top: 25%;
    /* height: 100vh; */
  }

`;

export const CardMoment = styled.div`
  width: 30vw;
  margin-top: 5%;
  max-width: 400px;
  overflow: initial;

  @media screen and (max-width: 820px) {
    width: 80%;
    min-height: 50vh;
  }
  @media screen and (max-width: 415px) {
    width: 80%;
    height: 55vh;
    /* min-height: 50vh; */
  }
   
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.7em;
    box-shadow: 2px 2px 5px #925dbc;  
;`

export const CardText = styled.div`
  width: 25vw;
  height: 55vh;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: #da48a9;

  @media screen and (max-width: 820px) {
    width: 80%;
    align-items: center;
    /* height: 200vh; */
  }
  @media screen and (max-width: 415px) {
    width: 80%;
    align-items: center;
    margin-top: none;
    /* height: 200vh; */
  }
 
    
`;

export const TextTitle = styled.h2`
  font-family: "Cinzel", serif;
  font-weight: 900;
  width: 100%;
  margin-top: 5%;
  color: #924fd1;
  display: flex;
  align-items: center;
  justify-content: center;

 
  
`;

export const TextDescription = styled.p`
  
  font-size: 1.2rem;
  line-height: 2em;
  text-align: justify;
`;

export const Text = styled.h4`
    line-height: 2em;
    font-weight: normal;
    line-break: anywhere;

`;

export const CtComments = styled.div`
  /* border: solid 2px yellow; */
  border-left: solid 4px #e773b1;
  padding: 1em;
  width: 20vw;
  height: 70vh;
  margin-top:5%;
  @media screen and (max-width: 820px) {
    width: 80%;
    align-items: center;
  }
  @media screen and (max-width: 415px) {
    width: 80%; 
    align-items: center;
    margin-top: none;
    border-left: none;
    border-top: solid 4px #f290cf;
  }

`;

export const TextComments = styled.h4`
    font-family: "Cinzel", serif;
    padding-bottom: 1em;
`;

export const TxComments = styled.h5`
   font-weight: normal;
  padding-bottom: 5rem;
  
`;