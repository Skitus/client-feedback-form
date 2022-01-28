import styled from "styled-components";
import background from "../../images/footer.png";
import decor from "../../images/decor-red-circle.png";
import linkedIn from "../../images/in.svg";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import pinterest from "../../images/pinterest.svg";

const FooterBox = styled.div`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10vh;
  min-height: 200px;
`;

const Decor = styled.img`
  object-fit: cover;
  object-position: center;
  width: 200px;
  height: 200px;
  margin-left: 80px;

  @media ${props => props.theme.media.phone} {
    display: none;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.media.phone} {
    justify-content: center;
    align-items: center;
    padding: 45px;
  }
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
`

const Link = styled.a`
  margin: 0px 20px;
`

const Footer = () => {
    return (
        <FooterBox background={background}>
            <FlexBox>
                <Decor src={decor}/>
                <FlexBox>
                    <Link href="#"><Logo src={linkedIn}/></Link>
                    <Link href="#"><Logo src={twitter}/></Link>
                    <Link href="#"><Logo src={facebook}/></Link>
                    <Link href="#"><Logo src={pinterest}/></Link>
                </FlexBox>
            </FlexBox>
        </FooterBox>
    )
}

export default Footer;