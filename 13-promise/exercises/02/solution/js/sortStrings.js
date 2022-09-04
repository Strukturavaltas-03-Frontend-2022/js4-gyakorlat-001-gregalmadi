const sortStrings = (array) => {
  return new Promise((resolve, reject) => {
    try {
      if (array.every((el) => typeof el === "string")) resolve(array.sort());
      else {
        const customError1 = "Error: Not all items in the array are strings!";
        reject(new Error(customError1));
      }
    } catch (error) {
      const customError2 = "Error: Something went wrong with sorting words!";
      reject(new Error(customError2));
    }
  });
};

export default sortStrings;
