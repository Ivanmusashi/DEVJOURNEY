import {SimpleForm, Create, TextInput,required} from 'react-admin';

export const CourseCreate = () =>{
    return (
    <Create>
<SimpleForm >
<TextInput source="title" validate={[required()]} label="Title" />
<TextInput source="imgSrc" validate={[required()]} label="Image" />
</SimpleForm>
    </Create>
    );
} 
