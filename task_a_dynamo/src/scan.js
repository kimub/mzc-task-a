// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { fileURLToPath } from "url";

// snippet-start:[dynamodb.JavaScript.movies.scanV3]
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
  const command = new ScanCommand({
    ProjectionExpression: "#Name",
    ExpressionAttributeNames: { "#Name": "DrinkName" },
    TableName: "ub-EspressoDrinks",
  });

  const response = await docClient.send(command);
  for (const drink of response.Items) {
    console.log(`${drink.DrinkName}`);
  }
  return response;
};
// snippet-end:[dynamodb.JavaScript.movies.scanV3]

// Invoke main function if this file was run directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
