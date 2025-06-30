export function Button({ children, className = '', variant = 'solid', onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={\`\${variant === 'outline'
        ? 'border border-blue-500 text-blue-500'
        : 'bg-blue-500 text-white'} px-4 py-2 rounded \${className}\`}
    >
      {children}
    </button>
  );
}
