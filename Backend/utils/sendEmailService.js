import nodemailer from 'nodemailer';
import { verificationEmail, welcomeTemplate } from './emailTemplates.js';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  ;

  export const sendVerificationEmail = async (email, name, verificationCode) => {
    const mailOptions = {
      from: `"Level-Up Be Your Best Version " <${process.env.EMAIL}>`,
      to: email,
      subject: 'Your Verification Code - Level Up',
      html: verificationEmail(name,verificationCode)
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Verification email sent to ${email}`);
    } catch (error) {
      console.error(`Email failed to send: ${error.message}`);
      throw new Error('Failed to send verification email.');
    }
  };

  export const welcomeEmail = async (name, email) => {
    const mailOptions = {
      from: `"Level-Up Be Your Best Version " <${process.env.EMAIL}>`,
      to: email,
      subject: 'Welcome To Level-Up',
      html: welcomeTemplate(name,email)
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Welcome email sent to ${email}`);
    } catch (error) {
      console.error(`Email failed to send: ${error.message}`);
      throw new Error('Failed to send Welcome Email.');
    }
  };
  

  transporter.verify((error, success) => {
    if (error) {
      console.error(`SMTP Connection Error: ${error.message}`);
    } else {
      console.log('SMTP Server is ready to send emails!');
    }
  });
  