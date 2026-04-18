import type { Metadata } from "next";
import "@/src/app/globals.css";
import Navbar from "@/src/components/Navbar";
import { CartProvider } from "@/src/context/CartContext";
import { AuthProvider } from "@/src/context/AuthContext";

export const metadata: Metadata = {
  title: "Indo-Farm | Organic Harvest & Mystic Energy",
  description: "Your trusted source for premium organic dry fruits and authentic lucky stones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-accent/30">
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-20">
                {children}
              </main>
            <footer className="h-[200px] flex flex-col justify-center px-10 border-t border-brand-ink/5 text-brand-muted">
              <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-[11px] uppercase tracking-widest font-medium">
                  © 2026 Indo-Farm Sustainable Trade Co.
                </div>
                
                <div className="flex gap-8 text-[11px] uppercase tracking-widest font-medium">
                  <a href="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</a>
                  <a href="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
                  <a href="/contact" className="hover:text-brand-accent transition-colors">Shipping Track</a>
                </div>
              </div>
              
              <div className="max-w-[1440px] mx-auto w-full mt-8 text-[10px] italic text-center md:text-left opacity-30">
                Design: Artistic Flair • Roots in Nature
              </div>
            </footer>
          </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
