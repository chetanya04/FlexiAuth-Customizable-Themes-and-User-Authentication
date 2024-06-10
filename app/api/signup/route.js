import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { users } from '@/data/user.js';


export async function POST(request) {
  const { email, password } = await request.json();

  // input
  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  users.push({ email, password: hashedPassword });

  return NextResponse.json({ message: 'User created successfully' });
}
