import { Grid, Typography } from "@mui/material";
import React from "react";

import BlinkList from "../../assets/blinklist.png";

const footer = () => {
  return (
    <Grid
      container
      style={{
        height: "370px",
        width: "100%",
        background: "#F1F6F4",
        alignItems: "center",
        justifyContent: "space-around",
        position: "relative",
        top: "10vh",
      }}
      role="Footer"
    >
      <Grid
        item
        container
        direction="column"
        rowGap={6}
        sx={{ alignItems: "flex-start", width: "952px" }}
      >
        <Grid
          item
          container
          sx={{ width: "952px", height: "224px" }}
          columnGap={4}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              rowGap={"32px"}
              sx={{
                width: "378px",
                height: "120px",
              }}
              role="footer-left"
            >
              <Grid item sx={{ height: "24px", width: "100px" }}>
                <img src={BlinkList} alt="blinklist" />
              </Grid>

              <Grid item>
                <Typography variant="subtitle1" style={{ color: "#0365F2" }}>
                  {"Big ideas in small packages Start learning now"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              columnGap={4}
              wrap="nowrap"
              style={{ width: "542px", height: "224px" }}
              data-testid="footer-right"
            >
              {/* // Editorial */}
              <Grid
                item
                container
                direction="column"
                rowGap={2}
                sx={{ width: "214px", height: "224px" }}
              >
                <Grid item>
                  <Typography
                    style={{ color: "#03314B" }}
                    // variant="body1"
                    component="div"
                  >
                    {"Editorial"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    style={{ color: "#6D787E" }}
                    component="div"
                  >
                    {"Book lists"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography style={{ color: "#6D787E" }} component="div">
                    {"What is Nonfiction?"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"What to read next?"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Benefits of reading"}
                  </Typography>{" "}
                </Grid>

                <Grid item></Grid>
              </Grid>

              {/* // Useful Links */}
              <Grid
                item
                container
                direction="column"
                rowGap={2}
                sx={{ width: "200px", height: "224px" }}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    component="div"
                    style={{ color: "#03314B" }}
                  >
                    {"Useful links"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Pricing"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Blinkist business"}
                  </Typography>{" "}
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Gift cards"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Blinkist magaine"}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Contact & help"}
                  </Typography>
                </Grid>
              </Grid>

              {/* // Company */}
              <Grid
                item
                container
                direction="column"
                rowGap={2}
                sx={{ width: "132px", height: "224px" }}
              >
                <Grid item>
                  <Typography
                    // variant="body1"
                    component="div"
                    style={{ color: "#03314B" }}
                  >
                    {"Company"}
                  </Typography>{" "}
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"About"}
                  </Typography>{" "}
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Careers"}
                  </Typography>{" "}
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"partners"}
                  </Typography>{" "}
                </Grid>

                <Grid item>
                  <Typography
                    // variant="body2"
                    component="div"
                    style={{ color: "#6D787E" }}
                  >
                    {"Code of Conduct"}
                  </Typography>
                </Grid>

                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography
            variant="caption"
            component="div"
            style={{ color: "#6D787E" }}
          >
            {
              "© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies"
            }
          </Typography>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default footer;
