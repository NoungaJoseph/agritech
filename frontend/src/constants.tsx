import { Product } from './types';

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Combinaison Agricole Premium',
        sku: 'BOILER-001',
        price: 49.99,
        image: '/images/boilersuit-green.jpg',
        brand: 'AgriWear',
        rating: 4.7,
        reviewCount: 156,
        description: 'Combinaison verte robuste pour une protection optimale. Tissu respirant et résistant aux déchirures.',
        category: 'Vêtements',
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Vert', 'Bleu Marine']
    },
    {
        id: '2',
        name: 'Bottes de Sécurité Tout-Terrain',
        sku: 'BOOTS-002',
        price: 89.95,
        image: '/images/safety-boots.jpg',
        brand: 'FarmGuard',
        rating: 4.9,
        reviewCount: 210,
        description: 'Bottes imperméables avec semelle antidérapante et coque en acier. Confort garanti pour les longues journées.',
        category: 'Chaussures',
        inStock: true,
        sizes: ['40', '41', '42', '43', '44', '45', '46'],
        colors: ['Marron', 'Noir']
    },
    {
        id: '3',
        name: 'Fourche à Fumier Pro',
        sku: 'TOOL-003',
        price: 29.50,
        image: '/images/fork.jpg',
        brand: 'AgriTools',
        rating: 4.5,
        reviewCount: 45,
        description: 'Fourche en acier trempé à 4 dents. Manche ergonomique en bois verni.',
        category: 'Outils',
        inStock: true
    },
    {
        id: '4',
        name: 'Aliment Complet pour Bétail (25kg)',
        sku: 'FEED-004',
        price: 18.99,
        image: '/images/feed-bag.jpg',
        brand: 'NutriFarm',
        rating: 4.8,
        reviewCount: 312,
        description: 'Mélange équilibré pour la croissance et la santé de votre bétail. Riche en vitamines et minéraux.',
        category: 'Alimentation',
        inStock: true
    },
    {
        id: '5',
        name: 'Gants de Travail Résistants',
        sku: 'GLOVES-005',
        price: 12.50,
        image: '/images/gloves.jpg',
        brand: 'HandSafe',
        rating: 4.6,
        reviewCount: 89,
        description: 'Gants en cuir renforcé pour tous les travaux manuels. Protection contre les coupures et l\'abrasion.',
        category: 'Vêtements',
        inStock: true,
        sizes: ['M', 'L', 'XL']
    },
    {
        id: '6',
        name: 'Cisailles à Moutons Pro',
        sku: 'SHEARS-006',
        price: 34.99,
        image: '/images/shears.jpg',
        brand: 'ShearMaster',
        rating: 4.4,
        reviewCount: 67,
        description: 'Cisailles manuelles de haute précision pour la tonte des moutons. Lames en acier carbone.',
        category: 'Outils',
        inStock: true
    },
    {
        id: '7',
        name: 'Veste Imperméable de Ferme',
        sku: 'JACKET-007',
        price: 65.00,
        image: '/images/jacket.jpg',
        brand: 'RainDefend',
        rating: 4.7,
        reviewCount: 103,
        description: 'Veste longue 100% étanche. Idéale pour travailler sous la pluie. Capuche ajustable.',
        category: 'Vêtements',
        inStock: true,
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['Vert Olive', 'Jaune']
    },
    {
        id: '8',
        name: 'Casquette Agriculteur',
        sku: 'CAP-008',
        price: 15.00,
        image: '/images/cap.jpg',
        brand: 'FarmStyle',
        rating: 4.3,
        reviewCount: 22,
        description: 'Casquette confortable avec visière courbée pour vous protéger du soleil.',
        category: 'Vêtements',
        inStock: true,
        colors: ['Vert', 'Marron', 'Gris']
    }
];

