import * as React from "react";
import { Segment, Header, Icon, Table as SemanticTable } from 'semantic-ui-react';

import { ISelectedData } from "./index";

interface ITableProps {
  data: ISelectedData | null;
}

export const Table: React.FC<ITableProps> = (props) => {
  const { data } = props;

  if (!data) {
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name='info circle' />
          Виберіть параметри вижче для відображення механізмів реалізації загрозі ІБ
        </Header>
      </Segment>
    );
  }

  const { asset, risk } = data;

  return (
    <>
      <SemanticTable celled>
        <SemanticTable.Header>
          <SemanticTable.Row>
            <SemanticTable.HeaderCell>Інформаційний актив</SemanticTable.HeaderCell>
            <SemanticTable.HeaderCell>Власник активу</SemanticTable.HeaderCell>
            <SemanticTable.HeaderCell>Місце розташування</SemanticTable.HeaderCell>
            <SemanticTable.HeaderCell>Категорія активу</SemanticTable.HeaderCell>
          </SemanticTable.Row>
        </SemanticTable.Header>

        <SemanticTable.Body>
          <SemanticTable.Row>
            <SemanticTable.Cell>{asset.name}</SemanticTable.Cell>
            <SemanticTable.Cell>{asset.owner}</SemanticTable.Cell>
            <SemanticTable.Cell>{asset.position}</SemanticTable.Cell>
            <SemanticTable.Cell>{asset.category}</SemanticTable.Cell>
          </SemanticTable.Row>
        </SemanticTable.Body>
      </SemanticTable>

      <SemanticTable celled>
        <SemanticTable.Header>
          <SemanticTable.Row>
            <SemanticTable.HeaderCell>Джерело загроз</SemanticTable.HeaderCell>
            <SemanticTable.HeaderCell>Механізм реалізації нападу через уразливість (ідентифікувати уразливість)</SemanticTable.HeaderCell>
          </SemanticTable.Row>
        </SemanticTable.Header>

        <SemanticTable.Body>
          {risk.sources.map((s) => {
            return s.realisations.map((realisation, index) => (
              <SemanticTable.Row key={`${s.name}-${index}`}>
                {index === 0 && <SemanticTable.Cell rowSpan={s.realisations.length}>{s.name}</SemanticTable.Cell>}
                <SemanticTable.Cell>{realisation}</SemanticTable.Cell>
              </SemanticTable.Row>
            ));
          })}
        </SemanticTable.Body>
      </SemanticTable>
    </>
  );
};
