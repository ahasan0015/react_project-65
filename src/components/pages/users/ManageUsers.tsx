import { useEffect, useState } from "react";
import api from "../../../Config";
import type { User } from "../../../interfaces/user.interface";
import { Link } from "react-router-dom";

function ManageUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState<number | undefined>(0);
  useEffect(() => {
    document.title = "Manage Users";
    getUsers();
  }, []);
  const getUsers = () => {
    api.get("users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  function handleDelete(id: any) {
    // console.log(id + "confirm delete");
    api.delete(`delete-user?id=${id}`)
      .then((res) => {
        console.log(res.data);
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      })

  }
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Users /</span> Manage</h4>
        <Link to="/create-user" className="btn btn-primary">Add New</Link>
        <div className="card mt-3">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <div className="d-flex gap-1">
                          <Link to={`/post/details/${user.id}`} type="button" className="btn btn-icon btn-outline-info">
                            <span className="tf-icons bx bx-search"></span>
                          </Link>
                          <Link to={`/post/edit/${user.id}`} type="button" className="btn btn-icon btn-outline-primary">
                            <span className="tf-icons bx bx-edit"></span>
                          </Link>
                          <button type="button" className="btn btn-icon btn-outline-danger" onClick={() => setUserId(user?.id)} data-bs-toggle='modal' data-bs-target="#deleteModal">
                            <span className="tf-icons bx bx-trash"></span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="modal" id="deleteModal" tab-index="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body text-center fs-1">
              <span className="tf-icons bx bx-trash"></span>
            </div>

            <div className="modal-body">
              <p>Are you sure to delete this file{userId}?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(userId)}>Delete</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ManageUsers