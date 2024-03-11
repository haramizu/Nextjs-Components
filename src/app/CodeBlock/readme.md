# Memo for Codeblock

Install highlight.js https://highlightjs.org/

```bash
npm install highlight.js
```

Following sample is BreadCrumb on XM Cloud

```graphql
query CodeBlockQuery($contextItem: String!, $language: String!) {
  # path can be an item tree path or GUID-based id
  item(path: $contextItem, language: $language) {
    langage: field(name: "language") {
      ... on TextField {
        value
      }
    }

    ... on CodeBlock {
      code {
        value
      }
    }
  }
}
```

Following is sample Query Variables.

```json
{
  "contextItem": "{B47E1C18-526B-42E4-839E-9814AA8CB8E9}",
  "language": "en"
}
```

Clipboard

```
import React from 'react';

class ClipboardCopy extends React.Component {
  copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy text to clipboard:', err);
    }
  };

  render() {
    const textToCopy: string = "Hello, clipboard!";

    return (
      <div>
        <button onClick={() => this.copyToClipboard(textToCopy)}>Copy to Clipboard</button>
      </div>
    );
  }
}

export default ClipboardCopy;
```
