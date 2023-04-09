import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from 'react-bootstrap/Card';
import useSWR from 'swr'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'

import axios from 'axios'

import './assets/bootstrap.min.css';
import './App.css'


const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {

    const host = 'http://localhost:3000/api'

    const [todos, setTodos] = useState([])
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        fetchData()
    }
    const handleShow = () => setShow(true);

    const fetchData = () => {
        axios.get(host + '/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchData()
    }, [todos])


    // const updateEffect = () => {
    //     fetchData()
    // }

    function handleNewTodoChange(event) {
        setNewTodoTitle(event.target.value);
    }

    function handleNewTodoSubmit(event) {
        event.preventDefault();

        axios.post(host + '/todos/create', {
            Value: newTodoTitle,
        })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodoTitle('');
            })
            .catch(error => console.error(error));

        fetchData()
        handleClose()
    }

    return (
        <>
            {/* popup window */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* new todo form */}
                    <Form onSubmit={handleNewTodoSubmit}>
                        <Form.Group className="mb-3" controlId="newTodo">
                            <Form.Label>Enter the todo item</Form.Label>
                            <Form.Control type="text" placeholder="Type here"
                                // value={newTodoTitle} onChange={handleNewTodoChange} />
                                onChange={(e) => handleNewTodoChange(e)} />
                        </Form.Group>
                    </Form>
                    <Button variant="secondary" type='button' onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleSubmit}> */}
                    <Button variant="primary" type='submit' onClick={handleNewTodoSubmit}>
                        Add new Todo
                    </Button>
                </Modal.Body>
            </Modal>


            {/* list of Todos */}
            <div className="App">
                <Card>
                    <Card.Header className='bg-secondary text-light'>
                        Lista todo
                    </Card.Header>
                    <Card.Text>
                        <ListGroup>
                            {todos.map((value, index) => {
                                // return <li key={index}>{value}</li>
                                return <ListGroup.Item key={index}>{value.Value}</ListGroup.Item>
                            })}
                        </ListGroup>
                        <>
                            <Button onClick={handleShow} type='button'>Add</Button>
                            <Button variant="secondary" type='button' onClick={handleClose}>
                                Update
                            </Button>
                        </>
                    </Card.Text>
                </Card>
            </div>
        </>
    )
}

export default App
