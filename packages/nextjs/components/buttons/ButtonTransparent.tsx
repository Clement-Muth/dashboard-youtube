import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Text, TextProps } from "@components/text";

interface Props extends Pick<TextProps, "dataDashboardId"> {
  title: string;
  href?: string;
  noLink?: boolean;
}

export const ButtonTransparent = ({ title, href = "/", noLink = false, dataDashboardId }: Props) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <Text
        as="a"
        dataDashboardId={dataDashboardId}
        height="min-content"
        bg="transparent"
        color="black"
        fontWeight="700"
        my={0}
        sx={{
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          borderBottom: "solid 2px",
          borderBottomColor: `${router.pathname === href && !noLink ? "primary" : "transparent"}`,
          ":hover": { color: "black" },
          ":active": { color: "blue" }
        }}
      >
        {title}
      </Text>
    </Link>
  );
};
