import styled from "styled-components";


export const MainBlock = styled.div`
  cursor: pointer;
  max-width: 1000px;
  text-align: center;
  margin: 3vh auto;

  .operators_list{
    transition: visibility 0.5s, opacity 0.5s;
    visibility: hidden;
    opacity: 0;
  }
  
  :hover{
    .operators_list{
      visibility: visible;
      opacity: 1;
    }
  }
`

export const ListHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #2c2c2c;
  padding: 2vh 0;
  border-radius: 15px 15px 0 0;
`