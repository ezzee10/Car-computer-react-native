export const convertDate = (date) => {
    
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let formatted = `${day}-${month}-${year}`;

    return formatted;
}
