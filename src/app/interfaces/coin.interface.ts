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
    description: { [en: string]: any };
    market_data: { [market_cap: string]: any };
    links: { [homepage: string]: any };
    genesis_date: string;
}