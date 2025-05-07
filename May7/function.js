async function myFunction() {
    let pro = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("hello world");
        resolve("Hello from the Promise!");
      }, 2000);
    });
  
    let result = await pro; 
    return result;
  }
  
  myFunction()
    .then(function (value) {
      console.log("Resolved:", value);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
  