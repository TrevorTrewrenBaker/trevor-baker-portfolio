export default function TechTag({ label }: { label: string }) {
  return (
    <span
      className="text-xs font-semibold px-2 py-1 rounded-md border border-(--color-secondary)/30 bg-(--color-secondary)/10 text-(--color-primary)"
    >
      {label}
    </span>
  );
}