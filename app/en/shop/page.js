import ShopShell from "../../../components/ShopShell";

export const metadata = {
  title: "Shop",
  description: "Discover the upcoming Artan collection and be the first to access limited releases.",
};

export default function ShopENPage() {
  return (
    <ShopShell
      title="Shop"
      description="Discover the upcoming Artan collection and be the first to access limited releases."
      ctaLabel="Join the waitlist"
      productLabel="Edition"
      comingSoonLabel="Coming soon"
    />
  );
}
