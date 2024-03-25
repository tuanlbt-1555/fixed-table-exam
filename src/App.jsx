import { useRef, useEffect, useState } from 'react'

import FixedTable from './FixedTable'

import * as S from './styled'

const tableData = [
  {
    id: 1,
    fixedLeft: 'Random name 1 left',
    fixedRight: 'Random name 1 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 2,
    fixedLeft: 'Random name 2 left',
    fixedRight: 'Random name 2 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 3,
    fixedLeft: 'Random name 3 left',
    fixedRight: 'Random name 3 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 4,
    fixedLeft: 'Random name 4 left',
    fixedRight: 'Random name 4 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 5,
    fixedLeft: 'Random name 5 left',
    fixedRight: 'Random name 5 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 6,
    fixedLeft: 'Random name 6 left',
    fixedRight: 'Random name 6 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 7,
    fixedLeft: 'Random name 7 left',
    fixedRight: 'Random name 7 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 8,
    fixedLeft: 'Random name 8 left',
    fixedRight: 'Random name 8 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 9,
    fixedLeft: 'Random name 9 left',
    fixedRight: 'Random name 9 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
  {
    id: 10,
    fixedLeft: 'Random name 10 left',
    fixedRight: 'Random name 10 right',
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
  },
]

const tableColumns = [
  {
    key: 'fixedLeft',
    title: 'Fixed Left',
    width: 200,
    fixed: 'left',
  },
  {
    key: 'value1',
    title: 'Value 1',
  },
  {
    key: 'value2',
    title: 'Value 2',
  },
  {
    key: 'value3',
    title: 'Value 3',
  },
  {
    key: 'value4',
    title: 'Value 4',
  },
  {
    key: 'value5',
    title: 'Value 5',
  },
  {
    key: 'value6',
    title: 'Value 6',
  },
  {
    key: 'value7',
    title: 'Value 7',
  },
  {
    key: 'value8',
    title: 'Value 8',
  },
  {
    key: 'value9',
    title: 'Value 9',
  },
  {
    key: 'value10',
    title: 'Value 10',
  },
  {
    key: 'fixedRight',
    title: 'Fixed Right',
    width: 200,
    fixed: 'right',
  },
]

function App() {
  const headerRef = useRef(null)
  const titleRef = useRef(null)

  const [tableHeight, setTableHeight] = useState(0)

  useEffect(() => {
    function handleResize() {
      if (headerRef?.current?.clientHeight && titleRef?.current?.clientHeight) {
        setTableHeight(
          window.innerHeight - headerRef.current.clientHeight - titleRef.current.clientHeight
        )
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <S.AppContainer>
      <S.HeaderContainer ref={headerRef}>Header</S.HeaderContainer>
      <S.MainContainer>
        <S.SidebarContainer>Sidebar</S.SidebarContainer>
        <S.ContentContainer>
          <S.TitleContainer ref={titleRef}>
            <h3>Fixed Table Title</h3>
          </S.TitleContainer>
          <FixedTable
            tableColumns={tableColumns}
            tableData={tableData}
            fixedHeader
            height={tableHeight}
          />
        </S.ContentContainer>
      </S.MainContainer>
    </S.AppContainer>
  )
}

export default App
