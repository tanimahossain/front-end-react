function GetDate(props) {
    const myDate = new Date(props.date);
    const date = myDate.toLocaleDateString();
    const time = myDate.toLocaleTimeString('en', {
        hour12: true,
    });
    return (
        <>
            {date}
            {props.newline ? <br /> : ' '}
            {time}
            <br />
        </>
    );
}

export default GetDate;
