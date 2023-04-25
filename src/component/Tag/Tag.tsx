import React from "react";
import { ITagProps } from "./Tag.type";
import styles from './Tag.module.scss'
import { Images } from "../../utils/images";

const Tag = ({
  label,
  isCheckbox,
  isImage,
  isCancel,
  isNumber,
  tagStyle = styles.tagContainer,
  labelStyle = styles.labelName,
  checkboxStyle = styles.checkbox,
  numberStyle = styles.number,
  cancelStyle = styles.cancel,
  imageStyle = styles.image
}: ITagProps) => {
  return (
    <div className={tagStyle}>
      {
        isCheckbox && <input className={checkboxStyle} type="checkbox" />
      }
      {
        isImage && <img src={isImage} className={imageStyle}/>
      }
      <span className={labelStyle}>{label}</span>
      {
        isCancel && <img src={Images.labelCross} className={cancelStyle} />
      }
      {
        isNumber && <span className={numberStyle}>{isNumber}</span>
      }
    </div>
  )
};

export default Tag;
