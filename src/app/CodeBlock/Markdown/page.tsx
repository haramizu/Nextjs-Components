import { CodeBlockComponent } from "../CodeBlock";

const Code = [
  {
    data: {
      item: {
        langage: {
          value: "Markdown",
        },
        code: {
          value:
            "This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).\r\n\r\n## Getting Started\r\n\r\nFirst, run the development server:\r\n\r\n```bash\r\nnpm run dev\r\n# or\r\nyarn dev\r\n# or\r\npnpm dev\r\n# or\r\nbun dev\r\n```\r\n\r\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\r\n\r\nYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.\r\n\r\nThis project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.\r\n\r\n## Learn More\r\n\r\nTo learn more about Next.js, take a look at the following resources:\r\n\r\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\r\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\r\n\r\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!\r\n\r\n## Deploy on Vercel\r\n\r\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\r\n\r\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.\r\n",
        },
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
          <CodeBlockComponent code={Code} />
        </div>
        <div className="basis-1/6"></div>
      </div>
    </main>
  );
}
