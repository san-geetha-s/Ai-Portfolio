// components/Contact.jsx

export default function Contact() {
    return (
      <div className="text-sm bg-gray-900 text-gray-300 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">📬 Contact Me</h2>
        <p className="mb-4">Feel free to send a message — I’ll get back to you ASAP!</p>
  
        <form
          action="https://formsubmit.co/sangeethaofficial05@gmail.com"
          method="POST"
          className="flex flex-col space-y-4"
        >
          {/* FormSubmit Config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
  
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
  
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
  
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded resize-none"
          ></textarea>
  
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  