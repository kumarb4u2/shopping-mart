export const Pagination = ({
  totalCount,
  pageSize,
  activePage,
  onPageSelection,
}) => {
  const renderPageNumbers = () => {
    let pages = [];
    for (let index = 0; index < totalCount / pageSize; index++) {
      pages.push(
        <li key={index + 1} className="page-item">
          <button
            id={index}
            className={`btn btn-link text-decoration-none ${
              +activePage === index + 1 ? 'btn-primary text-white' : ''
            }`}
            onClick={() => onPageSelection(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="d-flex justify-content-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {renderPageNumbers()}
        </ul>
      </nav>
    </div>
  );
};
