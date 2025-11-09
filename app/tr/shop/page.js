import ShopShell from '../../../components/ShopShell';

const FILTER_OPTIONS = ['Renk', 'Koleksiyon', 'Fiyat Aralığı'];

export default function ShopTRPage() {
  return (
    <ShopShell
      title="Artan Mağaza"
      filterHeading="Filtreler"
      filterOptions={FILTER_OPTIONS}
      productLabel="Ürün"
      comingSoonLabel="Yakında satışta."
    />
  );
}
