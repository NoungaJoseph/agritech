import { Product } from './types';

export const PRODUCTS: Product[] = [
    // Proteins
    {
        id: 'f1',
        name: 'Crayfish Séché (Njanga)',
        sku: 'PROT-001',
        price: 5000,
        image: '/images/Njanga (Crayfish)/1.webp',
        gallery: ['/images/Njanga (Crayfish)/2.webp', '/images/Njanga (Crayfish)/3.webp', '/images/Njanga (Crayfish)/4.webp', '/images/Njanga (Crayfish)/5.webp'],
        brand: 'Mama Africa',
        rating: 4.8,
        reviewCount: 120,
        description: 'Njanga de qualité supérieure, séché naturellement. Idéal pour vos sauces et bouillons.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['250g', '500g', '1kg']
    },
    {
        id: 'f2',
        name: 'Poisson Fumé du Fleuve',
        sku: 'PROT-002',
        price: 8500,
        image: '/images/Poisson Fumé/1.webp',
        gallery: ['/images/Poisson Fumé/2.webp', '/images/Poisson Fumé/3.webp', '/images/Poisson Fumé/4.webp', '/images/Poisson Fumé/5.webp'],
        brand: 'Mama Africa',
        rating: 4.7,
        reviewCount: 85,
        description: 'Variété de poissons de rivière fumés au bois traditionnel. Goût fumé authentique.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'f2-1',
        name: 'Capitaine Fumé',
        sku: 'PROT-002-1',
        price: 9500,
        image: '/images/Poisson Fumé/2.webp',
        brand: 'Mama Africa',
        rating: 4.8,
        reviewCount: 42,
        description: 'Capitaine de rivière fumé avec soin. Chair tendre et parfumée.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'f2-2',
        name: 'Mâchoiron Fumé',
        sku: 'PROT-002-2',
        price: 7800,
        image: '/images/Poisson Fumé/3.webp',
        brand: 'Mama Africa',
        rating: 4.6,
        reviewCount: 56,
        description: 'Poisson Mâchoiron fumé traditionnellement. Riche en goût.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'f2-3',
        name: 'Bossu Fumé',
        sku: 'PROT-002-3',
        price: 6500,
        image: '/images/Poisson Fumé/4.webp',
        brand: 'Mama Africa',
        rating: 4.5,
        reviewCount: 38,
        description: 'Bossu fumé au feu de bois. Idéal pour les soupes.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'f2-4',
        name: 'Bar Fumé',
        sku: 'PROT-002-4',
        price: 11000,
        image: '/images/Poisson Fumé/5.webp',
        brand: 'Mama Africa',
        rating: 4.9,
        reviewCount: 24,
        description: 'Bar fumé de première qualité. Saveur subtile et raffinée.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['1kg']
    },
    {
        id: 'f2-5',
        name: 'Sole Fumée',
        sku: 'PROT-002-5',
        price: 8900,
        image: '/images/Poisson Fumé/1.webp',
        brand: 'Mama Africa',
        rating: 4.7,
        reviewCount: 47,
        description: 'Soles fumées entières. Prêtes pour vos meilleures recettes.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'f3',
        name: 'Stockfish (Okporoko)',
        sku: 'PROT-003',
        price: 12000,
        image: '/images/Stockfish (Okporoko)/1.webp',
        gallery: ['/images/Stockfish (Okporoko)/2.webp', '/images/Stockfish (Okporoko)/3.webp', '/images/Stockfish (Okporoko)/4.webp', '/images/Stockfish (Okporoko)/5.webp'],
        brand: 'Tradition Plus',
        rating: 4.9,
        reviewCount: 45,
        description: 'Morue séchée de première qualité. Incontournable pour vos plats traditionnels.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['1kg']
    },
    {
        id: 'f8',
        name: 'Silure Sec',
        sku: 'PROT-008',
        price: 7500,
        image: '/images/Silure Sec/1.webp',
        brand: 'Mama Africa',
        rating: 4.6,
        reviewCount: 29,
        description: 'Silure séché naturellement, parfait pour les sauces longues.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'f9',
        name: 'Poulet Fumé',
        sku: 'PROT-009',
        price: 5500,
        image: '/images/Poulet/1.webp',
        gallery: ['/images/Poulet/2.webp', '/images/Poulet/3.webp', '/images/Poulet/4.webp'],
        brand: 'EcoFarm CMR',
        rating: 4.7,
        reviewCount: 112,
        description: 'Poulet local fumé traditionnellement, certifié sans conservateurs.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['Unité']
    },
    {
        id: 'f6',
        name: 'Viande de Brousse Séchée',
        sku: 'PROT-006',
        price: 15000,
        image: '/images/Viande de Brousse/1.webp',
        gallery: ['/images/Viande de Brousse/2.webp', '/images/Viande de Brousse/3.webp', '/images/Viande de Brousse/4.webp', '/images/Viande de Brousse/5.webp'],
        brand: 'Tradition Plus',
        rating: 4.8,
        reviewCount: 34,
        description: 'Gibier fumé et séché selon les méthodes ancestrales.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['250g', '500g']
    },
    // Oils
    {
        id: 'o1',
        name: 'Huile de Palme Rouge Premium',
        sku: 'OIL-001',
        price: 2500,
        image: '/images/Red Palm Oil/1.webp',
        gallery: ['/images/Red Palm Oil/2.webp', '/images/Red Palm Oil/3.webp', '/images/Red Palm Oil/4.webp'],
        brand: 'EcoFarm CMR',
        rating: 4.6,
        reviewCount: 200,
        description: 'Huile de palme non raffinée, riche en bêta-carotène. Extraction traditionnelle.',
        category: 'Huiles & Matières Grasses',
        inStock: true,
        sizes: ['1L', '5L', '10L']
    },
    {
        id: 'o2',
        name: 'Huile d\'Arachide Locale',
        sku: 'OIL-002',
        price: 3500,
        image: '/images/Local Peanut Oil/1.webp',
        gallery: ['/images/Local Peanut Oil/2.webp', '/images/Local Peanut Oil/3.webp'],
        brand: 'EcoFarm CMR',
        rating: 4.5,
        reviewCount: 150,
        description: 'Huile d\'arachide pressée à froid, pure et naturelle pour toutes vos fritures.',
        category: 'Huiles & Matières Grasses',
        inStock: true,
        sizes: ['1L', '5L']
    },
    // Legumes
    {
        id: 'l1',
        name: 'Arachides du Pays Décortiquées',
        sku: 'LEG-001',
        price: 1800,
        image: '/images/Shelled Peanuts from the Country/1.webp',
        gallery: ['/images/Shelled Peanuts from the Country/2.webp', '/images/Shelled Peanuts from the Country/3.webp', '/images/Shelled Peanuts from the Country/4.webp'],
        brand: 'Nature Nutri',
        rating: 4.4,
        reviewCount: 90,
        description: 'Arachides locales croquantes, idéales pour le grignotage ou la cuisine.',
        category: 'Légumineuses & Graines',
        inStock: true,
        sizes: ['1kg', '5kg']
    },
    {
        id: 'l2',
        name: 'Pâte d\'Arachide (Peanut Butter)',
        sku: 'LEG-002',
        price: 1500,
        image: '/images/groundnut-paste.jpg',
        brand: 'Nature Nutri',
        rating: 4.8,
        reviewCount: 310,
        description: 'Pâte d\'arachide crémeuse 100% naturelle, sans additifs.',
        category: 'Légumineuses & Graines',
        inStock: true,
        sizes: ['500g']
    },
    {
        id: 'l3',
        name: 'Haricots Rouges du Cameroun',
        sku: 'LEG-003',
        price: 1200,
        image: '/images/Red Beans/1.webp',
        gallery: ['/images/Red Beans/2.webp', '/images/Red Beans/3.webp', '/images/Red Beans/4.webp'],
        brand: 'Nature Nutri',
        rating: 4.7,
        reviewCount: 145,
        description: 'Haricots rouges riches en protéines et fibres. Idéaux pour vos plats traditionnels.',
        category: 'Légumineuses & Graines',
        inStock: true,
        sizes: ['500g', '1kg', '5kg']
    },
    {
        id: 'l4',
        name: 'Haricots Noirs',
        sku: 'LEG-004',
        price: 1300,
        image: '/images/Black Beans/1.webp',
        gallery: ['/images/Black Beans/2.webp', '/images/Black Beans/3.webp'],
        brand: 'Nature Nutri',
        rating: 4.6,
        reviewCount: 88,
        description: 'Haricots noirs de qualité, riches en protéines. Parfaits pour vos soupes et ragoûts.',
        category: 'Légumineuses & Graines',
        inStock: true,
        sizes: ['500g', '1kg', '5kg']
    },
    {
        id: 'l5',
        name: 'Okpa (Bambara)',
        sku: 'LEG-005',
        price: 1600,
        image: '/images/Okpa (Bambara)/1.webp',
        gallery: ['/images/Okpa (Bambara)/2.webp', '/images/Okpa (Bambara)/3.webp'],
        brand: 'Nature Nutri',
        rating: 4.5,
        reviewCount: 72,
        description: 'Pois Bambara pour préparer l\'Okpa traditionnel. Riche en nutriments.',
        category: 'Légumineuses & Graines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'l6',
        name: 'Soja Sec',
        sku: 'LEG-006',
        price: 1400,
        image: '/images/dry soybeans/1.webp',
        gallery: ['/images/dry soybeans/2.webp', '/images/dry soybeans/3.webp'],
        brand: 'Nature Nutri',
        rating: 4.7,
        reviewCount: 95,
        description: 'Graines de soja séchées, excellente source de protéines végétales.',
        category: 'Légumineuses & Graines',
        inStock: true,
        sizes: ['500g', '1kg', '5kg']
    },
    // Spices
    {
        id: 's1',
        name: 'Njansang (Épice Pays)',
        sku: 'SPI-001',
        price: 3000,
        image: '/images/Njansang (Country Spice)/1.webp',
        brand: 'Tradition Plus',
        rating: 4.9,
        reviewCount: 180,
        description: 'Graines de Njansang séchées, essentielles pour épaissir et aromatiser vos sauces.',
        category: 'Épices & Condiments Traditionnels',
        inStock: true,
        sizes: ['250g', '500g']
    },
    // Staples
    {
        id: 'st1',
        name: 'Garri Jaune de Qualité',
        sku: 'STA-001',
        price: 2200,
        image: '/images/Garri Jaune de Qualité/1.webp',
        gallery: ['/images/Garri Jaune de Qualité/2.webp', '/images/Garri Jaune de Qualité/3.webp', '/images/Garri Jaune de Qualité/4.webp', '/images/Garri Jaune de Qualité/5.webp'],
        brand: 'AgriDirect Select',
        rating: 4.5,
        reviewCount: 400,
        description: 'Garri fermenté et torréfié à l\'huile de palme. Croustillant et savoureux.',
        category: 'Produits de Base & Accompagnements',
        inStock: true,
        sizes: ['5kg', '10kg']
    },
    {
        id: 'st2',
        name: 'Ndolé Séché (Bitterleaf)',
        sku: 'STA-002',
        price: 2500,
        image: '/images/Dry Ndole/1.webp',
        gallery: ['/images/Dry Ndole/2.webp', '/images/Dry Ndole/3.webp', '/images/Dry Ndole/4.webp'],
        brand: 'AgriDirect Select',
        rating: 4.8,
        reviewCount: 125,
        description: 'Feuilles de Ndolé lavées et séchées. Garde toute sa saveur et son amertume.',
        category: 'Produits de Base & Accompagnements',
        inStock: true,
        sizes: ['250g', '500g']
    },
    {
        id: 'st3',
        name: 'Eru Séché Premium',
        sku: 'STA-003',
        price: 3500,
        image: '/images/Eru Seche Premium/1.webp',
        gallery: ['/images/Eru Seche Premium/2.webp', '/images/Eru Seche Premium/3.webp', '/images/Eru Seche Premium/4.webp'],
        brand: 'AgriDirect Select',
        rating: 4.9,
        reviewCount: 210,
        description: 'Lianes d\'Eru (Okok) finement hachées et séchées. Idéal pour le Eru & Waterfufu.',
        category: 'Produits de Base & Accompagnements',
        inStock: true,
        sizes: ['250g', '500g']
    },
    {
        id: 'st4',
        name: 'Egusi (Graines de Melon)',
        sku: 'STA-004',
        price: 2800,
        image: '/images/Egusi/1.webp',
        gallery: ['/images/Egusi/2.webp', '/images/Egusi/3.webp', '/images/Egusi/4.webp'],
        brand: 'AgriDirect Select',
        rating: 4.7,
        reviewCount: 165,
        description: 'Graines d\'Egusi séchées et décortiquées. Essentielles pour la soupe Egusi.',
        category: 'Produits de Base & Accompagnements',
        inStock: true,
        sizes: ['250g', '500g', '1kg']
    },
    {
        id: 'st5',
        name: 'Foufou Maïs',
        sku: 'STA-005',
        price: 1800,
        image: '/images/Foufou Mais/1.webp',
        gallery: ['/images/Foufou Mais/2.webp', '/images/Foufou Mais/3.webp'],
        brand: 'AgriDirect Select',
        rating: 4.6,
        reviewCount: 140,
        description: 'Farine de maïs fermentée pour préparer le foufou. Texture parfaite.',
        category: 'Produits de Base & Accompagnements',
        inStock: true,
        sizes: ['1kg', '5kg', '10kg']
    },
    {
        id: 'st6',
        name: 'Farine de Plantain',
        sku: 'STA-006',
        price: 2100,
        image: '/images/Plantain Flou/1.webp',
        gallery: ['/images/Plantain Flou/2.webp', '/images/Plantain Flou/3.webp', '/images/Plantain Flou/4.webp'],
        brand: 'AgriDirect Select',
        rating: 4.8,
        reviewCount: 98,
        description: 'Farine de plantain mûr, sans gluten. Idéale pour diverses préparations.',
        category: 'Produits de Base & Accompagnements',
        inStock: true,
        sizes: ['500g', '1kg', '5kg']
    },
    // Divers
    {
        id: 'd1',
        name: 'Kanda Sec',
        sku: 'DIV-001',
        price: 3200,
        image: '/images/Kanda Sec/1.webp',
        gallery: ['/images/Kanda Sec/2.webp', '/images/Kanda Sec/3.webp', '/images/Kanda Sec/4.webp', '/images/Kanda Sec/5.webp'],
        brand: 'Tradition Plus',
        rating: 4.9,
        reviewCount: 67,
        description: 'Kanda séché traditionnel, ingrédient rare et prisé pour les sauces spéciales.',
        category: 'Produits Divers & Traditionnels',
        inStock: true,
        sizes: ['100g', '250g', '500g']
    },
    {
        id: 'd2',
        name: 'Champignons Secs',
        sku: 'DIV-002',
        price: 2600,
        image: '/images/Dried Mushrooms/1.webp',
        gallery: ['/images/Dried Mushrooms/2.webp', '/images/Dried Mushrooms/3.webp', '/images/Dried Mushrooms/4.webp'],
        brand: 'Tradition Plus',
        rating: 4.7,
        reviewCount: 54,
        description: 'Champignons africains séchés naturellement. Saveur umami intense.',
        category: 'Produits Divers & Traditionnels',
        inStock: true,
        sizes: ['100g', '250g']
    },
    {
        id: 'd3',
        name: 'Sel Traditionnel (Kanwa)',
        sku: 'DIV-003',
        price: 800,
        image: '/images/Traditional Salt (Kanwa)/1.webp',
        gallery: ['/images/Traditional Salt (Kanwa)/2.webp', '/images/Traditional Salt (Kanwa)/3.webp'],
        brand: 'Tradition Plus',
        rating: 4.8,
        reviewCount: 112,
        description: 'Sel traditionnel Kanwa, utilisé pour attendrir les légumes et relever les saveurs.',
        category: 'Produits Divers & Traditionnels',
        inStock: true,
        sizes: ['100g', '250g', '500g']
    }
];

