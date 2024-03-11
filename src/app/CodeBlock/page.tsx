import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/CodeBlock/CSS">CSS</Link>
        </li>
        <li>
          <Link href="/CodeBlock/Markdown">Markdown</Link>
        </li>
        <li>
          <Link href="/CodeBlock/TypeScript">TypeScript</Link>
        </li>
      </ul>
    </main>
  );
}
