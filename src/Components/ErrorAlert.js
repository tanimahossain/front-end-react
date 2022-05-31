import '../App.css';
function ErrorAlert(props) {
    return (
        <div className="errorAlert">
            {props.errorMessage}
        </div>
    );
}
export default ErrorAlert;
