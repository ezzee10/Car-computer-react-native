export const convertDate = (date) => {

    let convertDate = new Date(date);
    
    let day = ("0" + convertDate.getDate()).slice(-2);
    let month = ("0" + (convertDate.getMonth() + 1)).slice(-2);
    let year = convertDate.getFullYear();
    let formatted = `${day}-${month}-${year}`;

    return formatted;
}
