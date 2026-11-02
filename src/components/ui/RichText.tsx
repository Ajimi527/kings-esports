import type { ReactNode } from 'react';

/**
 * Renders the simple content format used in the data files:
 *  - plain lines become paragraphs
 *  - "## Heading" becomes a sub-heading
 *  - consecutive "- item" lines become a bullet list
 */
export default function RichText({ lines, className = '' }: { lines: string[]; className?: string }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];

  const flushList = (key: string) => {
    if (list.length) {
      blocks.push(
        <ul key={key}>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  lines.forEach((line, i) => {
    if (line.startsWith('- ')) {
      list.push(line.slice(2));
      return;
    }
    flushList(`ul-${i}`);
    if (line.startsWith('## ')) blocks.push(<h2 key={i}>{line.slice(3)}</h2>);
    else blocks.push(<p key={i}>{line}</p>);
  });
  flushList('ul-end');

  return <div className={`prose-kings ${className}`}>{blocks}</div>;
}
