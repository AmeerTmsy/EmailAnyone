import { useState } from 'react';
import axios from 'axios';
import Success from './Success';

function App() {
  const [name, setName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [message, setMessage] = useState('')
  const [focus, setFocus] = useState({ name: false, senderEmail: false, recipientEmail: false, message: false })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const URL = "http://localhost:3000/mails/send-email";
    const data = { name, emailFrom: senderEmail, emailTo: recipientEmail, message }
    try {
      const response = await axios.post( URL, data, {withCredentials: true})
      console.log(response)
      setShowSuccess(true)
    } catch (error) {
      console.log("some errors occured during submission",error);
    }
    // console.log('Form submitted:', { name, senderEmail, recipientEmail, message })
  }

  const handleGoBack = () => {
    setShowSuccess(false)
    setName('')
    setSenderEmail('')
    setRecipientEmail('')
    setMessage('')
    setFocus({ name: false, senderEmail: false, recipientEmail: false, message: false })
  }

  if (showSuccess) {
    return <Success onGoBack={handleGoBack} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4" style={{ backgroundColor: '#E646FF' }}>
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={() => setFocus(f => ({ ...f, name: true }))}
              onBlur={() => setFocus(f => ({ ...f, name: false }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer text-sm sm:text-base"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className={`absolute left-3 transition-all duration-400 pointer-events-none ${
                focus.name || name
                  ? 'text-sm text-purple-600 -top-6 bg-white px-1'
                  : 'text-base text-gray-500 top-2'
              }`}
            >
              Name
            </label>
          </div>
          {/* Sender Email Field */}
          <div className="relative">
            <input
              type="email"
              id="senderEmail"
              value={senderEmail}
              onChange={e => setSenderEmail(e.target.value)}
              onFocus={() => setFocus(f => ({ ...f, senderEmail: true }))}
              onBlur={() => setFocus(f => ({ ...f, senderEmail: false }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer text-sm sm:text-base"
              placeholder=" "
              required
            />
            <label
              htmlFor="senderEmail"
              className={`absolute left-3 transition-all duration-400 pointer-events-none ${
                focus.senderEmail || senderEmail
                  ? 'text-sm text-purple-600 -top-6 bg-white px-1'
                  : 'text-base text-gray-500 top-2'
              }`}
            >
              Your Email Address
            </label>
          </div>
          {/* Recipient Email Field */}
          <div className="relative">
            <input
              type="email"
              id="recipientEmail"
              value={recipientEmail}
              onChange={e => setRecipientEmail(e.target.value)}
              onFocus={() => setFocus(f => ({ ...f, recipientEmail: true }))}
              onBlur={() => setFocus(f => ({ ...f, recipientEmail: false }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer text-sm sm:text-base"
              placeholder=" "
              required
            />
            <label
              htmlFor="recipientEmail"
              className={`absolute left-3 transition-all duration-400 pointer-events-none ${
                focus.recipientEmail || recipientEmail
                  ? 'text-sm text-purple-600 -top-6 bg-white px-1'
                  : 'text-base text-gray-500 top-2'
              }`}
            >
              Recipient's Email Address
            </label>
          </div>
          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onFocus={() => setFocus(f => ({ ...f, message: true }))}
              onBlur={() => setFocus(f => ({ ...f, message: false }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent peer resize-none min-h-[100px] text-sm sm:text-base"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className={`absolute left-3 transition-all duration-400 pointer-events-none ${
                focus.message || message
                  ? 'text-sm text-purple-600 -top-6 bg-white px-1'
                  : 'text-base text-gray-500 top-2'
              }`}
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
