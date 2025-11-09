import ShopShell from '../../../components/ShopShell';

export const metadata = {
  title: 'Shop'
};

export default function ShopENPage() {
  return (
    <ShopShell
      title="Shop"
      description="Discover the upcoming Artan collection and be the first to access limited releases."
      ctaLabel="Join the waitlist"
    />
  );
}
