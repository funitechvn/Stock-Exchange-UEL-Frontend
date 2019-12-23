import React, { Component } from "react";
import { get } from "app/services/localStoredService";
import config from "app/config";
import _ from "lodash";

export const ImageUrl = (src) => {
  if (_.isEmpty(src)) {
    return null;
  }
  let baseEndPoint = config.apiBaseURL;
  let withNoToken = src.includes('upload-public');
  let isPreview = src.includes('blob');
  let url = withNoToken ? src : `${src}?access_token=${get('token')}`;
  if (src.includes('http')) {
    return src
  }
  return `${baseEndPoint}/${url}`
}

export default class Image extends Component {
  render() {
    const { needUrl = false, ...other } = this.props;
    let src =  _.get(this.props, "src");
    if (_.isEmpty(src)) {
      return null;
    }

    let url = ImageUrl(src)
    let isPreview = src.includes('blob');
    if (!isPreview) {
      return (
        <img  {...other} src={url} />
      )  
    }

    return (     
      <img  {...other} src={`${src}`} />
    )
  }
}