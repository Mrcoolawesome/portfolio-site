export default function Card({ children, className = '' }) {
  return (
    <div className={"border border-white/30 rounded p-6 bg-transparent " + className}>{children}</div>
  )
}
