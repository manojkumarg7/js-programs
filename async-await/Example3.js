function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe", age: 30 };
      resolve(data);
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.department = "Engineering";
      resolve(data);
    }, 500);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedData = { ...data, status: "Saved" };
      resolve(savedData);
    }, 800);
  });
}

async function processDataAsync() {
  try {
    const fetchedData = await fetchData();
    const processedData = await processData(fetchedData);
    const savedData = await saveData(processedData);
    console.log("Data saved successfully:", savedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

processDataAsync();
