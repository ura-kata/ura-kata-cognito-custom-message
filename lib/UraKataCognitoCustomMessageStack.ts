import * as cdk from '@aws-cdk/core';
import * as dotenv from 'dotenv';
import { UraKataCognitoCustomMessageFunction } from './UraKataCognitoCustomMessageFunction';
import * as path from 'path';

dotenv.config();

export class UraKataCognitoCustomMessageStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new UraKataCognitoCustomMessageFunction(
      this,
      'ura-kata-cognito-custom-message',
      path.join(__dirname, '../lib/handler.ts'),
      'ura-kata-cognito-custom-message',
      {
        URA_KATA_VALIDATION_URL: process.env.URA_KATA_VALIDATION_URL as string,
      }
    );
  }
}
