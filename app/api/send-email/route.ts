import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  eventType: string;
  eventDate: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminResponse = await resend.emails.send({
      from: 'Mangalya Events <noreply@resend.dev>',
      to: process.env.ADMIN_EMAIL || 'akshayshingala112@gmail.com',
      subject: `New Contact Form Submission from ${body.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background-color: #f8f4f0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #8b4513; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
              <p><strong>Full Name:</strong> ${body.fullName}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Phone Number:</strong> ${body.phoneNumber}</p>
              <p><strong>Event Type:</strong> ${body.eventType}</p>
              <p><strong>Preferred Event Date:</strong> ${body.eventDate || 'Not specified'}</p>
            </div>

            <div style="background-color: #f8f4f0; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; margin: 10px 0;">${body.message}</p>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            
            <p style="font-size: 12px; color: #666;">
              This email was sent from the contact form on your Mangalya Events website.
            </p>
          </div>
        </div>
      `,
    });

    if (adminResponse.error) {
      console.error('Error sending admin email:', adminResponse.error);
      console.error('Admin response:', JSON.stringify(adminResponse, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email to admin', details: adminResponse.error },
        { status: 500 }
      );
    }

    // Confirmation email to user
    const userResponse = await resend.emails.send({
      from: 'Mangalya Events <noreply@resend.dev>',
      to: body.email,
      subject: 'We Received Your Message - Mangalya Events',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background-color: #f8f4f0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #8b4513; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
            
            <p>Hi ${body.fullName.split(' ')[0]},</p>
            
            <p style="margin-bottom: 15px;">
              We have received your message and appreciate your interest in Mangalya Events. Our team will review your inquiry and get back to you within 24 hours.
            </p>

            <div style="background-color: white; padding: 15px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #d4af37;">
              <p><strong>Your Message Details:</strong></p>
              <p><strong>Event Type:</strong> ${body.eventType}</p>
              <p><strong>Event Date:</strong> ${body.eventDate || 'Not specified'}</p>
              <p><strong>Your Message:</strong></p>
              <p style="white-space: pre-wrap; margin: 10px 0; font-style: italic;">${body.message}</p>
            </div>

            <p>In the meantime, feel free to:</p>
            <ul style="margin: 15px 0; padding-left: 20px;">
              <li>Browse our services and past events</li>
              <li>Call us at +91 9909428973</li>
              <li>Visit our office in Ahmedabad</li>
            </ul>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            
            <div style="text-align: center; padding: 15px; background-color: #f8f4f0; border-radius: 6px;">
              <p style="margin: 5px 0; font-weight: bold; color: #8b4513;">Mangalya Events</p>
              <p style="margin: 5px 0; font-size: 12px;">Making your celebrations extraordinary</p>
            </div>
          </div>
        </div>
      `,
    });

    if (userResponse.error) {
      console.error('Error sending user confirmation email:', userResponse.error);
      console.error('User response:', JSON.stringify(userResponse, null, 2));
      // Still return success even if user confirmation fails
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully!',
        data: {
          adminEmailId: adminResponse.data?.id,
          userEmailId: userResponse.data?.id,
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in send-email route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error details:', errorMessage);
    return NextResponse.json(
      { error: 'Internal server error', details: errorMessage },
      { status: 500 }
    );
  }
}
