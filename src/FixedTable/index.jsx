import React, { useMemo } from 'react'

import * as S from './styled'

const FixedTable = ({
  tableColumns = [],
  tableData = [],
  width,
  height,
  fixedHeader,
  style,
  ...rest
}) => {
  const renderTableHead = useMemo(() => {
    let leftFixedPosition = 0
    let rightFixedPosition = 0
    let prevLeftFixedWidth = 0
    let prevRightFixedWidth = 0

    return tableColumns.map((columnItem, columnIndex) => {
      if (columnItem.fixed === 'left') {
        if (prevLeftFixedWidth !== 0) leftFixedPosition += prevLeftFixedWidth
        prevLeftFixedWidth += columnItem.width || 0
      }

      if (columnItem.fixed === 'right') {
        if (prevRightFixedWidth !== 0) rightFixedPosition += prevRightFixedWidth
        prevRightFixedWidth += columnItem.width || 0
      }

      return (
        <S.Th
          key={`th-${columnIndex}`}
          fixedColumn={columnItem.fixed}
          fixedHeader={fixedHeader}
          {...(columnItem.width && {
            width: columnItem.width,
          })}
          {...(columnItem.fixed === 'left' && { style: { left: leftFixedPosition } })}
          {...(columnItem.fixed === 'right' && { style: { right: rightFixedPosition } })}
        >
          <S.ThTitle>{columnItem.title}</S.ThTitle>
        </S.Th>
      )
    })
  }, [tableColumns, fixedHeader])

  const renderTableBody = useMemo(
    () =>
      tableData.map((dataItem, dataIndex) => {
        let leftFixedPosition = 0
        let rightFixedPosition = 0
        let prevLeftFixedWidth = 0
        let prevRightFixedWidth = 0
        return (
          <tr key={`tr-${dataIndex}`}>
            {tableColumns.map((columnItem, columnIndex) => {
              if (columnItem.fixed === 'left') {
                if (prevLeftFixedWidth !== 0) leftFixedPosition += prevLeftFixedWidth
                prevLeftFixedWidth += columnItem.width || 0
              }

              if (columnItem.fixed === 'right') {
                if (prevRightFixedWidth !== 0) rightFixedPosition += prevRightFixedWidth
                prevRightFixedWidth += columnItem.width || 0
              }

              return (
                <S.Td
                  key={`td-${dataItem.id}-${columnItem.key}`}
                  fixedColumn={columnItem.fixed}
                  {...(columnItem.width && {
                    width: columnItem.width,
                  })}
                  {...(columnItem.fixed === 'left' && { style: { left: leftFixedPosition } })}
                  {...(columnItem.fixed === 'right' && { style: { right: rightFixedPosition } })}
                  {...(!columnItem.render && {
                    title: dataItem[columnItem.key],
                  })}
                >
                  {columnItem.render ? columnItem.render(dataItem) : dataItem[columnItem.key]}
                </S.Td>
              )
            })}
          </tr>
        )
      }),
    [tableData, tableColumns]
  )

  if (!tableData.length) return null
  return (
    <S.TableWrapper width={width} height={height} style={style} {...rest}>
      <S.Table>
        <thead>
          <tr>{renderTableHead}</tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </S.Table>
    </S.TableWrapper>
  )
}

export default FixedTable
