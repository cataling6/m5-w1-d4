const SingleComment = (comments) => {
    console.log(comments);
    //  const comment = comments.singleComment;
    const singleComment = comments.singleCommentData.comment
    const authorComment = comments.singleCommentData.author
    const rateComment = comments.singleCommentData.rate

    return <>
        <div>
            <div><label><span className="fw-bold">Autore: </span>{authorComment}</label></div>
            <div><label><span className="fw-bold">Recensione: </span>{singleComment}</label></div>
            <div><label><span className="fw-bold">Valutazione: </span>{rateComment}</label></div >
            <hr></hr>
        </div>
    </>
}
export default SingleComment;