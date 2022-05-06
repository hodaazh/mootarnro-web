import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import Loader from "react-spinner-loader";

import s from "./Home.module.css";
import { DropDown, ToggleSwitch } from "../../components";
import Card from "../../elements/card/Card";
import utils from "../../utils/utils";

const Home = () => {
  const navigate = useNavigate();
  const { changeDateFormat } = utils;
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [asc, setAsc] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((res) => {
        setData(res.data);
        setSortedData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("server error");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const sortedArray = [...data].sort(function (a, b) {
      if (sortOption === "birthday") {
        /* change date format for Firefox */
        return (
          new Date(changeDateFormat(a[sortOption])) -
          new Date(changeDateFormat(b[sortOption]))
        );
      }
      if (a[sortOption] < b[sortOption]) {
        return -1;
      }
      if (a[sortOption] > b[sortOption]) {
        return 1;
      }
      return 0;
    });
    setSortedData(sortedArray);
  }, [sortOption]);

  useEffect(() => {
    setSortedData(sortedData.reverse());
  }, [asc]);

  if (loading) {
    return (
      <div className={cn("flex-center", s.loaderContainer)}>
        <Loader show={loading} type="inline" />
      </div>
    );
  }

  return (
    <div className={s.container}>
      <h1>Wellcome Dear</h1>
      <div className={cn("flex-center", "flex-column", s.sortWrapper)}>
        <div className={s.ascWrapper}>
          {sortOption && (
            <ToggleSwitch label=":Descending Order" onChange={setAsc} />
          )}
        </div>
        <DropDown {...{ setSortOption }} />
      </div>
      <div className={cn("flex-center", s.wrapper)}>
        {sortedData.map((item, index) => (
          <Card
            key={index}
            {...item}
            onClick={() => navigate(`/card/${item.char_id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
