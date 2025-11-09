import BaseLayout from '../../components/BaseLayout';

export const metadata = {
  title: 'Artan Gallery — Italian Velvet in Türkiye',
  description: 'Modern, minimal, luxurious wall art.'
};

export default function LayoutEN({ children }) {
  return <BaseLayout htmlLang="en">{children}</BaseLayout>;
}
