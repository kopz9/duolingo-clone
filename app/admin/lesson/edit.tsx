import { Edit, NumberInput, ReferenceInput, SimpleForm, TextField, TextInput, required } from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="id" />
        <TextInput source="description" validate={[required()]} label="description" />
        <ReferenceInput source="courseId" reference="courses"/>
        <NumberInput 
          source="order"
          validate={[required()]}
          label="Order"
        />
      </SimpleForm>
    </Edit>
  );
};
