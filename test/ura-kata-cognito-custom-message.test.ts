import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as UraKataCognitoCustomMessage from '../lib/ura-kata-cognito-custom-message-stack';
import * as path from 'path';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new UraKataCognitoCustomMessage.UraKataCognitoCustomMessageStack(
    app,
    'MyTestStack',
    {},
    path.join(__dirname, '../lib/index.ts')
  );
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
