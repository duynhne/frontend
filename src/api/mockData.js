/**
 * Mock Product Data
 * Used when VITE_USE_MOCK=true (no backend needed)
 * Generates realistic product data for local development
 */

const PRODUCT_NAMES = [
    'Wireless Headphones', 'Smart Watch', 'Laptop Stand', 'USB-C Hub',
    'Mechanical Keyboard', 'Gaming Mouse', 'Monitor Light Bar', 'Webcam HD',
    'Desk Mat', 'Cable Organizer', 'Phone Stand', 'Portable SSD',
    'Bluetooth Speaker', 'Power Bank', 'Screen Protector', 'Laptop Sleeve',
    'Wireless Charger', 'Noise Canceller', 'Smart Plug', 'LED Strip',
    'Tablet Case', 'Stylus Pen', 'USB Microphone', 'Ring Light',
    'Ergonomic Chair', 'Standing Desk', 'Air Purifier', 'Smart Thermostat',
    'Fitness Tracker', 'VR Headset',
];

const TOTAL_PRODUCTS = 5013;

/**
 * Generate a deterministic product based on index
 */
function generateProduct(index) {
    const id = `prod-${String(index + 1).padStart(5, '0')}`;
    const nameIndex = index % PRODUCT_NAMES.length;
    const variant = Math.floor(index / PRODUCT_NAMES.length) + 1;
    const name = variant > 1
        ? `${PRODUCT_NAMES[nameIndex]} v${variant}`
        : PRODUCT_NAMES[nameIndex];
    const price = (9.99 + (index * 3.17) % 490).toFixed(2);

    return {
        id,
        name,
        price: parseFloat(price),
        description: `High quality ${name.toLowerCase()} for everyday use.`,
        stock: (index * 7) % 200,
    };
}

/**
 * Mock getProducts - simulates paginated API response
 * @param {Object} params - { page, limit }
 * @returns {Promise<{ items: Array, total: number }>}
 */
export async function mockGetProducts(params = {}) {
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 30;
    const offset = (page - 1) * limit;

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const items = [];
    const end = Math.min(offset + limit, TOTAL_PRODUCTS);
    for (let i = offset; i < end; i++) {
        items.push(generateProduct(i));
    }

    return { items, total: TOTAL_PRODUCTS };
}
