import * as React from "react";
import { loremIpsum, ILoremIpsumParams } from "lorem-ipsum";

interface IWithPlaceholderText {
  children: string | React.ReactNode | null | undefined;
}

const WithPlaceholderText = ({
  children,
  ...params
}: IWithPlaceholderText & ILoremIpsumParams) => {
  return <>{children ? children : loremIpsum({ ...params })}</>;
};

export default WithPlaceholderText;
