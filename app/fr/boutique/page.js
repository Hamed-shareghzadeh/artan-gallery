import ShopShell from "../../../components/ShopShell";

const filters = [
  { id: "originals", label: "Œuvres originales" },
  { id: "prints", label: "Estampes" },
  { id: "merch", label: "Objets de la galerie" },
];

export default function BoutiquePageFR() {
  return (
    <ShopShell
      heading="Boutique de la Galerie"
      description="Découvrez une sélection de textiles, de tirages encadrés et de pièces signature pensées pour des intérieurs sensoriels."
      filterHeading="Filtres"
      filters={filters}
      productLabel="Produit"
      productDescription="Carte fictive pour prévisualiser la mise en page."
    />
  );
}
