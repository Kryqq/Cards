import { z } from 'zod';

export const loginSchema = z.object({
   email: z.string().email(),
   password: z.string().min(3),
   rememberMe: z.boolean().default(false),
});

export const registerSchema = z
   .object({
      email: z.string().email(),
      password: z.string().min(3),
      confirmPassword: z.string(),
      rememberMe: z.boolean().default(false),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
   });

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
