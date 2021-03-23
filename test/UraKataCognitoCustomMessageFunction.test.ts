import { Stack } from '@aws-cdk/core';
import { UraKataCognitoCustomMessageFunction } from '../lib/UraKataCognitoCustomMessageFunction';
import * as path from 'path';
import { SynthUtils } from '@aws-cdk/assert';

test('ura-kata-cognito-custom-message creates', () => {
  const stack = new Stack();
  new UraKataCognitoCustomMessageFunction(
    stack,
    'func',
    path.join(__dirname, '../lib/handler.ts'),
    'func-name'
  );
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
