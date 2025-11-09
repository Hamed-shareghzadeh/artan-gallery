export const metadata = {
  title: 'Artan Gallery — Italian Velvet in Türkiye',
  description: 'Modern, minimal, luxurious wall art. Italian velvet — first time in Türkiye by Artan Gallery.',
  openGraph: {
    title: 'Artan Gallery — Italian Velvet in Türkiye',
    description: 'Modern, minimal, luxurious wall art.',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Artan Gallery — Italian Velvet in Türkiye',
    description: 'Modern, minimal, luxurious wall art.'
  }
};

export default function LayoutEN({ children }) {
  // Do not render <html> here; root layout already does.
  return children;
}
