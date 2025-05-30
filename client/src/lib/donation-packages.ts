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
    id: 'bever',
    name: 'BEVER',
    description: 'Премиальный пакет с максимальными привилегиями',
    iconType: 'gold',
    pricing: [
      { period: 'Навсегда', price: '1600 руб' },
      { period: 'На год', price: '1200 руб' },
      { period: 'На 3 месяца', price: '800 руб' }
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
    id: 'river',
    name: 'RIVER',
    description: 'Базовый пакет для начинающих игроков',
    iconType: 'green',
    pricing: [
      { period: 'Навсегда', price: '600 руб' },
      { period: 'На год', price: '400 руб' },
      { period: 'На 3 месяца', price: '250 руб' }
    ]
  }
];
