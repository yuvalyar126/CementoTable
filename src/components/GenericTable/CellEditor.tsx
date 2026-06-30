import { useState } from 'react';
import type { Column } from '../../types/types';
import styles from './Cell.module.css';

interface CellEditorProps {
  column: Column;
  value: any;
  onSave: (newValue: any) => void;
  onCancel: () => void;
}

function CellEditor({column, value, onSave, onCancel}: CellEditorProps) {
  const [draft, setDraft] = useState(value);

  const renderInput = () => {
    switch (column.type) {
      case 'number':
        return (
          <input
            type="number"
            value={draft ?? ''}
            onChange={(e) => setDraft(e.target.value === '' ? '' : Number(e.target.value))}
            />
        );

      case 'boolean':
        return (
          <input
            type="checkbox"
            checked={Boolean(draft)}
            onChange={(e) => setDraft(e.target.checked)}
          />
        );

      case 'selection':
        return (
          <select
            value={draft ?? ''}
            onChange={(e) => setDraft(e.target.value)}
          >
            {column.options?.map((option) => (<option key={option} value={option}>{option}</option>))}
          </select>
        );

      default: 
        return (
          <input
            type="text"
            value={draft ?? ''}
            onChange={(e) => setDraft(e.target.value)}
          />
        );
    }
  };

  return (
    <div className={styles.editor}>
      {renderInput()}
      <button type="button" onClick={() => onSave(draft)}>Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default CellEditor;