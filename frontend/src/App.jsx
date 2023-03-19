import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import './assets/bootstrap.min.css';
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Card>
                <Card.Header className='bg-secondary text-light'>
                    Lista todo

                </Card.Header>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item>Posprzątać pokój</ListGroup.Item>
                        <ListGroup.Item>Wyprowadzić psa</ListGroup.Item>
                        <ListGroup.Item>Rozwiesić pranie</ListGroup.Item>
                        <ListGroup.Item>Zrobić zakupy</ListGroup.Item>

                    </ListGroup>

                </Card.Text>
            </Card>
        </div>
    )
}

export default App
