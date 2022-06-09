import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  const props = {
    totalCount: 100,
    pageSize: 10,
    activePage: 1,
    onPageSelection: jest.fn(),
  };
  test('renders Pagination', () => {
    render(<Pagination {...props} />);
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });
  test('page click', () => {
    render(<Pagination {...props} />);
    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button);
    expect(props.onPageSelection).toBeCalledTimes(1);
  });
});
