"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowRight, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { signIn } from 'next-auth/react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Send data to API to store it in DynamoDB
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            }),
        });

        if (response.ok) {
            console.log('User data saved successfully');
        } else {
            console.error('Failed to save user data');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }

    // Sign in the user after the form submission
    await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        callbackUrl: '/dashboard',
    });
};


  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="backdrop-blur-md bg-white/90 shadow-xl border-0 rounded-3xl overflow-hidden">
          <CardHeader className="space-y-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
              <Sparkles className="h-8 w-8 mr-2" />
              Join Prodigi
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="pl-10 pr-4 py-2 w-full border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="pl-10 pr-4 py-2 w-full border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="pl-10 pr-12 py-2 w-full border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                <span className="mr-2">Sign Up</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleGoogleSignIn}
                  className="w-full bg-white text-gray-700 font-semibold py-3 px-6 rounded-full border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign in with Google
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-600 hover:underline font-medium transition-colors duration-200">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}