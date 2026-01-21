import { useEffect, useRef } from "react";

/**
 * Hook to apply staggered animations to page elements
 * @param {number} baseDelay - Base delay in milliseconds before first animation
 * @param {number} staggerDelay - Delay between each element in milliseconds
 */
export function usePageAnimation(baseDelay = 100, staggerDelay = 100) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all elements with the animation class
    const animatedElements = container.querySelectorAll(".page-fade-up");
    
    animatedElements.forEach((element, index) => {
      const delay = baseDelay + index * staggerDelay;
      element.style.animationDelay = `${delay}ms`;
    });
  }, [baseDelay, staggerDelay]);

  return containerRef;
}

/**
 * Hook for animating grid items (like photos) left to right, top to bottom
 * @param {number} baseDelay - Base delay in milliseconds
 * @param {number} staggerDelay - Delay between items in milliseconds
 * @param {number} columns - Number of columns in the grid (default: 3 for lg screens)
 */
export function useGridAnimation(baseDelay = 100, staggerDelay = 80, columns = 3) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDelays = () => {
      const animatedElements = container.querySelectorAll(".page-fade-up");
      
      // Try to detect actual number of columns from computed style
      let actualColumns = columns;
      if (animatedElements.length > 0) {
        const firstElement = animatedElements[0];
        const computedStyle = window.getComputedStyle(container);
        const gridTemplateColumns = computedStyle.gridTemplateColumns;
        if (gridTemplateColumns && gridTemplateColumns !== 'none') {
          const columnCount = gridTemplateColumns.split(' ').length;
          if (columnCount > 0) {
            actualColumns = columnCount;
          }
        }
      }
      
      animatedElements.forEach((element, index) => {
        // Calculate row and column
        const row = Math.floor(index / actualColumns);
        const col = index % actualColumns;
        // Delay increases by row (top to bottom) and by column (left to right)
        const delay = baseDelay + row * (staggerDelay * actualColumns) + col * staggerDelay;
        element.style.animationDelay = `${delay}ms`;
      });
    };

    updateDelays();
    
    // Update on window resize to handle responsive layouts
    const handleResize = () => {
      updateDelays();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [baseDelay, staggerDelay, columns]);

  return containerRef;
}
