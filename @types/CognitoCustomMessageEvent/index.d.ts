export declare interface CognitoCustomMessageEvent {
  version: string;
  region: string;
  userPoolId: string;
  userName: string;
  callerContext: CognitoCustomMessageEventCallerContext;
  triggerSource:
    | 'CustomMessage_SignUp'
    | 'CustomMessage_AdminCreateUser'
    | 'CustomMessage_ResendCode'
    | 'CustomMessage_ForgotPassword'
    | 'CustomMessage_UpdateUserAttribute'
    | 'CustomMessage_VerifyUserAttribute'
    | 'CustomMessage_Authentication';
  request: CognitoCustomMessageEventRequest;
  response: CognitoCustomMessageEventResponse;
}

declare interface CognitoCustomMessageEventCallerContext {
  awsSdkVersion: string;
  clientId: string;
}

declare interface CognitoCustomMessageEventRequest {
  userAttributes: CognitoCustomMessageEventRequestUserAttributes;
  codeParameter: string;
  linkParameter: string;
  usernameParameter: any | null;
}

declare interface CognitoCustomMessageEventRequestUserAttributes {
  sub: string;
  'cognito:user_status': string;
  email_verified: string;
  email: string;
}

declare interface CognitoCustomMessageEventResponse {
  smsMessage: string | null;
  emailMessage: string | null;
  emailSubject: string | null;
}
