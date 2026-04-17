/**
 * Custom Components Demo
 * Demonstrates how to use ReactBox with custom components
 */

// Define a simple Card component
interface CardProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function Card({ title, className, children }: CardProps) {
  return (
    <article className={`p-6 bg-white rounded-xl shadow-md border ${className || ''}`}>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      {children}
    </article>
  );
}

export default Card;
