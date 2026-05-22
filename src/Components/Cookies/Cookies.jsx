import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CookieConsent({ onAccept }) {
  const [showBanner, setShowBanner] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const cookieStatus = localStorage.getItem("iitilCookieConsent");
    if (!cookieStatus) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("iitilCookieConsent", "accepted");
    setShowBanner(false);
    onAccept && onAccept(); // ✅ notify layout
  };

  const handleReject = () => {
    localStorage.setItem("iitilCookieConsent", "rejected");
    setShowBanner(false);
    onAccept && onAccept(); // ✅ still remove blur
  };

  return (
    <>
      {showBanner && (
        <Box
          sx={{
            position: "fixed",
            left: "50%",
            bottom: { xs: "16px", md: "28px" },
            transform: "translateX(-50%)",
            width: { xs: "calc(100% - 28px)", md: "88%" },
            maxWidth: "1180px",
            bgcolor: "#0A0E27",
            color: "#E8EAF2",
            p: { xs: "22px", md: "34px 48px" },
            zIndex: 9999,
            boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
            fontFamily: "Jost, sans-serif",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "36px" },
              fontWeight: 500,
              mb: "18px",
              color: "#E8EAF2",
            }}
          >
            Cookies
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: { xs: "24px", md: "28px" },
              color: "#E8EAF2",
              maxWidth: "1080px",
              mb: "24px",
            }}
          >
            We and our selected partners wish to use cookies to collect information
            about you for functional purposes and statistical marketing. You may not give
            us your consent for certain purposes by selecting an option and you can
            withdraw your consent at any time via the cookie icon.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "stretch", sm: "center" },
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              gap: "16px",
            }}
          >
            <Box sx={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Button
                onClick={handleAccept}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#11D7FF",
                  color: "#000",
                  height: "56px",
                  minWidth: "185px",
                  px: "26px",
                  borderRadius: 0,
                  textTransform: "none",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  "&:hover": { bgcolor: "#11D7FF" },
                }}
              >
                Accept All
              </Button>

              <Button
                onClick={handleReject}
                sx={{
                  bgcolor: "transparent",
                  color: "#11D7FF",
                  height: "56px",
                  minWidth: "185px",
                  px: "26px",
                  border: "1px solid #11D7FF",
                  borderRadius: 0,
                  textTransform: "none",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  "&:hover": {
                    bgcolor: "rgba(17,215,255,0.08)",
                    borderColor: "#11D7FF",
                  },
                }}
              >
                Reject All
              </Button>
            </Box>

            <Typography
              onClick={() => setOpenModal(true)}
              sx={{
                color: "#7A82A8",
                fontSize: "15px",
                cursor: "pointer",
                textDecoration: "underline",
                "&:hover": { color: "#00D9FF" },
              }}
            >
              See all cookies
            </Typography>
          </Box>
        </Box>
      )}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#0A0E27",
            color: "#E8EAF2",
            borderRadius: 0,
            maxHeight: "88vh",
            fontFamily: "Jost, sans-serif",

            // ✅ GAP BETWEEN BANNER & MODAL
            marginBottom: { xs: "100px", md: "140px" },
          },
        }}
      >
        <IconButton
          onClick={() => setOpenModal(false)}
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            color: "#E8EAF2",
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          sx={{
            bgcolor: "#0A0E27",
            p: { xs: "24px", md: "42px" },

            // smooth scroll style
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-thumb": { bgcolor: "#1D2442" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "34px" },
              fontWeight: 500,
              mb: "22px",
              color: "#E8EAF2",
            }}
          >
            Cookies
          </Typography>

          <CookieText />
        </DialogContent>
      </Dialog>
    </>
  );
}

