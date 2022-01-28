import FeedbackFormPage from "./pages/FeedbackFormPage";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import background from "./images/back.jpg";
import Decor from "./components/Decor/Decor";
import Footer from "./components/Footer/Footer";

const AppWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0px auto;
  background-size: cover;
  background-image: url(${props => props.background});
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function App() {
    const [feedbackMessages, setFeedbackMessages] = useState([]);

    const getFeedbackMessages = () => {
        axios.get('http://localhost:5000/feedback-form')
            .then((res) => {
                setFeedbackMessages(res.data);
            }).catch((err) => {
            console.log('error from axios', err);
        });
    }

    useEffect(() => {
        getFeedbackMessages();
    }, []);

    console.log('feedbackMessages', feedbackMessages);

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
