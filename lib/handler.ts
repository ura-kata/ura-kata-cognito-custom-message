import { CognitoCustomMessageEvent } from '../@types/CognitoCustomMessageEvent';

const validationUrl = process.env.URA_KATA_VALIDATION_URL as string;

export async function handler(
  event: CognitoCustomMessageEvent,
  context: any
): Promise<any> {
  if (event.triggerSource === 'CustomMessage_SignUp') {
    event.response.emailSubject = 'Ura-Kata ユーザー登録確認';
    const message = `${event.userName} 様<br>
<br>
Ura-Kata へのユーザー登録をお申込み頂きありがとうございます!!<br>
登録を完了するためには以下のURLにアクセスしてください。<br>
<br>
${validationUrl}?user_name=${event.userName}&confirmation_code=${event.request.codeParameter}<br>
<br>
※このメールに心当たりのない方は破棄してください。<br>
※このメールは送信専用です。ご返信頂いても対応できません。<br>
<br>
https://ura-kata.org/
`;
    event.response.emailMessage = message;
    event.response.smsMessage = message;
  }
  return event;
}
