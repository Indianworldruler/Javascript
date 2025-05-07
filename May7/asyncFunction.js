
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "This is the fetched data" });
      }, 2000); 
    });
  }
  
  async function processData() {
    try {
      console.log("Fetching data...");
      const result = await fetchData();
      console.log("Data fetched:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  
  processData()
    .then(processedData => {
      console.log("Processed data:", processedData);
    })
    .catch(err => {
      console.error("Final error handler:", err);
    });
  