import { Link } from 'gatsby'
import React from 'react'

const toPathLink = (page) => (page === 1 ? '' : `/${page}`)

const Pagination = ({ pathPrefix, currentPage, numPages }) => (
  <nav
    className="pagination PingCAP-Pagination"
    role="navigation"
    aria-label="pagination"
  >
    <ul className="pagination-list">
      {[
        ...Array(
          currentPage + 2 < numPages ? currentPage + 2 : numPages - 1
        ).keys(),
      ]
        .map(i => i + 1)
        .map(i => (
          <li key={i}>
            <Link
              to={`${pathPrefix}${toPathLink(i)}`}
              className={`pagination-link${
                currentPage === i ? ' is-current' : ''
              }`}
              aria-label={`Go to page ${i}`}
            >
              {i}
            </Link>
          </li>
        ))}
      {currentPage + 2 < numPages && (
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
      )}
      <li>
        <Link
          to={`${pathPrefix}${toPathLink(numPages)}`}
          className={`pagination-link${
            currentPage === numPages ? ' is-current' : ''
          }`}
          aria-label={`Go to page ${numPages}`}
        >
          {numPages}
        </Link>
      </li>
      {currentPage !== numPages && (
        <li>
          <Link
            to={`${pathPrefix}${toPathLink(currentPage + 1)}`}
            className="pagination-link"
            aria-label="Go to next page"
          >
            >
          </Link>
        </li>
      )}
    </ul>
  </nav>
)

export default Pagination
