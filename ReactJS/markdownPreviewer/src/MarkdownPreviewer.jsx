// src/MarkdownPreviewer.jsx
import React, { useState } from 'react';
import { marked } from 'marked';

const initialMarkdown = `# Heading 1
## Sub-heading
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container my-auto mx-auto p-4 place-items-center">
      <div className="flex md:flex-row">
        <textarea
          id="editor"
          className="w-full md:w-1/2 h-64 p-2 border-2"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id="preview"
          className="w-full md:w-1/2 h-64 p-2 border-2 overflow-auto"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
