import React from "react";
import { useApiGetQuery } from "./apiSlice";

const DataShow = () => {
  const { data, error, isLoading } = useApiGetQuery("6566e648a8d45ce8cf3f0f6b");
  // console.log(data);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>All Data Length {data?.data.length}</h1>
          {data?.data.map((elem) => {
            console.log(elem);
            return <div>{<p>{elem.status}</p>}</div>;
          })}
        </>
      ) : null}
    </div>
  );
};

export default DataShow;
