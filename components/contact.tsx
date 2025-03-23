"use client"

import type React from "react"
import { useState } from "react"
import { Send, AlertCircle, Info } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
    // Clear error when user starts typing again
    if (formError) setFormError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const form = e.target as HTMLFormElement

      // Use Formspree to handle the form submission
      const response = await fetch("https://formspree.io/f/maneneol", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        const data = await response.json()
        setFormError(data.error || "Failed to submit form. Please try again.")
      }
    } catch (error) {
      setFormError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-gray-600">Have a project in mind? Let's discuss how we can bring your vision to life.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="p-6 bg-green-50 text-green-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <form action="https://formspree.io/f/maneneol" method="POST" onSubmit={handleSubmit} className="space-y-6">
              {formError && (
                <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{formError}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    placeholder="Your name"
                    required
                    minLength={2}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Subject"
                  required
                  minLength={2}
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Info className="h-3 w-3 mr-1" />
                    Min. 10 characters
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Your message"
                  required
                  minLength={10}
                ></textarea>
                <div className="mt-1 text-xs text-gray-500">
                  {formState.message.length < 10 ? (
                    <span className="text-amber-600">{10 - formState.message.length} more characters needed</span>
                  ) : (
                    <span className="text-green-600">Message length is good</span>
                  )}
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || formState.message.length < 10}
                  className="group relative overflow-hidden rounded-md bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-3 text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  <span className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Send Message</span>
                        <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

