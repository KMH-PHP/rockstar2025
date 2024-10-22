import { useRef } from "react";

const Form = ({ add }) => {
    const contentRef = useRef();
    const nameRef = useRef();

  return (
    <div>
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        background: "#def",
      }} onSubmit={e => {
        e.preventDefault();
        const content = contentRef.current.value;
        const name = nameRef.current.value;
        add(content, name);
        console.log(content, name, "hellow");
        e.currentTarget.reset();
      } }>
        <input ref={contentRef} type="text" placeholder="Content" style={{ padding: 5 }} />
        <input ref={nameRef} type="text" placeholder="Name" style={{ padding: 5 }} />
        <button
          type="submit"
          style={{
            padding: 8,
            background: "#0d6efd",
            color: "white",
            border: "0 none"
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Form