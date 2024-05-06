import React from "react";
import Image from "next/image";


const ContactsSidebar = () => {
  return (
    <aside className="w-full rounded-md bg-[#1E1E1F] border border-white border-opacity-10">
      <div className="flex w-full flex-col items-center pt-10 ">
        {/* My photo */}
        <div className="sidebar__base-info text-white ">
          <Image
            src="/images/my-avatar.png"
            alt="Ricardo Black"
            width={120}
            height={120}
            className="avatar-box aspect-square rounded-xl mb-4 bg-[#373738]"
          />

          <div className="text-xl-center">
            <h3 className="title title--h3 sidebar__name text-xl mb-4">Ricardo Black</h3>
            <div className="p-2 bg-[#2A2A2B] rounded-lg text-xs">Creative Director</div>
          </div>

          <hr class="border-t border-gray-300 my-5"></hr>

          <button className="hidden">
            <span>Show Contacts</span>
            <i className="feathericon-chevron-down" />
          </button>
        </div>

        <div className="sidebar__additional-info js-show">
          <div className="separation d-xl-none" />
          <ul className="details-info">
            {/* Email */}
            <li className="details-info__item">
              <span className="box icon-box">
                <i className="font-icon icon-envelope" />
              </span>
              <div className="contacts-block__info">
                <span className="overhead">Email</span>
                <a
                  className="text-overflow"
                  href="mailto:ricardo@example.com"
                  title="ricardo@example.com"
                >
                  ricardo@example.com
                </a>
              </div>
            </li>
            {/* Phone */}
            <li className="details-info__item">
              <span className="box icon-box">
                <i className="font-icon icon-phone" />
              </span>
              <div className="contacts-block__info">
                <span className="overhead">Phone</span>
                <span className="text-overflow" title="+1 (070) 123-4567">
                  +1 (070) 123-4567
                </span>
              </div>
            </li>
            {/* Birthday */}
            <li className="details-info__item">
              <span className="box icon-box">
                <i className="font-icon icon-calendar" />
              </span>
              <div className="contacts-block__info">
                <span className="overhead">Birthday</span>
                <span className="text-overflow" title="March 12, 1995">
                  March 12, 1995
                </span>
              </div>
            </li>
            {/* Location */}
            <li className="details-info__item">
              <span className="box icon-box">
                <i className="font-icon icon-location" />
              </span>
              <div className="contacts-block__info">
                <span className="overhead">Location</span>
                <span className="text-overflow" title="San-Francisco, USA">
                  San-Francisco, USA
                </span>
              </div>
            </li>
          </ul>
          <div className="separation d-xl-none" />

          {/* Social */}
          <div className="social">
            <a
              className="social__link"
              href="https://www.facebook.com/"
              title="Facebook"
            >
              <i className="feathericon-facebook" />
            </a>
            <a
              className="social__link"
              href="https://www.behance.com/"
              title="Behance"
            >
              <i className="feathericon-twitter" />
            </a>
            <a
              className="social__link"
              href="https://www.linkedin.com/"
              title="LinkedIn"
            >
              <i className="feathericon-instagram" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ContactsSidebar;
