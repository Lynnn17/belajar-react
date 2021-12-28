import React, { Component } from 'react'

import axios from 'axios'
import { Table } from "react-bootstrap";

export default class call extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post : []
        }
    }
    callData = () => {
         axios.get("http://localhost:3004/posts").then((res) => {
           this.setState({
             post: res.data,
           });
         });
    }

    handleDelete = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res) => {
            this.callData()
        })
    }

    //memanggil api dengan axios
    componentDidMount() {
       this.callData()
    }
    

    // memanggil api dengan fetch
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //       .then((response) => response.json())
    //       .then((json) => {
    //           this.setState({
    //               post : json
    //           })
    //       });
    // }
    
    
    render() {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Body</th>
                <th>Aksi</th>
              </tr>
            </thead>

            {this.state.post.map((post,index) => {
                
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <button className="btn btn-warning mr-2"
                      onClick={console.log(post)}>Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(post.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                </tbody>
                // <ul>
                // <Data key={post.id} data={post} delete={this.handleDelete} />
                // </ul>
              );
            })}
          </Table>
        );
    }
}
