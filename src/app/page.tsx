import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <ul>
          <li>
            <Link href="/Breadcrumb">Breadcrumb</Link>
          </li>
          <li>
            <Link href="/Carousel">Carousel</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
