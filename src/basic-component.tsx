import React from "react";

import { Form, Field, FormRenderProps } from "react-final-form";
import _ from "lodash";

export const BasicComponent: React.FunctionComponent = () => {
  const required = (value: string) => (value ? undefined : "Required");

  const getProps = (props: FormRenderProps) => {
    return _.pickBy(props, (value: any, key: string) => {
      const fieldsIWantToSee = [
        "active",
        "dirty",
        "dirtyFields",
        "dirtySinceLastSubmit",
        "dirtyFieldsSinceLastSubmit",
        "errors",
        "hasValidationErrors",
        "initialValues",
        "invalid",
        "modified",
        "pristine",
        "touched",
        "valid",
        "visited"
      ];
      return fieldsIWantToSee.includes(key);
    });
  };
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
          <pre>{JSON.stringify(getProps(props), null, "\t")}</pre>
        </form>
      )}
    </Form>
  );
};
