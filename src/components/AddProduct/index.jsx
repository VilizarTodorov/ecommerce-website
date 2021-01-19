import React, {useState} from "react";
import Form from "../Form";
import FormTitle from "../FormTitle";
import FormInput from "../FormInput";
const AddProduct = (props) => {
  const [name, setName] = useState();

  const nameOnChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Form>
      <FormTitle title="add new product"></FormTitle>
      <FormInput type="text" name="name" id="name" onChange={nameOnChange} label="name"></FormInput>
    </Form>
  );
};
export default AddProduct;
