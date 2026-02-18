import ProductCard from './ProductCard';

/**
 * ProductGrid Component
 * Domain component - NO API calls
 * Receives products array as props
 *
 * Uses composite key (id + index) to prevent silent deduplication
 * if backend returns items with duplicate IDs
 */
export default function ProductGrid({ products }) {
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
        </div>
    );
}
