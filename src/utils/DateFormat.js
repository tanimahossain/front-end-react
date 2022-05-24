function GetDate(props) {
    const myDate = new Date(props.date);
    const date = myDate.toLocaleDateString();
    const time = myDate.toLocaleTimeString('en', {
        hour12: true,
    });
    return (
        <div>
            {date}
            {props.newline && <br />}
            {time}
        </div>
    );
}

export default GetDate;
