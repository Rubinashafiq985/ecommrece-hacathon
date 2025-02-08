import { createClient, SanityClient } from '@sanity/client';

// Define the product interface
interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent: number;
  isNew: boolean;
}

// Initialize Sanity client
const client: SanityClient = createClient({
  projectId: 'n86r1egh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-02-05',
  token: 'sklCRspYj3RLH68UxHKsZ3efWz2G1tqnymPoJq5ntOvwVZLgrwLZImfbpuhWWGUbbmtdFZYcsCCvHxCGLpTPLkBfae9DQR8POKnfyVVVgl1Frs5ClCP8A9jGTV9fidWaRzqORZuywI8TkKcJnAeiT9qIzxn9CgP3nzBYQRyGnYwsuWyATCYD'
});

// Upload image to Sanity
async function uploadImageToSanity(imageUrl: string): Promise<string | null> {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop() || 'unknown',
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Upload a product to Sanity
async function uploadProduct(product: Product): Promise<void> {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

// Fetch and import products from API
async function importProducts(): Promise<void> {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products: Product[] = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
