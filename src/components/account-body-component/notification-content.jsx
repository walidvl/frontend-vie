import React, { useState } from "react";

const NotificationsContent = () => {
  const [notificationPreferences, setNotificationPreferences] = useState({
    news: false,
    blog: false,
  });

  const toggleNotificationPreference = (preference) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [preference]: !notificationPreferences[preference],
    });
  };

  return (
<div className="account-notification-category">
  <div className="notification-container">
    <div className="notification-row">
      <div className="account-notification">News Notifications</div>
      <div className="notification-choice">
        <label>with email</label>
        <div class="account-checkbox-wrapper-14">
          <input id="s1-14" type="checkbox" class="switch" />
        </div>
      </div>
      <div className="notification-choice">
        <label>Message in website</label>
        <div class="account-checkbox-wrapper-14">
          <input id="s1-14" type="checkbox" class="switch" />
        </div>
      </div>
    </div>
    <div className="notification-row">
      <div className="account-notification">Blog Notifications</div>
      <div className="notification-choice">
        <label>with email</label>
        <div class="account-checkbox-wrapper-14">
          <input id="s1-14" type="checkbox" class="switch" />
        </div>
      </div>
      <div className="notification-choice">
        <label>Message in website</label>
        <div class="account-checkbox-wrapper-14">
          <input id="s1-14" type="checkbox" class="switch" />
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default NotificationsContent;
