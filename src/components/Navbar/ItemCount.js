import React, { Component } from 'react'
import { Container, Segment, Card, Image, Button, Icon } from 'semantic-ui-css/semantic.min.css';

class Contador extends Component {

    state = { counter: 0 }

    reducir = () => {
        const counter = this.state.counter - 1;
        this.setState({ counter });
    }

    aumentar = () => {
        const counter = this.state.counter + 1;
        this.setState({ counter });
    }

    render() {
        return (
            <Container>
                <Segment basic>
                <Card>
                    <Card.Content>
                        <Card.Header>Contador</Card.Header>
                        <Card.Meta>
                            {this.state.counter}
                        </Card.Meta>
                        <Card.Description>
                            Presiona - o + para reducir o incrementar
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button onClick={this.reducir} basic color='green'>
                                <Icon name="minus"/>
                            </Button>
                            <Button onClick={this.aumentar} basic color='red'>
                                <Icon name="plus"/>
                            </Button>
                        </div>
                    </Card.Content>
                    </Card>
                </Segment>
            </Container>
        )
    }
}

export default Contador;