export const CATEGORIES = [
    { id: 'vetements', name: 'Vêtements', image: '/images/category-clothing.jpg' },
    { id: 'chaussures', name: 'Chaussures', image: '/images/category-shoes.jpg' },
    { id: 'outils', name: 'Outils', image: '/images/category-tools.jpg' },
    { id: 'alimentation', name: 'Alimentation', image: '/images/category-feed.jpg' }
];

export const BRANDS = ['AgriWear', 'FarmGuard', 'AgriTools', 'NutriFarm', 'HandSafe', 'ShearMaster', 'RainDefend', 'FarmStyle'];
export const SIZES = ['S', 'M', 'L', 'XL', 'XXL', '40', '41', '42', '43', '44', '45', '46'];
export const COLORS = ['Vert', 'Bleu Marine', 'Marron', 'Noir', 'Gris', 'Jaune', 'Vert Olive'];

export const REVIEWS = [
    {
        id: '1',
        user: 'Jean Dupont',
        location: 'Bafoussam',
        rating: 5,
        comment: 'La combinaison est parfaite pour le travail aux champs. Très solide !',
        date: '12 Oct 2025'
    },
    {
        id: '2',
        user: 'Marie Nguea',
        location: 'Douala',
        rating: 5,
        comment: 'Livraison rapide de mes bottes de sécurité. Service impeccable.',
        date: '15 Nov 2025'
    },
    {
        id: '3',
        user: 'Paul T.',
        location: 'Yaoundé',
        rating: 4,
        comment: 'Bons outils, mais j\'aimerais plus de choix de pelles.',
        date: '20 Nov 2025'
    },
    {
        id: '4',
        user: 'Sarah K.',
        location: 'Bamenda',
        rating: 5,
        comment: 'Les aliments pour bétail sont de très bonne qualité.',
        date: '02 Déc 2025'
    }
];

export const NAV_CATEGORIES = ['Vêtements', 'Chaussures', 'Outils', 'Alimentation', 'Élevage', 'Offres Spéciales'];

export const MEGA_MENU_DATA: Record<string, string[]> = {
    'Vêtements': ['Combinaisons', 'Vestes', 'Gants', 'Casquettes', 'Pantalons de Travail'],
    'Chaussures': ['Bottes de Sécurité', 'Bottes en Caoutchouc', 'Chaussures de Randonnée', 'Accessoires'],
    'Outils': ['Fourches & Pelles', 'Sécateurs & Cisailles', 'Marteaux & Clés', 'Équipement de Pulvérisation'],
    'Alimentation': ['Bovins', 'Volailles', 'Porcs', 'Ovins', 'Compléments Minéraux'],
    'Élevage': ['Abreuvoirs', 'Mangeoires', 'Soins Vétérinaires', 'Identification'],
    'Offres Spéciales': ['Déstockage', 'Promotions Saisonnières', 'Lots en Gros']
};

export const BLOG_POSTS = [
    {
        id: '1',
        title: 'Comment choisir ses bottes de sécurité ?',
        excerpt: 'Guide complet pour trouver la paire parfaite pour votre exploitation agricole au Cameroun.',
        image: 'https://images.unsplash.com/photo-1542280756-74c2f2d3219f?auto=format&fit=crop&q=80',
        date: '10 Déc 2025',
        author: 'Jean-Pierre'
    },
    {
        id: '2',
        title: 'L\'importance d\'une bonne alimentation bétail',
        excerpt: 'Découvrez comment nos sacs de 25kg peuvent améliorer la santé de votre élevage.',
        image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80',
        date: '05 Déc 2025',
        author: 'Dr. Amina'
    },
    {
        id: '3',
        title: 'Nouveaux outils pour la saison des pluies',
        excerpt: 'Préparez-vous avec notre sélection de vestes imperméables et d\'outils résistants.',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80',
        date: '28 Nov 2025',
        author: 'Marc'
    },
    {
        id: '4',
        title: 'Témoignage : Succès avec Agri-Direct',
        excerpt: 'Interview exclusive avec M. Kamga, agriculteur à l\'Ouest, sur son expérience.',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80',
        date: '20 Nov 2025',
        author: 'Sarah'
    }
];

