import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import styled from "styled-components";

const FeedbackFormPageBox = styled.div`
  width: 50%;

  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }

  @media ${props => props.theme.media.phone} {
    width: 95%;
    margin: 0px auto;
  }
`;

const FeedbackFormPage = () => {
    return (
        <FeedbackFormPageBox>
            <FeedbackForm/>
        </FeedbackFormPageBox>
    );
}

export default FeedbackFormPage;