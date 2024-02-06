import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import ProfileContent from "../account-body-component/profile-content";
import NotificationsContent from "../account-body-component/notification-content";

const Myaccount = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleLinkClick = (tabName, e) => {
    e.preventDefault();
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileContent />;
      case 'notification':
        return <NotificationsContent />;
        case 'saved':
          return <NotificationsContent />;
          case 'usage':
            return <NotificationsContent />;
            case 'logout':
              return <NotificationsContent />;
      // ... other cases ...
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="account-wrapper">
      <div className="account-side-bar mt-4">
        <nav className="account-side-menu">
          <ul className="account-nav">

        <li className={activeTab === 'profile' ? 'account-active' : ''}>
          <a href="#/" onClick={(e) => handleLinkClick('profile', e)}>
            <i className="account-icon fa fa-user"></i>
            <span className="account-title">Personal info</span>
          </a>
        </li>
        <li className={activeTab === 'notification' ? 'account-active' : ''}>
          <a href="#/" onClick={(e) => handleLinkClick('notification', e)}>
            <i className="account-icon fa fa-cog"></i>
            <span className="account-title">Notifications</span>
          </a>
        </li>
        <li className={activeTab === 'logout' ? 'account-active' : ''}>
          <a href="#/" onClick={(e) => handleLinkClick('saved', e)}>
            <i className="account-icon fa fa-folder"></i>
            <span className="account-title">Saved</span>
          </a>
        </li>
        <li className={activeTab === 'logout' ? 'account-active' : ''}>
          <a href="#/" onClick={(e) => handleLinkClick('usage', e)}>
            <i className="account-icon fa fa-user-secret"></i>
            <span className="account-title">Term of usage</span>
          </a>
        </li>
        {/* ... other list items with 'account-' prefixed class names ... */}
        <li className={activeTab === 'logout' ? 'account-active' : ''}>
          <a href="#/" onClick={(e) => handleLinkClick('logout', e)}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="account-title">logout</span>
          </a>
        </li>
        </ul>
        </nav>
      </div>

      <div className="account-content-panel">
        {renderContent()}
      </div>
      </div>
  );
};

function CountrySelector({ onChange }) {
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = value => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
}

export default Myaccount;