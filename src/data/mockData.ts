import { faker } from '@faker-js/faker';
import type { TableData, Column } from '../types/types';

const ROLE_OPTIONS = ['Admin', 'Editor', 'Viewer'];

const columns: Column[] = [
    { id: 'name', ordinalNo: 1, title: 'Name', type: 'string', width: 180 },
    { id: 'age', ordinalNo: 2, title: 'Age', type: 'number', width: 100 },
    { id: 'city', ordinalNo: 3, title: 'City', type: 'string', width: 150 },
    { id: 'salary', ordinalNo: 4, title: 'Salary', type: 'number', width: 120 },
    { id: 'isActive', ordinalNo: 5, title: 'Active', type: 'boolean', width: 100 },
    { id: 'remote', ordinalNo: 6, title: 'Remote', type: 'boolean', width: 100 },
    { id: 'role', ordinalNo: 7, title: 'Role', type: 'selection', width: 140, options: ROLE_OPTIONS },
  ];
  
export function generateMockData(rowCount = 20): TableData {
  const data = Array.from({length: rowCount}, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({min: 18, max: 80}),
    city: faker.location.city(),
    salary: faker.number.int({min: 10000, max: 200000}),
    isActive: faker.datatype.boolean(),
    remote: faker.datatype.boolean(),
    role: faker.helpers.arrayElement(ROLE_OPTIONS),
  }));

  return {columns, data};
}