export default function ForumTable({ posts }) {

    return (

        <>
            {posts.map(post => (
                <tr key={post.postId}>
                        <td>{post.postDate}</td>
                        <td>{post.forumName}</td>
                        <td>
                            <p><strong>{post.title}</strong><br />
                            {post.postContent}</p>
                        </td>
                </tr>
            ))}
        </>

    );
}