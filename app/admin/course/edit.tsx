import {SimpleForm, Edit, TextInput,required} from 'react-admin';

export const CourseEdit = () =>{
    return (
    <Edit>
<SimpleForm >
<TextInput source="id" validate={[required()]} label="Id" />
<TextInput source="imgSrc" validate={[required()]} label="Image" />
</SimpleForm>
    </Edit>
    );
} 
