import ForumPost from "./ForumPost";
import ForumTable from "./ForumTable";
import { useEffect, useState } from "react";

export default function ForumPostList({posts}) {


    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>


                    {posts.length == 0 ?
                        <div className="alert alert-warning py-4">
                            No posts found.<br />
                            Do you want to add an post?
                        </div>
                        : <ForumTable posts={posts} />}

                </tbody>
            </table >
        </>
    );
}


