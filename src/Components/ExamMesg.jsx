
function ExamMesg({msg}) {

    return(
        <div className='message' style={{height: msg ? '100px' : '0'}} >
            <span>{msg}</span>
        </div>
    );
}
export default ExamMesg;