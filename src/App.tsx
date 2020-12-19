import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

import './App.css';
import { composeData } from './composeData';
import { Section } from './composeData/parseData';
import { DataVisualizer } from './DataVisualizer';

function App() {
  const [data, setData] = React.useState<Section[] | null>(null);

  React.useEffect(() => {
    composeData()
      .then(setData);
  }, []);

  if (!data) {
    return (
      <Dimmer active>
        <Loader indeterminate>Зчекайте будь ласка, дані завантажуться!</Loader>
      </Dimmer>
    );
  }

  return (
    <DataVisualizer data={data} />
  );
}

export default App;
