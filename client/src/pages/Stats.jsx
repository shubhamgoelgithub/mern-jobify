import React from "react";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { ChartsContainer, StatsContainer } from "../components";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs/stats");
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
