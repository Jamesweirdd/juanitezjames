import "./globals.css";
export const metadata = { title: "Pangasinan Heritage Digital Showcase", description: "Explore Pangasinan heritage sites." };
export default function RootLayout({children}) {
  return <html lang="en"><body>{children}</body></html>;
}