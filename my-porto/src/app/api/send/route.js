import { EmailTemplate } from "../../../components/Email-Template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  
  try {
    const emailContent = EmailTemplate({ firstName: "John" });
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["tanyaardhiap@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank You for contacting me!</p>
          <p>New Message submitted!</p>
          <p>{message}</p>
        </>
      ),
    });

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
