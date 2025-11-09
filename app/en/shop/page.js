import ShopShell from '../../../components/ShopShell';

const FILTER_OPTIONS = ['Color', 'Collection', 'Availability'];

export default function ShopENPage() {
  return (
    <ShopShell
      title="Artan Shop"
      filterHeading="Filters"
      filterOptions={FILTER_OPTIONS}
      productLabel="Product"
      comingSoonLabel="Coming soon."
    />
  );
}
