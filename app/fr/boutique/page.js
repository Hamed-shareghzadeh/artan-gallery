import ShopShell from '../../../components/ShopShell';

export const metadata = {
  title: 'Boutique'
};

export default function BoutiqueFRPage() {
  return (
    <ShopShell
      title="Boutique"
      description="Explorez la prochaine collection Artan et préparez-vous pour les éditions limitées."
      ctaLabel="Rejoindre la liste d'attente"
    />
  );
}
