export const metadata = {
  title: 'Artan Gallery — Velours italien en Turquie',
  description: 'Art mural moderne, minimal et luxueux.',
  openGraph: {
    title: 'Artan Gallery — Velours italien en Turquie',
    description: 'Art mural moderne, minimal et luxueux.',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Artan Gallery — Velours italien en Turquie',
    description: 'Art mural moderne, minimal et luxueux.'
  }
};

export default function LayoutFR({ children }) {
  // Do not render <html> here; root layout already does.
  return children;
}
