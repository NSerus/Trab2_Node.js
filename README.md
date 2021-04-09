# AppPersons_Node
  A little Database test with node.js

# Setting up the MongoDB
  In mongoDB compass create a Database with the name `CovidA` and a collection with the name `covids`.
  After that add the data from the `ImportToMongo` JSON file, this will get the following data:
  
  [image](https://user-images.githubusercontent.com/56051554/114112111-93cae080-98d3-11eb-8627-9f7433bca78a.png)
  
  You should now be able to test the API normally.

# Testing the API.

  Inserting `localhost:6666/api/` will show that the api works and there is some more functions after API that do the following:
  
  -`/novos` - presents the new cases of the last 7 days 
  
  -`/intern` - presents the cases that had to be hospitalized in the last 7 days
  
  -`/max-novos` - presents the day that had the most new cases
  
  -`/min-novos` - presents the day that had the least new cases
  
  -`/med-novos` - presents the average of the new cases
  
  -`/tot-novos` - presents all of the new cases of the week
