import { CarouselComponent } from "./Carousel";

const items = [
  {
    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
    targetUrl: "https://haramizu.com/tags/xm-cloud",
    text: "XM Cloud",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
    targetUrl:
      "https://haramizu.com/blog/2024/03/08/xm-cloud-create-partial-design-header",
    text: "Pages で Partial design を作成する - ヘッダーの作成",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d",
    targetUrl: "https://haramizu.com/blog/2024/03/06/xm-cloud-breadcrumb",
    text: "パンくずリストのコンポーネントを作成する",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1557409518-691ebcd96038",
    targetUrl: "https://haramizu.com/blog/2024/03/01/xm-cloud-column-splitter",
    text: "ColumnSplitter のコンポーネントを tailwind.css で利用できるようにする",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1603435580027-f30889418372",
    targetUrl:
      "https://haramizu.com/blog/2024/03/05/headless-sxa-linklist-component",
    text: "LinkList コンポーネントの動作を確認する",
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex flex-row mt-10">
        <div className="basis-1/6"></div>
        <div className="basis-4/6">
          <CarouselComponent items={items} />
        </div>
        <div className="basis-1/6"></div>
      </div>
    </main>
  );
}