function CookieText() {
  const paragraphSx = {
    fontSize: { xs: "12px", md: "13px" },
    lineHeight: { xs: "22px", md: "24px" },
    color: "#E8EAF2",
    mb: "18px",
    fontFamily: "Jost, sans-serif",
  };

  const headingSx = {
    fontSize: { xs: "14px", md: "15px" },
    fontWeight: 500,
    color: "#E8EAF2",
    mt: "22px",
    mb: "8px",
    fontFamily: "Jost, sans-serif",
  };

  return (
    <Box>
      <Typography sx={paragraphSx}>
        Cookie Notice: Our Use of Cookies and Similar Technologies
      </Typography>

      <Typography sx={paragraphSx}>
        This Cookie Notice explains how we and our technology providers,
        including our service providers and analytics and advertising providers,
        use cookies and other similar tracking technologies to collect
        information from your browser or device when you access and use our
        websites, video and chat features, applications, email communications,
        surveys, newsletters, and other online and app-based products and
        services. This Notice applies to Sites and Services that link to this
        Notice.
      </Typography>

      <Typography sx={paragraphSx}>
        This Notice also provides details about how to manage your choices with
        respect to cookies and other similar technologies, and forms part of our
        Privacy Statement.
      </Typography>

      <Typography sx={headingSx}>
        What are cookies and similar technologies and how are they used?
      </Typography>

      <Typography sx={paragraphSx}>
        Cookies are small text files placed by a website and stored by your
        browser on your device. A cookie can later be read when your browser
        connects to a web server in the same domain that placed the cookie. The
        text in a cookie contains a string of numbers and letters that may
        uniquely identify your device and can contain other information as well.
        This allows the web server to recognize your browser over time, each
        time it connects to that web server.
      </Typography>

      <Typography sx={paragraphSx}>
        Clear GIFs, Pixel Tags and Other Technologies. These technologies are
        tiny graphics with a unique identifier, similar in function to cookies.
        In contrast to cookies, which are stored on your computer’s hard drive,
        clear GIFs are embedded invisibly on web and application pages. We may
        use clear GIFs, web beacons or pixel tags in connection with our Sites
        and Services to manage content, compile statistics, record and track
        visitor activity, and identify when emails are viewed.
      </Typography>

      <Typography sx={headingSx}>
        How does Dell classify the cookies and similar technologies that it uses?
      </Typography>

      <Typography sx={paragraphSx}>
        Dell Sites and Services use cookies and similar technologies that fall
        into the following categories:
      </Typography>

      <Typography sx={paragraphSx}>
        Essential Cookies and similar technologies are necessary for our Sites
        and Services to function properly and securely. These cookies are
        necessary for our Sites and Services to function properly, such as by
        providing secure login, allowing images to load, or allowing you to
        select your cookie preferences. This category of cookies cannot be
        disabled.
      </Typography>

      <Typography sx={paragraphSx}>
        Marketing Cookies and similar technologies are used to understand user
        behavior over time and across our websites. These cookies may be used to
        target and show ads that are more relevant to your interests. We may
        share personal information with advertising platforms to display relevant
        messages to you and to measure advertising performance.
      </Typography>

      <Typography sx={paragraphSx}>
        Statistical Cookies and similar technologies help us understand how
        visitors interact with our website by collecting and reporting
        information. This information is used to measure activity on our Sites
        and Services so that we can improve them by analyzing data regarding
        service use.
      </Typography>

      <Typography sx={headingSx}>
        How do we and our providers use cookies and similar technologies?
      </Typography>

      <Typography sx={paragraphSx}>
        We and our technology, analytics and advertising providers use these
        technologies to collect, record, or generate information such as pages
        you visit, links you click on, how you navigate our Sites and Services,
        and device information when you access and use our Sites and Services.
        Some of this information may be personal information.
      </Typography>

      <Typography sx={paragraphSx}>
        We also collect information about your online activities over time and
        across different websites or online services. We use this information to
        store your preferences and settings, provide chat features and video
        content, enable sign-in, analyze and measure performance, record and
        understand your interaction with the Sites and Services, develop
        inferences, tailor and deliver interest-based advertising, combat fraud,
        secure our Sites and Services, and fulfill other legitimate purposes.
      </Typography>

      <Typography sx={headingSx}>Choice and Control of Personal Information</Typography>

      <Typography sx={paragraphSx}>
        See the Your Data Subject Rights section of the Privacy Statement
        applicable to your region for more details about exercising your data
        subject rights.
      </Typography>

      <Typography sx={paragraphSx}>
        In addition, there are a range of controls available through browsers,
        mobile operating systems, and elsewhere. Such mechanisms include:
      </Typography>

      <Typography sx={headingSx}>Browser and Platform Controls</Typography>

      <Typography sx={paragraphSx}>
        Cookie controls. Most web browsers are set to accept cookies by default.
        If you prefer, you can go to your browser settings to learn how to
        delete or reject cookies. If you choose to delete or reject cookies, this
        could affect certain features or services of our Sites and Services.
      </Typography>

      <Typography sx={paragraphSx}>
        Additionally, you can manage your preferences, including opting out from
        targeted advertising, through privacy centers, consent management
        platforms, provider-specific opt-out mechanisms, or example tools such as
        Google Analytics opt-out browser add-ons.
      </Typography>

      <Typography sx={headingSx}>Global Privacy Control</Typography>

      <Typography sx={paragraphSx}>
        Some browsers and browser extensions support the Global Privacy Control
        or similar controls that can send a signal to websites you visit
        indicating your choice to opt out from certain types of data processing,
        including data sales or targeted advertising, as specified by applicable
        law.
      </Typography>

      <Typography sx={headingSx}>Mobile advertising ID controls</Typography>

      <Typography sx={paragraphSx}>
        iOS and Android operating systems provide options to limit tracking
        and/or reset advertising IDs.
      </Typography>

      <Typography sx={headingSx}>Do Not Track</Typography>

      <Typography sx={paragraphSx}>
        Some browsers include a Do Not Track setting that can send a signal to
        websites you visit indicating you do not wish to be tracked. There is
        not a common understanding of how to interpret this signal; therefore,
        websites may not respond to browser DNT signals.
      </Typography>

      <Typography sx={headingSx}>Email web beacons</Typography>

      <Typography sx={paragraphSx}>
        Most email clients have settings that allow you to prevent the automatic
        downloading of images, including web beacons, and the automatic
        connection to the web servers that host those images.
      </Typography>

      <Typography sx={headingSx}>Opting-Out of Cross-Device Use</Typography>

      <Typography sx={paragraphSx}>
        We and our providers may use information collected from our website,
        mobile applications, devices, or third-party services to help understand
        your activity across devices. To opt out of cross-device advertising,
        you may follow instructions from advertising providers’ opt-out tools.
      </Typography>

      <Typography sx={headingSx}>Targeted Advertising and Emails</Typography>

      <Typography sx={paragraphSx}>
        We and our providers may use personal information about your use of the
        Sites and Services, as well as other sites and services, to make ads and
        communications more relevant to you. This is referred to as targeted
        advertising or interest-based advertising.
      </Typography>

      <Typography sx={paragraphSx}>
        You may opt out of interest-based advertising by using browser controls,
        consent preference tools, or self-regulatory advertising opt-out
        resources. If you opt out, you may still see ads, but they will not be
        tailored to your interests by the applicable providers.
      </Typography>

      <Typography sx={headingSx}>Preference Management</Typography>

      <Typography sx={paragraphSx}>
        You can manage cookie preferences through the cookie banner, browser
        settings, or privacy preference controls. If you clear, disable, or
        remove cookies, you may need to reset preferences again.
      </Typography>
    </Box>
  );
}