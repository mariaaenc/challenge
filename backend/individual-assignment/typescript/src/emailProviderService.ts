export class EmailProviderService {
  public send(
    recipient: string,
    subject: string,
    body: string,
    from: string = "defaultEmail@gmail.com",
  ) {
    console.log(
      `Sendind email to ${recipient} from ${from}. Subject: ${subject}. Body: ${body}`,
    );
  }
}