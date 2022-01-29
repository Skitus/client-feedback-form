import styled from "styled-components";

export const FooterBox = styled.div`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10vh;
  min-height: 200px;
`;

export const Decor = styled.img`
  object-fit: cover;
  object-position: center;
  width: 200px;
  height: 200px;
  margin-left: 80px;

  @media ${props => props.theme.media.phone} {
    display: none;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.media.phone} {
    justify-content: center;
    align-items: center;
    padding: 45px;
  }
`;

export const Logo = styled.img`
  width: 20px;
  height: 20px;
`

export const Link = styled.a`
  margin: 0px 20px;
`