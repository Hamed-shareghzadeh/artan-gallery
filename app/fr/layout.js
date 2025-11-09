import BaseLayout from '../../components/BaseLayout';

export const metadata = {
  title: 'Artan Gallery — Velours italien en Turquie',
  description: 'Art mural moderne, minimal et luxueux.'
};

export default function LayoutFR({ children }) {
  return <BaseLayout htmlLang="fr">{children}</BaseLayout>;
}
