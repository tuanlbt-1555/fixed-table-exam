import { css } from 'styled-components'

export const breakpoint = {
  lg: (...args) => css`
    @media (max-width: 1365px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1499px) {
      ${css(...args)}
    }
  `,
}

export const truncateMultipleLine = (linesToShow = 1) => css`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${linesToShow};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
