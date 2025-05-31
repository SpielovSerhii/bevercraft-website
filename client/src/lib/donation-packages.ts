export interface PricingOption {
  period: string;
  price: string;
}

export interface DonationPackage {
  id: string;
  name: string;
  description: string;
  iconType: 'gold' | 'purple' | 'blue' | 'green';
  pricing: PricingOption[];
}

export const donationPackages: DonationPackage[] = [
  {
    id: 'snape',
    name: 'SNAPE',
    description: 'Начальный пакет с базовыми возможностями',
    iconType: 'green',
    pricing: [
      { period: 'Навсегда', price: '200 руб' },
      { period: 'На год', price: '100 руб' },
      { period: 'На 3 месяца', price: '50 руб' }
    ]
  },
  {
    id: 'abyss',
    name: 'ABYSS',
    description: 'Улучшенный пакет для активных игроков',
    iconType: 'blue',
    pricing: [
      { period: 'Навсегда', price: '400 руб' },
      { period: 'На год', price: '250 руб' },
      { period: 'На 3 месяца', price: '150 руб' }
    ]
  },
  {
    id: 'ghost',
    name: 'GHOST',
    description: 'Продвинутый пакет с дополнительными функциями',
    iconType: 'purple',
    pricing: [
      { period: 'Навсегда', price: '500 руб' },
      { period: 'На год', price: '300 руб' },
      { period: 'На 3 месяца', price: '200 руб' }
    ]
  },
  {
    id: 'river',
    name: 'RIVER',
    description: 'Базовый пакет для начинающих игроков',
    iconType: 'green',
    pricing: [
      { period: 'Навсегда', price: '600 руб' },
      { period: 'На год', price: '400 руб' },
      { period: 'На 3 месяца', price: '250 руб' }
    ]
  },
  {
    id: 'seraphim',
    name: 'SERAPHIM',
    description: 'Расширенные привилегии для комфортной игры',
    iconType: 'blue',
    pricing: [
      { period: 'Навсегда', price: '1000 руб' },
      { period: 'На год', price: '750 руб' },
      { period: 'На 3 месяца', price: '500 руб' }
    ]
  },
  {
    id: 'anzara',
    name: 'ANZARA',
    description: 'Продвинутые возможности и уникальные предметы',
    iconType: 'purple',
    pricing: [
      { period: 'Навсегда', price: '1250 руб' },
      { period: 'На год', price: '950 руб' },
      { period: 'На 3 месяца', price: '700 руб' }
    ]
  },
  {
    id: 'bever',
    name: 'BEVER',
    description: 'Премиальный пакет с максимальными привилегиями',
    iconType: 'gold',
    pricing: [
      { period: 'Навсегда', price: '1600 руб' },
      { period: 'На год', price: '1200 руб' },
      { period: 'На 3 месяца', price: '800 руб' }
    ]
  }
];
