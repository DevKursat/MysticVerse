'use client';

import { useState } from 'react';

export default function SignUpPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left side: Cosmic Animation */}
      <div className="hidden md:flex items-center justify-center bg-gradient-cosmic">
        <div className="w-96 h-96 border-4 border-aurora-purple rounded-full animate-cosmicSpin"></div>
      </div>

      {/* Right side: Form */}
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-h2 font-display font-bold text-center mb-8">Create Your Mystic Account</h2>

          {/* Progress Bar */}
          {/* TODO: Implement multi-step progress bar */}

          {step === 1 && (
            <div>
              {/* Step 1: Account Info */}
              <h3 className="text-h4 font-semibold mb-4">Step 1: Account Details</h3>
              {/* TODO: Implement form fields */}
            </div>
          )}
          {step === 2 && (
            <div>
              {/* Step 2: Birth Information */}
              <h3 className="text-h4 font-semibold mb-4">Step 2: Birth Information</h3>
              {/* TODO: Implement form fields */}
            </div>
          )}
          {step === 3 && (
            <div>
              {/* Step 3: Preferences */}
              <h3 className="text-h4 font-semibold mb-4">Step 3: Preferences</h3>
              {/* TODO: Implement form fields */}
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 1 && <button onClick={() => setStep(step - 1)}>Previous</button>}
            {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
            {step === 3 && <button>Create Account</button>}
          </div>

          <div className="mt-8 text-center">
            {/* TODO: Add social login buttons */}
            <p className="text-sm text-text-tertiary mt-4">
              Already have an account? <a href="/login" className="text-gold-bright hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
