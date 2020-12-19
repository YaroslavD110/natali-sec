import { WorkBook } from 'xlsx';
import { tail } from 'lodash';

type Range = { start: number; end: number; };
export type Section = {
  name: string;
  assets: Asset[];
};
export type Asset = {
  name: string;
  position: string;
  owner: string;
  category: string;
  risks: Risk[];
};
export type Risk = {
  name: string;
  sources: RiskSource[];
};
export type RiskSource = {
  name: string;
  realisations: string[];
};

const colKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const sectionKeys = [
  'Порушення цілісності інформаційного активу підприємства',
  'Порушення доступності інформаційного активу підприємства',
  'Порушення конфіденційності інформаційного активу підприємства'
];

function findByRange(num: number, ranges: Range[]) {
  return ranges.findIndex((r) => r.start <= num && r.end >= num);
}

function composeSectionRanges(mainColumn: any, lastRowNumber: number) {
  let sectionRanges: Range[] = new Array(sectionKeys.length);
  
  for (const key of Object.keys(mainColumn)) {
    const rowNumber = parseInt(key);
    const rowValue = mainColumn[key];

    const index = sectionKeys.findIndex((k) => k === rowValue);
    if (index >= 0) {
      sectionRanges[index] = {
        start: rowNumber,
        end: NaN
      };
    }
  }

  return sectionRanges.map((r, index) => ({
    start: r.start,
    end: sectionRanges[index + 1] ? sectionRanges[index + 1].start - 1 : lastRowNumber
  }));
}

function composeSectionAssets(mainColumn: any, sectionRanges: Range[]) {
  const sectionAssets: { name: string; range: Range; }[][] = new Array(sectionKeys.length);

  for (const key of Object.keys(mainColumn)) {
    const rowNumber = parseInt(key);
    const rowValue: string = mainColumn[key];

    const sectionIndex = findByRange(rowNumber, sectionRanges);
    if (sectionIndex < 0 || rowValue.includes('актив')) {
      continue;
    }

    if (!sectionAssets[sectionIndex]) {
      sectionAssets[sectionIndex] = [];
    }

    sectionAssets[sectionIndex].push({
      name: rowValue,
      range: {
        start: rowNumber,
        end: NaN
      }
    });
  }

  return sectionAssets.map((s, i) => {
    return s.map((a, j) => ({
      name: a.name,
      range: {
        start: a.range.start,
        end: sectionAssets[i][j + 1]
              ? sectionAssets[i][j + 1].range.start - 1
              : sectionRanges[i].end
      }
    }))
  });
}

export function parseXLSXData(workbook: WorkBook): Array<Section> | null {
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    return null;
  }

  const colData: any = {};
  const lastRowNumber = parseInt(
    tail(sheet['!ref']!.split(':')[1].split('')).join('')
  );
  for (const key of Object.keys(sheet)) {
    if (!colKeys.includes(key[0])) {
      continue;
    }

    const keyStruct = key.split('');
    const colKey = keyStruct[0];
    if (!colData[colKey]) {
      colData[colKey] = {};
    }
    
    const rowNumber = parseInt(tail(keyStruct).join(''));
    if (!rowNumber) {
      return null;
    }

    colData[colKey][rowNumber] = sheet[key].v;
  }

  const parsedData = new Array<Section>(sectionKeys.length);
  const sectionRanges = composeSectionRanges(colData[colKeys[0]], lastRowNumber);
  const sectionAssets = composeSectionAssets(colData[colKeys[0]], sectionRanges);

  let index = 0;
  for (const section of sectionAssets) {
    const assets = new Array<Asset>();

    for (const asset of section) {
      const ownerKey = Object.keys(colData[colKeys[1]]).find((key) => {
        const num = parseInt(key);
    
        return asset.range.start <= num && asset.range.end >= num;
      });
      const positionKey = Object.keys(colData[colKeys[2]]).find((key) => {
        const num = parseInt(key);
    
        return asset.range.start <= num && asset.range.end >= num;
      });
      const categoryKey = Object.keys(colData[colKeys[3]]).find((key) => {
        const num = parseInt(key);
    
        return asset.range.start <= num && asset.range.end >= num;
      });

      const risks = new Array<Risk>();
      const risksRowKeys = Object.keys(colData[colKeys[4]]).filter((key) => {
        const num = parseInt(key);

        return asset.range.start <= num && asset.range.end >= num;
      });
      for (let i = 0; i < risksRowKeys.length; i++) {
        const riskKey = risksRowKeys[i];
        const riskNumber = parseInt(riskKey);
        const nextRiskKey = risksRowKeys[i + 1] ? parseInt(risksRowKeys[i + 1]) - 1 : asset.range.end;
        const riskRange: Range = { start: riskNumber, end: nextRiskKey };

        const sources = new Array<RiskSource>();
        const sourcesRowKeys = Object.keys(colData[colKeys[5]]).filter((k) => {
          const num = parseInt(k);

          return riskRange.start <= num && riskRange.end >= num;
        });

        for (let j = 0; j < sourcesRowKeys.length; j++) {
          const sourceKey = sourcesRowKeys[j];
          const sourceNumber = parseInt(sourceKey);
          const nextRiskKey = sourcesRowKeys[j + 1] ? parseInt(sourcesRowKeys[j + 1]) - 1 : riskRange.end;
          const realisationsRowKeys = Object.keys(colData[colKeys[6]]).filter((k) => {
            const num = parseInt(k);
  
            return sourceNumber <= num && nextRiskKey >= num;
          });

          sources.push({
            name: colData[colKeys[5]][sourceKey],
            realisations: realisationsRowKeys.map(
              (realisaionKey) => colData[colKeys[6]][realisaionKey]
            )
          });
        }

        risks.push({
          name: colData[colKeys[4]][riskKey],
          sources
        });
      }

      assets.push({
        name: asset.name,
        owner: colData[colKeys[1]][ownerKey!],
        position: colData[colKeys[2]][positionKey!],
        category: colData[colKeys[3]][categoryKey!],
        risks
      });
    }

    parsedData[index] = {
      name: sectionKeys[index],
      assets
    };

    index++;
  }

  return parsedData;
}