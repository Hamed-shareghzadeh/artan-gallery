import ShopShell from '../../../components/ShopShell';

export default function ShopTR() {
  const filters = {
    categoriesLabel: "Kategoriler",
    categories: ["Tablo", "Set", "Poster", "Aksesuar"],
    stylesLabel: "Stiller",
    styles: ["Modern", "Minimal", "Klasik", "Soyut"],
    colorsLabel: "Renkler",
    colors: ["Siyah", "Beyaz", "Altın", "Gri", "Mavi", "Yeşil"],
    sizesLabel: "Ölçüler",
    sizes: ["30x40", "40x60", "50x70", "70x100"],
    priceLabel: "Azami Fiyat"
  };

  const items = [
    { id: 1, slug:"velvet-noir",   title: "Velvet Noir",    price: 3490, pop: 9, new: true, cats:["Tablo"],  styles:["Minimal"], colors:["Siyah","Altın"], sizes:["50x70"] },
    { id: 2, slug:"emerald-touch", title: "Emerald Touch",  price: 2990, pop: 7,              cats:["Poster"], styles:["Modern"], colors:["Yeşil","Altın"], sizes:["40x60"] },
    { id: 3, slug:"ivory-muse",    title: "Ivory Muse",     price: 2790, pop: 8,              cats:["Tablo"],  styles:["Klasik"], colors:["Beyaz","Altın"], sizes:["30x40"] },
    { id: 4, slug:"azure-drift",   title: "Azure Drift",    price: 3190, pop: 6,              cats:["Set"],    styles:["Soyut"],  colors:["Mavi"], sizes:["50x70"] },
    { id: 5, slug:"golden-frame",  title: "Golden Frame",   price: 3890, pop:10,              cats:["Aksesuar"], styles:["Minimal"], colors:["Altın"], sizes:["70x100"] },
    { id: 6, slug:"velvet-duo",    title: "Velvet Duo",     price: 4590, pop: 5,              cats:["Set"],    styles:["Modern"], colors:["Siyah","Beyaz"], sizes:["40x60"] },
    { id: 7, slug:"grey-silence",  title: "Grey Silence",   price: 2590, pop: 4,              cats:["Poster"], styles:["Minimal"], colors:["Gri"], sizes:["30x40"] },
    { id: 8, slug:"forest-whisper",title: "Forest Whisper", price: 3290, pop: 7,              cats:["Tablo"],  styles:["Soyut"],  colors:["Yeşil"], sizes:["50x70"] }
  ];

  return (
    <main>
      <ShopShell
        heading="Mağaza"
        searchPlaceholder="Ara…"
        sortLabel="Sırala"
        sortOptions={[
          { value: "pop", label: "Popüler" },
          { value: "new", label: "En yeni" },
          { value: "price_asc", label: "Fiyat: Artan" },
          { value: "price_desc", label: "Fiyat: Azalan" }
        ]}
        resetLabel="Sıfırla"
        addLabel="Sepete ekle"
        locale="tr"
        filters={filters}
        items={items}
      />
    </main>
  );
}
