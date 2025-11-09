import './globals.css';

export const metadata = {
  title: 'Artan Gallery',
  description: 'Italian velvet — first time in Türkiye. Modern, minimal, luxurious wall art.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
