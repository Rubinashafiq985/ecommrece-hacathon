import createClient from '@sanity/client';

const client = createClient({
  projectId: 'n86r1egh', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset (e.g., 'production')
  apiVersion: '2025-02-05',    // Use the latest date-based API version
  useCdn: true,                // Set to `true` to enable CDN for faster performance
});

export default client;
