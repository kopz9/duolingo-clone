import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput, required } from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Question" />
        <SelectInput 
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            }
          ]}
        />
        <ReferenceInput source="lessonId" reference="lessons"/>
        <NumberInput 
          source="order"
          validate={[required()]}
          label="Order"
        />
      </SimpleForm>
    </Create>
  );
};
