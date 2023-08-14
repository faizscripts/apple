import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const DynamicReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
});

const RichTextEditor = ({ text, setText }) => {

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link'],
            ['clean'],
        ]
    };

    const handleChange = (newText) => {
        setText(newText);
    };

    return (
        <div>
            <DynamicReactQuill
                placeholder="Write something..."
                modules={modules}
                value={text}
                onChange={handleChange} />
        </div>
    );
};

export default RichTextEditor;
