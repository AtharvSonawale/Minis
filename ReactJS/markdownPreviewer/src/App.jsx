import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className="bg-dark">
      <div className="border-5 rounded-5 bg-dark-subtle d-flex justify-content-center vw-100 vh-100">
        <div className="m-2 w-100">
          <h2 className=' ps-3 pt-0 fw-bold'>Editor</h2>
          <textarea
            id="editor"
            className=" vw-50 border bg-dark w-100 h-90 border-5 rounded-5 p-2 shadow-lg"
            rows="20"
            value={markdown}
            onChange={handleMarkdownChange}
          />
        </div>
        <div className="m-2 w-100">
        <h2 className=' ps-3 pt-0 fw-bold'>Previewer</h2>
          <div
            id="preview"
            className="border border-5 rounded-5 bg-white vw-50 p-2 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
