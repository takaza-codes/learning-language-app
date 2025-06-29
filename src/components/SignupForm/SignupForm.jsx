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

const submitForm = (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.userName === "error") {
        reject(new Error("Server error: This username is not allowed."));
      } else {
        resolve();
      }
    }, 500);
  });
};

const SignupForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Subscribe to our newsletter!</h2>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          message: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(1)
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          message: Yup.string(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          console.log("Submit called!", values);
          try {
            setErrors({ submit: undefined });
            setSubmitting(true);
            await submitForm(values);
            resetForm();
          } catch (error) {
            setErrors({ submit: error.message });
          } finally {
            setSubmitting(false);
          }
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
          <BaseButton form="save" type="submit">
            Submit
          </BaseButton>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
