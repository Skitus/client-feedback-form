import FeedbackFormPage from "./pages/FeedbackFormPage";
import {useEffect} from "react";
import background from "./images/back.jpg";
import Decor from "./components/Decor/Decor";
import Footer from "./components/Footer/Footer";
import {AppWrapper, FlexBox} from "./AppStyledComponents";
import {useDispatch, useSelector} from "react-redux";
import {listOfMessagesSelector} from "./bll/listOfMessages/listOfMessages.selector";
import {fetchMessages} from "./bll/listOfMessages/listOfMessages.slice";


function App() {
    const dispatch = useDispatch();
    const {messagesData} = useSelector(listOfMessagesSelector);

    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    console.log('messagesData', messagesData);

    return (
        <AppWrapper background={background}>
            <FlexBox>
                <FeedbackFormPage/>
                <Decor />
            </FlexBox>
            <Footer/>
        </AppWrapper>
    );
}

export default App;
