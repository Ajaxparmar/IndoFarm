"use client";

import * as motion from 'motion/react-client';

export default function TermsConditions() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-medium serif italic mb-12">Terms & Conditions</h1>
          
          <div className="space-y-10 text-brand-muted font-light leading-relaxed">
            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </section>

            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">2. Product Information</h2>
              <p>Indo-Farm attempts to be as accurate as possible in describing its dry fruits and lucky stones. However, Indo-Farm does not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. Natural products like lucky stones may vary in appearance.</p>
            </section>

            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">3. Pricing and Payments</h2>
              <p>All prices are listed in USD. We reserve the right to change prices at any time without notice. Payments are processed via Stripe. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.</p>
            </section>

            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">4. Shipping and Returns</h2>
              <p>Shipping costs and delivery times reflect the current estimates from our logistics partners. Dry fruits are perishable items and returns are only accepted if the packaging is damaged or the product is incorrect. Lucky stones can be returned within 14 days of receipt if in original condition.</p>
            </section>

            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">5. Limitation of Liability</h2>
              <p>Indo-Farm shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Indo-Farm has been advised of the possibility of such damages.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
