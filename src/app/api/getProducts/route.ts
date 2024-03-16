import Stripe from 'stripe'
import { config } from '../../../../config'
import { NextResponse } from 'next/server'

export async function GET() {
  const stripe = new Stripe(config.STRIPE_SECRET_KEY!)
  const products = await stripe.products.list({ limit: 25 })

  const res = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({
        product: product.id,
      })
      return {
        id: product.id,
        description: product.description,
        name: product.name,
        images: product.images,
        unit_label: product.unit_label,
        active: product.active,
        metadata: product.metadata,
        created: product.created,
        prices: prices.data.map((price) => {
          return {
            id: price.id,
            currency: price.currency,
            unit_amount: price.unit_amount,
          }
        }),
      }
    })
  )

  return NextResponse.json(res)
}
