"use client";
import StoreContext from "@/context/store/context";
import { useContext } from "react";
import { EarsT } from "./props";

interface Props {
   ears: EarsT;
}

export default function Ears({ ears }: Props) {
   const { colors } = useContext(StoreContext);

   switch (ears) {
      case 0:
         return <></>;
      case 1:
         return (
            <>
               <path
                  d='M26.5022 161.455C13.9893 158.065 2.10423 168.615 3.9864 181.442L5.63053 192.646C7.08744 202.575 13.9305 210.876 23.3985 214.201L35 218.275L35 163.757L26.5022 161.455Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M16 168.275L22.8944 169.529C25.2719 169.961 27 172.032 27 174.448V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M27 178.529C22.1559 177.911 19.7889 178.392 16 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M229.498 161.455C242.011 158.065 253.896 168.615 252.014 181.442L250.369 192.646C248.913 202.575 242.07 210.876 232.601 214.201L221 218.275L221 163.757L229.498 161.455Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M240 168.275L233.106 169.529C230.728 169.961 229 172.032 229 174.448V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M229 178.529C233.844 177.911 236.211 178.392 240 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 2:
         return (
            <>
               <path
                  d='M222.514 161.46C234.129 157.743 246 166.409 246 178.604L246 180.236C246 191.977 238.412 202.373 227.229 205.951L221 207.945L221 161.945L222.514 161.46Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M33.486 161.46C21.8712 157.743 10 166.409 10 178.604L10 180.236C10 191.977 17.5882 202.373 28.7711 205.951L35 207.945L35 161.945L33.486 161.46Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M240 168.275L238.853 168.484C233.147 169.521 229 174.491 229 180.29V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M229 178.529C233.844 177.911 236.211 178.392 240 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M16 168.275L17.1466 168.484C22.8525 169.521 27 174.491 27 180.29V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M27 178.529C22.1559 177.911 19.7889 178.392 16 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 3:
         return (
            <>
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M251 178.382C251 166.35 239.423 157.705 227.886 161.124L221 163.164L221 214.275L226.809 212.554C229.363 215.947 233.425 218.141 238 218.141C245.732 218.141 252 211.873 252 204.141C252 200.863 250.873 197.848 248.986 195.462C250.29 192.282 251 188.818 251 185.226L251 178.382Z'
                  fill={colors.secondary}
               />
               <path
                  d='M227.886 161.124L228.739 164L228.739 164L227.886 161.124ZM251 178.382L248 178.382L251 178.382ZM221 163.164L218 163.164L218 160.924L220.148 160.288L221 163.164ZM221 214.275L221.852 217.152L218 218.293L218 214.275L221 214.275ZM226.809 212.554L225.956 209.678L227.953 209.086L229.205 210.75L226.809 212.554ZM248.986 195.462L246.633 197.324L245.545 195.948L246.21 194.324L248.986 195.462ZM251 185.226L254 185.226V185.226L251 185.226ZM227.034 158.247C240.493 154.259 254 164.345 254 178.382L248 178.382C248 168.355 238.352 161.152 228.739 164L227.034 158.247ZM220.148 160.288L227.034 158.247L228.739 164L221.852 166.04L220.148 160.288ZM218 214.275L218 163.164L224 163.164L224 214.275L218 214.275ZM227.661 215.43L221.852 217.152L220.148 211.399L225.956 209.678L227.661 215.43ZM229.205 210.75C231.218 213.422 234.408 215.141 238 215.141V221.141C232.443 221.141 227.509 218.472 224.412 214.359L229.205 210.75ZM238 215.141C244.075 215.141 249 210.216 249 204.141H255C255 213.53 247.389 221.141 238 221.141V215.141ZM249 204.141C249 201.563 248.116 199.199 246.633 197.324L251.339 193.601C253.63 196.498 255 200.164 255 204.141H249ZM254 185.226C254 189.216 253.211 193.065 251.762 196.601L246.21 194.324C247.369 191.499 248 188.421 248 185.226L254 185.226ZM254 178.382L254 185.226L248 185.226L248 178.382L254 178.382Z'
                  fill={colors.base}
               />
               <circle cx='239' cy='205.275' r='6' fill={colors.base} />
               <path
                  d='M240 168.275L233.106 169.529C230.728 169.961 229 172.032 229 174.448V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3 177.957C3 166.053 14.3481 157.427 25.8176 160.613L35 163.164V214.275L28.3771 212.436C25.8361 215.972 21.687 218.275 17 218.275C9.26801 218.275 3 212.007 3 204.275C3 201.294 3.93209 198.53 5.52078 196.259C3.89538 192.77 3 188.9 3 184.864V177.957Z'
                  fill={colors.secondary}
               />
               <path
                  d='M25.8176 160.613L26.6205 157.723L25.8176 160.613ZM35 163.164H38V160.884L35.8029 160.274L35 163.164ZM35 214.275L34.1971 217.166L38 218.222V214.275H35ZM28.3771 212.436L29.1801 209.545L27.1626 208.985L25.9408 210.685L28.3771 212.436ZM5.52078 196.259L7.9789 197.979L8.97102 196.561L8.24009 194.992L5.52078 196.259ZM26.6205 157.723C13.2394 154.006 0 164.069 0 177.957H6C6 168.037 15.4567 160.849 25.0147 163.504L26.6205 157.723ZM35.8029 160.274L26.6205 157.723L25.0147 163.504L34.1971 166.055L35.8029 160.274ZM38 214.275V163.164H32V214.275H38ZM27.5742 215.326L34.1971 217.166L35.8029 211.385L29.1801 209.545L27.5742 215.326ZM25.9408 210.685C23.9392 213.471 20.6804 215.275 17 215.275V221.275C22.6937 221.275 27.733 218.473 30.8134 214.186L25.9408 210.685ZM17 215.275C10.9249 215.275 6 210.35 6 204.275H0C0 213.664 7.61116 221.275 17 221.275V215.275ZM6 204.275C6 201.929 6.73145 199.762 7.9789 197.979L3.06266 194.539C1.13272 197.298 0 200.659 0 204.275H6ZM0 184.864C0 189.346 0.994904 193.649 2.80147 197.526L8.24009 194.992C6.79585 191.892 6 188.453 6 184.864H0ZM0 177.957V184.864H6V177.957H0Z'
                  fill={colors.base}
               />
               <path
                  d='M229 178.529C233.844 177.911 236.211 178.392 240 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M16 168.275L22.8944 169.529C25.2719 169.961 27 172.032 27 174.448V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M27 178.529C22.1559 177.911 19.7889 178.392 16 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <circle cx='16' cy='205.275' r='6' fill={colors.base} />
            </>
         );
      case 4:
         return (
            <>
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M241.784 158.862C241.502 160.373 241.642 161.981 242.278 163.505C243.395 166.179 245.767 167.948 248.425 168.412C248.235 169.805 248.403 171.265 248.984 172.656C250.63 176.598 255.004 178.572 259 177.3V178.75C259 191.344 250.293 202.265 238.016 205.071L224 208.275L224 162.275L236.989 159.306C238.608 158.936 240.217 158.796 241.784 158.862Z'
                  fill={colors.secondary}
               />
               <path
                  d='M241.784 158.862L244.733 159.412L245.368 156.009L241.909 155.864L241.784 158.862ZM242.278 163.505L245.047 162.349L245.047 162.349L242.278 163.505ZM248.425 168.412L251.398 168.816L251.787 165.953L248.941 165.456L248.425 168.412ZM248.984 172.656L246.216 173.812L246.216 173.812L248.984 172.656ZM259 177.3H262V173.197L258.09 174.441L259 177.3ZM238.016 205.071L238.685 207.996L238.685 207.996L238.016 205.071ZM224 208.275L221 208.275L221 212.038L224.668 211.2L224 208.275ZM224 162.275L223.332 159.351L221 159.883L221 162.275L224 162.275ZM236.989 159.306L237.658 162.231L237.658 162.231L236.989 159.306ZM238.835 158.311C238.449 160.379 238.642 162.581 239.51 164.661L245.047 162.349C244.642 161.38 244.555 160.367 244.733 159.412L238.835 158.311ZM239.51 164.661C241.037 168.319 244.285 170.734 247.909 171.367L248.941 165.456C247.249 165.161 245.752 164.039 245.047 162.349L239.51 164.661ZM245.452 168.007C245.193 169.915 245.423 171.915 246.216 173.812L251.752 171.5C251.383 170.615 251.278 169.694 251.398 168.816L245.452 168.007ZM246.216 173.812C248.466 179.202 254.445 181.898 259.91 180.159L258.09 174.441C255.564 175.246 252.794 173.995 251.752 171.5L246.216 173.812ZM256 177.3V178.75H262V177.3H256ZM256 178.75C256 189.945 248.261 199.652 237.348 202.147L238.685 207.996C252.326 204.878 262 192.743 262 178.75H256ZM237.348 202.147L223.332 205.351L224.668 211.2L238.685 207.996L237.348 202.147ZM227 208.275L227 162.275L221 162.275L221 208.275L227 208.275ZM224.668 165.2L237.658 162.231L236.321 156.382L223.332 159.351L224.668 165.2ZM237.658 162.231C239.015 161.92 240.356 161.804 241.658 161.859L241.909 155.864C240.077 155.787 238.201 155.952 236.321 156.382L237.658 162.231Z'
                  fill={colors.base}
               />
               <path
                  d='M240 168.275L235.787 169.328C233.561 169.885 232 171.885 232 174.179V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M232 178.529C236.844 177.911 239.211 178.392 243 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M25.0108 159.306C13.7414 156.73 3 165.294 3 176.854L3 178.75C3 191.344 11.7066 202.265 23.9837 205.071L38 208.275L38 162.275L25.0108 159.306Z'
                  fill={colors.secondary}
                  stroke={colors.base}
                  strokeWidth='6'
               />
               <path
                  d='M19 168.275L25.8944 169.529C28.2719 169.961 30 172.032 30 174.448V195.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M30 178.529C25.1559 177.911 22.7889 178.392 19 180.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 5:
         return (
            <>
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.2792 174.439C11.7764 165.046 20.7084 157.371 29.7675 160.27L35.0001 161.944L35.0001 207.944L16.6764 182.64C14.9169 180.21 13.7532 177.401 13.2792 174.439ZM242.721 174.439C244.224 165.046 235.292 157.371 226.233 160.27L221 161.944V207.944L239.324 182.64C241.083 180.21 242.247 177.401 242.721 174.439Z'
                  fill={colors.secondary}
               />
               <path
                  d='M29.7675 160.27L30.6819 157.413L29.7675 160.27ZM13.2792 174.439L10.3169 174.913L10.3169 174.913L13.2792 174.439ZM35.0001 161.944L38.0001 161.944L38.0001 159.755L35.9144 159.087L35.0001 161.944ZM35.0001 207.944L32.5703 209.704L38.0001 217.202L38.0001 207.944L35.0001 207.944ZM16.6764 182.64L19.1063 180.881L19.1063 180.881L16.6764 182.64ZM226.233 160.27L227.147 163.127L227.147 163.127L226.233 160.27ZM242.721 174.439L245.683 174.913L245.683 174.913L242.721 174.439ZM221 161.944L220.086 159.087L218 159.755V161.944H221ZM221 207.944H218V217.202L223.43 209.704L221 207.944ZM239.324 182.64L241.754 184.4L241.754 184.4L239.324 182.64ZM30.6819 157.413C19.4928 153.832 8.46078 163.312 10.3169 174.913L16.2415 173.965C15.0921 166.781 21.924 160.91 28.8532 163.127L30.6819 157.413ZM35.9144 159.087L30.6819 157.413L28.8532 163.127L34.0858 164.802L35.9144 159.087ZM38.0001 207.944L38.0001 161.944L32.0001 161.944L32.0001 207.944L38.0001 207.944ZM14.2466 184.4L32.5703 209.704L37.4299 206.185L19.1063 180.881L14.2466 184.4ZM10.3169 174.913C10.8651 178.339 12.2112 181.589 14.2466 184.4L19.1063 180.881C17.6225 178.832 16.6412 176.463 16.2415 173.965L10.3169 174.913ZM227.147 163.127C234.076 160.91 240.908 166.781 239.759 173.965L245.683 174.913C247.539 163.312 236.507 153.832 225.318 157.413L227.147 163.127ZM221.914 164.802L227.147 163.127L225.318 157.413L220.086 159.087L221.914 164.802ZM224 207.944V161.944H218V207.944H224ZM236.894 180.881L218.57 206.185L223.43 209.704L241.754 184.4L236.894 180.881ZM239.759 173.965C239.359 176.463 238.378 178.832 236.894 180.881L241.754 184.4C243.789 181.589 245.135 178.339 245.683 174.913L239.759 173.965Z'
                  fill={colors.base}
               />
               <path
                  d='M233 167.275L231.853 167.484C226.147 168.521 222 173.491 222 179.29V194.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M222 177.529C226.844 176.911 229.211 177.392 233 179.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M23 166.275L24.1466 166.484C29.8525 167.521 34 172.491 34 178.29V193.775'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M34 176.529C29.1559 175.911 26.7889 176.392 23 178.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
      case 6:
         return (
            <>
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18.3347 172.787C16.866 163.608 25.9666 156.331 34.5981 159.784C34.8424 159.881 35.006 160.114 35.0156 160.377L36.9857 214.555C36.9917 214.719 36.8107 214.821 36.6735 214.732C29.5173 210.064 24.5002 202.754 22.7194 194.398L18.9999 176.944L18.3347 172.787ZM237.664 172.795C239.133 163.612 230.029 156.333 221.394 159.787C221.154 159.883 220.991 160.11 220.977 160.368L218.021 214.561C218.012 214.724 218.189 214.831 218.329 214.747C226.092 210.089 231.571 202.417 233.458 193.563L237 176.944L237.664 172.795Z'
                  fill={colors.secondary}
               />
               <path
                  d='M34.5981 159.784L35.7122 156.998L35.7122 156.998L34.5981 159.784ZM18.3347 172.787L21.2971 172.313L21.2971 172.313L18.3347 172.787ZM35.0156 160.377L38.0136 160.268L38.0136 160.268L35.0156 160.377ZM36.9857 214.555L39.9837 214.446L39.9837 214.446L36.9857 214.555ZM36.6735 214.732L38.3123 212.219L38.3123 212.219L36.6735 214.732ZM22.7194 194.398L25.6535 193.772L22.7194 194.398ZM18.9999 176.944L16.0376 177.418L16.0497 177.494L16.0658 177.57L18.9999 176.944ZM221.394 159.787L222.508 162.572L222.508 162.572L221.394 159.787ZM237.664 172.795L240.626 173.269L240.626 173.269L237.664 172.795ZM220.977 160.368L217.981 160.205L217.981 160.205L220.977 160.368ZM218.021 214.561L221.016 214.724L221.016 214.724L218.021 214.561ZM218.329 214.747L216.786 212.174L216.786 212.174L218.329 214.747ZM233.458 193.563L230.524 192.938L230.524 192.938L233.458 193.563ZM237 176.944L239.934 177.57L239.95 177.494L239.962 177.418L237 176.944ZM35.7122 156.998C24.9172 152.68 13.5355 161.781 15.3724 173.261L21.2971 172.313C20.1965 165.435 27.0159 159.982 33.4839 162.569L35.7122 156.998ZM38.0136 160.268C37.9609 158.819 37.0587 157.537 35.7122 156.998L33.4839 162.569C32.626 162.226 32.0512 161.409 32.0176 160.486L38.0136 160.268ZM39.9837 214.446L38.0136 160.268L32.0176 160.486L33.9877 214.664L39.9837 214.446ZM35.0347 217.244C37.2089 218.662 40.078 217.04 39.9837 214.446L33.9877 214.664C33.9053 212.397 36.4125 210.98 38.3123 212.219L35.0347 217.244ZM19.7853 195.023C21.7314 204.154 27.2142 212.144 35.0347 217.244L38.3123 212.219C31.8204 207.985 27.269 201.353 25.6535 193.772L19.7853 195.023ZM16.0658 177.57L19.7853 195.023L25.6535 193.772L21.934 176.319L16.0658 177.57ZM15.3724 173.261L16.0376 177.418L21.9622 176.47L21.2971 172.313L15.3724 173.261ZM222.508 162.572C228.979 159.984 235.803 165.439 234.701 172.322L240.626 173.269C242.464 161.785 231.078 152.682 220.28 157.001L222.508 162.572ZM223.972 160.532C223.923 161.439 223.352 162.235 222.508 162.572L220.28 157.001C218.956 157.531 218.059 158.781 217.981 160.205L223.972 160.532ZM221.016 214.724L223.972 160.532L217.981 160.205L215.025 214.397L221.016 214.724ZM216.786 212.174C218.708 211.021 221.139 212.486 221.016 214.724L215.025 214.397C214.885 216.962 217.67 218.641 219.873 217.319L216.786 212.174ZM230.524 192.938C228.811 200.978 223.835 207.945 216.786 212.174L219.873 217.319C228.349 212.234 234.332 203.856 236.392 194.188L230.524 192.938ZM234.066 176.319L230.524 192.938L236.392 194.188L239.934 177.57L234.066 176.319ZM234.701 172.322L234.038 176.47L239.962 177.418L240.626 173.269L234.701 172.322Z'
                  fill={colors.base}
               />
               <path
                  d='M25 169.275V169.275C30.3505 170.464 34.2896 175.143 34.4655 180.621L35 197.275'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M232.618 169.963V169.963C227.164 170.512 222.7 174.693 221.879 180.112L219.382 196.587'
                  stroke={colors.base}
                  strokeWidth='3'
               />
               <path
                  d='M221.429 204.521C226.323 203.648 230.997 206.907 231.87 211.801C232.742 216.694 229.483 221.369 224.59 222.241C221.31 222.826 218.129 221.555 216.125 219.18'
                  stroke={colors.base}
                  strokeWidth='3'
               />
            </>
         );
   }
}
