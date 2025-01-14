import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Configure the transporter with your email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your email service (e.g., Yahoo, Outlook)
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL,
      subject: `📩 New Message from ${name} - Portfolio Contact`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0078d4; text-align: center;">New Contact Form Submission</h2>
          <p style="text-align: center; color: #555;">You've received a new message from your portfolio website's contact form. Here are the details:</p>
          <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; background: #f9f9f9; border: 1px solid #ddd;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #0078d4; color: #fff; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #0078d4; color: #fff; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #0078d4; color: #fff; font-weight: bold;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background: #0078d4; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to ${name}</a>
          </p>
          <footer style="text-align: center; margin-top: 30px; font-size: 12px; color: #888;">
            <p>Message sent from your portfolio website</p>
            <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
          </footer>
        </div>
      `,
    };


    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send message. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
