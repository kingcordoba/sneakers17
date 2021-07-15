import React, { Component } from 'react'
import { FaBold } from 'react-icons/fa';
import { Container, Segment, Card, Button, Icon } from 'semantic-ui-react';

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
            <div style={{
                display: 'flex', 
                justifyContent:'center', 
                alignItems:'center',
                height: '90vh'
                }}>
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
                                    <Button onClick={this.reducir} basic color='red'>
                                        <Icon name="minus"/>
                                    </Button>
                                    <Button onClick={this.aumentar} basic color='green'>
                                        <Icon name="plus"/>
                                    </Button>
                                </div>
                            </Card.Content>
                            </Card>
                    </Segment>
                </Container>                
            </div>
        )
    }
}

export default Contador;
