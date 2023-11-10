import React, { useState } from "react";

const Search = (props) => {
  const { setSearched, setCountry, setTemp, setDesc, setBandeira, setCidade } =
    props;

  const [apiKey, setKey] = useState("73dfbf19660c0f868ca660528fe690e2");
  const [apiUrl, setUrl] = useState(
    "https://api.openweathermap.org/data/2.5/weather"
  );

  const [city, setCity] = useState("");

  const trocarSiglas = (sigla, escolha) => {
    const siglas = {
      AR: {
        nome: "Argentina",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-1536x963.jpg",
      },
      BO: {
        nome: "Bolívia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1536x1050.jpg",
      },
      BR: {
        nome: "Brasil",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
      },
      CL: {
        nome: "Chile",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png",
      },
      CO: {
        nome: "Colômbia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png",
      },
      EC: {
        nome: "Equador",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/ecuador-flag-png-large.png",
      },
      GY: {
        nome: "Guiana",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/guyana-flag-png-large.png",
      },
      PE: {
        nome: "Peru",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png",
      },
      PY: {
        nome: "Paraguai",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png",
      },
      SR: {
        nome: "Suriname",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/suriname-flag-png-large.png",
      },
      UY: {
        nome: "Uruguai",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",
      },
      VE: {
        nome: "Venezuela",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/venezuela-flag-png-large.png",
      },
      AL: {
        nome: "Albânia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/albania-flag-png-large.png",
      },
      AD: {
        nome: "Andorra",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/andorra-flag-png-large.png",
      },
      AT: {
        nome: "Áustria",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/austria-flag-png-large.png",
      },
      BY: {
        nome: "Bielorrússia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/belarus-flag-png-large.png",
      },
      BE: {
        nome: "Bélgica",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/belgium-flag-png-large.png",
      },
      BA: {
        nome: "Bósnia e Herzegovina",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/bosnia-and-herzegovina-flag-png-large.png",
      },
      BG: {
        nome: "Bulgária",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/bulgaria-flag-png-large.png",
      },
      HR: {
        nome: "Croácia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/croatia-flag-png-large.png",
      },
      CY: {
        nome: "Chipre",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/cyprus-flag-png-large.png",
      },
      CZ: {
        nome: "República Checa",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png",
      },
      DK: {
        nome: "Dinamarca",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/denmark-flag-png-large.png",
      },
      EE: {
        nome: "Estônia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/estonia-flag-png-large.png",
      },
      FI: {
        nome: "Finlândia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png",
      },

      FR: {
        nome: "França",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",
      },
      DE: {
        nome: "Alemanha",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
      },
      GR: {
        nome: "Grécia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png",
      },
      HU: {
        nome: "Hungria",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/hungary-flag-png-large.png",
      },
      IS: {
        nome: "Islândia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png",
      },
      IE: {
        nome: "Irlanda",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png",
      },
      IT: {
        nome: "Itália",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png",
      },
      LV: {
        nome: "Letônia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/latvia-flag-png-large.png",
      },
      LI: {
        nome: "Liechtenstein",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/liechtenstein-flag-png-large.png",
      },
      LT: {
        nome: "Lituânia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/lithuania-flag-png-large.png",
      },
      LU: {
        nome: "Luxemburgo",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/luxembourg-flag-png-large.png",
      },
      MK: {
        nome: "Macedônia do Norte",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/north-macedonia-flag-png-large.png",
      },
      MT: {
        nome: "Malta",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/malta-flag-png-large.png",
      },
      MD: {
        nome: "Moldávia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/moldova-flag-png-large.png",
      },
      MC: {
        nome: "Mônaco",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/monaco-flag-png-large.png",
      },
      ME: {
        nome: "Montenegro",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/montenegro-flag-png-large.png",
      },
      NL: {
        nome: "Países Baixos",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png",
      },
      NO: {
        nome: "Noruega",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/norway-flag-png-large.png",
      },
      PL: {
        nome: "Polônia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png",
      },
      PT: {
        nome: "Portugal",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/portugal-flag-png-large.png",
      },
      RO: {
        nome: "Romênia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/romania-flag-png-large.png",
      },
      RU: {
        nome: "Rússia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png",
      },
      SM: {
        nome: "San Marino",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/san-marino-flag-png-large.png",
      },
      RS: {
        nome: "Sérvia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/serbia-flag-png-large.png",
      },
      SK: {
        nome: "Eslováquia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/slovakia-flag-png-large.png",
      },
      SI: {
        nome: "Eslovênia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/slovenia-flag-png-large.png",
      },
      ES: {
        nome: "Espanha",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png",
      },
      SE: {
        nome: "Suécia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png",
      },
      CH: {
        nome: "Suíça",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png",
      },
      UA: {
        nome: "Ucrânia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png",
      },
      GB: {
        nome: "Reino Unido",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
      },
      VA: {
        nome: "Cidade do Vaticano",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/vatican-city-flag-png-large.png",
      },

      BZ: {
        nome: "Belize",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/belize-flag-png-large.png",
      },
      CR: {
        nome: "Costa Rica",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png",
      },
      SV: {
        nome: "El Salvador",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/el-salvador-flag-png-large.png",
      },
      GT: {
        nome: "Guatemala",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/guatemala-flag-png-large.png",
      },
      HN: {
        nome: "Honduras",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/honduras-flag-png-large.png",
      },
      NI: {
        nome: "Nicarágua",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/nicaragua-flag-png-large.png",
      },
      PA: {
        nome: "Panamá",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/panama-flag-png-large.png",
      },
      CA: {
        nome: "Canadá",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",
      },
      US: {
        nome: "Estados Unidos",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
      },
      MX: {
        nome: "México",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png",
      },
      DZ: {
        nome: "Argélia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/algeria-flag-png-large.png",
      },
      AO: {
        nome: "Angola",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/angola-flag-png-large.png",
      },
      BJ: {
        nome: "Benin",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/benin-flag-png-large.png",
      },
      BW: {
        nome: "Botsuana",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/botswana-flag-png-large.png",
      },
      BF: {
        nome: "Burkina Faso",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png",
      },
      BI: {
        nome: "Burundi",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/burundi-flag-png-large.png",
      },
      CM: {
        nome: "Camarões",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png",
      },
      CV: {
        nome: "Cabo Verde",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/cape-verde-flag-png-large.png",
      },
      CF: {
        nome: "República Centro-Africana",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/central-african-republic-flag-png-large.png",
      },
      TD: {
        nome: "Chade",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/chad-flag-png-large.png",
      },
      KM: {
        nome: "Comores",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/comoros-flag-png-large.png",
      },
      CG: {
        nome: "Congo",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/congo-flag-png-large.png",
      },
      CD: {
        nome: "República Democrática do Congo",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/democratic-republic-of-the-congo-flag-png-large.png",
      },
      DJ: {
        nome: "Djibuti",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/djibouti-flag-png-large.png",
      },
      EG: {
        nome: "Egito",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png",
      },
      GQ: {
        nome: "Guiné Equatorial",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/equatorial-guinea-flag-png-large.png",
      },
      ER: {
        nome: "Eritreia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/eritrea-flag-png-large.png",
      },
      ET: {
        nome: "Etiópia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/ethiopia-flag-png-large.png",
      },
      GA: {
        nome: "Gabão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/gabon-flag-png-large.png",
      },
      GM: {
        nome: "Gâmbia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/gambia-flag-png-large.png",
      },
      GH: {
        nome: "Gana",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/ghana-flag-png-large.png",
      },
      GN: {
        nome: "Guiné",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/guinea-flag-png-large.png",
      },
      GW: {
        nome: "Guiné-Bissau",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/guinea-bissau-flag-png-large.png",
      },
      CI: {
        nome: "Costa do Marfim",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/ivory-coast-flag-png-large.png",
      },
      KE: {
        nome: "Quênia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/kenya-flag-png-large.png",
      },
      LS: {
        nome: "Lesoto",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/lesotho-flag-png-large.png",
      },
      LR: {
        nome: "Libéria",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/liberia-flag-png-large.png",
      },
      LY: {
        nome: "Líbia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/libya-flag-png-large.png",
      },
      MG: {
        nome: "Madagáscar",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/madagascar-flag-png-large.png",
      },
      MW: {
        nome: "Malawi",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/malawi-flag-png-large.png",
      },
      ML: {
        nome: "Mali",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/mali-flag-png-large.png",
      },
      MR: {
        nome: "Mauritânia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/mauritania-flag-png-large.png",
      },
      MU: {
        nome: "Maurícia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/mauritius-flag-png-large.png",
      },
      MA: {
        nome: "Marrocos",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/morocco-flag-png-large.png",
      },
      MZ: {
        nome: "Moçambique",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/mozambique-flag-png-large.png",
      },
      NA: {
        nome: "Namíbia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/namibia-flag-png-large.png",
      },
      NE: {
        nome: "Níger",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/niger-flag-png-large.png",
      },
      NG: {
        nome: "Nigéria",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-large.png",
      },
      RW: {
        nome: "Ruanda",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/rwanda-flag-png-large.png",
      },
      ST: {
        nome: "São Tomé e Príncipe",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/sao-tome-and-principe-flag-png-large.png",
      },
      SN: {
        nome: "Senegal",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/senegal-flag-png-large.png",
      },
      SC: {
        nome: "Seychelles",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/seychelles-flag-png-large.png",
      },
      SL: {
        nome: "Serra Leoa",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/sierra-leone-flag-png-large.png",
      },
      SO: {
        nome: "Somália",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/somalia-flag-png-large.png",
      },
      ZA: {
        nome: "África do Sul",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/south-africa-flag-png-large.png",
      },
      SS: {
        nome: "Sudão do Sul",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/south-sudan-flag-png-large.png",
      },
      SD: {
        nome: "Sudão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/sudan-flag-png-large.png",
      },
      SZ: {
        nome: "Suazilândia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/swaziland-flag-png-large.png",
      },
      TZ: {
        nome: "Tanzânia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/tanzania-flag-png-large.png",
      },
      TG: {
        nome: "Togo",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/togo-flag-png-large.png",
      },
      TN: {
        nome: "Tunísia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/tunisia-flag-png-large.png",
      },
      UG: {
        nome: "Uganda",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/uganda-flag-png-large.png",
      },
      ZM: {
        nome: "Zâmbia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/zambia-flag-png-large.png",
      },
      ZW: {
        nome: "Zimbábue",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/zimbabwe-flag-png-large.png",
      },
      AF: {
        nome: "Afeganistão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/afghanistan-flag-png-large.png",
      },
      AM: {
        nome: "Armênia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/armenia-flag-png-large.png",
      },
      AZ: {
        nome: "Azerbaijão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/azerbaijan-flag-png-large.png",
      },
      BH: {
        nome: "Bahrein",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/bahrain-flag-png-large.png",
      },
      BD: {
        nome: "Bangladesh",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/bangladesh-flag-png-large.png",
      },
      BT: {
        nome: "Butão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/bhutan-flag-png-large.png",
      },
      BN: {
        nome: "Brunei",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/brunei-flag-png-large.png",
      },
      KH: {
        nome: "Camboja",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/cambodia-flag-png-large.png",
      },
      CN: {
        nome: "China",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png",
      },
      GE: {
        nome: "Geórgia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/georgia-flag-png-large.png",
      },
      IN: {
        nome: "Índia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
      },
      ID: {
        nome: "Indonésia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png",
      },
      IR: {
        nome: "Irã",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/iran-flag-png-large.png",
      },
      IQ: {
        nome: "Iraque",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/iraq-flag-png-large.png",
      },
      IL: {
        nome: "Israel",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png",
      },
      JP: {
        nome: "Japão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
      },
      JO: {
        nome: "Jordânia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/jordan-flag-png-large.png",
      },
      KZ: {
        nome: "Cazaquistão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/kazakhstan-flag-png-large.png",
      },
      KW: {
        nome: "Kuwait",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/kuwait-flag-png-large.png",
      },
      KG: {
        nome: "Quirguistão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/kyrgyzstan-flag-png-large.png",
      },
      LA: {
        nome: "Laos",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/laos-flag-png-large.png",
      },
      LB: {
        nome: "Líbano",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/lebanon-flag-png-large.png",
      },
      MY: {
        nome: "Malásia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-large.png",
      },
      MV: {
        nome: "Maldivas",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/maldives-flag-png-large.png",
      },
      MN: {
        nome: "Mongólia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/mongolia-flag-png-large.png",
      },
      MM: {
        nome: "Mianmar (Birmânia)",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/myanmar-flag-png-large.png",
      },
      NP: {
        nome: "Nepal",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/nepal-flag-png-large.png",
      },
      KP: {
        nome: "Coreia do Norte",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/north-korea-flag-png-large.png",
      },
      KR: {
        nome: "Coreia do Sul",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png",
      },
      OM: {
        nome: "Omã",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/oman-flag-png-large.png",
      },
      PK: {
        nome: "Paquistão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/pakistan-flag-png-large.png",
      },
      PS: {
        nome: "Territórios Palestinos",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/palestine-flag-png-large.png",
      },
      PH: {
        nome: "Filipinas",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/philippines-flag-png-large.png",
      },
      QA: {
        nome: "Catar",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/qatar-flag-png-large.png",
      },
      SA: {
        nome: "Arábia Saudita",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png",
      },
      SG: {
        nome: "Singapura",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/singapore-flag-png-large.png",
      },
      LK: {
        nome: "Sri Lanka",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/sri-lanka-flag-png-large.png",
      },
      SY: {
        nome: "Síria",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/syria-flag-png-large.png",
      },
      TW: {
        nome: "Taiwan",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/taiwan-flag-png-large.png",
      },
      TJ: {
        nome: "Tajiquistão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/tajikistan-flag-png-large.png",
      },
      TH: {
        nome: "Tailândia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/thailand-flag-png-large.png",
      },
      TR: {
        nome: "Turquia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png",
      },
      TM: {
        nome: "Turcomenistão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/turkmenistan-flag-png-large.png",
      },
      AE: {
        nome: "Emirados Árabes Unidos",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/uae-flag-png-large.png",
      },
      UZ: {
        nome: "Uzbequistão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/uzbekistan-flag-png-large.png",
      },
      VN: {
        nome: "Vietnã",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-large.png",
      },
      YE: {
        nome: "Iêmen",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/yemen-flag-png-large.png",
      },
      AU: {
        nome: "Austrália",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/australia-flag-png-large.png",
      },
      FJ: {
        nome: "Fiji",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/fiji-flag-png-large.png",
      },
      KI: {
        nome: "Kiribati",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/kiribati-flag-png-large.png",
      },
      MH: {
        nome: "Ilhas Marshall",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/marshall-islands-flag-png-large.png",
      },
      FM: {
        nome: "Micronésia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/micronesia-flag-png-large.png",
      },
      NR: {
        nome: "Nauru",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/nauru-flag-png-large.png",
      },
      NZ: {
        nome: "Nova Zelândia",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png",
      },
      PW: {
        nome: "Palau",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/palau-flag-png-large.png",
      },
      PG: {
        nome: "Papua Nova Guiné",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/papua-new-guinea-flag-png-large.png",
      },
      WS: {
        nome: "Samoa",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/samoa-flag-png-large.png",
      },
      SB: {
        nome: "Ilhas Salomão",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/solomon-islands-flag-png-large.png",
      },
      TO: {
        nome: "Tonga",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/tonga-flag-png-large.png",
      },
      TV: {
        nome: "Tuvalu",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/tuvalu-flag-png-large.png",
      },
      VU: {
        nome: "Vanuatu",
        bandeira:
          "https://www.countryflags.com/wp-content/uploads/vanuatu-flag-png-large.png",
      },
    };

    if (siglas[sigla] && escolha == 1) {
      return siglas[sigla]["nome"];
    } else if (siglas[sigla] && escolha == 2) {
      return siglas[sigla]["bandeira"];
    } else {
      return "país inválido";
    }
  };

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `${apiUrl}?q=${city}&lang=pt_br&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.sys) {
        setCountry(trocarSiglas(data.sys.country, 1));
        setBandeira(trocarSiglas(data.sys.country, 2));
        setTemp(data.main.temp - 273);
        setCidade(data.name);
        setDesc(data.weather[0].description);
        setSearched(true);
      }

      if (response.status == 404) {
        alert("cidade não encontrada!");
        setSearched(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="search-bar"
        style={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <input
          type="text"
          style={{ width: "100%" }}
          required
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => getWeather(city)}>Search</button>
      </div>
    </>
  );
};

export default Search;
