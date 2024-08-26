"use server"
import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: "maddison53@ethereal.email",
//       pass: "jn7jnAPss4f63QBp6D",
//     },
//   });

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const emailParams = {
  to: 'contact@lovecchiolaw.com',
  from: 'contact@lovecchiolaw.com',
  subject: 'Website Contact Form Submission',
}

export const submitContact = async (message) => {
    console.log('message', message);
    // return {
        // sgMail
        // .send(msg)
        // .then(() => {
        //   console.log('Email sent')
        // })
        // .catch((error) => {
        //   console.error(error)
        // })
    // }
}