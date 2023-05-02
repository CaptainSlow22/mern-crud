import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState} from "react"
import axios from "axios"

function CreatePost() {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setPost(prev => {
            return ({
                ...prev,
                [name]: value,
            })
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        axios.post("/create", post).then((res) => console.log(res)).catch((err) => console.log(err))
        navigate('posts')
    }

    return (
        <div style={{width: '90%', margin: 'auto auto', textAlign: 'center'}}>
            <h1>Create Post</h1>
            <Form>
                <Form.Group>
                    <Form.Control style={{marginBottom: "1rem"}} name="title" placeholder="Title" value={post.title} onChange={handleChange} />
                    <Form.Control as="textarea" style={{marginBottom: "1rem"}} name="description" placeholder="Description" value={post.description} onChange={handleChange} />
                </Form.Group>
                <Button style={{width: '100%', marginBottom: "1rem"}} variant="outline-success" onClick={handleClick}>CREATE POST</Button>
            </Form>
            <Button style={{width: '100%'}} variant="outline-dark" onClick={() => navigate("/")}>BACK</Button>
        </div>
    )
}

export default CreatePost