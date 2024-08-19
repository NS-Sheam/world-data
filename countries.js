const countries = [
  {
    code: "+1 242",
    name: "Bahamas",
    suffix: "BS",
    currency: "BSD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/BS/flat/64.png",
  },
  {
    code: "+1 246",
    name: "Barbados",
    suffix: "BB",
    currency: "BBD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/BB/flat/64.png",
  },
  {
    code: "+1 264",
    name: "Anguilla",
    suffix: "AI",
    currency: "XCD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/AI/flat/64.png",
  },
  {
    code: "+1 268",
    name: "Antigua and Barbuda",
    suffix: "AG",
    currency: "XCD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/AG/flat/64.png",
  },
  {
    code: "+1 284",
    name: "British Virgin Islands",
    suffix: "VG",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/VG/flat/64.png",
  },
  {
    code: "+1 340",
    name: "United States Virgin Islands",
    suffix: "VI",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/VI/flat/64.png",
  },
  {
    code: "+1 345",
    name: "Cayman Islands",
    suffix: "KY",
    currency: "KYD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/KY/flat/64.png",
  },
  {
    code: "+1 649",
    name: "Turks and Caicos Islands",
    suffix: "TC",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/TC/flat/64.png",
  },
  {
    code: "+1 758",
    name: "Saint Lucia",
    suffix: "LC",
    currency: "XCD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/LC/flat/64.png",
  },
  {
    code: "+1 767",
    name: "Dominica",
    suffix: "DM",
    currency: "XCD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/DM/flat/64.png",
  },
  {
    code: "+1 784",
    name: "Saint Vincent and the Grenadines",
    suffix: "VC",
    currency: "XCD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/VC/flat/64.png",
  },
  {
    code: "+1 868",
    name: "Trinidad and Tobago",
    suffix: "TT",
    currency: "TTD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/TT/flat/64.png",
  },
  {
    code: "+1 876",
    name: "Jamaica",
    suffix: "JM",
    currency: "JMD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/JM/flat/64.png",
  },
  {
    code: "+20",
    name: "Egypt",
    suffix: "EG",
    currency: "EGP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/EG/flat/64.png",
  },
  {
    code: "+211",
    name: "South Sudan",
    suffix: "SS",
    currency: "SSP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/SS/flat/64.png",
  },
  {
    code: "+212",
    name: "Morocco",
    suffix: "MA",
    currency: "MAD",
    currencySymbol: "د.م.",
    flag: "https://flagsapi.com/MA/flat/64.png",
  },
  {
    code: "+213",
    name: "Algeria",
    suffix: "DZ",
    currency: "DZD",
    currencySymbol: "د.ج.",
    flag: "https://flagsapi.com/DZ/flat/64.png",
  },
  {
    code: "+216",
    name: "Tunisia",
    suffix: "TN",
    currency: "TND",
    currencySymbol: "د.ت.",
    flag: "https://flagsapi.com/TN/flat/64.png",
  },
  {
    code: "+218",
    name: "Libya",
    suffix: "LY",
    currency: "LYD",
    currencySymbol: "ل.د.",
    flag: "https://flagsapi.com/LY/flat/64.png",
  },
  {
    code: "+220",
    name: "Gambia",
    suffix: "GM",
    currency: "GMD",
    currencySymbol: "D",
    flag: "https://flagsapi.com/GM/flat/64.png",
  },
  {
    code: "+221",
    name: "Senegal",
    suffix: "SN",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/SN/flat/64.png",
  },
  {
    code: "+222",
    name: "Mauritania",
    suffix: "MR",
    currency: "MRU",
    currencySymbol: "UM",
    flag: "https://flagsapi.com/MR/flat/64.png",
  },
  {
    code: "+223",
    name: "Mali",
    suffix: "ML",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/ML/flat/64.png",
  },
  {
    code: "+224",
    name: "Guinea",
    suffix: "GN",
    currency: "GNF",
    currencySymbol: "FG",
    flag: "https://flagsapi.com/GN/flat/64.png",
  },
  {
    code: "+225",
    name: "Ivory Coast",
    suffix: "CI",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/CI/flat/64.png",
  },
  {
    code: "+226",
    name: "Burkina Faso",
    suffix: "BF",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/BF/flat/64.png",
  },
  {
    code: "+227",
    name: "Niger",
    suffix: "NE",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/NE/flat/64.png",
  },
  {
    code: "+228",
    name: "Togo",
    suffix: "TG",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/TG/flat/64.png",
  },
  {
    code: "+229",
    name: "Benin",
    suffix: "BJ",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/BJ/flat/64.png",
  },
  {
    code: "+230",
    name: "Mauritius",
    suffix: "MU",
    currency: "MUR",
    currencySymbol: "₨",
    flag: "https://flagsapi.com/MU/flat/64.png",
  },
  {
    code: "+231",
    name: "Liberia",
    suffix: "LR",
    currency: "LRD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/LR/flat/64.png",
  },
  {
    code: "+232",
    name: "Sierra Leone",
    suffix: "SL",
    currency: "SLL",
    currencySymbol: "Le",
    flag: "https://flagsapi.com/SL/flat/64.png",
  },
  {
    code: "+233",
    name: "Ghana",
    suffix: "GH",
    currency: "GHS",
    currencySymbol: "₵",
    flag: "https://flagsapi.com/GH/flat/64.png",
  },
  {
    code: "+234",
    name: "Nigeria",
    suffix: "NG",
    currency: "NGN",
    currencySymbol: "₦",
    flag: "https://flagsapi.com/NG/flat/64.png",
  },
  {
    code: "+235",
    name: "Chad",
    suffix: "TD",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/TD/flat/64.png",
  },
  {
    code: "+236",
    name: "Central African Republic",
    suffix: "CF",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/CF/flat/64.png",
  },
  {
    code: "+237",
    name: "Cameroon",
    suffix: "CM",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/CM/flat/64.png",
  },
  {
    code: "+238",
    name: "Cape Verde",
    suffix: "CV",
    currency: "CVE",
    currencySymbol: "$",
    flag: "https://flagsapi.com/CV/flat/64.png",
  },
  {
    code: "+239",
    name: "São Tomé and Príncipe",
    suffix: "ST",
    currency: "STN",
    currencySymbol: "Db",
    flag: "https://flagsapi.com/ST/flat/64.png",
  },
  {
    code: "+240",
    name: "Equatorial Guinea",
    suffix: "GQ",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/GQ/flat/64.png",
  },
  {
    code: "+241",
    name: "Gabon",
    suffix: "GA",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/GA/flat/64.png",
  },
  {
    code: "+242",
    name: "Republic of the Congo",
    suffix: "CG",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/CG/flat/64.png",
  },
  {
    code: "+243",
    name: "Democratic Republic of the Congo",
    suffix: "CD",
    currency: "CDF",
    currencySymbol: "FC",
    flag: "https://flagsapi.com/CD/flat/64.png",
  },
  {
    code: "+244",
    name: "Angola",
    suffix: "AO",
    currency: "AOA",
    currencySymbol: "Kz",
    flag: "https://flagsapi.com/AO/flat/64.png",
  },
  {
    code: "+245",
    name: "Guinea-Bissau",
    suffix: "GW",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/GW/flat/64.png",
  },
  {
    code: "+246",
    name: "British Indian Ocean Territory",
    suffix: "IO",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/IO/flat/64.png",
  },
  {
    code: "+247",
    name: "Ascension Island",
    suffix: "AC",
    currency: "SHP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/AC/flat/64.png",
  },
  {
    code: "+248",
    name: "Seychelles",
    suffix: "SC",
    currency: "SCR",
    currencySymbol: "₨",
    flag: "https://flagsapi.com/SC/flat/64.png",
  },
  {
    code: "+249",
    name: "Sudan",
    suffix: "SD",
    currency: "SDG",
    currencySymbol: "ج.س.",
    flag: "https://flagsapi.com/SD/flat/64.png",
  },
  {
    code: "+250",
    name: "Rwanda",
    suffix: "RW",
    currency: "RWF",
    currencySymbol: "R₣",
    flag: "https://flagsapi.com/RW/flat/64.png",
  },
  {
    code: "+251",
    name: "Ethiopia",
    suffix: "ET",
    currency: "ETB",
    currencySymbol: "ትብ",
    flag: "https://flagsapi.com/ET/flat/64.png",
  },
  {
    code: "+252",
    name: "Somalia",
    suffix: "SO",
    currency: "SOS",
    currencySymbol: "Sh",
    flag: "https://flagsapi.com/SO/flat/64.png",
  },
  {
    code: "+253",
    name: "Djibouti",
    suffix: "DJ",
    currency: "DJF",
    currencySymbol: "Fdj",
    flag: "https://flagsapi.com/DJ/flat/64.png",
  },
  {
    code: "+254",
    name: "Kenya",
    suffix: "KE",
    currency: "KES",
    currencySymbol: "KSh",
    flag: "https://flagsapi.com/KE/flat/64.png",
  },
  {
    code: "+255",
    name: "Tanzania",
    suffix: "TZ",
    currency: "TZS",
    currencySymbol: "TSh",
    flag: "https://flagsapi.com/TZ/flat/64.png",
  },
  {
    code: "+256",
    name: "Uganda",
    suffix: "UG",
    currency: "UGX",
    currencySymbol: "USh",
    flag: "https://flagsapi.com/UG/flat/64.png",
  },
  {
    code: "+257",
    name: "Burundi",
    suffix: "BI",
    currency: "BIF",
    currencySymbol: "₣",
    flag: "https://flagsapi.com/BI/flat/64.png",
  },
  {
    code: "+258",
    name: "Mozambique",
    suffix: "MZ",
    currency: "MZN",
    currencySymbol: "MT",
    flag: "https://flagsapi.com/MZ/flat/64.png",
  },
  {
    code: "+260",
    name: "Zambia",
    suffix: "ZM",
    currency: "ZMW",
    currencySymbol: "ZK",
    flag: "https://flagsapi.com/ZM/flat/64.png",
  },
  {
    code: "+261",
    name: "Madagascar",
    suffix: "MG",
    currency: "MGA",
    currencySymbol: "Ar",
    flag: "https://flagsapi.com/MG/flat/64.png",
  },
  {
    code: "+262",
    name: "Réunion",
    suffix: "RE",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/RE/flat/64.png",
  },
  {
    code: "+263",
    name: "Zimbabwe",
    suffix: "ZW",
    currency: "ZWL",
    currencySymbol: "Z$",
    flag: "https://flagsapi.com/ZW/flat/64.png",
  },
  {
    code: "+264",
    name: "Namibia",
    suffix: "NA",
    currency: "NAD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/NA/flat/64.png",
  },
  {
    code: "+265",
    name: "Malawi",
    suffix: "MW",
    currency: "MWK",
    currencySymbol: "MK",
    flag: "https://flagsapi.com/MW/flat/64.png",
  },
  {
    code: "+266",
    name: "Lesotho",
    suffix: "LS",
    currency: "LSL",
    currencySymbol: "L",
    flag: "https://flagsapi.com/LS/flat/64.png",
  },
  {
    code: "+267",
    name: "Botswana",
    suffix: "BW",
    currency: "BWP",
    currencySymbol: "P",
    flag: "https://flagsapi.com/BW/flat/64.png",
  },
  {
    code: "+268",
    name: "Eswatini",
    suffix: "SZ",
    currency: "SZL",
    currencySymbol: "E",
    flag: "https://flagsapi.com/SZ/flat/64.png",
  },
  {
    code: "+269",
    name: "Comoros",
    suffix: "KM",
    currency: "KMF",
    currencySymbol: "CF",
    flag: "https://flagsapi.com/KM/flat/64.png",
  },
  {
    code: "+27",
    name: "South Africa",
    suffix: "ZA",
    currency: "ZAR",
    currencySymbol: "R",
    flag: "https://flagsapi.com/ZA/flat/64.png",
  },
  {
    code: "+28",
    name: "Not Assigned",
    suffix: "NA",
    currency: "N/A",
    currencySymbol: "N/A",
    flag: "https://flagsapi.com/NA/flat/64.png",
  },
  {
    code: "+1",
    name: "United States",
    suffix: "US",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/US/flat/64.png",
  },
  {
    code: "+1 242",
    name: "Bahamas",
    suffix: "BS",
    currency: "BSD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/BS/flat/64.png",
  },
  {
    code: "+1 246",
    name: "Barbados",
    suffix: "BB",
    currency: "BBD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/BB/flat/64.png",
  },
  {
    code: "+1 264",
    name: "Anguilla",
    suffix: "AI",
    currency: "XCD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/AI/flat/64.png",
  },
  {
    code: "+1 268",
    name: "Antigua and Barbuda",
    suffix: "AG",
    currency: "XCD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/AG/flat/64.png",
  },
  {
    code: "+1 284",
    name: "British Virgin Islands",
    suffix: "VG",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/VG/flat/64.png",
  },
  {
    code: "+1 340",
    name: "United States Virgin Islands",
    suffix: "VI",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/VI/flat/64.png",
  },
  {
    code: "+20",
    name: "Egypt",
    suffix: "EG",
    currency: "EGP",
    currencySymbol: "ج.م.",
    flag: "https://flagsapi.com/EG/flat/64.png",
  },
  {
    code: "+211",
    name: "South Sudan",
    suffix: "SS",
    currency: "SSP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/SS/flat/64.png",
  },
  {
    code: "+212",
    name: "Morocco",
    suffix: "MA",
    currency: "MAD",
    currencySymbol: "د.م.",
    flag: "https://flagsapi.com/MA/flat/64.png",
  },
  {
    code: "+213",
    name: "Algeria",
    suffix: "DZ",
    currency: "DZD",
    currencySymbol: "د.ج.",
    flag: "https://flagsapi.com/DZ/flat/64.png",
  },
  {
    code: "+216",
    name: "Tunisia",
    suffix: "TN",
    currency: "TND",
    currencySymbol: "د.ت.",
    flag: "https://flagsapi.com/TN/flat/64.png",
  },
  {
    code: "+218",
    name: "Libya",
    suffix: "LY",
    currency: "LYD",
    currencySymbol: "د.ل.",
    flag: "https://flagsapi.com/LY/flat/64.png",
  },
  {
    code: "+220",
    name: "Gambia",
    suffix: "GM",
    currency: "GMD",
    currencySymbol: "D",
    flag: "https://flagsapi.com/GM/flat/64.png",
  },
  {
    code: "+221",
    name: "Senegal",
    suffix: "SN",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/SN/flat/64.png",
  },
  {
    code: "+222",
    name: "Mauritania",
    suffix: "MR",
    currency: "MRU",
    currencySymbol: "UM",
    flag: "https://flagsapi.com/MR/flat/64.png",
  },
  {
    code: "+223",
    name: "Mali",
    suffix: "ML",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/ML/flat/64.png",
  },
  {
    code: "+224",
    name: "Guinea",
    suffix: "GN",
    currency: "GNF",
    currencySymbol: "FG",
    flag: "https://flagsapi.com/GN/flat/64.png",
  },
  {
    code: "+225",
    name: "Ivory Coast",
    suffix: "CI",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/CI/flat/64.png",
  },
  {
    code: "+226",
    name: "Burkina Faso",
    suffix: "BF",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/BF/flat/64.png",
  },
  {
    code: "+227",
    name: "Niger",
    suffix: "NE",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/NE/flat/64.png",
  },
  {
    code: "+228",
    name: "Togo",
    suffix: "TG",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/TG/flat/64.png",
  },
  {
    code: "+229",
    name: "Benin",
    suffix: "BJ",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/BJ/flat/64.png",
  },
  {
    code: "+230",
    name: "Mauritius",
    suffix: "MU",
    currency: "MUR",
    currencySymbol: "₨",
    flag: "https://flagsapi.com/MU/flat/64.png",
  },
  {
    code: "+231",
    name: "Liberia",
    suffix: "LR",
    currency: "LRD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/LR/flat/64.png",
  },
  {
    code: "+232",
    name: "Sierra Leone",
    suffix: "SL",
    currency: "SLL",
    currencySymbol: "Le",
    flag: "https://flagsapi.com/SL/flat/64.png",
  },
  {
    code: "+233",
    name: "Ghana",
    suffix: "GH",
    currency: "GHS",
    currencySymbol: "₵",
    flag: "https://flagsapi.com/GH/flat/64.png",
  },
  {
    code: "+234",
    name: "Nigeria",
    suffix: "NG",
    currency: "NGN",
    currencySymbol: "₦",
    flag: "https://flagsapi.com/NG/flat/64.png",
  },
  {
    code: "+235",
    name: "Chad",
    suffix: "TD",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/TD/flat/64.png",
  },
  {
    code: "+236",
    name: "Central African Republic",
    suffix: "CF",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/CF/flat/64.png",
  },
  {
    code: "+237",
    name: "Cameroon",
    suffix: "CM",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/CM/flat/64.png",
  },
  {
    code: "+238",
    name: "Cape Verde",
    suffix: "CV",
    currency: "CVE",
    currencySymbol: "$",
    flag: "https://flagsapi.com/CV/flat/64.png",
  },
  {
    code: "+239",
    name: "São Tomé and Príncipe",
    suffix: "ST",
    currency: "STN",
    currencySymbol: "Db",
    flag: "https://flagsapi.com/ST/flat/64.png",
  },
  {
    code: "+240",
    name: "Equatorial Guinea",
    suffix: "GQ",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/GQ/flat/64.png",
  },
  {
    code: "+241",
    name: "Gabon",
    suffix: "GA",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/GA/flat/64.png",
  },
  {
    code: "+242",
    name: "Republic of the Congo",
    suffix: "CG",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/CG/flat/64.png",
  },
  {
    code: "+243",
    name: "Democratic Republic of the Congo",
    suffix: "CD",
    currency: "CDF",
    currencySymbol: "FC",
    flag: "https://flagsapi.com/CD/flat/64.png",
  },
  {
    code: "+244",
    name: "Angola",
    suffix: "AO",
    currency: "AOA",
    currencySymbol: "Kz",
    flag: "https://flagsapi.com/AO/flat/64.png",
  },
  {
    code: "+245",
    name: "Guinea-Bissau",
    suffix: "GW",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/GW/flat/64.png",
  },
  {
    code: "+246",
    name: "British Indian Ocean Territory",
    suffix: "IO",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/IO/flat/64.png",
  },
  {
    code: "+247",
    name: "Ascension Island",
    suffix: "AC",
    currency: "SHP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/AC/flat/64.png",
  },
  {
    code: "+248",
    name: "Seychelles",
    suffix: "SC",
    currency: "SCR",
    currencySymbol: "₨",
    flag: "https://flagsapi.com/SC/flat/64.png",
  },
  {
    code: "+249",
    name: "Sudan",
    suffix: "SD",
    currency: "SDG",
    currencySymbol: "ج.س.",
    flag: "https://flagsapi.com/SD/flat/64.png",
  },
  {
    code: "+250",
    name: "Rwanda",
    suffix: "RW",
    currency: "RWF",
    currencySymbol: "FRw",
    flag: "https://flagsapi.com/RW/flat/64.png",
  },
  {
    code: "+251",
    name: "Ethiopia",
    suffix: "ET",
    currency: "ETB",
    currencySymbol: "Br",
    flag: "https://flagsapi.com/ET/flat/64.png",
  },
  {
    code: "+252",
    name: "Somalia",
    suffix: "SO",
    currency: "SOS",
    currencySymbol: "S",
    flag: "https://flagsapi.com/SO/flat/64.png",
  },
  {
    code: "+253",
    name: "Djibouti",
    suffix: "DJ",
    currency: "DJF",
    currencySymbol: "Fdj",
    flag: "https://flagsapi.com/DJ/flat/64.png",
  },
  {
    code: "+254",
    name: "Kenya",
    suffix: "KE",
    currency: "KES",
    currencySymbol: "KSh",
    flag: "https://flagsapi.com/KE/flat/64.png",
  },
  {
    code: "+255",
    name: "Tanzania",
    suffix: "TZ",
    currency: "TZS",
    currencySymbol: "TSh",
    flag: "https://flagsapi.com/TZ/flat/64.png",
  },
  {
    code: "+256",
    name: "Uganda",
    suffix: "UG",
    currency: "UGX",
    currencySymbol: "USh",
    flag: "https://flagsapi.com/UG/flat/64.png",
  },
  {
    code: "+257",
    name: "Burundi",
    suffix: "BI",
    currency: "BIF",
    currencySymbol: "FBu",
    flag: "https://flagsapi.com/BI/flat/64.png",
  },
  {
    code: "+258",
    name: "Mozambique",
    suffix: "MZ",
    currency: "MZN",
    currencySymbol: "MT",
    flag: "https://flagsapi.com/MZ/flat/64.png",
  },
  {
    code: "+260",
    name: "Zambia",
    suffix: "ZM",
    currency: "ZMW",
    currencySymbol: "ZK",
    flag: "https://flagsapi.com/ZM/flat/64.png",
  },
  {
    code: "+261",
    name: "Madagascar",
    suffix: "MG",
    currency: "MGA",
    currencySymbol: "Ar",
    flag: "https://flagsapi.com/MG/flat/64.png",
  },
  {
    code: "+262",
    name: "Réunion",
    suffix: "RE",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/RE/flat/64.png",
  },
  {
    code: "+263",
    name: "Zimbabwe",
    suffix: "ZW",
    currency: "ZWL",
    currencySymbol: "Z$",
    flag: "https://flagsapi.com/ZW/flat/64.png",
  },
  {
    code: "+264",
    name: "Namibia",
    suffix: "NA",
    currency: "NAD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/NA/flat/64.png",
  },
  {
    code: "+265",
    name: "Malawi",
    suffix: "MW",
    currency: "MWK",
    currencySymbol: "MK",
    flag: "https://flagsapi.com/MW/flat/64.png",
  },
  {
    code: "+266",
    name: "Lesotho",
    suffix: "LS",
    currency: "LSL",
    currencySymbol: "L",
    flag: "https://flagsapi.com/LS/flat/64.png",
  },
  {
    code: "+267",
    name: "Botswana",
    suffix: "BW",
    currency: "BWP",
    currencySymbol: "P",
    flag: "https://flagsapi.com/BW/flat/64.png",
  },
  {
    code: "+268",
    name: "Eswatini",
    suffix: "SZ",
    currency: "SZL",
    currencySymbol: "E",
    flag: "https://flagsapi.com/SZ/flat/64.png",
  },
  {
    code: "+269",
    name: "Comoros",
    suffix: "KM",
    currency: "KMF",
    currencySymbol: "CF",
    flag: "https://flagsapi.com/KM/flat/64.png",
  },
  {
    code: "+27",
    name: "South Africa",
    suffix: "ZA",
    currency: "ZAR",
    currencySymbol: "R",
    flag: "https://flagsapi.com/ZA/flat/64.png",
  },
  {
    code: "+290",
    name: "Saint Helena",
    suffix: "SH",
    currency: "SHP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/SH/flat/64.png",
  },
  {
    code: "+291",
    name: "Eritrea",
    suffix: "ER",
    currency: "ERN",
    currencySymbol: "Nfk",
    flag: "https://flagsapi.com/ER/flat/64.png",
  },
  {
    code: "+292",
    name: "Somaliland",
    suffix: "SO",
    currency: "SOS",
    currencySymbol: "S",
    flag: "https://flagsapi.com/SO/flat/64.png",
  },
  {
    code: "+293",
    name: "Eritrea",
    suffix: "ER",
    currency: "ERN",
    currencySymbol: "Nfk",
    flag: "https://flagsapi.com/ER/flat/64.png",
  },
  {
    code: "+294",
    name: "Gabon",
    suffix: "GA",
    currency: "XAF",
    currencySymbol: "FCFA",
    flag: "https://flagsapi.com/GA/flat/64.png",
  },
  {
    code: "+295",
    name: "Guinea-Bissau",
    suffix: "GW",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/GW/flat/64.png",
  },
  {
    code: "+296",
    name: "Sao Tome and Principe",
    suffix: "ST",
    currency: "STN",
    currencySymbol: "Db",
    flag: "https://flagsapi.com/ST/flat/64.png",
  },
  {
    code: "+297",
    name: "Aruba",
    suffix: "AW",
    currency: "AWG",
    currencySymbol: "Afl",
    flag: "https://flagsapi.com/AW/flat/64.png",
  },
  {
    code: "+298",
    name: "Faroe Islands",
    suffix: "FO",
    currency: "DKK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/FO/flat/64.png",
  },
  {
    code: "+299",
    name: "Greenland",
    suffix: "GL",
    currency: "DKK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/GL/flat/64.png",
  },
  {
    code: "+300",
    name: "Cyprus",
    suffix: "CY",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/CY/flat/64.png",
  },
  {
    code: "+301",
    name: "Greece",
    suffix: "GR",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/GR/flat/64.png",
  },
  {
    code: "+302",
    name: "Turkey",
    suffix: "TR",
    currency: "TRY",
    currencySymbol: "₺",
    flag: "https://flagsapi.com/TR/flat/64.png",
  },
  {
    code: "+303",
    name: "Malta",
    suffix: "MT",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/MT/flat/64.png",
  },
  {
    code: "+304",
    name: "San Marino",
    suffix: "SM",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/SM/flat/64.png",
  },
  {
    code: "+305",
    name: "Vatican City",
    suffix: "VA",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/VA/flat/64.png",
  },
  {
    code: "+306",
    name: "Italy",
    suffix: "IT",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/IT/flat/64.png",
  },
  {
    code: "+307",
    name: "Luxembourg",
    suffix: "LU",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/LU/flat/64.png",
  },
  {
    code: "+308",
    name: "Monaco",
    suffix: "MC",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/MC/flat/64.png",
  },
  {
    code: "+309",
    name: "Belgium",
    suffix: "BE",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/BE/flat/64.png",
  },
  {
    code: "+310",
    name: "Netherlands",
    suffix: "NL",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/NL/flat/64.png",
  },
  {
    code: "+311",
    name: "Netherlands Antilles",
    suffix: "AN",
    currency: "ANG",
    currencySymbol: "ƒ",
    flag: "https://flagsapi.com/AN/flat/64.png",
  },
  {
    code: "+312",
    name: "Switzerland",
    suffix: "CH",
    currency: "CHF",
    currencySymbol: "CHF",
    flag: "https://flagsapi.com/CH/flat/64.png",
  },
  {
    code: "+313",
    name: "Liechtenstein",
    suffix: "LI",
    currency: "CHF",
    currencySymbol: "CHF",
    flag: "https://flagsapi.com/LI/flat/64.png",
  },
  {
    code: "+314",
    name: "Andorra",
    suffix: "AD",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/AD/flat/64.png",
  },
  {
    code: "+315",
    name: "Spain",
    suffix: "ES",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/ES/flat/64.png",
  },
  {
    code: "+316",
    name: "Portugal",
    suffix: "PT",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/PT/flat/64.png",
  },
  {
    code: "+317",
    name: "Ireland",
    suffix: "IE",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/IE/flat/64.png",
  },
  {
    code: "+318",
    name: "Iceland",
    suffix: "IS",
    currency: "ISK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/IS/flat/64.png",
  },
  {
    code: "+319",
    name: "Norway",
    suffix: "NO",
    currency: "NOK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/NO/flat/64.png",
  },
  {
    code: "+32",
    name: "Sweden",
    suffix: "SE",
    currency: "SEK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/SE/flat/64.png",
  },
  {
    code: "+33",
    name: "France",
    suffix: "FR",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/FR/flat/64.png",
  },
  {
    code: "+34",
    name: "Switzerland",
    suffix: "CH",
    currency: "CHF",
    currencySymbol: "CHF",
    flag: "https://flagsapi.com/CH/flat/64.png",
  },
  {
    code: "+35",
    name: "San Marino",
    suffix: "SM",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/SM/flat/64.png",
  },
  {
    code: "+36",
    name: "Liechtenstein",
    suffix: "LI",
    currency: "CHF",
    currencySymbol: "CHF",
    flag: "https://flagsapi.com/LI/flat/64.png",
  },
  {
    code: "+37",
    name: "Vatican City",
    suffix: "VA",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/VA/flat/64.png",
  },
  {
    code: "+38",
    name: "Monaco",
    suffix: "MC",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/MC/flat/64.png",
  },
  {
    code: "+39",
    name: "Italy",
    suffix: "IT",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/IT/flat/64.png",
  },
  {
    code: "+40",
    name: "Belgium",
    suffix: "BE",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/BE/flat/64.png",
  },
  {
    code: "+41",
    name: "Netherlands",
    suffix: "NL",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/NL/flat/64.png",
  },
  {
    code: "+42",
    name: "Netherlands Antilles",
    suffix: "AN",
    currency: "ANG",
    currencySymbol: "ƒ",
    flag: "https://flagsapi.com/AN/flat/64.png",
  },
  {
    code: "+43",
    name: "Cyprus",
    suffix: "CY",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/CY/flat/64.png",
  },
  {
    code: "+44",
    name: "Greece",
    suffix: "GR",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/GR/flat/64.png",
  },
  {
    code: "+45",
    name: "Turkey",
    suffix: "TR",
    currency: "TRY",
    currencySymbol: "₺",
    flag: "https://flagsapi.com/TR/flat/64.png",
  },
  {
    code: "+46",
    name: "Malta",
    suffix: "MT",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/MT/flat/64.png",
  },
  {
    code: "+47",
    name: "Andorra",
    suffix: "AD",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/AD/flat/64.png",
  },
  {
    code: "+48",
    name: "Spain",
    suffix: "ES",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/ES/flat/64.png",
  },
  {
    code: "+49",
    name: "Portugal",
    suffix: "PT",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/PT/flat/64.png",
  },
  {
    code: "+50",
    name: "Ireland",
    suffix: "IE",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/IE/flat/64.png",
  },
  {
    code: "+51",
    name: "Iceland",
    suffix: "IS",
    currency: "ISK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/IS/flat/64.png",
  },
  {
    code: "+52",
    name: "Norway",
    suffix: "NO",
    currency: "NOK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/NO/flat/64.png",
  },
  {
    code: "+53",
    name: "Sweden",
    suffix: "SE",
    currency: "SEK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/SE/flat/64.png",
  },
  {
    code: "+54",
    name: "Denmark",
    suffix: "DK",
    currency: "DKK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/DK/flat/64.png",
  },
  {
    code: "+378",
    name: "San Marino",
    suffix: "SM",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/SM/flat/64.png",
  },
  {
    code: "+239",
    name: "Sao Tome and Principe",
    suffix: "ST",
    currency: "STN",
    currencySymbol: "Db",
    flag: "https://flagsapi.com/ST/flat/64.png",
  },
  {
    code: "+966",
    name: "Saudi Arabia",
    suffix: "SA",
    currency: "SAR",
    currencySymbol: "﷼",
    flag: "https://flagsapi.com/SA/flat/64.png",
  },
  {
    code: "+221",
    name: "Senegal",
    suffix: "SN",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/SN/flat/64.png",
  },
  {
    code: "+381",
    name: "Serbia",
    suffix: "RS",
    currency: "RSD",
    currencySymbol: "din",
    flag: "https://flagsapi.com/RS/flat/64.png",
  },
  {
    code: "+248",
    name: "Seychelles",
    suffix: "SC",
    currency: "SCR",
    currencySymbol: "₨",
    flag: "https://flagsapi.com/SC/flat/64.png",
  },
  {
    code: "+232",
    name: "Sierra Leone",
    suffix: "SL",
    currency: "SLL",
    currencySymbol: "Le",
    flag: "https://flagsapi.com/SL/flat/64.png",
  },
  {
    code: "+65",
    name: "Singapore",
    suffix: "SG",
    currency: "SGD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/SG/flat/64.png",
  },
  {
    code: "+421",
    name: "Slovakia",
    suffix: "SK",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/SK/flat/64.png",
  },
  {
    code: "+386",
    name: "Slovenia",
    suffix: "SI",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/SI/flat/64.png",
  },
  {
    code: "+677",
    name: "Solomon Islands",
    suffix: "SB",
    currency: "SBD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/SB/flat/64.png",
  },
  {
    code: "+252",
    name: "Somalia",
    suffix: "SO",
    currency: "SOS",
    currencySymbol: "Sh",
    flag: "https://flagsapi.com/SO/flat/64.png",
  },
  {
    code: "+27",
    name: "South Africa",
    suffix: "ZA",
    currency: "ZAR",
    currencySymbol: "R",
    flag: "https://flagsapi.com/ZA/flat/64.png",
  },
  {
    code: "+82",
    name: "South Korea",
    suffix: "KR",
    currency: "KRW",
    currencySymbol: "₩",
    flag: "https://flagsapi.com/KR/flat/64.png",
  },
  {
    code: "+211",
    name: "South Sudan",
    suffix: "SS",
    currency: "SSP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/SS/flat/64.png",
  },
  {
    code: "+34",
    name: "Spain",
    suffix: "ES",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/ES/flat/64.png",
  },
  {
    code: "+94",
    name: "Sri Lanka",
    suffix: "LK",
    currency: "LKR",
    currencySymbol: "₨",
    flag: "https://flagsapi.com/LK/flat/64.png",
  },
  {
    code: "+249",
    name: "Sudan",
    suffix: "SD",
    currency: "SDG",
    currencySymbol: "£",
    flag: "https://flagsapi.com/SD/flat/64.png",
  },
  {
    code: "+597",
    name: "Suriname",
    suffix: "SR",
    currency: "SRD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/SR/flat/64.png",
  },
  {
    code: "+46",
    name: "Sweden",
    suffix: "SE",
    currency: "SEK",
    currencySymbol: "kr",
    flag: "https://flagsapi.com/SE/flat/64.png",
  },
  {
    code: "+41",
    name: "Switzerland",
    suffix: "CH",
    currency: "CHF",
    currencySymbol: "Fr.",
    flag: "https://flagsapi.com/CH/flat/64.png",
  },
  {
    code: "+963",
    name: "Syria",
    suffix: "SY",
    currency: "SYP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/SY/flat/64.png",
  },
  {
    code: "+886",
    name: "Taiwan",
    suffix: "TW",
    currency: "TWD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/TW/flat/64.png",
  },
  {
    code: "+992",
    name: "Tajikistan",
    suffix: "TJ",
    currency: "TJS",
    currencySymbol: "SM",
    flag: "https://flagsapi.com/TJ/flat/64.png",
  },
  {
    code: "+255",
    name: "Tanzania",
    suffix: "TZ",
    currency: "TZS",
    currencySymbol: "Sh",
    flag: "https://flagsapi.com/TZ/flat/64.png",
  },
  {
    code: "+66",
    name: "Thailand",
    suffix: "TH",
    currency: "THB",
    currencySymbol: "฿",
    flag: "https://flagsapi.com/TH/flat/64.png",
  },
  {
    code: "+228",
    name: "Togo",
    suffix: "TG",
    currency: "XOF",
    currencySymbol: "CFA",
    flag: "https://flagsapi.com/TG/flat/64.png",
  },
  {
    code: "+690",
    name: "Tokelau",
    suffix: "TK",
    currency: "NZD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/TK/flat/64.png",
  },
  {
    code: "+676",
    name: "Tonga",
    suffix: "TO",
    currency: "TOP",
    currencySymbol: "T$",
    flag: "https://flagsapi.com/TO/flat/64.png",
  },
  {
    code: "+1 868",
    name: "Trinidad and Tobago",
    suffix: "TT",
    currency: "TTD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/TT/flat/64.png",
  },
  {
    code: "+216",
    name: "Tunisia",
    suffix: "TN",
    currency: "TND",
    currencySymbol: "د.ت",
    flag: "https://flagsapi.com/TN/flat/64.png",
  },
  {
    code: "+90",
    name: "Turkey",
    suffix: "TR",
    currency: "TRY",
    currencySymbol: "₺",
    flag: "https://flagsapi.com/TR/flat/64.png",
  },
  {
    code: "+993",
    name: "Turkmenistan",
    suffix: "TM",
    currency: "TMT",
    currencySymbol: "m",
    flag: "https://flagsapi.com/TM/flat/64.png",
  },
  {
    code: "+688",
    name: "Tuvalu",
    suffix: "TV",
    currency: "AUD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/TV/flat/64.png",
  },
  {
    code: "+256",
    name: "Uganda",
    suffix: "UG",
    currency: "UGX",
    currencySymbol: "Sh",
    flag: "https://flagsapi.com/UG/flat/64.png",
  },
  {
    code: "+380",
    name: "Ukraine",
    suffix: "UA",
    currency: "UAH",
    currencySymbol: "₴",
    flag: "https://flagsapi.com/UA/flat/64.png",
  },
  {
    code: "+971",
    name: "United Arab Emirates",
    suffix: "AE",
    currency: "AED",
    currencySymbol: "د.إ",
    flag: "https://flagsapi.com/AE/flat/64.png",
  },
  {
    code: "+44",
    name: "United Kingdom",
    suffix: "GB",
    currency: "GBP",
    currencySymbol: "£",
    flag: "https://flagsapi.com/GB/flat/64.png",
  },
  {
    code: "+1",
    name: "United States",
    suffix: "US",
    currency: "USD",
    currencySymbol: "$",
    flag: "https://flagsapi.com/US/flat/64.png",
  },
  {
    code: "+598",
    name: "Uruguay",
    suffix: "UY",
    currency: "UYU",
    currencySymbol: "$",
    flag: "https://flagsapi.com/UY/flat/64.png",
  },
  {
    code: "+998",
    name: "Uzbekistan",
    suffix: "UZ",
    currency: "UZS",
    currencySymbol: "лв",
    flag: "https://flagsapi.com/UZ/flat/64.png",
  },
  {
    code: "+678",
    name: "Vanuatu",
    suffix: "VU",
    currency: "VUV",
    currencySymbol: "Vt",
    flag: "https://flagsapi.com/VU/flat/64.png",
  },
  {
    code: "+379",
    name: "Vatican City",
    suffix: "VA",
    currency: "EUR",
    currencySymbol: "€",
    flag: "https://flagsapi.com/VA/flat/64.png",
  },
  {
    code: "+58",
    name: "Venezuela",
    suffix: "VE",
    currency: "VES",
    currencySymbol: "Bs.",
    flag: "https://flagsapi.com/VE/flat/64.png",
  },
  {
    code: "+84",
    name: "Vietnam",
    suffix: "VN",
    currency: "VND",
    currencySymbol: "₫",
    flag: "https://flagsapi.com/VN/flat/64.png",
  },
  {
    code: "+967",
    name: "Yemen",
    suffix: "YE",
    currency: "YER",
    currencySymbol: "﷼",
    flag: "https://flagsapi.com/YE/flat/64.png",
  },
  {
    code: "+260",
    name: "Zambia",
    suffix: "ZM",
    currency: "ZMW",
    currencySymbol: "ZK",
    flag: "https://flagsapi.com/ZM/flat/64.png",
  },
  {
    code: "+263",
    name: "Zimbabwe",
    suffix: "ZW",
    currency: "ZWL",
    currencySymbol: "$",
    flag: "https://flagsapi.com/ZW/flat/64.png",
  },
  {
    code: "+850",
    name: "North Korea",
    suffix: "KP",
    currency: "KPW",
    currencySymbol: "₩",
    flag: "https://flagsapi.com/KP/flat/64.png",
  },
  {
    code: "+880",
    name: "Bangladesh",
    suffix: "BD",
    currency: "BDT",
    currencySymbol: "৳",
    flag: "https://flagsapi.com/BD/flat/64.png",
  },
  {
    code: "+970",
    name: "Palestine",
    suffix: "PS",
    currency: "ILS",
    currencySymbol: "₪",
    flag: "https://flagsapi.com/PS/flat/64.png",
  },
  {
    code: "+212",
    name: "Western Sahara",
    suffix: "EH",
    currency: "MAD",
    currencySymbol: "د.م.",
    flag: "https://flagsapi.com/EH/flat/64.png",
  },
];
