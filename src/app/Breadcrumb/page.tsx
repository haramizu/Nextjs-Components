import { BreadCrumbComponent } from "./BreadCrumb";

const items = [
  {
    data: {
      item: {
        ancestors: [
          {
            field: {
              value: "Components",
            },
            url: {
              path: "/resource/xmcloud/components",
            },
          },
          {
            field: {
              value: "XM Cloud",
            },
            url: {
              path: "/resource/xmcloud",
            },
          },
          {
            field: {
              value: "Resource",
            },
            url: {
              path: "/resource",
            },
          },
          {
            field: {
              value: "Home",
            },
            url: {
              path: "/",
            },
          },
        ],
      },
    },
  },
];

export default function Home() {
  return (
    <main>
      <div className="flex flex-row mt-10">
        <div className="basis-1/6"></div>
        <div className="basis-4/6">
          <BreadCrumbComponent fields={items[0]} />
        </div>
        <div className="basis-1/6"></div>
      </div>
    </main>
  );
}
