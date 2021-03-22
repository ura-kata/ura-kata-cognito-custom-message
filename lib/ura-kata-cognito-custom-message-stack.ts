import * as cdk from '@aws-cdk/core';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as dotenv from 'dotenv';

dotenv.config();

export class UraKataCognitoCustomMessageStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props?: cdk.StackProps,
    functionEntry?: string
  ) {
    super(scope, id, props);

    new NodejsFunction(this, 'ura-kata-cognito-custom-message', {
      entry: functionEntry,
      functionName: 'ura-kata-cognito-custom-message',
      runtime: Runtime.NODEJS_14_X,
      environment: {
        URA_KATA_VALIDATION_URL: process.env.URA_KATA_VALIDATION_URL as string,
      },
    });
  }
}
