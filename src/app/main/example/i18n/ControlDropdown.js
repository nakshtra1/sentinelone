import React from 'react'
import Form from 'react-bootstrap/Form';

function ControlDropdown() {
  return (
    <Form.Select style={{ width: 100 }} >
    <option>EDR</option>
    <option>NDR-FW</option>
    <option>NDR-WAF</option>
    <option>FSG</option>
</Form.Select>
  )
}

export default ControlDropdown