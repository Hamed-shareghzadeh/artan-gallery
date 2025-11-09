import ShopShell from "../../../components/ShopShell";

const filters = [
  { id: "originals", label: "Orijinal Eserler" },
  { id: "prints", label: "Baskılar" },
  { id: "merch", label: "Tasarım Ürünleri" },
];

export default function ShopPageTR() {
  return (
    <ShopShell
      heading="Galeri Mağazası"
      description="Dokuma kumaşlar, çerçeveli baskılar ve mekânı zenginleştiren dokulu parçalar arasından seçiminizi yapın."
      filterHeading="Filtrele"
      filters={filters}
      productLabel="Ürün"
      productDescription="Ögelerin nasıl görüneceğini göstermek için yer tutucu kart."
    />
  );
}
