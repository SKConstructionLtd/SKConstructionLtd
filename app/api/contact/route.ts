import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredContact, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = currentDate.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #059669 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Request</h1>
        </div>
        <div style="background: #f8f9fa; padding: 30px;">
          <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Preferred Contact:</td>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${preferredContact}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Submitted:</td>
              <td style="padding: 10px; border-bottom: 1px solid #dee2e6;">${formattedDate} at ${formattedTime}</td>
            </tr>
          </table>
          <h3 style="color: #1e293b; margin-top: 20px;">Message:</h3>
          <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #059669;">
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
        <div style="background: #1e293b; padding: 20px; text-align: center; color: white;">
          <p style="margin: 0;">SK Construction Ltd</p>
        </div>
      </div>
    `;

    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #059669 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Contacting Us</h1>
        </div>
        <div style="background: #f8f9fa; padding: 30px;">
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${name},</p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for reaching out to SK Construction Ltd. We have received your inquiry and
            our team will get back to you within 24 hours.
          </p>
          <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #059669;">
            <h3 style="margin-top: 0; color: #1e293b;">Your Request Details:</h3>
            <p style="margin: 5px 0;"><strong>Submitted:</strong> ${formattedDate} at ${formattedTime}</p>
            <p style="margin: 5px 0;"><strong>Service:</strong> ${service || 'General Inquiry'}</p>
            <p style="margin: 5px 0;"><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
          </div>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            In the meantime, feel free to call us at <strong>+44 7800 909182</strong> if you have any urgent questions.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Best regards,<br>
            <strong>SK Construction Ltd Team</strong>
          </p>
        </div>
        <div style="background: #1e293b; padding: 20px; text-align: center; color: white;">
          <p style="margin: 0 0 10px 0;"><strong>SK Construction Ltd</strong></p>
          <p style="margin: 0; font-size: 14px;">
            Phone: +44 7800 909182 | Email: skdevelopmentandconstruction@gmail.com
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'skdevelopmentandconstruction@gmail.com',
      subject: `New Contact Request from ${name}`,
      html: adminEmailContent,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting SK Construction Ltd',
      html: clientEmailContent,
    });

    return NextResponse.json(
      { message: 'Contact request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send contact request' },
      { status: 500 }
    );
  }
}
