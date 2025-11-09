import ShopShell from '../../../components/ShopShell';

export default function BoutiqueFR() {
  const filters = {
    categoriesLabel: "Catégories",
    categories: ["Art mural", "Ensemble", "Affiche", "Accessoire"],
    stylesLabel: "Styles",
    styles: ["Moderne", "Minimal", "Classique", "Abstrait"],
    colorsLabel: "Couleurs",
    colors: ["Noir", "Blanc", "Or", "Gris", "Bleu", "Vert"],
    sizesLabel: "Tailles",
    sizes: ["30x40", "40x60", "50x70", "70x100"],
    priceLabel: "Prix max"
  };

  const items = [
    { id: 1, slug:"velvet-noir",   title: "Velvet Noir",    price: 3490, pop: 9, new: true, cats:["Art mural"], styles:["Minimal"],  colors:["Noir","Or"], sizes:["50x70"] },
    { id: 2, slug:"emerald-touch", title: "Emerald Touch",  price: 2990, pop: 7,            cats:["Affiche"],   styles:["Moderne"], colors:["Vert","Or"], sizes:["40x60"] },
    { id: 3, slug:"ivory-muse",    title: "Ivory Muse",     price: 2790, pop: 8,            cats:["Art mural"], styles:["Classique"], colors:["Blanc","Or"], sizes:["30x40"] },
    { id: 4, slug:"azure-drift",   title: "Azure Drift",    price: 3190, pop: 6,            cats:["Ensemble"], styles:["Abstrait"], colors:["Bleu"], sizes:["50x70"] },
    { id: 5, slug:"golden-frame",  title: "Golden Frame",   price: 3890, pop:10,            cats:["Accessoire"], styles:["Minimal"], colors:["Or"], sizes:["70x100"] },
    { id: 6, slug:"velvet-duo",    title: "Velvet Duo",     price: 4590, pop: 5,            cats:["Ensemble"], styles:["Moderne"],  colors:["Noir","Blanc"], sizes:["40x60"] },
    { id: 7, slug:"grey-silence",  title: "Grey Silence",   price: 2590, pop: 4,            cats:["Affiche"],   styles:["Minimal"],  colors:["Gris"], sizes:["30x40"] },
    { id: 8, slug:"forest-whisper",title: "Forest Whisper", price: 3290, pop: 7,            cats:["Art mural"], styles:["Abstrait"], colors:["Vert"], sizes:["50x70"] }
  ];

  return (
    <main>
      <ShopShell
        heading="Boutique"
        searchPlaceholder="Rechercher…"
        sortLabel="Trier"
        sortOptions={[
          { value: "pop", label: "Populaire" },
          { value: "new", label: "Nouveautés" },
          { value: "price_asc", label: "Prix : croissant" },
          { value: "price_desc", label: "Prix : décroissant" }
        ]}
        resetLabel="Réinitialiser"
        addLabel="Ajouter au panier"
        locale="fr"
        filters={filters}
        items={items}
      />
    </main>
  );
}
