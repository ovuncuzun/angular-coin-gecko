export interface ICoins {
    data: ICoin[];
}

export interface ICoin {
    market_cap_rank: number;
    name: string;
    symbol: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
}

export interface ICoinDetail {
    name: string;
    symbol: string;
    hashing_algorithm: string;
    description: { en: string };
    market_data: { market_cap: { eur: number } };
    links: { [homepage: string]: string };
    genesis_date: string;
}