import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({
        success: false,
        message: 'All fields are required'
      }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid email format'
      }, { status: 400 })
    }

    // Log the contact form submission
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // Optional: Send notification using ZAI
    try {
      const zai = await ZAI.create()
      
      const notificationMessage = `
        New Contact Form Submission from YONO Website:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
        
        Time: ${new Date().toLocaleString('id-ID')}
      `

      // You could use ZAI to process this notification or send it somewhere
      console.log('Contact notification prepared:', notificationMessage)
      
    } catch (aiError) {
      console.error('Failed to prepare AI notification:', aiError)
      // Continue even if AI notification fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        name,
        email,
        phone,
        subject,
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.'
    }, { status: 500 })
  }
}