 
    //~~~~~~~~~~~~~~ To be used when testing locally with DynamoDBlocal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    .withPersistenceAdapter(
        new ddbAdapter.DynamoDbPersistenceAdapter({
            tableName: 'newTable',
            createTable: true,
            dynamoDBClient: new AWS.DynamoDB({
                apiVersion: 'latest', 
                region: 'local',
                endpoint : 'http://localhost:8000',
                accessKeyId : 'fake',
                secretAccessKey : 'fake'
            })
        })
    )
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
