'use client'

import { useState } from 'react'
import { toastPromise } from '@/components/ui/sonner'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)

    toastPromise(
      fetch('/api/contact', {
        method: 'POST',
        body: formData,
      }),
      {
        loading: 'Sending your message...',
        success: 'Message sent! We’ll be in touch shortly.',
        error: 'Failed to send message. Please try again.',
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
        className="rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        rows={5}
        required
        className="rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-md bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-900 transition"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
