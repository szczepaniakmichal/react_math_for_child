import React, { useState } from 'react';
import InputField from "../InputField/InputField";

function ListItem({taskToDo}) {
    const [value, setValue] = useState('');

    const handleValueChange = (e) => setValue(e.target.value)

    return (
        <li>
            <InputField {...{value}} title={taskToDo} placeholder='Enter thr result' style={{ marginLeft: '10px' }} horizontalLabel onChange={handleValueChange}/>
        </li>
    );
}

export default ListItem;