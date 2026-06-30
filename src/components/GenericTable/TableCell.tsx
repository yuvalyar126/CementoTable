import { memo } from 'react';
import type { Column } from '../../types/types';
import CellEditor from './CellEditor';
import styles from './Cell.module.css';

interface TableCellProps {
  column: Column;
  value: any;
  isEditing: boolean;
  onStartEdit: () => void;
  onSave: (newValue: any) => void;
  onCancel: () => void;
}

function formatValue(value: any, column: Column) {
  if (column.type === 'boolean') 
  {
    return value ? 'Yes' : 'No';
  }

  return value ?? '';
}

function TableCell({column, value, isEditing, onStartEdit, onSave, onCancel}: TableCellProps) {
  return (
    <td className={styles.Cell} style={{width: column.width}}>
      {isEditing ? 
      (<CellEditor column={column} value={value} onSave={onSave} onCancel={onCancel}/>) :
       (<div className={styles.display} onClick={onStartEdit}> {formatValue(value, column)} </div>)}
    </td>
  );
}

export default memo(TableCell);