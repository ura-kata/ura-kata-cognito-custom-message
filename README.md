# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## テスト

### テストの実施

```bash
yarn test
```

### スタックの更新

意図してスタックを変更した後スナップショットを更新してテストする

```bash
yarn test -- -u
```

## 参照

- [Custom Message Lambda Trigger - Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-custom-message.html)
- [AWS CDKにおける基本的なテストと実装方法を調べて試した | DevelopersIO](https://dev.classmethod.jp/articles/aws-cdk-testing/)
