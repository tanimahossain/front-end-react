import '../App.css';
function ErrorAlert(props) {
    if (!props.error) return <></>;
    //console.log(props.ResetError.toString());
    return (
        <div
            name="errorbox"
            className="errorAlertBox"
            wrap="hard"
        >
            <span
                className="closebtn"
                onClick={() => props.ResetError()}
            >
                &times;
            </span>
            {props.error}
        </div>
    );
}
export default ErrorAlert;
