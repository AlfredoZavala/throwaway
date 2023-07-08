import { useState } from 'react';
import { marked } from 'marked';

const Markdown = () => {

    /* a header (H1 size), a sub header (H2 size), a link, 
        inline code, a code block, a list item, a blockquote, 
        an image, and bolded text
    */

    const [val, setVal] = useState(`
    # H1
    ## H2
    [title](https://www.example.com)
    \`code\`
    \`\`\`
    {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
    }
    \`\`\` 

    - First item
    - Second item
    - Third item

    > blockquote 

    ![alt text](image.jpg)

    **bold text**

    `);

    marked.setOptions({
        breaks: true
    })

    function handleChange(event) {
        setVal(event.target.value);
    }

    return ( 
        <div className="container">

            <textarea 
                id="editor" 
                onChange={ handleChange  } 
                value={ val }
            ></textarea>

            <div 
                id="preview" 
                dangerouslySetInnerHTML={{
                __html: marked(val),
                }}
            ></div>
        </div>
     );
}
 
export default Markdown
