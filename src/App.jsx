import { useEffect, useState } from 'react';
import './App.css'
import Card from './Components/Card';
import Home from './Components/Home';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';

const response = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 66989,
    market_cap: 1319756359889,
    market_cap_rank: 1,
    fully_diluted_valuation: 1409695396056,
    total_volume: 58046014897,
    high_24h: 68120,
    low_24h: 61732,
    price_change_24h: 5147.24,
    price_change_percentage_24h: 8.32318,
    market_cap_change_24h: 107036041367,
    market_cap_change_percentage_24h: 8.82611,
    circulating_supply: 19660193.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 73738,
    ath_change_percentage: -8.96361,
    ath_date: "2024-03-14T07:10:36.635Z",
    atl: 67.81,
    atl_change_percentage: 98896.22792,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-21T06:26:14.703Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 3513.87,
    market_cap: 422493520510,
    market_cap_rank: 2,
    fully_diluted_valuation: 422493520510,
    total_volume: 38256548979,
    high_24h: 3551.57,
    low_24h: 3134.27,
    price_change_24h: 378.94,
    price_change_percentage_24h: 12.0877,
    market_cap_change_24h: 46974871329,
    market_cap_change_percentage_24h: 12.50933,
    circulating_supply: 120074313.051938,
    total_supply: 120074313.051938,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -27.81777,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 813158.47503,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 69.13659738190806,
      currency: "btc",
      percentage: 6913.659738190805,
    },
    last_updated: "2024-03-21T06:26:42.440Z",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 0.998475,
    market_cap: 103895700340,
    market_cap_rank: 3,
    fully_diluted_valuation: 103895700340,
    total_volume: 93758819771,
    high_24h: 1.008,
    low_24h: 0.989403,
    price_change_24h: -0.000960371629455836,
    price_change_percentage_24h: -0.09609,
    market_cap_change_24h: 232280652,
    market_cap_change_percentage_24h: 0.22407,
    circulating_supply: 103904029582.796,
    total_supply: 103904029582.796,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.42571,
    ath_date: "2018-07-24T00:00:00.000Z",
    atl: 0.572521,
    atl_change_percentage: 74.65208,
    atl_date: "2015-03-02T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-21T06:25:24.886Z",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 550.69,
    market_cap: 85139063371,
    market_cap_rank: 4,
    fully_diluted_valuation: 85139063371,
    total_volume: 3368595035,
    high_24h: 561.33,
    low_24h: 504.51,
    price_change_24h: 36.61,
    price_change_percentage_24h: 7.12147,
    market_cap_change_24h: 6696630600,
    market_cap_change_percentage_24h: 8.537,
    circulating_supply: 153856150.0,
    total_supply: 153856150.0,
    max_supply: 200000000.0,
    ath: 686.31,
    ath_change_percentage: -19.37015,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 0.0398177,
    atl_change_percentage: 1389653.79269,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-21T06:26:49.353Z",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 189.99,
    market_cap: 84490953306,
    market_cap_rank: 5,
    fully_diluted_valuation: 108911371775,
    total_volume: 8793796259,
    high_24h: 193.7,
    low_24h: 166.97,
    price_change_24h: 22.23,
    price_change_percentage_24h: 13.25004,
    market_cap_change_24h: 10227431607,
    market_cap_change_percentage_24h: 13.77181,
    circulating_supply: 443968154.987338,
    total_supply: 572288261.546625,
    max_supply: null,
    ath: 259.96,
    ath_change_percentage: -26.75674,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 0.500801,
    atl_change_percentage: 37919.60567,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2024-03-21T06:26:41.850Z",
  },
  {
    id: "staked-ether",
    symbol: "steth",
    name: "Lido Staked Ether",
    image:
      "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    current_price: 3510.18,
    market_cap: 34370923786,
    market_cap_rank: 6,
    fully_diluted_valuation: 34370923786,
    total_volume: 134442722,
    high_24h: 3546.92,
    low_24h: 3134.72,
    price_change_24h: 375.45,
    price_change_percentage_24h: 11.97716,
    market_cap_change_24h: 3778699316,
    market_cap_change_percentage_24h: 12.35183,
    circulating_supply: 9792313.04091682,
    total_supply: 9792313.04091682,
    max_supply: null,
    ath: 4829.57,
    ath_change_percentage: -27.24605,
    ath_date: "2021-11-10T14:40:47.256Z",
    atl: 482.9,
    atl_change_percentage: 627.63114,
    atl_date: "2020-12-22T04:08:21.854Z",
    roi: null,
    last_updated: "2024-03-21T06:26:57.892Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 0.605603,
    market_cap: 33273312535,
    market_cap_rank: 7,
    fully_diluted_valuation: 60617108890,
    total_volume: 2438359316,
    high_24h: 0.62012,
    low_24h: 0.56999,
    price_change_24h: 0.02251523,
    price_change_percentage_24h: 3.86138,
    market_cap_change_24h: 1395582604,
    market_cap_change_percentage_24h: 4.37792,
    circulating_supply: 54884241878.0,
    total_supply: 99987762348.0,
    max_supply: 100000000000.0,
    ath: 3.4,
    ath_change_percentage: -82.14222,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 22492.74282,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-21T06:26:29.905Z",
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    current_price: 0.997512,
    market_cap: 31372261038,
    market_cap_rank: 8,
    fully_diluted_valuation: 31516339750,
    total_volume: 12980715108,
    high_24h: 1.011,
    low_24h: 0.990233,
    price_change_24h: -0.003092397793940771,
    price_change_percentage_24h: -0.30905,
    market_cap_change_24h: 130258154,
    market_cap_change_percentage_24h: 0.41693,
    circulating_supply: 31413118125.1378,
    total_supply: 31557384475.6833,
    max_supply: null,
    ath: 1.17,
    ath_change_percentage: -14.85748,
    ath_date: "2019-05-08T00:40:28.300Z",
    atl: 0.877647,
    atl_change_percentage: 13.76692,
    atl_date: "2023-03-11T08:02:13.981Z",
    roi: null,
    last_updated: "2024-03-21T06:26:20.750Z",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    current_price: 0.632107,
    market_cap: 22336025111,
    market_cap_rank: 9,
    fully_diluted_valuation: 28516863662,
    total_volume: 873326471,
    high_24h: 0.646248,
    low_24h: 0.579788,
    price_change_24h: 0.04283483,
    price_change_percentage_24h: 7.26911,
    market_cap_change_24h: 1780916058,
    market_cap_change_percentage_24h: 8.6641,
    circulating_supply: 35246552423.2316,
    total_supply: 45000000000.0,
    max_supply: 45000000000.0,
    ath: 3.09,
    ath_change_percentage: -79.47113,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 0.01925275,
    atl_change_percentage: 3191.52034,
    atl_date: "2020-03-13T02:22:55.044Z",
    roi: null,
    last_updated: "2024-03-21T06:26:45.772Z",
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    current_price: 0.15027,
    market_cap: 21602319997,
    market_cap_rank: 10,
    fully_diluted_valuation: 21604527796,
    total_volume: 3557190445,
    high_24h: 0.152704,
    low_24h: 0.126161,
    price_change_24h: 0.02406428,
    price_change_percentage_24h: 19.06755,
    market_cap_change_24h: 3654867478,
    market_cap_change_percentage_24h: 20.36427,
    circulating_supply: 143539316383.705,
    total_supply: 143553986383.705,
    max_supply: null,
    ath: 0.731578,
    ath_change_percentage: -79.42836,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 8.69e-5,
    atl_change_percentage: 173077.30147,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-21T06:26:35.876Z",
  },
];

function App() {

  const [data, setData] = useState([]);
  const [positive, setPositive] = useState(true);

  const sortPositive = (a, b) => {
    return a.price_change_percentage_24h - b.price_change_percentage_24h;
  }
  const sortNegative = (a, b) => {
    return b.price_change_percentage_24h - a.price_change_percentage_24h;
  };

  const [isHome, setIsHome] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage&per_page=10&page=1'

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })

  }

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage&per_page=10&page=1";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  },[])

  if (isHome) {
    return (
      <>
        <Home isHome={isHome} setIsHome={setIsHome} />
      </>
    )
  } else {
    return (
      <>
        <Navbar handleSubmit={handleSubmit} />
        <Filter positive={positive} setPositive={setPositive} />
        {(positive) ? data
          .filter((coin) => coin.price_change_percentage_24h > 0)
          .sort(sortNegative)
          .map((coin) => {
            return <Card key={coin.id} coin={coin} />;
          }):
          data
          .filter((coin) => coin.price_change_percentage_24h < 0)
          .sort(sortPositive)
          .map((coin) => {
            return <Card key={coin.id} coin={coin} />;
          })
        }
      </>
    );
  }
}

export default App
