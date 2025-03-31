import {ReferenceInput, SimpleForm, Create, TextInput,required, BooleanInput} from 'react-admin';

export const ChallengeOptionCreate = () =>{
    return (
    <Create>
<SimpleForm >
<TextInput source="text" validate={[required()]} label="Text" />
<BooleanInput source="correct" label="Correct option" />
<ReferenceInput source='challengeId' reference='challenges' />
<TextInput 
source="imageSrc"
validate={[required()]}
label="Image URL"
/>

<TextInput 
source="imageSrc"
validate={[required()]}
label="Image URL"
/>
</SimpleForm>
    </Create>
    );
} 
