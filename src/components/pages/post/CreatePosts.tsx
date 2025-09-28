
import axios from "axios";
import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
function CreatePosts() {
    // value update er jonno useStata use hoi
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("roxy");

    useEffect(() => {
        document.title = "Create Posts"
    }, [])

    //axios api
    function postData(e: React.FormEvent) {
        e.preventDefault();
        // console.log("title:" + title);
        // console.log("Body:" + body);
        const data = {title, body};
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
        .then((res)=>{
            console.log(res.data);
            // setTitle("");
            // setBody("");
            // alert("Data saved Successfully");
        })
        .catch((err)=>console.error(err));

        // alert("Form submitted Successfully");
    }

    
//useEffect -> side effect useEffect হলো React এর একটি হুক (Hook), যেটা আপনি ব্যবহার করেন সাইড ইফেক্ট (side effect) করার জন্য — মানে, এমন কাজ যেটা সরাসরি UI-এর সাথে না, কিন্তু কম্পোনেন্ট রেন্ডার হওয়ার পরে প্রয়োজন হয়।
    // useEffect(() => {
    //     console.log("title:" + title);
    //     console.log("Body:" + body);
    // }, [title, body])
    return (
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
                                    <input type="text" name="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Body</label>
                                    <textarea name="body" className="form-control" rows={4} value={body} onChange={(e) => setBody(e.target.value)}></textarea>
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