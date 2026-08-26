function TechIcon({ path, hex, label }: { path: string; hex: string; label: string }) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill={`#${hex}`}
    >
      <path d={path} />
    </svg>
  )
}

export default TechIcon
