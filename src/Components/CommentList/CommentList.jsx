import SingleComment from "../SingleComment/SingleComment";
const CommentList = ({ commList }) => {
    return <>
        {Array.isArray(commList) && commList.map((singleCommentData, index) => (
            <SingleComment key={index} singleComment={singleCommentData} />
        ))}
    </>
}
export default CommentList;