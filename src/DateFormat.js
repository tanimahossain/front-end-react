function GetDate(props) {
    const myDate = new Date(props.date);
    const a = myDate.toLocaleDateString();
    const b = myDate.toLocaleTimeString('en', {
        hour12: true,
        timeZone: 'GMT',
    });
    return (
        <div>
            {a}
            <br />
            {b}
        </div>
    );
}

export default GetDate;
