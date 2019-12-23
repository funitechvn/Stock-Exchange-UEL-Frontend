import React, { Component } from "react";
import _ from "lodash";
import classnames from "classnames";
import {
  withStyles,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Tooltip,
  Chip,
  IconButton,
  CardActionArea,
  Typography
} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import ShareIconButton from "app/modules/libs/ShareIcon";
import { Badge } from 'reactstrap';

function getNameOfActivity(belongTo) {
  if (_.get(belongTo, "type", "").includes("FACULTY")) {
    return _.get(belongTo, "facultyName")
  }
  if (_.get(belongTo, "type", "").includes("CLASS")) {
    return _.get(belongTo, "className")
  }
  if (_.get(belongTo, "type", "").includes("CLUB")) {
    return _.get(belongTo, "clubName")
  }
  if (_.get(belongTo, "type", "").includes("ADMIN_YOUTH_UNION")) {
    return "Đoàn trường"
  }
  if (_.get(belongTo, "type", "").includes("ADMIN_STUDENTS_ASSOCIATION")) {
    return "Hội sinh viên"
  }
}

const styles = theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: "auto",
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class ActivitesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      share: false
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleShareClick = () => {
    this.setState(state => ({ share: !state.share }));
  };

  handleRegisterActivities = (e, id) => {
    if (e) e.preventDefault();
    this.props.actions.registerActivities({ id });
  };

  handleLoveActivities = (e, id) => {
    if (e) e.preventDefault();
    this.props.actions.loveActivities({ id });
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      cover,
      shortDescription,
      description,
      id,
      slug,
      happendDate,
      location,
      usersRegister,
      belongTo
    } = this.props.data;

    return (
      <Card className={classes.card}>
        <Link
          to={`/hoat-dong/chi-tiet/${slug}`}
          style={{ textDecoration: "none", color: "white" }}
          title={name}
        >
          <CardActionArea>
            <CardMedia className={classes.media} image={cover} title={name} />
            <CardContent style={{ height: "18rem" }}>
              <Badge color="primary" pill>{getNameOfActivity(belongTo)}</Badge>
              <Typography gutterBottom variant="h5" component="h2">
                <TextTruncate line={1} truncateText="…" text={name} />
              </Typography>
              <Typography variant="overline" gutterBottom>
                {moment(happendDate).format("LLLL")}
                <br />
                <TextTruncate line={1} truncateText="…" text={location} />
              </Typography>

              <Typography component="p">
                <TextTruncate
                  line={3}
                  truncateText="…"
                  text={shortDescription}
                />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Tooltip title="Yêu thích hoạt động">
            <IconButton
              aria-label="Yêu thích hoạt động này"
              onClick={e => this.handleLoveActivities(e, id)}
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Chia sẽ hoạt động">
            <IconButton aria-label="Share" onClick={this.handleShareClick}>
              <ShareIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Số lượng đăng ký">
            <Chip
              label={`${usersRegister.length} lượt đăng ký`}
              className={classes.chip}
              onClick={e => this.handleRegisterActivities(e, id)}
            />
          </Tooltip>

          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Thông tin chi tiết</Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
        <Collapse in={this.state.share} timeout="auto" unmountOnExit>
          <CardContent>
            <ShareIconButton
              url={`/hoat-dong/chi-tiet/${slug}`}
              title={name}
              description={shortDescription}
            />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ActivitesItem);
