exports.GetDate = (UTCDate) => {
    let myDate = new Date(UTCDate);
    myDate =
        myDate.toLocaleDateString() +
        ' ' +
        myDate.toLocaleTimeString('en', {
            hour12: true,
            timeZone: 'GMT',
        });
    return myDate;
};
