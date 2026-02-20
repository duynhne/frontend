/**
 * PlaceholderImage Component
 * Static placeholder for all product images
 * API-agnostic - no backend assumptions
 */
export default function PlaceholderImage({ size = 'medium', label = 'Product' }) {
    const dimensions = {
        small: '100',
        medium: '400',
        large: '600'
    };

    const dim = dimensions[size] || dimensions.medium;

    return (
        <svg viewBox={`0 0 ${dim} ${dim}`} fill="none" style={{ width: '100%', height: '100%' }}>
            <defs>
                <linearGradient id="ph-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#1f1f1f" />
                </linearGradient>
            </defs>
            <rect width={dim} height={dim} fill="url(#ph-grad)" />
            <text
                x={dim / 2}
                y={dim * 0.45}
                textAnchor="middle"
                fill="#444"
                fontSize={dim / 8}
            >
                📦
            </text>
            <text
                x={dim / 2}
                y={dim * 0.6}
                textAnchor="middle"
                fill="#444"
                fontSize={dim / 18}
            >
                {label}
            </text>
        </svg>
    );
}
