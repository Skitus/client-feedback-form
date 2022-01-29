import background from "../../images/footer.png";
import decor from "../../images/decor-red-circle.png";
import linkedIn from "../../images/in.svg";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import pinterest from "../../images/pinterest.svg";
import {Decor, FlexBox, FooterBox, Link, Logo} from "./FooterStyledComponents";

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