import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .ql-container {
    border: none;
    min-height: 50px;
    border-radius: 0 0 7px 7px;
  }
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid lightgray;
  }
  .ql-editor strong {
    font-weight: bold;
  }
`;

function Editor({ setMemo }) {
  const modules = {
    toolbar: {
      container: [
        [
          'bold',
          'underline',
          'blockquote',
          'strike',
          { list: 'ordered' },
          { list: 'bullet' },
          'link',
        ],
        [{ color: [] }, { background: [] }],
        [{ header: 1 }, { header: 2 }],
      ],
    },
  };

  return (
    <Container>
      <ReactQuill modules={modules} theme="snow" onChange={setMemo} />
    </Container>
  );
}
export default Editor;
