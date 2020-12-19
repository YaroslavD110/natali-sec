import * as React from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

import { ISelected } from './index';

interface ISelectProps {
  selected: ISelected;
  availableAssets: string[];
  availableRisks: string[];
  setSelected: React.Dispatch<React.SetStateAction<ISelected>>;
  riskTypes: { name: string; index: number }[];
}

export const Select: React.FC<ISelectProps> = (props) => {
  const { selected, setSelected, availableAssets, availableRisks, riskTypes } = props;

  return (
    <Form className="ns-form">
      <Form.Group widths='equal'>
        <Dropdown
          fluid
          selection
          clearable
          className="ns-select"
          onChange={(_, data) => setSelected({
            riskType: parseInt(data.value as string),
            assetName: null,
            riskName: null
          })}
          options={riskTypes.map(({ name, index }) => ({
            key: index,
            value: index,
            text: name
          }))}
          value={selected.riskType}
          placeholder='Виберіть тип загрози'
        />

        <Dropdown
          fluid
          selection
          clearable
          className="ns-select"
          onChange={(_, data) => setSelected({
            ...selected,
            assetName: data.value as string || null
          })}
          options={availableAssets.map((a) => ({
            key: a,
            value: a,
            text: a
          }))}
          value={selected.assetName as string}
          placeholder='Виберіть інформаційний актив'
          disabled={availableAssets.length === 0}
        />

        <Dropdown
          fluid
          selection
          clearable
          className="ns-select"
          onChange={(_, data) => setSelected({
            ...selected,
            riskName: data.value as string || null
          })}
          options={availableRisks.map((r) => ({
            key: r,
            value: r,
            text: r
          }))}
          value={selected.riskName as string}
          placeholder='Виберіть загрозу ІБ'
          disabled={availableRisks.length === 0}
        />
      </Form.Group>
    </Form>
  );
};
