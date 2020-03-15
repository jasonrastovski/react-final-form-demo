import { FormRenderProps } from "react-final-form";
import _ from "lodash";

export class SimpleProps {
  static getProps = (props: FormRenderProps) => {
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
}
