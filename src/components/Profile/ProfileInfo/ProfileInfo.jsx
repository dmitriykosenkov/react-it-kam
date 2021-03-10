import { NavLink } from "react-router-dom";
import Preloader from "../../commons/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from "../../../assets/images/user-photo.webp";
import { Input } from "../../commons/FormControls/FormControls";
import { useState } from "react";
import { Field, reduxForm } from "redux-form";

const ProfileInfo = (props) => {
  const onPhotoChange = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  let [editMode, setEditMode] = useState(false);
  const activateEditMode = () => {
    setEditMode(true);
  };

  const onSubmit = (values) => {
    props.saveProfile(values);
    setEditMode(false);
  };
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <div className={s.descriptionBlock}>
        <div className={s.userPhoto}>
          <img src={props.profile.photos.large || userPhoto} alt="" />
        </div>
        <div>
          {props.isOwner && <input type="file" onChange={onPhotoChange} />}
        </div>
        {!editMode ? (
          <ProfileData
            isOwner={props.isOwner}
            profile={props.profile}
            activateEditMode={activateEditMode}
          />
        ) : (
          <ReduxProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
        )}

        <ProfileStatusWithHook
          isOwner={props.isOwner}
          status={props.status}
          updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
        />
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && (
        <button onClick={props.activateEditMode}>Edit profile</button>
      )}
      <h3>{props.profile.fullName}</h3>
      <div>
        <b>Looking for a job: </b>
        {props.profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>Skills: </b>
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>{props.profile.userId}</div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div className={s.contact}>
              {key}: {props.profile.contacts[key]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <button>Save</button>
      <div>
        <div>
          <b>Full name:</b>
        </div>
        <div>
          <Field name={"fullName"} component={Input} />
        </div>
      </div>
      <div>
        <div>
          <b>Looking for a job: </b>
        </div>
        <div>
          <Field name={"lookingForAJob"} component={Input} type="checkbox" />
        </div>
      </div>
      <div>
        <div>
          <b>Skills: </b>
        </div>
        <div>
          <Field name={"lookingForAJobDescription"} component={Input} />
        </div>
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div className={s.contact}>
              {key}: <Field name={`contacts.${key}`} component={Input} type="text" placeholder={key}/>
            </div>
          );
        })}
      </div>
      
    </form>
  );
};
const ReduxProfileDataForm = reduxForm({ form: "ProfileForm" })(
  ProfileDataForm
);

export default ProfileInfo;
