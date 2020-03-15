import React from "react";

import { Form, Field, FormRenderProps } from "react-final-form";

export const BasicComponent: React.FunctionComponent = () => {
  const required = (value: string) => (value ? undefined : "Required");

  return (
    <Form
      onSubmit={formObject => console.log(formObject)}
      initialValues={{ firstName: "John", lastName: "Smith" }}
    >
      {(props: FormRenderProps) => (
        <form onSubmit={props.handleSubmit}>
          <Field
            name="firstName"
            component="input"
            placeholder="First Name"
            validate={required}
          />
          <Field
            name="lastName"
            component="input"
            placeholder="Last Name"
            validate={required}
          />
          <br />
          <button
            type="submit"
            disabled={props.pristine || props.hasValidationErrors}
          >
            Submit
          </button>
          <pre>{JSON.stringify(props, null, "\t")}</pre>
        </form>
      )}
    </Form>
  );
};
