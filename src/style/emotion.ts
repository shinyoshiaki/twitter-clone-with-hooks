import styled from "@emotion/styled";

export const Middle = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
});

export const Center = styled.div((props: { row?: boolean }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: props.row ? "row" : "column"
}));
