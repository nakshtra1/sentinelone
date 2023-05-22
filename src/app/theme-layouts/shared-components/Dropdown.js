import React from 'react'
import Form from 'react-bootstrap/Form';

function Dropdowns() {
    return (
        <>
            <Form.Select style={{ width: 100 }} >
                <option>Tenant 1</option>
                <option>Tenant 2</option>
                <option>Tenant 3</option>
                <option>Tenant 4</option>
            </Form.Select>
        </>
    )
}

export default Dropdowns