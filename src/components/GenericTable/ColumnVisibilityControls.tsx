import type { Column } from '../../types/types';
import styles from './ColumnVisibilityControls.module.css';

interface ColumnVisibilityControlsProps {
  columns: Column[];
  visibleColumnIds: Set<string>;
  onToggle: (columnId: string) => void;
}

function ColumnVisibilityControls({columns, visibleColumnIds, onToggle}: ColumnVisibilityControlsProps) {
  return (
    <div className={styles.controls}>
      {columns.map((column) => (
        <label key={column.id} className={styles.option}>
          <input type="checkbox" checked={visibleColumnIds.has(column.id)} onChange={() => onToggle(column.id)}/>
          {column.title}
        </label>
      ))}
    </div>
  );
}

export default ColumnVisibilityControls;