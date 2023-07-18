import React, { useMemo, useRef, useState } from "react";
import Layout from "../components/Layout";
import ProfilePhoto from "../assets/logo/profile.png";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Profile = () => {
  const options = useMemo(() => countryList().getData(), []);
  const upload = useRef();
  const [profile, setProfile] = useState({
    photo: ProfilePhoto,
    country: { value: "US", label: "United States" },
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const Upload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, photo: URL.createObjectURL(e.target.files[0]) });
    }

    const formData = new FormData();
    formData.append("fileupload", e.target.files[0]);
  };

  return (
    <Layout>
      <div className="auth-form profile">
        <form id="profile">
          <div className="title">Create Profile</div>
          <div className="side">
            <div className="left">
              <div className="photo">
                <img src={profile.photo} />
              </div>
              <div
                className="btn blue-outline"
                onClick={() => upload.current.click()}
              >
                Upload Photo
              </div>
              <input
                ref={upload}
                type="file"
                className="d-none"
                onChange={Upload}
                accept="image/*"
              />
            </div>
            <div className="right">
              <div className="form">
                <div className="label-form">
                  <div className="label">Country *</div>
                  <Select
                    options={options}
                    value={profile.country}
                    onChange={(value) =>
                      setProfile({ ...profile, country: value })
                    }
                  />
                </div>
                <div className="form-group">
                  <div className="label-form">
                    <div className="label">Street Address *</div>
                    <input
                      type="text"
                      placeholder="Enter street Address"
                      value={profile.address}
                      onChange={(e) =>
                        setProfile({ ...profile, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="label-form">
                    <div className="label"></div>
                    <input
                      type="text"
                      placeholder="Apt/Suite (Optional)"
                      value={profile.address2}
                      onChange={(e) =>
                        setProfile({ ...profile, address2: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="label-form">
                    <div className="label">City *</div>
                    <input
                      type="text"
                      value={profile.city}
                      onChange={(e) =>
                        setProfile({ ...profile, city: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="label-form">
                    <div className="label">State/Province *</div>
                    <input
                      type="text"
                      value={profile.state}
                      onChange={(e) =>
                        setProfile({ ...profile, state: e.target.value })
                      }
                    />
                  </div>
                  <div className="label-form">
                    <div className="label">Zip/Postal code *</div>
                    <input
                      type="text"
                      value={profile.zip}
                      onChange={(e) =>
                        setProfile({ ...profile, zip: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="label-form">
                  <div className="label">Phone</div>
                  <PhoneInput
                    country={"us"}
                    value={profile.phone}
                    enableAreaCodes={true}
                    onChange={(value) =>
                      setProfile({ ...profile, phone: value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="btn blue">Create Profile</div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
