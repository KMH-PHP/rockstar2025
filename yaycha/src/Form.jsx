

const Form = () => {
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
      }}>
        <input type="text" placeholder="Content" style={{ padding: 5 }} />
        <input type="text" placeholder="Name" style={{ padding: 5 }} />
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