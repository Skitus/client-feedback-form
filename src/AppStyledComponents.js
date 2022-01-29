import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0px auto;
  background-size: cover;
  background-image: url(${props => props.background});
  
`;

export  const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;