import { memo } from 'react';
import type { Column, TableRowData } from '../../types/types';
import TableCell from './TableCell';

interface TableRowProps {
  row: TableRowData;
  columns: Column[];
  editingColumnId: string | null;
  onStartEdit: (rowId: string, columnId: string) => void;
  onSave: (rowId: string, columnId: string, value: any) => void;
  onCancel: () => void;
}

function TableRow({row, columns, editingColumnId, onStartEdit, onSave, onCancel}: TableRowProps) {
  return (
    <tr>
      {columns.map((column) => (
        <TableCell key={column.id} column={column} value={row[column.id]} isEditing={editingColumnId === column.id} onCancel={onCancel}
          onStartEdit={() => onStartEdit(row.id, column.id)} onSave={(newValue) => onSave(row.id, column.id, newValue)}/>
      ))}
    </tr>
  );
}

export default memo(TableRow);