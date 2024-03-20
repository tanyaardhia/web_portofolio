// import { NextApiRequest, NextApiResponse } from 'next';
// require('dotenv').config();

import { NextResponse } from "next/server";
import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY as string);
// const fromEmail = process.env.FROM_EMAIL as string;

// console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
// console.log('FROM_EMAIL:', process.env.FROM_EMAIL);

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (!req.body || typeof req.body !== 'object') {
//     return res.status(400).json({ error: 'Invalid request body' });
//   }

//   const { email, subject, message } = req.body as {
//     email: string;
//     subject: string;
//     message: string;
//   };

//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ['tanyaardhiap@gmail.com', email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank You for contacting me!</p>
//           <p>New Message submitted!</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     return res.json(data);
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
// }

export async function GET(){
  try {
    return NextResponse.json({ 'hello' : 'world' });
  } catch (error) {
    return NextResponse.json({ error });
  }
}