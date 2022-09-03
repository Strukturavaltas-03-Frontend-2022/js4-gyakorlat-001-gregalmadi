const convertToUppercase = (array) => {
  return new Promise((resolve, reject) => {
    let convertedArray = [];
    try {
      array.forEach((el) => {
        convertedArray.push(el.toUpperCase());
      });
      resolve(convertedArray);
    } catch (error) {
      const customError = "Error: Not all items in the array are strings!";
      reject(new Error(customError));
    }
  });
};

export default convertToUppercase;
