const xlsxFileURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8jZCwOdkYsBe7ite2E8nejzNAKZCgENwe6KBw6w7WtHh_TZALsW08kORNAYWPsZSmnx7Iscdcuky_/pub?output=xlsx';

export function loadData() {
  return fetch(xlsxFileURL).then((r) => r.arrayBuffer());
}