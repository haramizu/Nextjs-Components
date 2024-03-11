import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/Breadcrumb">Breadcrumb</Link>
        </li>
        <li>
          <Link href="/Carousel">Carousel</Link>
        </li>
        <li>
          <Link href="/CodeBlock">CodeBlock</Link>
        </li>
      </ul>
    </div>
  );
}
