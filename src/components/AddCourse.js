import React, { Fragment } from "react";
import { Form, FormGroup, Input } from "reactstrap";

const AddCourse = () => {
    return (
        <Fragment>
         <h1 classname="text-center">Fill Course Detail</h1>
         <Form>
            <FormGroup>
                <label for = "userId">Course Id</label>
                <Input type = "text" placeholder = "Enter Here" name = "userId" id = "userId" />
            </FormGroup>
            <FormGroup>
                <label for = "title">Course title</label>
                <Input type = "text" placeholder = "Enter title here" id = "title" />
            </FormGroup>
            <FormGroup>
                <label for = "description">Course description</label>
                <Input type = "textarea" placeholder = "Enter description here" id = "description" style = {{height:100}}/>
            </FormGroup>
         </Form>
        </Fragment>

    );
}

export default AddCourse;