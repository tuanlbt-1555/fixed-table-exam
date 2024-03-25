import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const HeaderContainer = styled.div`
  padding: 8px;
  height: 60px;
  background-color: gray;
`

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
`

export const SidebarContainer = styled.div`
  padding: 8px;
  min-width: 300px;
  background-color: #5c5c5c;
`

export const ContentContainer = styled.div`
  width: calc(100% - 300px);
`

export const TitleContainer = styled.div`
  padding: 8px;
`
