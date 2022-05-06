import React, { useEffect, useState } from "react";
import cn from "classnames";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "react-spinner-loader";

import s from "./CardDetail.module.css";

function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.breakingbadapi.com/api/quotes/${id}`)
      .then((res) => {
        setQuotes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("server error");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={cn("flex-center", s.loaderContainer)}>
        <Loader show={loading} type="inline" />
      </div>
    );
  }

  const renderQuote = () => {
    if (quotes[0]) return <span className={s.quote}>{quotes[0].quote}</span>;
    return <span>sorry there is no quote click back and retry</span>;
  };

  return (
    <div className={s.container}>
      <p className={s.title}>
        This Is Your New Quote :) You Can Click Back And Try Again
      </p>
      {renderQuote()}
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default CardDetail;
