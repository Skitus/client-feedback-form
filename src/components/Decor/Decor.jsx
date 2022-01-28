import styled from "styled-components";
import decor from "../../images/decor.png";

const DecorBox = styled.div`
  width: 50%;
  
  @media ${props => props.theme.media.tablet} {
    display: none;
  }

  @media ${props => props.theme.media.phone} {
    display: none;
  }
`;

const ImageDecor = styled.img`
  width: 75%;
  height: 100%;
  object-position: right;
  margin-left: 25%;
  object-fit: cover;
`;


const Decor = () => {
    return (
        <DecorBox>
            <ImageDecor src={decor}/>
        </DecorBox>
    )
}

export default Decor;