import { useState, useMemo, useCallback } from 'react';
import type { TableData } from './types/types';
import { generateMockData } from './data/mockData';
import GenericTable from './components/GenericTable/GenericTable';
import './App.css';

function App() {
  const initialTableData = useMemo(() => generateMockData(), []);
  const [data, setData] = useState(initialTableData.data);

  const tableData = useMemo(() => ({ columns: initialTableData.columns, data })
  ,[initialTableData.columns, data]);

  const handleCellChange = useCallback((rowId: string, columnId: string, value: any) => {
      setData((prev) => prev.map((row) => (row.id === rowId ? {...row, [columnId]: value } : row)));
    }, []);

  return (
    <div className="app">
      <h1>Generic Table</h1>
      <GenericTable tableData={tableData} onCellChange={handleCellChange} />
    </div>
  );
}

export default App;