// useEffect(() => {
//     fetch('http://localhost:3000/api/todosList')
//         .then((response) => { setTodos(response) })
// }, [])
console.log('component did mount')

{
    todos.map(function (todo, i) {
        // return <ObjectRow obj={object} key={i} />;
        // return <ListGroup.Item>{todo}</ListGroup.Item>
        return <p>{todo}</p>
    })
}