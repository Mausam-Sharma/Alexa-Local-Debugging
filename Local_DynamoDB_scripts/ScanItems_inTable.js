AWS.config.update({
    apiVersion: 'latest', 
    region: 'local',
    endpoint : 'http://localhost:8000',
    accessKeyId : 'fake',
    secretAccessKey : 'fake'
  })
            
var params = {
        TableName: "newTable"
    };

dynamodb.scan(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
