export type ProjectCategory = "All" | "Restaurant" | "Commerce" | "Apps" | "Platforms";

export type Project = {
  id: string;
  name: string;
  tag: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  image: string;
  url?: string;
  gallery?: string[];
  noScrollEffect?: boolean;
};

export const projects = [
  {
    id: "nova",
    name: "Nova (Next.js)",
    tag: "Next.js Platform",
    category: "Platforms",
    description:
      "Nova is a modern, multi-tenant e-commerce storefront platform built to help businesses manage products, menus, branches, online ordering, customer accounts, payments, and delivery experiences through one unified web application.",
    url: "https://xo-chinese-chips.ordrz.store/",
    image: "/images/nova.jpg",
    noScrollEffect: true,
  },
  {
    id: "mary-browns",
    name: "Mary Brown's Chicken",
    tag: "Restaurant",
    category: "Restaurant",
    description:
      "A modern, fully responsive restaurant website with dynamic menus, exclusive deals, location finding, and online ordering, designed for engaging navigation and reliable performance across devices.",
    url: "http://marybrowns.com.pk/",
    image: "/images/mary-browns.jpg",
  },
  {
    id: "biz",
    name: "Biz",
    tag: "Internal CMS",
    category: "Platforms",
    description:
      "An internal restaurant operations CMS built with React and Next.js for managing orders, products, inventory, campaigns, customers, locations, analytics, and multi-branch administration.",
    image: "/images/biz1.jpg",
    noScrollEffect: true,
    gallery: ["/images/biz1.jpg", "/images/biz2.jpg", "/images/biz3.jpg", "/images/biz4.jpg", "/images/biz5.jpg"],
  },
  {
    id: "iqbal-foods",
    name: "Iqbal Foods",
    tag: "Grocery E-commerce",
    category: "Commerce",
    description:
      "A modern grocery e-commerce website with product browsing, location-based store selection, address management, online ordering, and delivery options for a seamless shopping experience.",
    url: "https://iqbalfoods.ca/",
    image: "/images/iqbal-foods.jpg",
  },
  {
    id: "stallion-traders-international",
    name: "Stallion Traders International",
    tag: "MERN Stack",
    category: "Commerce",
    description:
      "A full-stack MERN e-commerce website with product listings, online ordering, customer management, dynamic content, and responsive interfaces backed by Node.js, Express.js, and MongoDB.",
    url: "https://www.stalliontradersinternational.com/",
    image: "/images/stallion-traders.jpg",
  },
  {
    id: "mermaid-boil",
    name: "Mermaid Boil",
    tag: "Seafood Restaurant",
    category: "Restaurant",
    description:
      "A responsive seafood restaurant website with customizable seafood boils, online ordering, and an engaging Mediterranean-inspired interface optimized for smooth performance.",
    url: "https://mermaidboil.com/",
    image: "/images/mermaid-boil.jpg",
  },
  {
    id: "mermaid-fish-house",
    name: "Mermaid Fish House",
    tag: "Seafood Restaurant",
    category: "Restaurant",
    description:
      "A modern seafood restaurant experience with an interactive menu, online ordering, and an elegant Mediterranean-inspired design focused on clarity and ease of use.",
    url: "https://mermaidfishhouse.com/",
    image: "/images/mermaid-fish-house.jpg",
  },
  {
    id: "recipes-app",
    name: "Recipes App",
    tag: "React Web App",
    category: "Apps",
    description:
      "A responsive React recipe discovery app with category browsing, search, detailed recipe pages, and API integration, focused on fast performance and intuitive discovery.",
    url: "https://recipes5.netlify.app/",
    image: "/images/recipes-app.jpg",
  },
  {
    id: "great-punjab-supermarket",
    name: "Great Punjab Supermarket",
    tag: "Grocery E-commerce",
    category: "Commerce",
    description:
      "A responsive grocery e-commerce website with branch selection, pickup scheduling, online ordering, and brand-based shopping designed for quick, intuitive browsing.",
    url: "https://greatpunjabsupermarket.com/",
    image: "/images/great-punjab.jpg",
  },
  {
    id: "gulabjee",
    name: "Gulabjee",
    tag: "Premium Mithai",
    category: "Commerce",
    description:
      "A premium mithai website with elegant product showcases, online ordering, and a refined shopping experience built for clear, visually rich presentation.",
    url: "https://gulabjee.pk/",
    image: "/images/gulabjee.jpg",
  },
  {
    id: "insuco-web-app",
    name: "Insuco Web App",
    tag: "React Web App",
    category: "Apps",
    description:
      "A responsive insurance landing page featuring service highlights, coverage plans, and clear calls to action, with a clean interface and smooth user experience.",
    url: "https://insurance-webapp1.netlify.app/",
    image: "/images/insuco-web.jpg",
  },
  {
    id: "butterchick",
    name: "Butterchick",
    tag: "Indian Cuisine",
    category: "Restaurant",
    description:
      "A modern Indian cuisine website with online ordering, catering, and franchise information, designed with a clean and engaging experience across devices.",
    url: "https://butterchick.com/",
    image: "/images/butterchick.jpg",
  },
  {
    id: "zingo",
    name: "Zingo",
    tag: "Fast Food",
    category: "Restaurant",
    description:
      "A bold fast-food website featuring signature burgers, wraps, online ordering, and promotional offers with a smooth, energetic browsing experience.",
    url: "https://zingo.com.pk/",
    image: "/images/zingo.jpg",
  },
  {
    id: "helendo-web-app",
    name: "Helendo Web App",
    tag: "React Web App",
    category: "Commerce",
    description:
      "A responsive React e-commerce template with a clean, minimal design, dynamic product showcases, and an intuitive shopping experience optimized for performance.",
    url: "https://helendo2.netlify.app/",
    image: "/images/helendo-web.jpg",
  },
  {
    id: "irshad-bhatti-karahi-tikka",
    name: "Irshad Bhatti Karahi Tikka",
    tag: "BBQ & Karahi",
    category: "Restaurant",
    description:
      "A responsive restaurant website showcasing authentic BBQ, karahi, and traditional Pakistani cuisine with online ordering and an engaging dining experience.",
    url: "https://irshadbhattikarahitikka.pk/",
    image: "/images/irshad-bhatti.jpg",
  },
  {
    id: "faluda-king",
    name: "Faluda King",
    tag: "Dessert Brand",
    category: "Restaurant",
    description:
      "A visually engaging dessert brand website featuring signature faludas, shakes, traditional sweet treats, and online ordering across a responsive layout.",
    url: "https://faludaking.ordrz.com/",
    image: "/images/faluda-king.jpg",
  },
  {
    id: "saahil-restaurant",
    name: "Saahil Restaurant",
    tag: "Fine Dining",
    category: "Restaurant",
    description:
      "An elegant fine-dining website showcasing Pakistani cuisine, reservations, and premium catering services with a polished experience on every screen.",
    url: "https://saahilrestaurant.com/",
    image: "/images/saahil.jpg",
  },
  {
    id: "fuwa-fuwa-pancakes",
    name: "Fuwa Fuwa Pancakes",
    tag: "Dessert Café",
    category: "Restaurant",
    description:
      "A responsive dessert café website featuring Japanese soufflé pancakes, an interactive menu, and online ordering with a smooth, playful presentation.",
    url: "https://fuwafuwapancakes.com/",
    image: "/images/fuwa-fuwa.jpg",
  },
  {
    id: "fluffy-fluffy",
    name: "Fluffy Fluffy",
    tag: "Dessert Café",
    category: "Restaurant",
    description:
      "A modern dessert café website with signature Japanese soufflé pancakes, an interactive menu, and online ordering, designed for an engaging mobile-first experience.",
    url: "https://fluffyfluffy.ordrz.com/",
    image: "/images/fluffy-fluffy.jpg",
  },
  {
    id: "khan-baba",
    name: "Khan Baba",
    tag: "Pakistani Cuisine",
    category: "Restaurant",
    description:
      "A Pakistani cuisine website with online ordering and premium catering services, presented through a clean and engaging interface.",
    url: "https://khanbabapk.com/",
    image: "/images/khan-baba.jpg",
  },
  {
    id: "bagh",
    name: "Bagh",
    tag: "Pakistani Cuisine",
    category: "Restaurant",
    description:
      "A traditional Pakistani cuisine website with reservations, catering services, and an interactive menu, designed with a premium interface.",
    url: "https://baghrestaurant.ordrz.com/",
    image: "/images/bagh.jpg",
  },
  {
    id: "lahori-restaurant",
    name: "Lahori Restaurant",
    tag: "Pakistani Cuisine",
    category: "Restaurant",
    description:
      "A responsive restaurant website featuring authentic Pakistani cuisine, online ordering, and an intuitive menu experience built for smooth browsing.",
    url: "https://lahorirestaurant.ordrz.com",
    image: "/images/lahori.jpg",
  },
  {
    id: "toronto-hot-chicken",
    name: "Toronto Hot Chicken",
    tag: "Fast Food",
    category: "Restaurant",
    description:
      "A responsive restaurant website with dynamic menus, promotional sections, and a modern, engaging user experience.",
    url: "https://torontohotchicken.ca/",
    image: "/images/toronto-hot-chicken.jpg",
  },
  {
    id: "dough-joe",
    name: "Dough Joe",
    tag: "Fast Food",
    category: "Restaurant",
    description:
      "A modern fast-food website with an interactive menu, online ordering, and engaging promotional sections, optimized for seamless performance.",
    url: "https://doughjoe.pk/",
    image: "/images/dough-joe.jpg",
  },
  {
    id: "mastani",
    name: "Mastani",
    tag: "Street Food",
    category: "Restaurant",
    description:
      "A vibrant street-food restaurant website with interactive menus, online ordering, and engaging visuals optimized for a seamless experience.",
    url: "https://mastani.pk/",
    image: "/images/mastani.jpg",
  },
] satisfies readonly Project[];

export const categories: ProjectCategory[] = ["All", "Restaurant", "Commerce", "Apps", "Platforms"];
