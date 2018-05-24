import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';

class Main extends React.Component {
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

export default connect(state => ({ // import states to props

}))(Main);
