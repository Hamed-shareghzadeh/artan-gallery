import ShopShell from "../../../components/ShopShell";

export const metadata = {
  title: "Mağaza",
  description: "Yeni Artan koleksiyonunu keşfedin ve sınırlı sayıdaki sürümlere ilk siz ulaşın.",
};

export default function ShopTRPage() {
  return (
    <ShopShell
      title="Mağaza"
      description="Yeni Artan koleksiyonunu keşfedin ve sınırlı sayıdaki sürümlere ilk siz ulaşın."
      ctaLabel="Bekleme listesine katıl"
      productLabel="Edisyon"
      comingSoonLabel="Çok yakında"
    />
  );
}
