import {Formik} from "formik";
import {validationSchema} from "../../types/validationSchema/validationSchema";
import {Button, Error, FormWrapper, Input, TextArea, Title} from "./FeedbackFormStyledComponents";
import {createMessageQuery} from "../../bll/createMessage/createMessage.slice";
import {useDispatch} from "react-redux";


const FeedbackForm = () => {
    const dispatch = useDispatch();

    const onSubmitFormHandler = (values) => {
        alert('Messages put to console');
        dispatch(createMessageQuery(values));
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
                    <Title>Reach out to us</Title>
                    <Input
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
                    <Button disabled={!isValid} onClick={() => handleSubmit()}>Send
                        message
                    </Button>
                </FormWrapper>
            )}
        </Formik>
    )
}

export default FeedbackForm;