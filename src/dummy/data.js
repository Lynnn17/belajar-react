import React from 'react'
import { Table } from "react-bootstrap";


 const Data = ({post,hapus,edit}) => {
    // console.log(props.data)
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Body</th>
              <th>Aksi</th>
            </tr>
          </thead>
          {post.map((isian, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{isian.title}</td>
                  <td>{isian.body}</td>
                  <td>
                    <button
                      className="btn btn-warning mr-2"
                      onClick={() => edit(isian.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => hapus(isian.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
        
      </div>
    );
}

export default Data