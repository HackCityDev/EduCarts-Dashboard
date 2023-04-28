const UpDownPointer = "HiChevronUpDown";
const ProfileIcon = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z"
      stroke="#E8E8E8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.36906 10.92C3.55406 12.135 3.55406 14.115 5.36906 15.3225C7.43156 16.7025 10.8141 16.7025 12.8766 15.3225C14.6916 14.1075 14.6916 12.1275 12.8766 10.92C10.8216 9.5475 7.43906 9.5475 5.36906 10.92Z"
      stroke="#E8E8E8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const LogoutIcon = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.8672 10.0803C12.2805 5.28031 14.7472 3.32031 20.1472 3.32031H20.3205C26.2805 3.32031 28.6672 5.70698 28.6672 11.667V20.3603C28.6672 26.3203 26.2805 28.707 20.3205 28.707H20.1472C14.7872 28.707 12.3205 26.7736 11.8805 22.0536"
      stroke="#DD7076"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.9995 16H4.82617"
      stroke="#DD7076"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.80065 11.5332L3.33398 15.9999L7.80065 20.4665"
      stroke="#DD7076"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ClosePointer = "IoCloseOutline";
export { UpDownPointer, ProfileIcon, ClosePointer, LogoutIcon };
