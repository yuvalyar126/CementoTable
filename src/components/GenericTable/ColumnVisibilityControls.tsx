import type { Column } from '../../types/types';

interface ColumnVisibilityControlsProps {
  columns: Column[];
  visibleColumnIds: Set<string>;
  onToggle: (columnId: string) => void;
}

function ColumnVisibilityControls({columns, visibleColumnIds, onToggle}: ColumnVisibilityControlsProps) {
  return (
    <div>
      {columns.map((column) => (
        <label key={column.id}>
          <input type="checkbox" checked={visibleColumnIds.has(column.id)} onChange={() => onToggle(column.id)}/>
          {column.title}
        </label>
      ))}
    </div>
  );
}

export default ColumnVisibilityControls;