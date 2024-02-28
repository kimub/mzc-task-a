"use strict";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const region = "ap-northeast-2";

const dynamo = new DynamoDBClient({
  region,
});

console.log("Loading function");

export const lambdaHandler = async (event, context, callback) => {
  const done = (err, res) =>
    callback(null, {
      statusCode: err ? "400" : "200",
      body: err ? err.message : JSON.stringify(res),
      headers: {
        "Content-Type": "application/json",
      },
    });

  const input = {
    TableName: "ub-HelloWorld",
  };

  const command = new ScanCommand(input);

  const result = await dynamo.send(command);

  done(undefined, result);
};
