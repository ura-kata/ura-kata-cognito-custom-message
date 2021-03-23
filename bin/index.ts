#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UraKataCognitoCustomMessageStack } from '../lib/UraKataCognitoCustomMessageStack';

const app = new cdk.App();
new UraKataCognitoCustomMessageStack(app, 'UraKataCognitoCustomMessageStack', {
  stackName: 'ura-kata-cognito-custom-message-stack',
  env: {
    region: 'ap-northeast-1',
  },
});
