import SingleComment from "../SingleComment/SingleComment";
const CommentList = ({ commList }) => {
    //console.log(commList);
    return <>

        {Array.isArray(commList) && commList.map((singleCommentData, index) => (
            <SingleComment key={index} singleCommentData={singleCommentData} />

        ))}
    </>
}
export default CommentList;