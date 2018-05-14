import React from 'react';
import { Button } from 'reactstrap';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Button color="primary">Hello Button</Button>
            </div>
        );
    }
}
