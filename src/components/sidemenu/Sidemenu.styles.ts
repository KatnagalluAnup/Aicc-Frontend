import styled from 'styled-components'

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #0096D6;
  width: 4rem;
  height: 100vh;
  `

  export const TopSection = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: .8rem;
`

export const BottomSection = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: .5rem;
`

export const VersionNumber = styled.span`
  font-size: 1em;
  color: #fff;
  font-family: 'HPSimplified', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-top: .4rem
`