// import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import baseApiUrl from '../../../baseURL'
import api from '../../../Config';

export interface Role {
  id: number;
  name: string;
}

function ManageRoles() {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    document.title = "Manage Roles";
    getRoles();
  }, []);

  const getRoles = () => {
    api.get(`roles`)
      .then((res) => {
        console.log(res.data);
        setRoles(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch roles:", err);
      });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Users /</span> Manage
      </h4>

      <Link to="create-role" className="btn btn-primary mb-3">Add New </Link>

      <div className="card">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Role Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((item) =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td className='d-flex g-1'>
                    <Link to={`/post/details/${item.id}`} type='button' className='btn btn-icon btn-outline-primary'></Link>
                    <span className='tf-icons bx bx-search'></span>
                </td>
                <td className='d-flex g-1'>
                    <Link to={`/post/edit/${item.id}`} type='button' className='btn btn-icon btn-outline-primary'></Link>
                    <span className='tf-icons bx bx-edit'></span>
                </td>
                <td className='d-flex g-1'>
                    <Link to={`/post/details/${item.id}`} type='button' className='btn btn-icon btn-outline-primary'></Link>
                    <span className='tf-icons bx bx-trash'></span>
                </td>

              </tr>

              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageRoles;
