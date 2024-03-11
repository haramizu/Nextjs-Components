"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

interface CodeItem {
  data: {
    item: {
      langage: {
        value: string;
      };
      code: {
        value: string;
      };
    };
  };
}

interface CodeBlockComponentProps {
  code: CodeItem[];
}
export function CodeBlockComponent(props: CodeBlockComponentProps) {
  const lang = props.code[0].data.item.langage.value;
  const originalCode = props.code[0].data.item.code.value;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1>{lang}</h1>
      <div className="flex">
        <pre className="w-1/2 overflow-x">
          <code className={lang}>{originalCode}</code>
        </pre>
      </div>
    </>
  );
}
