import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styles from "./SignupForm.module.scss";
import BaseButton from "../BaseButton/BaseButton";

const MyTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className={styles.textInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <textarea className={styles.messageInput} {...field} {...props} />
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className={styles.termsCheckbox}>
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
    </>
  );
};

const SignupForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Subsribe to our newsletter!</h2>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(1)
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}>
        <Form>
          <MyTextInput name="userName" type="text" placeholder="Name" />
          <MyTextInput name="email" type="email" placeholder="Email" />
          <MyTextArea
            name="message"
            placeholder="Share your feedback here, if you want!"
          />
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>
          <BaseButton type="save">Submit</BaseButton>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
