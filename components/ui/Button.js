export default function Button({ children, className = '', ...props }) {
  return (
    <button className={"border border-white rounded px-3 py-1 text-white " + className} {...props}>
      {children}
    </button>
  )
}
