'use client';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-deep">
      <div className="w-full max-w-md p-8">
        <h2 className="text-h2 font-display font-bold text-center mb-8">Reset Your Password</h2>
        <p className="text-center text-text-secondary mb-8">
          Enter your email address below, and we'll send you a link to reset your password.
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input className="w-full h-12 px-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:border-gold-bright focus:outline-none" type="email" id="email" />
          </div>
          <button className="w-full h-12 mt-4 px-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-midnight-dark font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
            Send Reset Link
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-text-tertiary">
            Remember your password? <a href="/login" className="text-gold-bright hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
