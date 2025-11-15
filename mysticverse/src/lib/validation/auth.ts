import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const signupSchemaStep1 = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const signupSchemaStep2 = z.object({
  birthDate: z.string().min(1, 'Birth date is required'),
  birthTime: z.string().optional(),
  birthLocation: z.string().min(2, 'Birth location is required'),
});

export const signupSchemaStep3 = z.object({
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  newsletter: z.boolean().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupStep1Data = z.infer<typeof signupSchemaStep1>;
export type SignupStep2Data = z.infer<typeof signupSchemaStep2>;
export type SignupStep3Data = z.infer<typeof signupSchemaStep3>;
