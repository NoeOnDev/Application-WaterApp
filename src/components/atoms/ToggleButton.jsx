import PropTypes from 'prop-types';

export function ToggleButton({ isActive, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className={`w-12 h-12 rounded-full text-white font-bold focus:outline-none flex items-center justify-center`}
        >
            {isActive ? (
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4349 19.9775L13.4747 19.4791L13.4349 19.9775ZM11.7155 19.4863L12.2035 19.3776L11.7155 19.4863ZM13.9404 6.21305L14.2222 5.80003L13.9404 6.21305ZM20.5 13C20.5 9.41015 17.5899 6.5 14 6.5V5.5C18.1421 5.5 21.5 8.85786 21.5 13H20.5ZM14 19.5C17.5899 19.5 20.5 16.5899 20.5 13H21.5C21.5 17.1421 18.1421 20.5 14 20.5V19.5ZM13.4747 19.4791C13.6479 19.4929 13.8231 19.5 14 19.5V20.5C13.7965 20.5 13.5947 20.4919 13.3951 20.4759L13.4747 19.4791ZM13.2135 17.6509C15.1776 16.5315 16.5 14.4196 16.5 11.9995H17.5C17.5 14.7933 15.9721 17.2297 13.7087 18.5197L13.2135 17.6509ZM16.5 11.9995C16.5 9.76698 15.375 7.79713 13.6586 6.62607L14.2222 5.80003C16.1999 7.14942 17.5 9.42255 17.5 11.9995H16.5ZM13.3951 20.4759C12.8671 20.4338 12.4103 20.3987 12.0806 20.3209C11.7653 20.2464 11.3352 20.0786 11.2275 19.595L12.2035 19.3776C12.1761 19.2543 12.0593 19.2884 12.3104 19.3476C12.5472 19.4036 12.91 19.434 13.4747 19.4791L13.3951 20.4759ZM13.7087 18.5197C13.0872 18.874 12.6637 19.1164 12.3998 19.3123C12.2677 19.4104 12.2131 19.4702 12.1949 19.4966C12.1858 19.5098 12.2216 19.4586 12.2035 19.3776L11.2275 19.595C11.1693 19.3338 11.251 19.1041 11.3715 18.9292C11.4829 18.7675 11.6415 18.6298 11.8037 18.5094C12.1284 18.2683 12.6178 17.9904 13.2135 17.6509L13.7087 18.5197ZM14 6.5C14.1966 6.5 14.3351 6.35807 14.3744 6.21479C14.4123 6.07668 14.3702 5.90097 14.2222 5.80003L13.6586 6.62607C13.4166 6.46096 13.3473 6.17873 13.4101 5.95013C13.4742 5.71637 13.6895 5.5 14 5.5V6.5Z" fill="#222222" />
                    <path d="M7.4 11.2L7.4 11.2C7.50137 11.5041 7.55206 11.6562 7.60276 11.7225C7.80288 11.9843 8.19712 11.9843 8.39724 11.7225C8.44794 11.6562 8.49863 11.5041 8.6 11.2L8.6 11.2C8.68177 10.9547 8.72266 10.832 8.77555 10.721C8.97291 10.3067 9.30672 9.97291 9.72099 9.77555C9.83201 9.72266 9.95468 9.68177 10.2 9.6L10.2 9.6C10.5041 9.49863 10.6562 9.44794 10.7225 9.39724C10.9843 9.19712 10.9843 8.80288 10.7225 8.60276C10.6562 8.55206 10.5041 8.50137 10.2 8.4L10.2 8.4C9.95468 8.31822 9.83201 8.27734 9.72099 8.22445C9.30672 8.02709 8.97291 7.69329 8.77555 7.27901C8.72266 7.16799 8.68177 7.04532 8.6 6.8C8.49863 6.49588 8.44794 6.34382 8.39724 6.2775C8.19712 6.01569 7.80288 6.01569 7.60276 6.2775C7.55206 6.34382 7.50137 6.49588 7.4 6.8C7.31823 7.04532 7.27734 7.16799 7.22445 7.27901C7.02709 7.69329 6.69329 8.02709 6.27901 8.22445C6.16799 8.27734 6.04532 8.31823 5.8 8.4C5.49588 8.50137 5.34382 8.55206 5.2775 8.60276C5.01569 8.80288 5.01569 9.19712 5.2775 9.39724C5.34382 9.44794 5.49588 9.49863 5.8 9.6C6.04532 9.68177 6.16799 9.72266 6.27901 9.77555C6.69329 9.97291 7.02709 10.3067 7.22445 10.721C7.27734 10.832 7.31822 10.9547 7.4 11.2Z" stroke="#222222" />
                </svg>
            ) : (
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3.5" stroke="#FFFF00" />
                    <path d="M12 5V3" stroke="#FFFF00" strokeLinecap="round" />
                    <path d="M12 21V19" stroke="#FFFF00" strokeLinecap="round" />
                    <path d="M16.9498 7.04996L18.364 5.63574" stroke="#FFFF00" strokeLinecap="round" />
                    <path d="M5.63608 18.3644L7.05029 16.9502" stroke="#FFFF00" strokeLinecap="round" />
                    <path d="M19 12L21 12" stroke="#FFFF00" strokeLinecap="round" />
                    <path d="M3 12L5 12" stroke="#FFFF00" strokeLinecap="round" />
                    <path d="M16.9498 16.95L18.364 18.3643" stroke="#FFFF00" strokeLinecap="round" />
                    <path d="M5.63608 5.63559L7.05029 7.0498" stroke="#FFFF00" strokeLinecap="round" />
                </svg>

            )}
        </button>
    );
}

ToggleButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};