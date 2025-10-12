import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

// type Post ={
//     userId: Number;
//     id: Number;
//     title: string;
//     body: string;
// }

interface Post{
    userId:number;
    id: number;
    title: string;
    body: string;
}

function ManagePosts() {
    // const [posts,setPosts] = useState[]
    useEffect(() => {
        document.title = "Manage Posts"
        getData();
    }, ["posts"]);
    // function loadData(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) =>{
    //         console.log(res.json());
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
    let [posts,setPosts] = useState<Post[]>([]);

    // async function loadData() {
    //     try{
    //         const res =await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await res.json();
    //         console.log(data);
    //         setPosts(data);
    //         console.log(posts);
    //     }catch (err){
    //         console.error(err);
    //     }
        
    // }

    // axios API
    //-----------------
    function getData(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    
    const handleDelete = (id:number) =>{
        console.log(id +"Confirm delete");
    }
    return (
        <>
        
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Posts/</span> Manage</h4>
                <Link to="/post/create" className="btn btn-primary mb-2">Add New</Link>
                <div className="card">
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>test</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam temporibus cupiditate ut autem iste quidem corporis velit voluptate earum illo? Est possimus deleniti officiis assumenda, porro dignissimos nulla labore accusamus.</td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <button className="btn btn-icon btn-outline-primary">
                                                <i className='bx  bx-edit'  ></i> 
                                            </button>
                                             <button className="btn btn-icon btn-outline-danger">
                                                <i className='bx  bx-trash'  ></i> 
                                            </button>
                                            
                                        </div>
                                    </td>
                                </tr> */}
                                {
                                    posts.map((item)=>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <Link to={`/post/${item.id}`} className="btn btn-icon btn-outline-primary">
                                                <i className='bx  bx-book-open'  ></i> 
                                            </Link>
                                            <Link to={`/post/edit/${item.id}`} className="btn btn-icon btn-outline-danger">
                                                <i className='bx  bx-edit'  ></i> 
                                            </Link>
                                             <button type="button" onClick={()=>{confirm("Are Your sure to delete this?") && handleDelete(item.id)}} className="btn btn-icon btn-outline-danger">
                                                <i className='bx  bx-trash'  ></i> 
                                            </button>
                                            
                                        </div>
                                    </td>
                                </tr>
                               ) }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ManagePosts