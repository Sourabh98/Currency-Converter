import React, { useEffect, useState, useTransition } from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import Error from './components/Error';

const API_ACCESS_KEY = "YOUR_API_ACCESS_KEY";
export const API_URL = `API_URL=${API_ACCESS_KEY}`;

const mockData = {
  "success": true,
  "timestamp": 1619432343,
  "base": "EUR",
  "date": "2022-08-28",
  "rates": {
    "AED": 4.442495,
    "AFN": 94.426168,
    "ALL": 123.104253,
    "AMD": 629.570319,
    "ANG": 2.162618,
    "AOA": 793.935502,
    "ARS": 112.644369,
    "AUD": 1.552089,
    "AWG": 2.177712,
    "AZN": 2.061886,
    "BAM": 1.955489,
    "BBD": 2.432628,
    "BDT": 102.108011,
    "BGN": 1.952906,
    "BHD": 0.455941,
    "BIF": 2348.024072,
    "BMD": 1.209504,
    "BND": 1.59905,
    "BOB": 8.32415,
    "BRL": 6.622404,
    "BSD": 1.204773,
    "BTC": 0.000022631153,
    "BTN": 90.274573,
    "BWP": 13.017875,
    "BYN": 3.083327,
    "BYR": 23706.28398,
    "BZD": 2.428531,
    "CAD": 1.505815,
    "CDF": 2415.380147,
    "CHF": 1.105142,
    "CLF": 0.031271,
    "CLP": 862.861952,
    "CNY": 7.843879,
    "COP": 4388.686297,
    "CRC": 740.331133,
    "CUC": 1.209504,
    "CUP": 32.051864,
    "CVE": 110.245793,
    "CZK": 25.7951,
    "DJF": 214.484954,
    "DKK": 7.436397,
    "DOP": 68.480455,
    "DZD": 160.785469,
    "EGP": 19.008931,
    "ERN": 18.144876,
    "ETB": 50.651595,
    "EUR": 1,
    "FJD": 2.446464,
    "FKP": 0.878554,
    "GBP": 0.869482,
    "GEL": 4.172609,
    "GGP": 0.878554,
    "GHS": 6.970986,
    "GIP": 0.878554,
    "GMD": 61.818517,
    "GNF": 11945.559728,
    "GTQ": 9.302479,
    "GYD": 252.116077,
    "HKD": 9.385693,
    "HNL": 28.965352,
    "HRK": 7.566896,
    "HTG": 101.563587,
    "HUF": 363.970129,
    "IDR": 17488.887679,
    "ILS": 3.92224,
    "IMP": 0.878554,
    "INR": 90.381115,
    "IQD": 1758.863577,
    "IRR": 50926.177842,
    "ISK": 151.2119,
    "JEP": 0.878554,
    "JMD": 183.170778,
    "JOD": 0.85749,
    "JPY": 130.319854,
    "KES": 130.809607,
    "KGS": 102.549037,
    "KHR": 4875.787606,
    "KMF": 493.90095,
    "KPW": 1088.554089,
    "KRW": 1342.47695,
    "KWD": 0.364073,
    "KYD": 1.004625,
    "KZT": 518.859606,
    "LAK": 11352.957747,
    "LBP": 1821.698201,
    "LKR": 234.337115,
    "LRD": 208.578729,
    "LSL": 17.29542,
    "LTL": 3.571352,
    "LVL": 0.731617,
    "LYD": 5.4001,
    "MAD": 10.738729,
    "MDL": 21.59636,
    "MGA": 4547.163356,
    "MKD": 61.425152,
    "MMK": 1876.473037,
    "MNT": 3447.876273,
    "MOP": 9.638321,
    "MRO": 431.792822,
    "MUR": 49.107992,
    "MVR": 18.686917,
    "MWK": 951.116251,
    "MXN": 23.966061,
    "MYR": 4.956553,
    "MZN": 67.296415,
    "NAD": 17.289774,
    "NGN": 460.518761,
    "NIO": 42.047123,
    "NOK": 10.041395,
    "NPR": 144.351131,
    "NZD": 1.674051,
    "OMR": 0.465672,
    "PAB": 1.20559,
    "PEN": 4.529111,
    "PGK": 4.250377,
    "PHP": 58.532739,
    "PKR": 185.087045,
    "PLN": 4.558987,
    "PYG": 7787.307655,
    "QAR": 4.403503,
    "RON": 4.923934,
    "RSD": 117.529524,
    "RUB": 90.670971,
    "RWF": 1205.472421,
    "SAR": 4.536041,
    "SBD": 9.652923,
    "SCR": 17.108939,
    "SDG": 461.428033,
    "SEK": 10.137907,
    "SGD": 1.603271,
    "SHP": 0.878554,
    "SLL": 12378.067172,
    "SOS": 706.35059,
    "SRD": 17.119371,
    "STD": 25071.981266,
    "SVC": 10.549162,
    "SYP": 1521.033169,
    "SZL": 17.199723,
    "THB": 38.002395,
    "TJS": 13.745405,
    "TMT": 4.233265,
    "TND": 3.31707,
    "TOP": 2.739886,
    "TRY": 10.09751,
    "TTD": 8.187274,
    "TWD": 33.70102,
    "TZS": 2804.840336,
    "UAH": 33.604863,
    "UGX": 4343.543284,
    "USD": 1.209504,
    "UYU": 53.277718,
    "UZS": 12705.656468,
    "VEF": 258628570109.6087,
    "VND": 27870.002479,
    "VUV": 132.487724,
    "WST": 3.062135,
    "XAF": 655.447213,
    "XAG": 0.046316,
    "XAU": 0.000679,
    "XCD": 3.268745,
    "XDR": 0.839647,
    "XOF": 655.452628,
    "XPF": 120.099172,
    "YER": 302.859145,
    "ZAR": 17.218383,
    "ZMK": 10886.98833,
    "ZMW": 26.819063,
    "ZWL": 389.460616
  }
};

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  
  const [data, loadData]=useState(mockData);
  const[error, setError]=useState();
  const [hasError, setHasError] = useState(false);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    // fetch(API_URL)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     loadData(data);
    //     const firstCurrency = Object.keys(data.rates)[0];
    //     setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
    //     setFromCurrency(data.base);
    //     setToCurrency(firstCurrency);
    //     setExchangeRate(data.rates[firstCurrency]);
    //   })
    // .catch(
    //   (error) => {
    //   setHasError(true);
    //   setError(error);
    //   }
    // )
    //mocking the data
    const firstCurrency = Object.keys(data.rates)[0];
    setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
    setFromCurrency(data.base);
    setToCurrency(firstCurrency);
    setExchangeRate(data.rates[firstCurrency]);
 }, []);

  useEffect(() => {
    // if (fromCurrency != null && toCurrency != null) {
    //   fetch(`${API_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
    //     .then((res) => res.json())
    //     .then((data) => setExchangeRate(data.rates[toCurrency])
    //     .catch(
      //   (error) => {
      //   setHasError(true);
      //   setError(error);
      //   });
    // }
    setExchangeRate(data.rates[toCurrency]);
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
   {hasError && <Error message={error.message || error.info} />}
      <h1 className="currency-converter">Currency Converter</h1>
      <CurrencyConverter
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className='equals'>=</div>
      <CurrencyConverter
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </>
  );
}

export default App;
