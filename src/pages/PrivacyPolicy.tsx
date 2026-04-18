import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-medium serif italic mb-12">Privacy Policy</h1>
          
          <div className="space-y-10 text-brand-ink/70 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">1. Introduction</h2>
              <p>Welcome to Indo-Farm. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
            </section>

            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">2. The Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Identity Data: Includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: Includes billing address, delivery address, email address and telephone numbers.</li>
                <li>Financial Data: Includes bank account and payment card details (processed securely via Stripe).</li>
                <li>Transaction Data: Includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>To register you as a new customer.</li>
                <li>To process and deliver your order.</li>
                <li>To manage our relationship with you.</li>
                <li>To use data analytics to improve our website, products/services, and experiences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl serif text-brand-ink mb-4">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We use Firebase and Stripe for secure data management and payment processing.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
