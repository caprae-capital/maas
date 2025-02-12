import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hexagon, Mail, Eye, EyeOff, Building, Store } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'buyer' | 'seller' | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!userType) {
      setError('Please select whether you are a buyer or seller');
      return;
    }

    try {
      signup(email, password, userType);
      if (userType === 'seller') {
        navigate('/seller-questionnaire');
      } else {
        navigate('/buyer-questionnaire');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred during signup');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <Hexagon className="h-12 w-12 text-indigo-500 mx-auto" />
          </Link>
          <h2 className="text-3xl font-bold text-white mt-6 mb-2">
            Create an account
          </h2>
          <p className="text-slate-400">
            Sign up to start your M&A journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setUserType('buyer')}
              className={`p-4 rounded-xl border-2 transition-colors text-left ${
                userType === 'buyer'
                  ? 'border-indigo-500 bg-indigo-500/10 text-white'
                  : 'border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white'
              }`}
            >
              <Building className="h-6 w-6 mb-2" />
              <div className="font-medium">Buyer</div>
              <div className="text-sm opacity-80">I want to acquire businesses</div>
            </button>
            <button
              type="button"
              onClick={() => setUserType('seller')}
              className={`p-4 rounded-xl border-2 transition-colors text-left ${
                userType === 'seller'
                  ? 'border-indigo-500 bg-indigo-500/10 text-white'
                  : 'border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white'
              }`}
            >
              <Store className="h-6 w-6 mb-2" />
              <div className="font-medium">Seller</div>
              <div className="text-sm opacity-80">I want to sell my business</div>
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-lg pl-10 pr-12 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your password"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!userType}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              !userType
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-500 text-white hover:bg-indigo-600'
            }`}
          >
            Create account
          </button>

          <div className="text-center">
            <Link
              to="/login"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}