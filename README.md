# Alexa-Local-Debugging

Contains scripts and configurations file needed for local debugging of Alexa skills

##1. Command to run local DynamoDB:
    
    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
   
##2. Comad to fireUp ngrok:

    ngrok http 3001
