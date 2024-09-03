"use server"
import sgMail from '@sendgrid/mail';
import { ContactFormInputs } from '@/components/contactForm/ContactForm';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
const emailParams = {
  to: 'contact@lovecchiolaw.com',
  from: 'contact@lovecchiolaw.com',
  subject: 'Website Contact Form Submission',
};

const createMessage = (contactFormData: ContactFormInputs) => `
  Message from: ${contactFormData.firstName} ${contactFormData.lastName}
  Email: ${contactFormData.email}
  Phone: ${contactFormData.phoneNumber}
  Message: ${contactFormData.message}
`;

export const submitContact = async (contactFormData: ContactFormInputs) => {
  const sgData = { ...emailParams, text: createMessage(contactFormData) };
  if(process.env.NODE_ENV === 'production') {
    return (
      sgMail
        .send(sgData)
        .catch((error) => {
          console.log('error submitting sendgrid')
          console.error(error)
        })
    )
  } else {
    console.log('SendGrid Data: ');
    console.log(sgData);
  }
};