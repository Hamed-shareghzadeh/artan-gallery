import ShopShell from "../../../components/ShopShell";

export const metadata = {
  title: "Boutique",
  description: "Explorez la prochaine collection Artan et préparez-vous pour les éditions limitées.",
};

export default function BoutiqueFRPage() {
  return (
    <ShopShell
      title="Boutique"
      description="Explorez la prochaine collection Artan et préparez-vous pour les éditions limitées."
      ctaLabel="Rejoindre la liste d'attente"
      productLabel="Édition"
      comingSoonLabel="Bientôt disponible"
    />
  );
}
