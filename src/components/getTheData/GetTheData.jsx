import { useEffect, useState } from "react";
import styled from "styled-components";

export const GetTheData = () => {
  const [data, setData] = useState({});
  const [generalData, setGeneralData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://www.cbr-xml-daily.ru/daily_json.js";
        const response = await fetch(url);
        const result = await response.json();
        setData(result.Valute || {});
        setGeneralData({
          Date: result.Date,
          PreviousDate: result.PreviousDate,
          PreviousURL: result.PreviousURL,
          Timestamp: result.Timestamp,
        });
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <Container>
      <div>
        <h2>Общая информация</h2>
        <p>Дата: {generalData.Date}</p>
        <p>Предыдущая дата: {generalData.PreviousDate}</p>
        <p>Предыдущий URL: {generalData.PreviousURL}</p>
        <p>Временная метка: {generalData.Timestamp}</p>
      </div>
      <div>
        <h2>Данные о валюте</h2>
        {Object.keys(data).map((key) => {
          const currency = data[key];
          return (
            <div key={key}>
              <p>{key}</p>
              <p>ID: {currency.ID}</p>
              <p>Номер: {currency.NumCode}</p>
              <p>Символ: {currency.CharCode}</p>
              <p>Номинал: {currency.Nominal}</p>
              <p>Название: {currency.Name}</p>
              <p>Значение: {currency.Value}</p>
              <p>Предыдущее значение: {currency.Previous}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;
