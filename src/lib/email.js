import nodemailer from 'nodemailer';

// Email configuration
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.USER_PASS,
  },
};

const transporter = nodemailer.createTransport(emailConfig);

export async function sendContactEmail(formData) {
  const { name, email, company, service, message } = formData;

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 30px; background: white; border: 1px solid #e0e0e0;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Submission Date:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date().toLocaleDateString()}</td>
            </tr>
          </table>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            © 2024 Savacy Technologies. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };

  // Auto-reply to the user
  const autoReplyOptions = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: 'Thank You for Contacting Savacy Technologies',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out</h1>
        </div>
        
        <div style="padding: 30px; background: white; border: 1px solid #e0e0e0;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Dear <strong>${name}</strong>,
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Thank you for contacting Savacy Technologies. We have received your message and will review it carefully.
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Our team typically responds within 24 hours during business days. If your inquiry is urgent, 
            please call us at +1 (555) 123-4567.
          </p>
          
          <div style="background: #e7f3ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1a56db; margin-top: 0;">What's Next?</h3>
            <ul style="color: #333; padding-left: 20px;">
              <li>We'll review your project requirements</li>
              <li>Schedule a free consultation call if needed</li>
              <li>Provide a detailed proposal and timeline</li>
              <li>Answer any questions you may have</li>
            </ul>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our <a href="https://your-domain.com/services" style="color: #667eea;">services</a> 
            or check out our <a href="https://your-domain.com/portfolio" style="color: #667eea;">portfolio</a>.
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Best regards,<br>
            <strong>The Savacy Technologies Team</strong>
          </p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            © 2024 Savacy Technologies. All rights reserved.<br>
            <a href="https://your-domain.com" style="color: #667eea;">www.savacytech.com</a>
          </p>
        </div>
      </div>
    `,
  };

  try {
    // Send notification to admin
    await transporter.sendMail(mailOptions);
    // Send auto-reply to user
    await transporter.sendMail(autoReplyOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

export async function sendApplicationEmail(applicationData) {
  const { name, email, jobTitle, resume, coverLetter, phone, experience } = applicationData;

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `New Job Application: ${jobTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Job Application</h1>
        </div>
        
        <div style="padding: 30px; background: white; border: 1px solid #e0e0e0;">
          <h2 style="color: #333; margin-top: 0;">Application Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Position:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${jobTitle}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Applicant Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Experience:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${experience}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Cover Letter:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${coverLetter}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Application Date:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date().toLocaleDateString()}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 5px;">
            <p style="margin: 0; color: #666;">
              This application was submitted through the Savacy Technologies career portal. 
              Please review the attached resume and contact the applicant within 3 business days.
            </p>
          </div>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            © 2024 Savacy Technologies. All rights reserved.
          </p>
        </div>
      </div>
    `,
    attachments: resume ? [
      {
        filename: `resume_${name.replace(/\s+/g, '_')}.pdf`,
        content: resume,
        encoding: 'base64',
      },
    ] : [],
  };

  // Auto-reply to applicant
  const autoReplyOptions = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: 'Application Received - Savacy Technologies',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Your Application</h1>
        </div>
        
        <div style="padding: 30px; background: white; border: 1px solid #e0e0e0;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Dear <strong>${name}</strong>,
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Thank you for applying for the <strong>${jobTitle}</strong> position at Savacy Technologies. 
            We have successfully received your application and will review it carefully.
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Our hiring team will review all applications and contact qualified candidates within 
            the next 5-7 business days. If your profile matches our requirements, we will reach 
            out to schedule an interview.
          </p>
          
          <div style="background: #e7f3ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1a56db; margin-top: 0;">What's Next?</h3>
            <ul style="color: #333; padding-left: 20px;">
              <li>Application review (3-5 business days)</li>
              <li>Phone screening (if selected)</li>
              <li>Technical interview</li>
              <li>Final interview with team lead</li>
              <li>Offer decision</li>
            </ul>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to learn more about our company and culture on our 
            <a href="https://your-domain.com/about" style="color: #667eea;"> about page</a>.
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Best regards,<br>
            <strong>The Savacy Technologies Team</strong>
          </p>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            © 2024 Savacy Technologies. All rights reserved.<br>
            <a href="https://your-domain.com" style="color: #667eea;">www.savacytech.com</a>
          </p>
        </div>
      </div>
    `,
  };

  try {
    // Send notification to admin
    await transporter.sendMail(mailOptions);
    // Send auto-reply to applicant
    await transporter.sendMail(autoReplyOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending application email:', error);
    return { success: false, error: error.message };
  }
}