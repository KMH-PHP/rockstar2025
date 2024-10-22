

const List = ({ children }) => {
  return (
    <div>
        <ul style={{ 
            listStyle: "none",
            padding: 0,
            margin: 0,
            border: "1px solid #ddd",
            borderRadius: 8,
            overflow: "hidden"
        }}>
            {children}
        </ul>
    </div>
  )
}

export default List