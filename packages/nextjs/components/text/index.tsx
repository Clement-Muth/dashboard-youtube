import React from "react";
import { Text as TextRebass } from "rebass";
import { TextProps as TextRebassProps } from "@interfaces/rebass";

export interface TextProps extends TextRebassProps {
  dataDashboardId: string;
}

/**
 *
 * @param dataDashboardId Label corresponding to the label of JSON text variable.
 * @example
 * ```js
 * const text = React.useContext(TextContext);
 *
 * <Text as="span" dataDashboardId="homeHeadTitle">{text.homeHeadTitle}</Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({ dataDashboardId, ...props }) => {
  const ref = React.useRef<Text & { setAttribute: (l: string, v: string) => void }>();

  React.useEffect(() => {
    if (ref.current) ref.current.setAttribute("data-dashboard-id", dataDashboardId);
  }, [ref]);

  // if (!text && !text[dataDashboardId]) throw new Error("bad value 😢 " + dataDashboardId);
  return (
    <TextRebass {...props} ref={ref}>
      {props.children}
    </TextRebass>
  );
};
