import BaseLayout from '../../components/BaseLayout';

export const metadata = {
  title: 'Artan Gallery — İtalyan kadifesi Türkiye’de',
  description: 'Modern, minimal, lüks duvar sanatı.'
};

export default function LayoutTR({ children }) {
  return <BaseLayout htmlLang="tr">{children}</BaseLayout>;
}
