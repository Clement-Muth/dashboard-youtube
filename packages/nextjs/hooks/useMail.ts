import { getMailData } from "@libraries/mail";
import React from "react";
import { useAuth } from "./useAuth";

export type usePlaylistsVideoProps = {
  mails: any[];
};

export const useMail = (): usePlaylistsVideoProps => {
  const [data, setData] = React.useState(null);
  const { currentUser } = useAuth();

  React.useEffect(() => {
    getMailData(currentUser.accessToken).then((data) => setData(data));
  }, [0]);

  return { mails: data };
};
