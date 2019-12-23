import React, { Component } from "react";
import _ from "lodash";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import {
  withStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";
import { FacebookShareButton } from "react-share";

import ReactGA from 'react-ga';

const styles = theme => ({
  images: {
    height: 200,
    width: "100%",
    overflow: "hidden"
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 200
  }
});
class NewsItem extends Component {
  handleEvent = () => {
    ReactGA.event({
      category: "Activities",
      action: "View an activity"
    })
  }
  render() {
    const { data, classes } = this.props;
    const url = `https://hsvuit.org/tin-tuc/chi-tiet/${_.get(data, "slug", "#")}`;
    const description = _.get(data, "shortDescription", "");

    return (
      <div className="col-lg-12 col-sm-6">
        <Card className={classes.card} onClick={() => this.handleEvent}>
          <Link to={`/tin-tuc/chi-tiet/${_.get(data, "slug", "#")}`}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={_.get(data, "imageLink", "/images/default_image.png")}
                title={_.get(data, "title", "")}
              />
              <CardContent style={{ height: "15rem" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  className="post-title"
                >
                  <TextTruncate
                    line={2}
                    truncateText="…"
                    text={_.get(data, "title", "")}
                  />
                </Typography>
                <Typography
                  gutterBottom
                  variant="caption"
                  className="post-author"
                >
                  Vào lúc ngày{" "}
                  {moment(_.get(data, "createdDate", new Date())).format("LL")}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  className="post-author"
                >
                  Được đăng bởi{" "}
                  {_.get(data, "createdBy.name", "Văn phòng Đoàn - Hội")}
                </Typography>
                <Typography component="p">
                  <TextTruncate
                    line={3}
                    truncateText="…"
                    text={_.get(data, "shortDescription", "")}
                    className="blog-content"
                  />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <FacebookShareButton url={url} quote={description}>
              <Button size="small" color="primary">
                Chia sẻ
              </Button>
            </FacebookShareButton>
            <Button size="small" color="primary">
              <Link to={`/tin-tuc/chi-tiet/${_.get(data, "slug", "#")}`}>
                Xem thêm
              </Link>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(NewsItem);
