import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from 'react-bootstrap/Card';
import useSWR from 'swr'
import ListGroup from 'react-bootstrap/ListGroup'
import './assets/bootstrap.min.css';
import './App.css'


const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
    const [count, setCount] = useState(0)
    const { data, isLoading } = useSWR('http://localhost:3000/api/todosList', fetcher)

    if (isLoading) {
        return <p>loading</p>
    }

    // return <p>{data}</p>

    return (
        <div className="App">
            <Card>
                <Card.Header className='bg-secondary text-light'>
                    Lista todo
                </Card.Header>
                <Card.Text>
                    <ListGroup>
                        {data.map((value, index) => {
                            // return <li key={index}>{value}</li>
                            return <ListGroup.Item>{value}</ListGroup.Item>
                        })}
                    </ListGroup>

                </Card.Text>
            </Card>
        </div>
    )
}

export default App
