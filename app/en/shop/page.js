import ShopShell from "../../../components/ShopShell";

const filters = [
  { id: "originals", label: "Original Art" },
  { id: "prints", label: "Prints" },
  { id: "merch", label: "Gallery Merchandise" },
];

export default function ShopPageEN() {
  return (
    <ShopShell
      heading="Gallery Shop"
      description="Discover a curated collection of textiles, framed prints, and statement pieces designed for tactile interiors."
      filterHeading="Filter by"
      filters={filters}
      productLabel="Product"
      productDescription="Placeholder listing to illustrate how items will appear."
    />
  );
}
