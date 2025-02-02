import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { MantineProvider, createTheme, Text } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const theme = createTheme({
  fontFamily: poppins.style.fontFamily,
  headings: {
    fontWeight: "600",
  },
  components: {
    Text: Text.extend({
      defaultProps: {
        size: "sm",
      },
    }),
    ActionIcon: {
      defaultProps: {
        variant: "subtle",
        color: "gray",
      },
    },
    Textarea: {
      defaultProps: {
        autosize: true,
      },
    },
    Tooltip: {
      defaultProps: {
        className: "text-xs",
      },
    },
    List: {
      defaultProps: {
        listStyleType: "disc",
      },
    },
    ListItem: {
      defaultProps: {
        styles: {
          itemLabel: {
            fontSize: "14px",
          },
        },
      },
    },
    Radio: {
      defaultProps: {
        size: "xs",
        styles: {
          body: {
            alignItems: "center",
          },
          label: {
            fontSize: "14px",
          },
        },
      },
    },
    Checkbox: {
      defaultProps: {
        size: "xs",
        styles: {
          body: {
            alignItems: "center",
          },
          label: {
            fontSize: "14px",
          },
        },
      },
    },
    MonthPickerInput: {
      defaultProps: {
        leftSection: <IconCalendar size={20} />,
      },
    },
    DateInput: {
      defaultProps: {
        leftSection: <IconCalendar size={20} />,
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
