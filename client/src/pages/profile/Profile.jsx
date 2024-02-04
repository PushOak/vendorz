import React, { useState } from "react";
import "./profile.scss";
import PageMenu from "../../components/pageMenu/PageMenu";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";

export default function Profile() {
    const dispatch = useDispatch();
    const { isLoading, user } = useSelector(
        (state) => state.auth
    );

    const initialState = {
        name: user?.name || "",
        email: user?.name || "",
        phone: user?.phone || "",
        role: user?.role || "",
        address: user?.address || {},
    };

    const [profile, setProfile] = useState(initialState);

    const handleImageChange = () => { };

    const handleInputChange = () => { };

    const saveProfile = async () => { };

    return (
        <>
            <section>
                <div className="container">
                    <PageMenu />
                    <h2>Profile</h2>
                    <div className="--flex-start profile">
                        <Card className={"card"}>
                            {!isLoading && (
                                <>
                                    <div className="profile-photo">
                                        <h2>Profile Image</h2>
                                    </div>
                                    <form onSubmit={saveProfile}>
                                        <p>
                                            <label>Change Photo:</label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="image"
                                                onChange={handleImageChange}
                                            />
                                        </p>
                                        <p>
                                            <label>Name:</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={profile?.name}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                        <p>
                                            <label>Email:</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={profile?.email}
                                                onChange={handleInputChange}
                                                disabled
                                            />
                                        </p>
                                        <p>
                                            <label>Phone:</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={profile?.phone}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                        <p>
                                            <label>Address:</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={profile?.address?.address}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                        <p>
                                            <label>State:</label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={profile?.address?.state}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                        <p>
                                            <label>Country:</label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={profile?.address?.country}
                                                onChange={handleInputChange}
                                            />
                                        </p>
                                        <button className="--btn --btn-primary --btn-block">Update Profile</button>
                                    </form>
                                </>
                            )}
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};
