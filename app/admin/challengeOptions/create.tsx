import { BooleanInput, Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from "react-admin";

export const ChallengeOptionsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Text" />
        <ReferenceInput source="challengeId" reference="challenges"/>
        <NumberInput 
          source="text"
          validate={[required()]}
          label="Text"
        />
        <BooleanInput
          source="correct"
          label="Correct option"
        />
        <TextInput source="imageSrc" validate={[required()]} label="image" />
        <TextInput source="audioSrc" validate={[required()]} label="audio" />
      </SimpleForm>
    </Create>
  );
};
