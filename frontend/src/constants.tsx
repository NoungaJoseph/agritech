import { Product } from './types';

export const PRODUCTS: Product[] = [
    // Proteins
    {
        id: 'f1',
        name: 'Crayfish Séché (Njanga)',
        sku: 'PROT-001',
        price: 5000,
        image: '/images/njanga.jpg',
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
        image: '/images/smoked-fish.jpg',
        brand: 'Mama Africa',
        rating: 4.7,
        reviewCount: 85,
        description: 'Variété de poissons de rivière fumés au bois traditionnel. Goût fumé authentique.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['500g', '1kg']
    },
    {
        id: 'f3',
        name: 'Stockfish (Okporoko)',
        sku: 'PROT-003',
        price: 12000,
        image: '/images/stockfish.jpg',
        brand: 'Tradition Plus',
        rating: 4.9,
        reviewCount: 45,
        description: 'Morue séchée de première qualité. Incontournable pour vos plats traditionnels.',
        category: 'Produits Halieutiques & Protéines',
        inStock: true,
        sizes: ['1kg']
    },
    // Oils
    {
        id: 'o1',
        name: 'Huile de Palme Rouge Premium',
        sku: 'OIL-001',
        price: 2500,
        image: '/images/palm-oil.jpg',
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
        image: '/images/groundnut-oil.jpg',
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
        image: '/images/groundnut.jpg',
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
    // Spices
    {
        id: 's1',
        name: 'Njansang (Épice Pays)',
        sku: 'SPI-001',
        price: 3000,
        image: '/images/njansang.jpg',
        brand: 'Tradition Plus',
        rating: 4.9,
        reviewCount: 180,
        description: 'Graines de Njansang séchées, essentielles pour épaissir et aromatiser vos sauces.',
        category: 'Épices & Condiments Traditionnels',
        inStock: true,
        sizes: ['250g', '500g']
    },
    {
        id: 's2',
        name: 'Mix Épices Mbongo',
        sku: 'SPI-002',
        price: 1200,
        image: '/images/mbongo-spice.jpg',
        brand: 'Tradition Plus',
        rating: 4.7,
        reviewCount: 65,
        description: 'Mélange traditionnel brûlé pour la sauce noire Mbongo Tchobi.',
        category: 'Épices & Condiments Traditionnels',
        inStock: true,
        sizes: ['100g', '250g']
    },
    // Staples
    {
        id: 'st1',
        name: 'Garri Jaune de Qualité',
        sku: 'STA-001',
        price: 2200,
        image: '/images/garri-yellow.jpg',
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
        image: '/images/ndole-dry.jpg',
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
        image: '/images/eru-dry.jpg',
        brand: 'AgriDirect Select',
        rating: 4.9,
        reviewCount: 210,
        description: 'Lianes d\'Eru (Okok) finement hachées et séchées. Idéal pour le Eru & Waterfufu.',
        category: 'Produits de Base & Accompagnements',
        inStock: true,
        sizes: ['250g', '500g']
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
    'Protéines Sechées': ['Njanga (Crayfish)', 'Poisson Fumé', 'Stockfish (Okporoko)', 'Silure Sec', 'Viande de Brousse', 'Poulet & Boeuf Fumé'],
    'Huiles': ['Huile de Palme Rouge', 'Huile de Palmiste', 'Huile d\'Arachide', 'Beurre de Karité'],
    'Légumineuses': ['Arachides du Pays', 'Haricots Noir', 'Okpa (Bambara)', 'Soja Sec'],
    'Épices': ['Njansang', 'Mbongo Spice', 'Piment Sec', 'Poivre Blanc/Noir', 'Gingembre & Ail'],
    'Base': ['Garri (Jaune/Blanc)', 'Foufou Maïs', 'Farine de Plantain', 'Egusi', 'Ndolé Sec', 'Eru Sec'],
    'Divers': ['Noix de Palme', 'Kanda Sec', 'Champignons Secs', 'Sel Traditionnel (Kanwa)']
};

export const BLOG_POSTS = [
    {
        id: '1',
        title: 'Top 5 des Semences pour 2025',
        excerpt: 'Découvrez les variétés de maïs et de soja les plus résistantes pour la prochaine saison au Cameroun.',
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
        date: '10 Jan 2025',
        author: 'Dr. Samuel Njoh'
    },
    {
        id: '2',
        title: 'Moderniser son Système d\'Irrigation',
        excerpt: 'Comment passer à l\'irrigation goutte-à-goutte avec un petit budget.',
        image: 'https://images.unsplash.com/photo-1463123010508-f4e11651ea61?auto=format&fit=crop&q=80&w=800',
        date: '15 Jan 2025',
        author: 'Alain Fogue'
    }
];
