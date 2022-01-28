import {Formik} from "formik";
import {validationSchema} from "../../types/validationSchema/validationSchema";
import axios from "axios";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 80%;

  @media ${props => props.theme.media.phone} {
    width: 100%;
  }
`;

const Input = styled.input`
  background-color: white;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  border: 1px solid #DCDCDC;
  height: 90px;
  border-radius: 10px;
  margin: 8px 0px;
  text-indent: 46px;
  color: black;
  outline: none;

  ::placeholder {
    color: black;
  }
`;

const TextArea = styled.textarea`
  background-color: white;
  margin: 8px 0px;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  color: black;
  outline: none;
  padding: 31px 46px;
  height: 200px;
  resize: none;

  ::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  background-color: #FAD34F;
  color: white;
  border-radius: 100px;
  font-weight: bold;
  border: none;
  outline: none;
  width: 218px;
  height: 73px;
  font-size: 18px;
  margin: 23px 0px;
`;

const H1 = styled.h1`
  padding: 30px 0px;
  font-size: 40px;
`;

const Error = styled.p`
  font-size: 18px;
  color: #F472B7;
  padding: 0px 46px;
`;

const FeedbackForm = () => {

    const onSubmitFormHandler = (values) => {
        alert('data put to console');
        axios.post('http://localhost:5000/feedback-form', values)
            .then((res) => {
                console.log('response from axios', res.data)
            }).catch((err) => {
            console.log('error from axios', err);
        });
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitFormHandler(values)}
        >
            {({
                  handleChange,
                  handleSubmit,
                  values,
                  errors,
                  isValid,
              }) => (
                <FormWrapper>
                    <H1>Reach out to us</H1>
                    <Input
                        className="name-input"
                        id="name"
                        name="name"
                        placeholder="Your name*"
                        onChange={handleChange('name')}
                        value={values.name}
                    />
                    {errors.name && (
                        <Error className="error">
                            {errors.name}
                        </Error>
                    )}
                    <Input
                        className="email-input"
                        id="email"
                        name="email"
                        placeholder="Your e-mail*"
                        onChange={handleChange('email')}
                        value={values.email}
                    />
                    {errors.email && (
                        <Error className="error">
                            {errors.email}
                        </Error>
                    )}
                    <TextArea
                        className="message-input"
                        id="message"
                        name="message"
                        placeholder="Your message*"
                        onChange={handleChange('message')}
                        value={values.message}
                    />
                    {errors.message && (
                        <Error className="error">
                            {errors.message}
                        </Error>
                    )}
                    <Button className="send-message-button" disabled={!isValid} onClick={() => handleSubmit()}>Send
                        message
                    </Button>
                </FormWrapper>
            )}
        </Formik>
    )
}

export default FeedbackForm;