"use client";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-gray-700 text-lg text-center mb-6">
        Your message has been sent successfully.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;