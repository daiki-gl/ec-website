import Stripe from 'stripe'
import { NextResponse, NextRequest } from 'next/server'
import { config } from '../../../../config'
import { CartProductsType } from '../../../../type'

export async function POST (request:NextRequest) {
    const stripe = new Stripe(config.STRIPE_SECRET_KEY!)
    let data = await request.json()
    let line_items = data.items.map((cartItem:CartProductsType) => ({
        price: cartItem.data.prices[0].id,
        quantity: cartItem.orderQuantity
    }));

    const session = await stripe.checkout.sessions.create({
        line_items,
        currency: 'cad',
        mode: 'payment',
        success_url: `${process.env.MAIN_URL}/success`,
        cancel_url: `${process.env.MAIN_URL}/shop`,
    })
    return NextResponse.json(session.url)
}