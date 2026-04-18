import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.CLOVER_API_KEY;
    const merchantId = process.env.CLOVER_MERCHANT_ID;
    const apiUrl = process.env.CLOVER_API_URL || 'https://scl-sandbox.dev.clover.com/v1';

    if (!apiKey || !merchantId) {
      return NextResponse.json({ error: 'Clover is not configured' }, { status: 500 });
    }

    const { amount, items, orderId } = await request.json();

    const appUrl = process.env.APP_URL || 'http://localhost:3000';

    const payload = {
      customer: {
        email: "customer@example.com" // In a real app, use user.email
      },
      shoppingCart: {
        lineItems: items.map((item: any) => ({
          name: item.name,
          unitQty: item.quantity,
          price: Math.round(item.price * 100) // Price in cents
        }))
      },
      redirectUrls: {
        success: `${appUrl}/checkout/success?orderId=${orderId}`,
        cancel: `${appUrl}/cart`,
        failure: `${appUrl}/checkout/error`
      }
    };

    const response = await fetch(`${apiUrl}/checkout`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'X-Clover-Merchant-Id': merchantId
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Clover Error:', errorData);
      return NextResponse.json({ error: 'Failed to create Clover checkout', details: errorData }, { status: response.status });
    }

    const data = await response.json();
    
    // Clover returns { href: "..." } for redirection
    return NextResponse.json({ checkoutUrl: data.href });

  } catch (error: any) {
    console.error('Clover Checkout Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
