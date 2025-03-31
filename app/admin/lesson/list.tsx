import {Datagrid,NumberField, List, TextField , ReferenceField} from 'react-admin';

export const LessonList = () =>{
    return (
    <List>
<Datagrid>

<TextField source="edit" />
<TextField source="id" />
<TextField source="title" />
<TextField source="description" />
<ReferenceField  source="unitId" reference='units'/>
<NumberField source="order" />

</Datagrid>
    </List>
    );
} 
