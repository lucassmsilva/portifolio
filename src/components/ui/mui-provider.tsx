// components/ui/mui-provider.tsx
"use client";

import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import Navbar from "../shared/navbar";
import { Container } from "@mui/material";

const theme = createTheme({
  // suas configurações de tema
});

export default function MUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({
      key: "mui",
      prepend: true,
    });

    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }

    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" disableGutters>
          <Navbar></Navbar>
          {children}
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}
