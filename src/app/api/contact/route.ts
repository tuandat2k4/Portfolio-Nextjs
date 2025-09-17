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

    // --- Basic input validation ---
    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    const message = (data.message || '').trim()
    const isEmailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json({ message: 'Invalid name' }, { status: 400 })
    }
    if (!isEmailValid(email)) {
      return NextResponse.json({ message: 'Invalid email' }, { status: 400 })
    }
    if (!message || message.length < 10 || message.length > 2000) {
      return NextResponse.json({ message: 'Invalid message' }, { status: 400 })
    }

    // rate limit removed by request

    // Ensure required env variables are present
    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env
    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return NextResponse.json({ message: 'Server email configuration is missing' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
