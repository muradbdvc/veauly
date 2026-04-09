export const blogCategories = [
  { id: 1, name: "Skincare", count: 12 },
  { id: 2, name: "Makeup", count: 8 },
  { id: 3, name: "Haircare", count: 6 },
  { id: 4, name: "Wellness", count: 5 },
  { id: 5, name: "Beauty Tips", count: 10 },
  { id: 6, name: "Trends", count: 7 },
];

export const popularTags = [
  "Skincare Routine",
  "Anti-aging",
  "Natural Beauty",
  "Summer Glow",
  "Acne Care",
  "Hydration",
  "Vegan Beauty",
  "Clean Beauty",
  "Beauty Hacks",
  "Night Routine",
];

export const blogsData = [
  {
    id: 1,
    slug: "best-skincare-routine-for-glowing-skin",
    title: "Best Skincare Routine for Glowing Skin",
    excerpt:
      "Discover the essential steps to achieve radiant, healthy skin with our comprehensive guide to building the perfect morning and evening skincare routine.",
    content: `
      <p>Achieving glowing skin is easier than you think when you have the right routine. The key to radiant skin lies in consistency and using products suited to your skin type.</p>
      
      <h2>Morning Routine Essentials</h2>
      <p>Start your day with a gentle cleanser to remove any overnight buildup. Follow with a vitamin C serum to brighten and protect against environmental damage. Don't forget to apply sunscreen with at least SPF 30 to shield your skin from harmful UV rays.</p>
      
      <h2>The Power of Double Cleansing</h2>
      <p>For those who wear makeup or sunscreen, double cleansing is a game-changer. Begin with an oil-based cleanser to dissolve impurities, then follow with a water-based cleanser for a thorough clean.</p>
      
      <h2>Evening Repair</h2>
      <p>Your skin repairs itself while you sleep, so make the most of this time with retinol or peptide serums. These powerful ingredients encourage cell turnover and boost collagen production.</p>
      
      <h2>Hydration is Key</h2>
      <p>Regardless of your skin type, hydration is essential. Use a moisturizer that suits your skin's needs and consider adding a hydrating serum with hyaluronic acid for an extra boost of plumpness.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
    author: {
      name: "Emma Stone",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    },
    category: "Skincare",
    tags: ["Skincare Routine", "Hydration", "Anti-aging"],
    createdAt: "2026-03-15",
    readTime: "5 min read",
    comments: [
      {
        id: 1,
        author: "Sarah Miller",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        content: "This is exactly what I needed! I've been struggling with my routine for months.",
        createdAt: "2026-03-16",
        likes: 12,
      },
      {
        id: 2,
        author: "Jessica Brown",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        content: "Great tips! I especially love the suggestion about double cleansing.",
        createdAt: "2026-03-17",
        likes: 8,
      },
    ],
  },
  {
    id: 2,
    slug: "summer-makeup-look-natural-glow",
    title: "Summer Makeup Look: Natural Glow",
    excerpt:
      "Learn how to achieve that coveted sun-kissed, dewy look perfect for the warm summer months without feeling heavy or melting off.",
    content: `
      <p>Summer makeup is all about embracing your natural beauty while adding a subtle glow. The goal is to look fresh and luminous, not cakey or overdone.</p>
      
      <h2>Prep Your Skin</h2>
      <p>The foundation of any great summer look starts with skincare. Exfoliate regularly and keep your skin hydrated with light, oil-free moisturizers.</p>
      
      <h2>Light Coverage Products</h2>
      <p>Swap your heavy foundation for a tinted moisturizer or BB cream. These provide light coverage while letting your skin breathe and maintain its natural glow.</p>
      
      <h2>Bronzer and Blush</h2>
      <p>Apply cream bronzer where the sun naturally hits your face - temples, cheeks, and nose. Add a cream blush to the apples of your cheeks for a healthy flush.</p>
      
      <h2>Setting Spray</h2>
      <p>Lock in your look with a refreshing setting spray. Look for formulas with hyaluronic acid to keep your skin hydrated throughout the day.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    author: {
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
    },
    category: "Makeup",
    tags: ["Summer Glow", "Natural Beauty", "Beauty Hacks"],
    createdAt: "2026-03-10",
    readTime: "4 min read",
    comments: [
      {
        id: 1,
        author: "Amanda Chen",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
        content: "Love this look! Do you have any recommendations for tinted moisturizers?",
        createdAt: "2026-03-11",
        likes: 5,
      },
    ],
  },
  {
    id: 3,
    slug: "haircare-tips-for-healthy-shiny-hair",
    title: "Haircare Tips for Healthy, Shiny Hair",
    excerpt:
      "Transform your hair with these expert tips on maintaining silky, lustrous locks from root to tip. Learn about proper washing, conditioning, and styling techniques.",
    content: `
      <p>Healthy hair starts with understanding your hair type and its unique needs. Whether you have straight, wavy, curly, or coily hair, these universal tips will help you achieve your healthiest hair yet.</p>
      
      <h2>Washing Frequency</h2>
      <p>Contrary to popular belief, daily washing isn't necessary for most hair types. Over-washing can strip your hair of natural oils. Find the sweet spot for your hair - typically 2-3 times per week.</p>
      
      <h2>Conditioning Techniques</h2>
      <p>Focus conditioner on the mid-lengths and ends where hair is oldest and driest. Avoid applying directly to your scalp to prevent greasiness.</p>
      
      <h2>Heat Protection</h2>
      <p>Always apply a heat protectant before using any hot tools. This creates a barrier that minimizes damage and keeps your hair looking healthy.</p>
      
      <h2>Deep Conditioning</h2>
      <p>Incorporate a weekly deep conditioning treatment to restore moisture and elasticity. For extra benefits, use a shower cap and let it sit for 20-30 minutes.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    author: {
      name: "Mia Johnson",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80",
    },
    category: "Haircare",
    tags: ["Haircare", "Natural Beauty", "Night Routine"],
    createdAt: "2026-03-08",
    readTime: "6 min read",
    comments: [],
  },
  {
    id: 4,
    slug: "anti-aging-serums-what-you-need-to-know",
    title: "Anti-Aging Serums: What You Need to Know",
    excerpt:
      "Navigate the world of anti-aging serums with confidence. Learn about key ingredients like retinol, vitamin C, and peptides to target fine lines and wrinkles.",
    content: `
      <p>The anti-aging skincare market is flooded with products making bold claims. Understanding which ingredients actually work can save you time and money while delivering real results.</p>
      
      <h2>Retinol: The Gold Standard</h2>
      <p>Retinol is proven to reduce fine lines, smooth skin texture, and boost collagen production. Start with a low concentration and gradually increase as your skin builds tolerance.</p>
      
      <h2>Vitamin C for Brightening</h2>
      <p>This powerful antioxidant not only brightens skin but also protects against free radical damage. Look for serums with 10-20% vitamin C concentration.</p>
      
      <h2>Peptides</h2>
      <p>Peptides are amino acids that build proteins like collagen and elastin. They help firm skin and reduce the appearance of wrinkles over time.</p>
      
      <h2>Hyaluronic Acid</h2>
      <p>This molecule can hold up to 1000x its weight in water, making it essential for plump, hydrated skin at any age.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    author: {
      name: "Dr. Rachel Kim",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&q=80",
    },
    category: "Skincare",
    tags: ["Anti-aging", "Skincare Routine", "Clean Beauty"],
    createdAt: "2026-03-05",
    readTime: "7 min read",
    comments: [
      {
        id: 1,
        author: "Linda Davis",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
        content: "As a dermatologist, I can confirm these are all evidence-based ingredients!",
        createdAt: "2026-03-06",
        likes: 24,
      },
      {
        id: 2,
        author: "Karen Wilson",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&q=80",
        content: "I've been using retinol for 3 months and already see a difference!",
        createdAt: "2026-03-07",
        likes: 15,
      },
    ],
  },
  {
    id: 5,
    slug: "clean-beauty-natural-ingredients-guide",
    title: "Clean Beauty: A Guide to Natural Ingredients",
    excerpt:
      "Explore the world of clean beauty and discover which natural ingredients are most effective for your skin and hair care routine.",
    content: `
      <p>Clean beauty is more than just a trend - it's a movement towards safer, more sustainable products. Understanding natural ingredients helps you make informed choices.</p>
      
      <h2>Plant-Based Superstars</h2>
      <p>Ingredients like aloe vera, green tea, and chamomile have proven benefits for calming and nourishing skin. These botanicals have been used for centuries and continue to be effective.</p>
      
      <h2>Oils and Butters</h2>
      <p>Natural oils like jojoba, argan, and rosehip provide intense hydration without clogging pores. Shea and cocoa butter offer protective barriers for dry skin.</p>
      
      <h2>Adaptogens in Skincare</h2>
      <p>Ashwagandha, reishi mushroom, and rhodiola are trending ingredients known for their stress-reducing properties when applied topically.</p>
      
      <h2>Reading Labels</h2>
      <p>Learn to identify potentially harmful ingredients like parabens, sulfates, and synthetic fragrances. Clean beauty doesn't mean less effective - it means safer.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    author: {
      name: "Sophie Taylor",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&q=80",
    },
    category: "Wellness",
    tags: ["Clean Beauty", "Vegan Beauty", "Natural Beauty"],
    createdAt: "2026-03-01",
    readTime: "5 min read",
    comments: [],
  },
  {
    id: 6,
    slug: "acne-care-dos-and-donts",
    title: "Acne Care: Dos and Don'ts",
    excerpt:
      "Clear up confusion about acne treatment with our comprehensive guide on what actually works and what to avoid when dealing with breakouts.",
    content: `
      <p>Acne affects people of all ages, and dealing with it can be frustrating. The key is understanding what triggers breakouts and how to treat them effectively.</p>
      
      <h2>The Dos</h2>
      <p>Do wash your face twice daily with a gentle cleanser. Do apply acne treatments to the entire affected area, not just individual pimples. Do change your pillowcase regularly and avoid touching your face.</p>
      
      <h2>The Don'ts</h2>
      <p>Don't pick or pop pimples - this can lead to scarring and infection. Don't over-wash or over-exfoliate, as this can irritate skin and worsen breakouts. Don't skip moisturizer if you have oily skin.</p>
      
      <h2>Treatment Ingredients</h2>
      <p>Look for products containing salicylic acid, benzoyl peroxide, or niacinamide. These ingredients are proven to help clear and prevent acne.</p>
      
      <h2>When to See a Professional</h2>
      <p>If over-the-counter products aren't working after 6-8 weeks, consider seeing a dermatologist for prescription options.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&q=80",
    },
    category: "Skincare",
    tags: ["Acne Care", "Skincare Routine", "Beauty Tips"],
    createdAt: "2026-02-25",
    readTime: "6 min read",
    comments: [
      {
        id: 1,
        author: "Emily Rogers",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80",
        content: "This is so helpful! I've been making the mistake of over-washing my face.",
        createdAt: "2026-02-26",
        likes: 18,
      },
    ],
  },
  {
    id: 7,
    slug: "spring-beauty-trends-2026",
    title: "Spring Beauty Trends 2026",
    excerpt:
      "Stay ahead of the curve with our roundup of the hottest beauty trends for spring. From bold lips to soft glam eyes, discover what's in style.",
    content: `
      <p>Spring 2026 is bringing a refreshing mix of bold statements and soft, natural looks. Here's what's trending in the beauty world this season.</p>
      
      <h2>Bold Brows</h2>
      <p>Full, fluffy brows are taking center stage. Embrace your natural brow shape and fill in any sparse areas for a bold yet natural look.</p>
      
      <h2>Glass Skin</h2>
      <p>The Korean beauty trend continues with glass skin - a hyper-polished, luminous complexion achieved through layering hydrating products.</p>
      
      <h2>Soft Pink Lips</h2>
      <p>Move over bold reds - soft, natural pink lips are in. Tinted lip balms and sheer lip colors are must-haves this season.</p>
      
      <h2>Graphic Liner</h2>
      <p>For those who love drama, graphic eyeliner continues to trend. Think floating creases, geometric shapes, and bold color blocking.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    author: {
      name: "Chloe Anderson",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&q=80",
    },
    category: "Trends",
    tags: ["Beauty Tips", "Summer Glow", "Natural Beauty"],
    createdAt: "2026-02-20",
    readTime: "4 min read",
    comments: [],
  },
  {
    id: 8,
    slug: "night-time-beauty-ritual",
    title: "The Ultimate Night-Time Beauty Ritual",
    excerpt:
      "Transform your evening routine into a luxurious self-care ritual. Discover the best products and techniques for overnight skin regeneration.",
    content: `
      <p>Your skin does its best healing work while you sleep, making your night routine the most important part of your skincare regimen.</p>
      
      <h2>Double Cleanse</h2>
      <p>Start with an oil cleanser to remove makeup and sunscreen, followed by a water-based cleanser to clean your skin thoroughly.</p>
      
      <h2>Exfoliation</h2>
      <p>2-3 times per week, use a chemical exfoliant like AHA or BHA to remove dead skin cells and reveal fresh, glowing skin.</p>
      
      <h2>Treatments and Serums</h2>
      <p>Apply your actives - retinol, vitamin C, or treatment serums - on clean skin. These potent ingredients work best when skin is clean and receptive.</p>
      
      <h2>Moisture Lock</h2>
      <p>Finish with a rich moisturizer or overnight mask to lock in all the benefits of your skincare products and wake up to plump, hydrated skin.</p>
    `,
    featureImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    author: {
      name: "Isabella Garcia",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&q=80",
    },
    category: "Skincare",
    tags: ["Night Routine", "Skincare Routine", "Hydration"],
    createdAt: "2026-02-15",
    readTime: "5 min read",
    comments: [
      {
        id: 1,
        author: "Natalie White",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&q=80",
        content: "I started doing this routine and my skin has never looked better!",
        createdAt: "2026-02-16",
        likes: 21,
      },
    ],
  },
];

export const getBlogBySlug = (slug) => {
  return blogsData.find((blog) => blog.slug === slug);
};

export const getRecentBlogs = (count = 4) => {
  return [...blogsData]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, count);
};

export const getRelatedBlogs = (currentSlug, category, count = 3) => {
  return blogsData
    .filter((blog) => blog.slug !== currentSlug && blog.category === category)
    .slice(0, count);
};
