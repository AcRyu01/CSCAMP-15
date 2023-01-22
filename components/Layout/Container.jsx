import { useMemo } from "react";

const Container = ({
  fluid = false,
  children,
  className = "",
  style = {},
  noPadding = false,
}) => {
  const getMaxWidth = useMemo(() => (fluid ? "unset" : "1200px"), [fluid]);
  return (
    <>
      <div className={`container relative mx-auto ${className}`} style={style}>
        {children}
      </div>

      <style jsx scoped>{`
        .container {
          max-width: ${getMaxWidth};
          padding-left: ${noPadding ? 0 : 8}px;
          padding-right: ${noPadding ? 0 : 8}px;
        }
      `}</style>
    </>
  );
};

export default Container;
