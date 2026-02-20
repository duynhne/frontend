/**
 * Pagination Component
 * Reusable pagination controls with Previous/Next buttons
 * Uses ternary rendering for numeric conditions (rendering-conditional-render rule)
 *
 * Props:
 *   currentPage - current active page number
 *   totalPages - total number of pages
 *   onPageChange - callback when page changes
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <nav className="pagination" aria-label="Product pagination">
            <button
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="btn btn-secondary"
                aria-label="Go to previous page"
            >
                ← Previous
            </button>
            <span className="pagination__info" aria-current="page">
                Page {currentPage} of {totalPages}
            </span>
            <button
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="btn btn-secondary"
                aria-label="Go to next page"
            >
                Next →
            </button>
        </nav>
    );
}
