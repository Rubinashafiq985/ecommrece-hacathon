import { createClient } from "@sanity/client";

// Initialize Sanity Client
const client = createClient({
  projectId: 'n86r1egh',
  dataset: "production",
  useCdn: true,
    apiVersion: "2025-01-13",
     token: 'sk8VT4P0v1bnfpM7Zs1hBywahJdK02droM0cTgpkb5iGB7AaRrbQQ6L7AuEuSXj8xxpDyRXJE7DnYouIv9YfcGSNPm8oonKegbsKbPHvCqFGMe8OnfrRqE6slLvstLWpwbJS5Yx1J4I6atiC9TqMt13gkxIL6XViH2rigKw7gA8pWZ12sEe2',
});


const populateSlugs = async () => {
    try {
      const products = await client.fetch(`*[_type == "product" && !defined(slug.current)]`);
      console.log("Products without slugs:", products);
  
      if (products.length === 0) {
        console.log("No products found without slugs.");
        return;
      }
  
      const transaction = client.transaction();
  
      products.forEach((product) => {
        const slug = product.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
  
        console.log(`Generating slug for product "${product.name}": ${slug}`);
  
        transaction.patch(product._id, {
          set: {
            slug: {
              _type: "slug",
              current: slug,
            },
          },
        });
      });
  
      await transaction.commit();
      console.log("Slugs generated successfully.");
    } catch (error) {
      console.error("Error populating slugs:", error);
    }
  };
  
  populateSlugs();