import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactRequestBody {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactRequestBody

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${data.name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${data.name}`,
      text: data.message,
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
