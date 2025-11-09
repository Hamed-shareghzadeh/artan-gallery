import ShopShell from '../../../components/ShopShell';

const FILTER_OPTIONS = ['Couleur', 'Collection', 'Disponibilité'];

export default function BoutiqueFRPage() {
  return (
    <ShopShell
      title="Boutique Artan"
      filterHeading="Filtres"
      filterOptions={FILTER_OPTIONS}
      productLabel="Produit"
      comingSoonLabel="Bientôt disponible."
    />
  );
}
