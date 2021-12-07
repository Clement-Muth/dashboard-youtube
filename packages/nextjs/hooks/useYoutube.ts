import React from "react";
import { getYoutubeData } from "@libraries/youtube";
import { useAuth } from "./useAuth";

export const useYoutube = (section: string, filters: string) => {
  const [data, setData] = React.useState(null);
  const { currentUser } = useAuth();

  React.useEffect(() => {
    getYoutubeData(currentUser.accessToken, section, filters).then((data) => setData(data?.items));
  }, [0]);

  return data;
};
