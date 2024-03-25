import styled, { css } from 'styled-components'

export const TableWrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  max-height: ${({ height }) => (height ? `${height}px` : 'auto')};
  overflow: auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  tbody tr:nth-child(even) {
    td {
      background: #f6f6f6;
    }
  }
`

export const rowStyle = css`
  vertical-align: middle;
  background: #fff;

  ${({ fixedColumn }) =>
    fixedColumn &&
    css`
      position: sticky;
      z-index: 1;
    `}

  ${({ fixedHeader, fixedColumn }) =>
    fixedHeader &&
    css`
      position: sticky;
      top: 0;
      z-index: ${fixedColumn ? 3 : 2};
    `}

  ${({ width }) =>
    width &&
    css`
      max-width: ${width}px;
      min-width: ${width}px;
    `}
`

export const ThTitle = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

export const Th = styled.th`
  padding: 8px 20px;
  border-top: 1px solid #303030;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #303030;
  font-size: 16px;
  white-space: nowrap;
  height: 52px;
  text-align: left;

  &:first-child {
    padding-left: 8px;
  }

  &:last-child {
    border-right: none;
    border-left: 1px solid #ddd;
  }

  ${rowStyle}
`

export const Td = styled.td`
  padding: 4px 20px;
  height: 56px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.4s;

  &:first-child {
    padding-left: 8px;
  }

  &:last-child {
    border-right: none;
    border-left: 1px solid #ddd;
  }

  ${rowStyle}
`
