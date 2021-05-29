AWS.config.update({
    apiVersion: 'latest', 
    region: 'local',
    endpoint : 'http://localhost:8000',
    accessKeyId : 'fake',
    secretAccessKey : 'fake'
  })
            

var dynamodb = new AWS.DynamoDB();

var params = {
  Limit: 2
};



dynamodb.listTables(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
