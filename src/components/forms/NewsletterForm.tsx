'use client'

import { useState } from 'react'
import { toastPromise } from '@/components/ui/sonner'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('email', email)

    toastPromise(
      fetch('/api/subscribe', {
        method: 'POST',
        body: formData,
      }),
      {
        loading: 'Subscribing...',
        success: 'You’re in! Check your inbox.',
        error: 'Subscription failed. Try again.',
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="rounded-md border px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-md bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-900 transition"
      >
        Join the Waitlist
      </button>
    </form>
  )
}

export default NewsletterForm
