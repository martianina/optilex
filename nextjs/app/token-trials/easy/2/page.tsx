"use client"; // This enables client-side rendering

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionPage2 = () => {
  const router = useRouter(); // Using the new App Router hook
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Save the answer to localStorage and navigate to the next question (easy/3)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    if (selectedAnswer) {
      localStorage.setItem('easy_2_answer', selectedAnswer); // Store answer in localStorage
      router.push('/token-trials/easy/3'); // Navigate to easy/3
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      {/* Question Box */}
      <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-secondary border-8 border-secondary rounded-xl p-6 mb-8 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          In what way does the decentralization feature of blockchain contribute to its reliability in legal applications?
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="answer"
                value="a"
                onChange={() => setSelectedAnswer('a')}
                checked={selectedAnswer === 'a'}
              />
              It allows any participant to alter previous transactions, ensuring flexibility
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="answer"
                value="b"
                onChange={() => setSelectedAnswer('b')}
                checked={selectedAnswer === 'b'}
              />
              It prevents any single entity from controlling the network, enhancing security and trust
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="answer"
                value="c"
                onChange={() => setSelectedAnswer('c')}
                checked={selectedAnswer === 'c'}
              />
              It centralizes data storage, making information easily accessible to authorities
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4 w-full"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionPage2;