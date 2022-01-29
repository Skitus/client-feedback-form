import styled from "styled-components";

export const FeedbackFormPageBox = styled.div`
  width: 50%;

  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }

  @media ${props => props.theme.media.phone} {
    width: 95%;
    margin: 0px auto;
  }
`;