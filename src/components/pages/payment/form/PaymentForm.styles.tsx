import styled from "styled-components";


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  button{
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    background-color: #e9e9e9;
    padding: 2vh 4vw;
    margin: auto;
    cursor: pointer;
  }
  
  
  .active{
     background-color: #FF8100;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  
  >div{
    margin: 2vh 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  label{
    margin-right: 3vw;
    font-size: 20px
  }

  input{
    padding: 6px;
    min-width: 200px;
    border-radius: 5px;
  }
  
  .validationError{
    input{
      border: 2px solid red;
    }
  }
  
  @media screen and (max-width: 620px){
    input{
      width: 100%;
    }
  }
`;

export const ServerMessage = styled.div`
  margin: 1.5vh 0;
`;