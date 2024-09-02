"use server"
// import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';
import { ContactFormInputs } from '@/components/contactForm/ContactForm';

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: "maddison53@ethereal.email",
//       pass: "jn7jnAPss4f63QBp6D",
//     },
//   });

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
const emailParams = {
  to: 'contact@lovecchiolaw.com',
  from: 'contact@lovecchiolaw.com',
  subject: 'Website Contact Form Submission',
}


const createMessage = (contactFormData: ContactFormInputs) => `
    Message from: ${contactFormData.firstName} ${contactFormData.lastName}
    Email: ${contactFormData.email}
    Phone: ${contactFormData.phoneNumber}
    Message: ${contactFormData.message}
`

export const submitContact = async (contactFormData: ContactFormInputs) => {
    console.log('submitContact', contactFormData);
    const sgData = { ...emailParams, text: createMessage(contactFormData)}
    console.log('sg data', sgData); 
    // return (
    //     sgMail
    //         .send(sgData)
    //         .then(() => {
    //         console.log('Email sent')
    //         })
    //         .catch((error) => {
    //             console.log('error submitting sendgrid')
    //             console.error(error)
    //         })
    // )
}