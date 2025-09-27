
import { useEffect, } from "react";
import { Link } from "react-router-dom";
function CreatePosts(){
    useEffect(()=>{
        document.title = "Create Posts"
   },[])


function postData(){
    alert ("Form submitted Successfully");
}
return(
        <>
        
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><Link to="/posts" className="text-muted fw-light">Posts/</Link> Create</h4>
                <Link to="/posts" className="btn btn-primary mb-2">Back</Link>
                <div className="card">
                    <div className="card mt-3">
                        <h5 className="card-header">Create Post</h5>
                        <div className="card-body">
                            <form onSubmit={postData}>
                                <div className="mb-3">
                                    <label htmlFor="">Title</label>
                                    <input type="text" name="title" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Body</label>
                                    <textarea name="body" className="form-control" rows={4}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CreatePosts