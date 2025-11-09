import ShopShell from '../../../components/ShopShell';

export default function ShopEN() {
  const filters = {
    categoriesLabel: "Categories",
    categories: ["Wall Art", "Set", "Poster", "Accessory"],
    stylesLabel: "Styles",
    styles: ["Modern", "Minimal", "Classic", "Abstract"],
    colorsLabel: "Colors",
    colors: ["Black", "White", "Gold", "Gray", "Blue", "Green"],
    sizesLabel: "Sizes",
    sizes: ["30x40", "40x60", "50x70", "70x100"],
    priceLabel: "Max Price"
  };

  const items = [
    { id: 1, title: "Velvet Noir", price: 3490, pop: 9, new: true, cats:["Wall Art"], styles:["Minimal"], colors:["Black","Gold"], sizes:["50x70"] },
    { id: 2, title: "Emerald Touch", price: 2990, pop: 7, cats:["Poster"], styles:["Modern"], colors:["Green","Gold"], sizes:["40x60"] },
    { id: 3, title: "Ivory Muse", price: 2790, pop: 8, cats:["Wall Art"], styles:["Classic"], colors:["White","Gold"], sizes:["30x40"] },
    { id: 4, title: "Azure Drift", price: 3190, pop: 6, cats:["Set"], styles:["Abstract"], colors:["Blue"], sizes:["50x70"] },
    { id: 5, title: "Golden Frame", price: 3890, pop: 10, cats:["Accessory"], styles:["Minimal"], colors:["Gold"], sizes:["70x100"] },
    { id: 6, title: "Velvet Duo", price: 4590, pop: 5, cats:["Set"], styles:["Modern"], colors:["Black","White"], sizes:["40x60"] },
    { id: 7, title: "Grey Silence", price: 2590, pop: 4, cats:["Poster"], styles:["Minimal"], colors:["Gray"], sizes:["30x40"] },
    { id: 8, title: "Forest Whisper", price: 3290, pop: 7, cats:["Wall Art"], styles:["Abstract"], colors:["Green"], sizes:["50x70"] }
  ];

  return (
    <main>
      <ShopShell
        heading="Shop"
        searchPlaceholder="Search…"
        sortLabel="Sort"
        sortOptions={[
          { value: "pop", label: "Popular" },
          { value: "new", label: "Newest" },
          { value: "price_asc", label: "Price: Low to High" },
          { value: "price_desc", label: "Price: High to Low" }
        ]}
        resetLabel="Reset"
        filters={filters}
        items={items}
      />
    </main>
  );
}
