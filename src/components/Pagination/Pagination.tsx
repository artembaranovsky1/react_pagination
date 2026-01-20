// import { getNumbers } from '../../utils';
import React from 'react';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / +perPage);
  const arrNumber = [];

  for (let i = 0; i < totalPages; i++) {
    arrNumber.push(i + 1);
  }

  return (
    <ul className="pagination">
      <li className={currentPage !== 1 ? 'page-item' : 'page-item disabled'}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          «
        </a>
      </li>

      {arrNumber.map(page => (
        <li
          className={page === currentPage ? 'page-item active' : 'page-item'}
          key={page}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${page}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}

      <li
        className={
          currentPage !== totalPages ? 'page-item' : 'page-item disabled'
        }
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          »
        </a>
      </li>
    </ul>
  );
};
