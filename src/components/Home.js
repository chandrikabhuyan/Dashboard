import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { FormGroup, Form, Input } from "reactstrap";

const Home = () => {
    return (
        <div>
            <Jumbotron className = "text-center">
            <FormGroup>
                <label for = "description">Write something</label>
                <Input type = "textarea" placeholder = "start a post" id = "description" style = {{height:100}}/>
            </FormGroup>
                <Container>
                    <Button color = "secondary">
                        Post
                    </Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;