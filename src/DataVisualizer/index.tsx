import * as React from "react";
import { Container } from 'semantic-ui-react';
import { uniq } from 'lodash';

import { Asset, Risk, Section } from "../composeData/parseData";
import { Select } from "./Select";
import { Table } from "./Table";

export interface ISelected {
  riskType: number;
  assetName?: string | null;
  riskName?: string | null;
}

export interface ISelectedData {
  asset: Asset;
  risk: Risk;
}

interface IDataVisualizerProps {
  data: Array<Section>;
}

export const DataVisualizer: React.FC<IDataVisualizerProps> = (props) => {
  const { data } = props;

  const [selectedData, setSelectedData] = React.useState<ISelectedData | null>(null);
  const [availableAssets, setAssets] = React.useState<string[]>([]);
  const [availableRisks, setRisks] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<ISelected>({
    assetName: null, riskName: null, riskType: 0
  });

  React.useEffect(() => {
    setAssets(uniq(data[selected.riskType]?.assets.map((a) => a.name)));
  }, [selected.riskType]);

  React.useEffect(() => {
    if (selected.assetName) {
      const assetData = data[selected.riskType].assets.find(
        (a) => a.name === selected.assetName
      );

      setRisks(assetData?.risks.map((r) => r.name) || []);
    } else {
      setRisks([]);
    }
  }, [selected.assetName]);

  React.useEffect(() => {
    const { riskType, assetName, riskName } = selected;

    if (typeof riskType === 'number' && assetName && riskName) {
      const assetData = data[selected.riskType].assets.find(
        (a) => a.name === selected.assetName
      );
      const riskData = assetData?.risks.find(
        (r) => r.name === selected.riskName
      );
      
      setSelectedData({
        asset: assetData!,
        risk: riskData!
      });
    } else {
      setSelectedData(null);
    }
  }, [selected]);

  return (
    <Container>
      <Select
        riskTypes={data.map((d, index) => ({ name: d.name, index }))}
        availableAssets={availableAssets}
        availableRisks={availableRisks}
        setSelected={setSelected}
        selected={selected}
      />
      <Table data={selectedData} />
    </Container>
  );
};
