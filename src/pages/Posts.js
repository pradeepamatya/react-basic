import React from 'react';
import axios from 'axios';
import {
  Card, Spinner, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const BASE_URL = "https://jsonplaceholder.typicode.com"
class Posts extends React.Component{

  state = {
    posts: [],
    isLoading:false
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isLoading: true
    })

    axios.get(`${BASE_URL}/posts`).then(res => {
      this.setState({
        posts: res.data,
        isLoading: false
      })
    }).catch(error => {
      this.setState({
        ...this.state,
        isLoading: false
      })
    })

    // fetch(`${BASE_URL}/posts`).then(res => res.json()).then(json => {
    //   this.setState({
    //     posts: json,
    //     isLoading:false
    //   })
    // }).catch(error => {
    //   this.setState({
    //     ...this.state,
    //     isLoading:false
    //   })
    //   console.log(error)
    // })
    
  }

  render() {

    if(this.state.isLoading) return <Spinner type="grow" color="primary" />
    return <div className="container">
      {
        this.state.posts.map(post => {
          return (
            <Card key={post.id} className="mt-3">
              <CardBody>
                <CardTitle tag="h5"> { post.title } </CardTitle>
                <CardText> { post.body } </CardText>
              </CardBody>
              <CardFooter>
                <CardSubtitle> Created By : {post.userId} </CardSubtitle>
              </CardFooter>
            </Card>
          )
        })
      }
    </div>
  }
}

export default Posts;