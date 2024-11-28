function getDate() {
// Create a new Date object for the current date
    const date = new Date();

// Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Ensures two digits for day
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so we add 1
    const year = date.getFullYear();

// Format the date as "day-month-year"
    return `${day}-${month}-${year}`;
}

export default getDate;