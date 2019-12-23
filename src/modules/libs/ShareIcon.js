import React, { Component } from "react";
import _ from "lodash";
import { withStyles, Grid } from "@material-ui/core";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  EmailIcon
} from "react-share";
import { TITLE, DESCRIPTION } from "app/config";
const styles = theme => ({});

class ShareIcon extends Component {
  render() {
    const url = `https://hsvuit.org${_.get(this.props, "url")}`;
    const description = _.get(this.props, "description", DESCRIPTION);

    return (
      <React.Fragment>
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={2}>
            <FacebookShareButton url={url} quote={description}>
              <FacebookIcon size={50} />
            </FacebookShareButton>
          </Grid>
          <Grid item md={2}>
            <TwitterShareButton url={url} title={description}>
              <TwitterIcon size={50} />
            </TwitterShareButton>
          </Grid>
          <Grid item md={2}>
            <GooglePlusShareButton url={url}>
              <GooglePlusIcon size={50} />
            </GooglePlusShareButton>
          </Grid>
          <Grid item md={2}>
            <LinkedinShareButton
              url={url}
              title={description}
              windowWidth={750}
              windowHeight={600}
            >
              <LinkedinIcon size={50} />
            </LinkedinShareButton>
          </Grid>
          <Grid item md={2}>
            <EmailShareButton url={url} subject={description} body="body">
              <EmailIcon size={50} />
            </EmailShareButton>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ShareIcon);
