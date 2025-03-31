import {Datagrid, List, TextField , ReferenceField} from 'react-admin';

export const UnitList = () =>{
    return (
    <List>
<Datagrid>

<TextField source="edit" />
<TextField source="id" />
<TextField source="title" />
<TextField source="description" />
<ReferenceField  source="courseId" reference='courses'/>
<TextField source="imageSrc" />

</Datagrid>
    </List>
    );
} 
