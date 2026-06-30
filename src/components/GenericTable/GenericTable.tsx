import { useState, useMemo, useCallback } from 'react';
import type { TableData, EditingCell } from '../../types/types';
import TableRow from './TableRow';
import ColumnVisibilityControls from './ColumnVisibilityControls';

interface GenericTableProps {
  tableData: TableData;
  onCellChange: (rowId: string, columnId: string, value: any) => void;
}

function GenericTable({tableData, onCellChange}: GenericTableProps) {
  const {columns, data} = tableData;

  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [visibleColumnIds, setVisibleColumnIds] = useState(() => new Set(columns.map((c) => c.id)));

  const visibleColumns = useMemo(() => columns.filter((c) => visibleColumnIds.has(c.id)).sort((a, b) => a.ordinalNo - b.ordinalNo)
  ,[columns, visibleColumnIds]);

  const handleToggle = useCallback((columnId: string) => {
    setVisibleColumnIds((prev) => {
      const next = new Set(prev);
      if (next.has(columnId)) 
      {
            next.delete(columnId);
      }
      else 
      {
        next.add(columnId);
      }

      return next;
    });
  }, []);

  const handleStartEdit = useCallback((rowId: string, columnId: string) => {
    setEditingCell({rowId, columnId});
  }, []);

  const handleSave = useCallback(
    (rowId: string, columnId: string, value: any) => {
      onCellChange(rowId, columnId, value);
      setEditingCell(null);
    }, [onCellChange]);

  const handleCancel = useCallback(() => {
    setEditingCell(null);
  }, []);

  return (
    <div>
      <ColumnVisibilityControls columns={columns} visibleColumnIds={visibleColumnIds} onToggle={handleToggle}/>

      <table>
        <thead>
          <tr>
            {visibleColumns.map((column) => (
              <th key={column.id} style={{ width: column.width }}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id} row={row} columns={visibleColumns} editingColumnId={editingCell?.rowId === row.id ? editingCell.columnId : null} 
            onStartEdit={handleStartEdit} onSave={handleSave} onCancel={handleCancel}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GenericTable;