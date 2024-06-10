
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { users } from '@/data/user.js'; 


export async function POST(request) {
  const { email, password } = await request.json();

  // input
  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' });
  }

  // Find the user in database
  const user = users.find((u) => u.email === email);
  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' });
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Invalid credentials' });
  }

  return NextResponse.json({ message: 'Sign in successful' });
}
