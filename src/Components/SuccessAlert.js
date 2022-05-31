import '../App.css';
function SuccessAlert(props) {
    return (
        <div className="successAlert">
            {props.successMessage}
        </div>
    );
}
export default SuccessAlert;
