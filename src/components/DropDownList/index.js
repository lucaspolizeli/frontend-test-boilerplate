import React from "react";
import Select from "react-select";
import { Wrapper } from "./styles";

export default function DropDownList(props) {
  function parseOptionsToDropDown(optionToParse = props.options) {
    return optionToParse.map(currentOptions => ({
      value: currentOptions.codigo,
      label: currentOptions.nome
    }));
  }

  return (
    <Wrapper>
      <Select {...props} options={parseOptionsToDropDown()} />
    </Wrapper>
  );
}
