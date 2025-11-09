export default function Page() {
  if (typeof window !== 'undefined') {
    window.location.replace('/tr');
  }
  return null;
}
