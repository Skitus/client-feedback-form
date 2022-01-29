import styled from "styled-components";

export const DecorBox = styled.div`
  width: 50%;
  
  @media ${props => props.theme.media.tablet} {
    display: none;
  }

  @media ${props => props.theme.media.phone} {
    display: none;
  }
`;

export const ImageDecor = styled.img`
  width: 75%;
  height: 100%;
  object-position: right;
  margin-left: 25%;
  object-fit: cover;
`;
