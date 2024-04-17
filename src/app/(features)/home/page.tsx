"use client";
import { HomePageCategoryWiseInterface } from "@/interfaces/homePage.interface";
// import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import useHomeAPICall from "./useHomeHelper";
import { Button, CircularProgress, Container, Skeleton } from "@mui/material";
import styles from "./home.module.scss";
import CardsListing from "@/shared/components/cardsList/page";
import { useRouter } from "next/navigation";

export const CardsContext = createContext<HomePageCategoryWiseInterface[]>([]);

const HomePage: React.FC = () => {
  const [videoPlayList, setVideoPlayList] = useState<
    HomePageCategoryWiseInterface[]
  >([]);
  const [homeData] = useHomeAPICall();
  const router = useRouter();

  useEffect(() => {
    if (homeData) {
      setVideoPlayList(homeData);
    }
  }, [homeData]);

  const sendQueryParams = () => {
    const queryParams = {
      firstName: "Akash",
      lastName: "Kumar",
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const route = `/category?${queryString}`;
    router.push(route);
  };

  return (
    <>
      {videoPlayList && videoPlayList.length > 0 ? (
        <>
          <div style={{ paddingTop: "20px", alignItems: "right" }}>
            <Button onClick={sendQueryParams} variant="contained">
              Send with Query Params
            </Button>
          </div>
          {videoPlayList.map((category) => (
            <div key={category.categoryId}>
              <h1>{category.categoryName}</h1>
              <div style={{ display: "flex" }}>
                {category.videoList.map((video, index) => (
                  <div className={styles.cardContainer} key={index}>
                    <CardsListing item={video} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
        <div className={styles.loaderContainer}>
          <CircularProgress color="secondary" />
          {/* <CircularProgress color="success" />
          <CircularProgress color="inherit" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" /> */}

        </div>
        </>
      )}
    </>
  );
};

export default HomePage;
