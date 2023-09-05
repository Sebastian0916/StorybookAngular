import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { EmptyStatePropertys, UrlImage } from "./intarfaces";

const EmptyState = (emptyState: EmptyStatePropertys) => {
  const { state = "create" } = emptyState;

  return (
    <Card elevation={1}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <CardMedia
          component="img"
          src={UrlImage[state]}
          sx={{
            width: 206,
            height: 187,
          }}
        ></CardMedia>
        <Stack direction={"column"} spacing={2}>
          {emptyState.title && (
            <Typography variant="h6" textAlign={"center"}>
              {emptyState.title}
            </Typography>
          )}

          {emptyState.content && (
            <Typography
              variant="body1"
              textAlign={"center"}
              color={"text.secondary"}
            >
              {emptyState.content}
            </Typography>
          )}
          {state === "create" && emptyState.actions && (
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              {emptyState.actions}
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmptyState;
