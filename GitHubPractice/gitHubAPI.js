let axios = require("axios");


function getCommitMessages() {
   
    axios.get("https://api.github.com/repos/mdcrawford/source/commits?since=2018-02-14T00:00:00Z").then(response => {
        // here, we pass in a function with one parameter, response,
        // which represents the HTTP response we received from our GET request
        let commitData = response.data;
  
        // using .map() over the array of results to print out a little message about each result
       
        commitData.map(data => {
          console.log(data.commit.message);
        });
    })
    .catch(error => {
        // if something goes wrong with the GET request, we'll log the error instead
        console.log(error);
    });
}
  
  // finally, we call the above function
  getCommitMessages();
  console.log("I happened!!"); // this will probably print first, despite the fact that we called it second
  
