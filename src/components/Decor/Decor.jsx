import decor from "../../images/decor.png";
import {DecorBox, ImageDecor} from "./DecorStyledComponents";

const Decor = () => {
    return (
        <DecorBox>
            <ImageDecor src={decor}/>
        </DecorBox>
    )
}

export default Decor;