import { chakra } from '@chakra-ui/react'
import { unstable_useControlled as useControlled } from '@mui/utils'
import Link from 'next/link'
import type * as React from 'react'

// https://github.com/mui/material-ui/blob/v5.13.0/docs/data/material/components/pagination/UsePagination.tsx
export interface UsePaginationProps {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number
  /**
   * The name of the component where this hook is used.
   */
  componentName?: string
  /**
   * The total number of pages.
   * @default 1
   */
  count?: number
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void
  /**
   * The current page.
   */
  page?: number
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton?: boolean
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton?: boolean
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number
  /**
   * Render page No's as links and use URL string value as base path
   */
  linkBasePath?: string
}

export interface UsePaginationItem {
  onClick: React.ReactEventHandler
  type:
    | 'page'
    | 'first'
    | 'last'
    | 'next'
    | 'previous'
    | 'start-ellipsis'
    | 'end-ellipsis'
  page: number | null
  selected: boolean
  disabled: boolean
}

export interface UsePaginationResult {
  items: UsePaginationItem[]
}

function usePagination(props: UsePaginationProps): UsePaginationResult {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
    boundaryCount = 1,
    componentName = 'usePagination',
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props

  const [page, setPageState] = useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page',
  })

  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value)
    }
    if (handleChange) {
      handleChange(event, value)
    }
  }

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }

  const startPages = range(1, Math.min(boundaryCount, count))
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count,
  )

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1,
    ),
    // Greater than startPages
    boundaryCount + 2,
  )

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1,
  )

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ['first'] : []),
    ...(hidePrevButton ? [] : ['previous']),
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

    ...endPages,
    ...(hideNextButton ? [] : ['next']),
    ...(showLastButton ? ['last'] : []),
  ]

  // Map the button type to its page number
  const buttonPage = (type) => {
    switch (type) {
      case 'first':
        return 1
      case 'previous':
        return page - 1
      case 'next':
        return page + 1
      case 'last':
        return count
      default:
        return null
    }
  }

  // Convert the basic item list to PaginationItem props objects
  const items: UsePaginationItem[] = itemList.map((item) => {
    return typeof item === 'number'
      ? {
          onClick: (event) => {
            handleClick(event, item)
          },
          type: 'page',
          page: item,
          selected: item === page,
          disabled,
          'aria-current': item === page ? 'true' : undefined,
        }
      : {
          onClick: (event) => {
            handleClick(event, buttonPage(item))
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled:
            disabled ||
            (item.indexOf('ellipsis') === -1 &&
              (item === 'next' || item === 'last' ? page >= count : page <= 1)),
        }
  })

  return {
    items,
    ...other,
  }
}

const List = chakra('ul', {
  baseStyle: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    columnGap: { base: '12px', md: '18px' },

    li: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: { base: '28px', lg: '32px' },
      minWidth: { base: '28px', lg: '32px' },

      a: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: { base: '14px', md: '16px' },
        fontWeight: '500',
      },
    },

    '.non-number': {
      color: 'black',
      fontWeight: '600',
      textTransform: 'capitalize',
      background: 'none',

      '&:hover': {
        background: 'none',
      },
    },

    button: {
      width: '100%',
      height: '100%',
      borderRadius: '4px',
      color: '#5A5A5A',
      background: '#fafafa',
      fontWeight: '600',

      '&:hover': {
        color: 'black',
        background: '#ebebeb',
      },
    },

    '[aria-current=true]': {
      color: 'white',
      background: 'black',
    },
  },
})

const Pagination = (props: UsePaginationProps) => {
  const { items } = usePagination({ ...props })

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children: null | string | JSX.Element = null

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…'
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? '500' : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            )
          } else {
            children = (
              <button type="button" {...item} className="non-number">
                {type}
              </button>
            )
          }

          if (props.linkBasePath) {
            return (
              <li key={index}>
                <Link href={`${props.linkBasePath}/${page}`}>{children}</Link>
              </li>
            )
          }

          return <li key={index}>{children}</li>
        })}
      </List>
    </nav>
  )
}

export default Pagination
