import { getDriveData } from "@libraries/drive";
import React from "react";
import { useAuth } from "./useAuth";

export type usePlaylistsVideoProps = {
  files: any[];
};

export const useDrive = (): usePlaylistsVideoProps => {
  const [data, setData] = React.useState(null);
  const { currentUser } = useAuth();

  React.useEffect(() => {
    getDriveData(currentUser.accessToken).then((data) => setData(data?.files));
  }, [0]);

  return { files: data };
};
