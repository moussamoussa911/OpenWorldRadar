import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2">
        <li><Link href="/" className="hover:text-cyan-200">Start</Link></li>
        {items.map((item) => (
          <li key={item.label} className="flex gap-2">
            <span>/</span>
            {item.href ? <Link href={item.href} className="hover:text-cyan-200">{item.label}</Link> : <span className="text-slate-300">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
