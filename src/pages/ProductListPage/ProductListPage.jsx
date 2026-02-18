import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../../components/domain/ProductGrid';
import Pagination from '../../components/common/Pagination';
import { GridSkeleton } from '../../components/common/Skeleton';
import EmptyState from '../../components/common/EmptyState';
import ApiError from '../../components/common/ApiError';
import { useProducts } from '../../hooks/useProducts';
import './ProductListPage.css';

const PRODUCTS_PER_PAGE = 30;

/**
 * ProductListPage - Product Catalog at /products
 * API: GET /api/v1/products?page=N&limit=30
 *
 * Best practices applied:
 * - rerender-derived-state-no-effect: page derived from URL params, not useState
 * - rendering-conditional-render: ternary for conditional rendering
 * - client-swr-dedup: SWR with keepPreviousData for smooth page transitions
 */
export default function ProductListPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Derive page number from URL during render (no useState needed)
    const page = Math.max(1, Number(searchParams.get('page')) || 1);

    const { products, total, totalPages, loading, error } = useProducts({
        page,
        limit: PRODUCTS_PER_PAGE,
    });

    const handlePageChange = (newPage) => {
        setSearchParams({ page: String(newPage) });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="page container product-list-page">
            <div className="product-list-page__header">
                <h2>Products</h2>
                {total > 0 ? (
                    <p className="api-label">
                        {total} items • Page {page} of {totalPages}
                    </p>
                ) : null}
            </div>

            {/* Loading State */}
            {loading ? <GridSkeleton count={8} /> : null}

            {/* Error State */}
            {!loading && error ? (
                <ApiError error={error} endpoint="GET /api/v1/products" />
            ) : null}

            {/* Empty State */}
            {!loading && !error && products.length === 0 ? (
                <EmptyState message="No products available" icon="📦" />
            ) : null}

            {/* Success State */}
            {!loading && !error && products.length > 0 ? (
                <>
                    <ProductGrid products={products} />
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : null}
        </div>
    );
}
