import React from 'react';
import axios from 'axios';
import {
  Card, Spinner, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter,
} from 'reactstrap';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


const BASE_URL = "https://jsonplaceholder.typicode.com"
class Users extends React.Component{
  
  state = {
    users: [],
    isLoading:false
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isLoading: true
    })

    axios.get(`${BASE_URL}/users`).then(res => {
      this.setState({
        users: res.data,
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
        this.state.users.map(user => {
          return (
            <Card key={user.id} className="mt-3">
              <CardBody>
                <CardTitle tag="h5"> { user.name } </CardTitle>
                <CardText> { user.address.city } </CardText>
              </CardBody>
              <CardFooter>
              <Link to = {"/users/info"}>              
              <Button color="primary">View</Button>{' '}
              </Link>
                <CardSubtitle> Button view </CardSubtitle>
              </CardFooter>
            </Card>
          )
        })
      }
    </div>
  }
}

export default Users;