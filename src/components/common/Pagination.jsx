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
        <div className="pagination">
            <button
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="btn btn-secondary"
            >
                ← Previous
            </button>
            <span className="pagination__info">
                Page {currentPage} of {totalPages}
            </span>
            <button
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="btn btn-secondary"
            >
                Next →
            </button>
        </div>
    );
}
