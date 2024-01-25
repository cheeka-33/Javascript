const currentDate = new Date();
console.log("Current Date Time:", currentDate);

const convertDate = currentDate.toISOString().slice(0, 19).replace("T", " ");
console.log("Formatted Date String:", convertDate);