import { getSupabaseServerClient } from '@/lib/supabase/server'
import { createServerFn } from '@tanstack/react-start'
import { redirect } from '@tanstack/react-router'
import { z } from 'zod'

export const getUserFn = createServerFn().handler(async () => {
  const supabase = getSupabaseServerClient()
  const { data: user, error } = await supabase.auth.getUser()
  if (error) throw new Error(error.message)
  return user
})

export const loginFn = createServerFn()
  .inputValidator(
    z.object({
      email: z.email(),
    }),
  )
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()
    const { data: user, error } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        emailRedirectTo: process.env.APP_BASE_URL,
        shouldCreateUser: true,
      },
    })
    if (error) throw new Error(error.message)
    return user
  })

export const verifyLogin = createServerFn()
  .inputValidator(
    z.object({
      token_hash: z.string(),
      type: z.literal(['email']),
    }),
  )
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()
    const { data: user, error } = await supabase.auth.verifyOtp({
      token_hash: data.token_hash,
      type: data.type,
    })
    if (error) throw new Error(error.message)
    return user
  })

export const logoutFn = createServerFn().handler(async () => {
  const supabase = getSupabaseServerClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
  else throw redirect({ to: '/auth/sign-in' })
})
