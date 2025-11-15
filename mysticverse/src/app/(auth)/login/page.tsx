'use client';

export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left side: Cosmic Animation */}
      <div className="hidden md:flex items-center justify-center bg-gradient-cosmic">
        <div className="w-96 h-96 border-4 border-gold-bright rounded-full animate-[cosmicSpin_30s_linear_infinite]"></div>
      </div>

      {/* Right side: Form */}
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-h2 font-display font-bold text-center mb-8">Welcome Back to MysticVerse</h2>

          {/* TODO: Implement login form fields */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input className="w-full h-12 px-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:border-gold-bright focus:outline-none" type="email" id="email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
              <input className="w-full h-12 px-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl focus:border-gold-bright focus:outline-none" type="password" id="password" />
            </div>
            <div className="flex justify-between items-center mb-6">
                <a href="/reset-password" className="text-sm text-gold-bright hover:underline">Forgot password?</a>
            </div>
            <button className="w-full h-12 px-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-midnight-dark font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            {/* TODO: Add social login buttons */}
            <p className="text-sm text-text-tertiary mt-4">
              Don't have an account? <a href="/signup" className="text-gold-bright hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
