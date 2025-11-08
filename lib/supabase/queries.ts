import { supabase } from './client'

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*')
  if (error) throw error
  return data
}

export async function addProduct(product: {
  name: string
  price: number
  description?: string
  image_url?: string
}) {
  const { data, error } = await supabase.from('products').insert([product]).select()
  if (error) throw error
  return data[0]
}
