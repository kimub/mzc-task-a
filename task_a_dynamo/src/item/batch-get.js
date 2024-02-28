// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { fileURLToPath } from "url";

// snippet-start:[javascript.v3.dynamodb.doc-client.BatchGet]
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchGetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
  const command = new BatchGetCommand({
    // Each key in this object is the name of a table. This example refers
    // to a Books table.
    RequestItems: {
      "ub-EspressoDrinks": {
        // Each entry in Keys is an object that specifies a primary key.
        Keys: [
          {
            DrinkName: "americano",
          },
        ],
        // Only return the "Title" and "PageCount" attributes.
        ProjectionExpression: "DrinkName",
      },
    },
  });

  const response = await docClient.send(command);
  console.log(response.Responses["ub-EspressoDrinks"]);
  return response;
};
// snippet-end:[javascript.v3.dynamodb.doc-client.BatchGet]

// Invoke main function if this file was run directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
