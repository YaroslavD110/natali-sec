import { read as readXLSX } from 'xlsx';

import { loadData } from './loadData';
import { parseXLSXData } from './parseData';

export async function composeData() {
  const XLSXData = await loadData();
  const workbook = readXLSX(XLSXData, { type: 'array' });

  return parseXLSXData(workbook);
}