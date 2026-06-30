export interface Column {
    id: string;
    ordinalNo: number;
    title: string;
    type: string;          
    width?: number;
    // Added
    options?: string[];
  }
  
  export interface TableRowData {
    id: string;
    [columnId: string]: any;
  }
  
  export interface TableData {
    columns: Column[];
    data: TableRowData[];
  }
  
  export interface EditingCell {
    rowId: string;
    columnId: string;
  }