const SingleComment = ({ comments }) => {
    const comment = comments.singleComment;
    console.log(comment);
    return <>
        <li>{comment}</li>
    </>
}
export default SingleComment;