export const CATEGORIES = [
    { id: 'halieutiques', name: 'Produits Halieutiques & Protéines', image: '/images/cat-fish.jpg' },
    { id: 'huiles', name: 'Huiles & Matières Grasses', image: '/images/cat-oil.jpg' },
    { id: 'legumineuses', name: 'Légumineuses & Graines', image: '/images/cat-legumes.jpg' },
    { id: 'epices', name: 'Épices & Condiments Traditionnels', image: '/images/cat-spices.jpg' },
    { id: 'base', name: 'Produits de Base & Accompagnements', image: '/images/cat-staples.jpg' },
    { id: 'divers', name: 'Produits Divers & Traditionnels', image: '/images/cat-divers.jpg' }
];

export const BRANDS = ['Mama Africa', 'EcoFarm CMR', 'Tradition Plus', 'AgriDirect Select', 'Nature Nutri'];
export const SIZES = ['250g', '500g', '1kg', '5kg', '10kg', '1L', '5L', '10L', 'Unité'];
export const COLORS = ['Standard', 'Jaune', 'Blanc', 'Rouge'];

export const REVIEWS = [
    {
        id: '1',
        user: 'Jean Dupont',
        location: 'Bafoussam',
        rating: 5,
        comment: 'Le poisson fumé est excellent, très propre et bien séché.',
        date: '12 Oct 2025'
    },
    {
        id: '2',
        user: 'Marie Nguea',
        location: 'Douala',
        rating: 5,
        comment: 'L\'huile de palme est pure, sans odeur bizarre. Je recommande.',
        date: '15 Nov 2025'
    },
    {
        id: '3',
        user: 'Paul T.',
        location: 'Yaoundé',
        rating: 4,
        comment: 'Bon Garri, mais j\'aimerais qu\'il soit encore plus croustillant.',
        date: '20 Nov 2025'
    },
    {
        id: '4',
        user: 'Sarah K.',
        location: 'Bamenda',
        rating: 5,
        comment: 'Le Njansang sent très bon. Livraison rapide.',
        date: '02 Déc 2025'
    }
];

