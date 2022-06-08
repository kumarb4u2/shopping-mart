export const Pagination = () => {
  return (
    <div className="d-flex justify-content-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <button className="btn btn-link" href="#" tabindex="-1">
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="btn btn-link" href="#">
              1
            </button>
          </li>
          <li className="page-item">
            <button className="btn btn-link" href="#">
              2
            </button>
          </li>
          <li className="page-item">
            <button className="btn btn-link" href="#">
              3
            </button>
          </li>
          <li className="page-item">
            <button className="btn btn-link" href="#">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
