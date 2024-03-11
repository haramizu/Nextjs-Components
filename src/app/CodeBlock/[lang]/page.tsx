import { CodeBlockComponent } from "../CodeBlock";

const Code = [
  {
    data: {
      item: {
        langage: {
          value: "TypeScript",
        },
        code: {
          value:
            '"use client";\r\n\r\nimport { useEffect } from "react";\r\nimport hljs from "highlight.js";\r\nimport "highlight.js/styles/default.css";\r\n\r\ninterface CodeItem {\r\n  data: {\r\n    item: {\r\n      langage: {\r\n        value: string;\r\n      };\r\n      code: {\r\n        value: string;\r\n      };\r\n    };\r\n  };\r\n}\r\n\r\ninterface CodeBlockComponentProps {\r\n  code: CodeItem[];\r\n}\r\nexport function CodeBlockComponent(props: CodeBlockComponentProps) {\r\n  const lang = props.code[0].data.item.langage.value;\r\n  const originalCode = props.code[0].data.item.code.value;\r\n\r\n  useEffect(() => {\r\n    hljs.highlightAll();\r\n  }, []);\r\n\r\n  return (\r\n    <>\r\n      <p>{lang}</p>\r\n      <pre>\r\n        <code className={lang}>{originalCode}</code>\r\n      </pre>\r\n    </>\r\n  );\r\n}\r\n',
        },
      },
    },
  },
];

export default function Page({ params }: { params: { lang: string } }) {
  const lang = params.lang;

  return (
    <main>
      <article className="prose lg:prose-xl">
        <div className="flex flex-row mt-10">
          <div className="basis-1/6"></div>
          <div className="basis-4/6">
            <h1>{lang}</h1>
            <CodeBlockComponent code={Code} />
          </div>
          <div className="basis-1/6"></div>
        </div>
      </article>
    </main>
  );
}
