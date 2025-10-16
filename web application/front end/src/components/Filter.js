import React from "react";
import Form from "react-bootstrap/Form";
export default function Filter() {
  return (
    /*<div>
            <div className='ui floating labeled icon dropdown button'>
                <i className="filter icon"></i>
                <span className="text">Filter</span>
                <div className="menu">
                    <div className='divider'></div>
                    <div className='item'>
                        <span className='text'>Hoodie</span>
                    </div>
                    <div className='item'>
                        <span className='text'>Shorts</span>
                    </div>
                    <div className='item'>
                        <span className='text'>Hat</span>
                    </div>
                </div>
            </div>
        </div>*/
    <Form.Select aria-label="Default select example">
      <option>All</option>
      <option value="Hoodie">Hoodie</option>
      <option value="Shorts">Shorts</option>
      <option value="Hat">Hat</option>
    </Form.Select>
  );
}
