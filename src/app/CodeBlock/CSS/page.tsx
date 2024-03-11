import { CodeBlockComponent } from "../CodeBlock";

const Code = [
  {
    data: {
      item: {
        langage: {
          value: "CSS",
        },
        code: {
          value:
            "/* Resetting default browser styles */\r\nbody, h1, h2, h3, p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f0f0f0;\r\n    color: #333;\r\n    line-height: 1.6;\r\n}\r\n\r\n.container {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.header {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.main-content {\r\n    padding: 20px;\r\n}\r\n\r\n.footer {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n",
        },
      },
    },
  },
];

export default function Home() {
  return (
    <main>
      <article className="prose lg:prose-xl">
        <div className="flex flex-row mt-10">
          <div className="basis-1/6"></div>
          <div className="basis-4/6">
            <CodeBlockComponent code={Code} />
          </div>
          <div className="basis-1/6"></div>
        </div>
      </article>
    </main>
  );
}
