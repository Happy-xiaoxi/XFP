export function u(){
    return (
      window.performance &&
      performance.getEntriesByType &&
      performance.getEntriesByType("navigation")[0]
    );
  }