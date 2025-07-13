import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

let mermaidInitialized = false;

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        fontSize: 14,
        themeCSS: `
          .node rect, .node circle, .node ellipse, .node polygon, .node path {
            fill: hsl(var(--primary) / 0.1);
            stroke: hsl(var(--primary));
            stroke-width: 1px;
          }
          .edgePath .path {
            stroke: hsl(var(--muted-foreground));
            stroke-width: 1px;
          }
          .edgeLabel {
            background-color: hsl(var(--background));
            color: hsl(var(--foreground));
          }
          .cluster rect {
            fill: hsl(var(--muted) / 0.1);
            stroke: hsl(var(--border));
          }
          .titleText {
            fill: hsl(var(--foreground));
          }
        `
      });
      mermaidInitialized = true;
    }

    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = '';
      const element = document.createElement('div');
      element.innerHTML = chart;
      mermaidRef.current.appendChild(element);
      
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div 
      ref={mermaidRef} 
      className={`mermaid-container ${className}`}
      style={{ textAlign: 'center' }}
    />
  );
}