export const NAV_CATEGORIES = ['Protéines Sechées', 'Huiles', 'Légumineuses', 'Épices', 'Base', 'Divers'];

export const MEGA_MENU_DATA: Record<string, string[]> = {
    'Protéines Sechées': ['Njanga (Crayfish)', 'Poisson Fumé', 'Capitaine Fumé', 'Mâchoiron Fumé', 'Bossu Fumé', 'Bar Fumé', 'Sole Fumée', 'Stockfish (Okporoko)', 'Silure Sec', 'Viande de Brousse', 'Poulet Fumé'],
    'Huiles': ['Huile de Palme Rouge', 'Huile d\'Arachide'],
    'Légumineuses': ['Arachides du Pays', 'Pâte d\'Arachide', 'Haricots Rouges', 'Haricots Noirs', 'Okpa (Bambara)', 'Soja Sec'],
    'Épices': ['Njansang', 'Mbongo Spice'],
    'Base': ['Garri (Jaune)', 'Ndolé Sec', 'Eru Sec', 'Egusi', 'Foufou Maïs', 'Farine de Plantain'],
    'Divers': ['Kanda Sec', 'Champignons Secs', 'Sel Traditionnel (Kanwa)']
};

export const BLOG_POSTS = [
    {
        id: '1',
        title: 'Top 5 des Semences pour 2025',
        excerpt: 'Découvrez les meilleures variétés pour un rendement optimal.',
        content: '',
        image: '/images/blog1.jpg',
        date: '15 Jan 2024',
        author: 'AgriDirect Team'
    }
];
