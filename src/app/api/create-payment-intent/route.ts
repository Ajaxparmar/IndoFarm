import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }

    const stripe = new Stripe(key, {
      apiVersion: '2025-10-27-acacia' as any,
    });

    const { amount, currency = 'usd' } = await request.json();

    if (!amount) {
      return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Stripe Payment Intent Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
