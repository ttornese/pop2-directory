import React from 'react';
import SvgWrapper from './SvgWrapper';

const Backseat = () => (
  <SvgWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1545 96">
      <defs>
        <linearGradient id="a" x2="2000" y1="2000" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFF">
            <animate attributeName="offset" dur="3s" repeatCount="indefinite" values="0;0;0;0;0;0;0;"/>
          </stop>
          <stop offset=".17" stop-color="#E8CAE1">
            <animate attributeName="offset" dur="6s" repeatCount="indefinite" values=".15;.17;.23;.25;.23;.17;.15;"/>
          </stop>
          <stop offset=".27" stop-color="#5A478A">
            <animate attributeName="offset" dur="6s" repeatCount="indefinite" values=".25;.27;.33;.35;.33;.27;.25;"/>
          </stop>
          <stop offset=".37" stop-color="#D2EBE2">
            <animate attributeName="offset" dur="6s" repeatCount="indefinite" values=".35;.37;.48;.5;.48;.37;.35;"/>
          </stop>
          <stop offset=".57" stop-color="#71C2ED">
            <animate attributeName="offset" dur="6s" repeatCount="indefinite" values=".5;.57;.73;.75;.73;.57;.5;"/>
          </stop>
          <stop offset=".77" stop-color="#F37677">
            <animate attributeName="offset" dur="6s" repeatCount="indefinite" values=".75;.77;.98;1;.98;.77;.75;"/>
          </stop>
        </linearGradient>
      </defs>
      <path fill="url(#a)" d="M354.6 45h-108v-6h108c1.7 0 3-1.3 3-3s-1.3-3-3-3h-108v-6h108c5 0 9 4 9 9 0 1.6-.4 3.2-1.2 4.5-1.6 2.7-4.5 4.5-7.8 4.5zm9 15c0-1.6-.4-3.2-1.2-4.5-1.6-2.7-4.5-4.5-7.8-4.5h-108v6h108c1.7 0 3 1.3 3 3s-1.3 3-3 3h-108v6h108c5 0 9-4 9-9zm-9-45h-108v6h108c8.3 0 15 6.7 15 15 0 2.7-.7 5.3-2 7.5-1 1.8-2.4 3.3-4 4.5 1.6 1.2 3 2.7 4 4.5 1.3 2.2 2 4.8 2 7.5 0 8.3-6.7 15-15 15h-108v6h108c11.6 0 21-9.4 21-21 0-4.5-1.4-8.6-3.8-12 2.4-3.4 3.8-7.5 3.8-12 0-11.6-9.4-21-21-21zm132 54h-90c-5 0-9-4-9-9s4-9 9-9h96v18h-6zm0-6v-6h-90c-1.7 0-3 1.3-3 3s1.3 3 3 3h90zm18-27c0-11.6-9.4-21-21-21h-105v6h105c8.3 0 15 6.7 15 15v39h-102c-8.3 0-15-6.7-15-15s6.7-15 15-15h96v-9c0-5-4-9-9-9h-105v6h105c1.7 0 3 1.3 3 3v3h-90c-11.6 0-21 9.4-21 21s9.4 21 21 21h108V36zm552 15h96v18h-96c-5 0-9-4-9-9s4-9 9-9zm90 6h-90c-1.7 0-3 1.3-3 3s1.3 3 3 3h90v-6zm18-21c0-11.6-9.4-21-21-21h-105v6h105c8.3 0 15 6.7 15 15v39h-102c-8.3 0-15-6.7-15-15s6.7-15 15-15h96v-9c0-5-4-9-9-9h-105v6h105c1.7 0 3 1.3 3 3v3h-90c-11.6 0-21 9.4-21 21s9.4 21 21 21h108V36zm-261 0c0 4.5 1.4 8.6 3.8 12-2.4 3.4-3.8 7.5-3.8 12 0 11.6 9.4 21 21 21h108v-6h-108c-8.3 0-15-6.7-15-15 0-2.7.7-5.3 2-7.5 1-1.8 2.4-3.3 4-4.5-1.6-1.2-3-2.7-4-4.5-1.3-2.2-2-4.8-2-7.5 0-8.3 6.7-15 15-15h108v-6h-108c-11.6 0-21 9.4-21 21zm12 0c0 1.6.4 3.2 1.2 4.5 1.6 2.7 4.5 4.5 7.8 4.5h108v-6h-108c-1.7 0-3-1.3-3-3s1.3-3 3-3h108v-6h-108c-5 0-9 4-9 9zm1.2 19.5c-.8 1.3-1.2 2.9-1.2 4.5 0 5 4 9 9 9h108v-6h-108c-1.7 0-3-1.3-3-3s1.3-3 3-3h108v-6h-108c-3.3 0-6.2 1.8-7.8 4.5zM882.6 39h-90c-1.7 0-3-1.3-3-3s1.3-3 3-3h108v-6h-108c-5 0-9 4-9 9s4 9 9 9h90c8.3 0 15 6.7 15 15s-6.7 15-15 15h-108v6h108c11.6 0 21-9.4 21-21s-9.4-21-21-21zm-90 18h90c1.7 0 3 1.3 3 3s-1.3 3-3 3h-108v6h108c5 0 9-4 9-9s-4-9-9-9h-90c-8.3 0-15-6.7-15-15s6.7-15 15-15h108v-6h-108c-11.6 0-21 9.4-21 21s9.4 21 21 21zm396-18h-6v21c0 5 4 9 9 9h105v-6h-105c-1.7 0-3-1.3-3-3V45h108v-6h-108zm0-24h-6v18h114v-6h-108V15zm-12 45V15h-6v45c0 11.6 9.4 21 21 21h105v-6h-105c-8.3 0-15-6.7-15-15zm-666-24v24c0 11.6 9.4 21 21 21h105v-6h-105c-8.3 0-15-6.7-15-15V36c0-8.3 6.7-15 15-15h105v-6h-105c-11.6 0-21 9.4-21 21zm12 0v24c0 5 4 9 9 9h105v-6h-105c-1.7 0-3-1.3-3-3V36c0-1.7 1.3-3 3-3h105v-6h-105c-5 0-9 4-9 9zm120 45h6V15h-6v66zm66.2-56.6c-.7.7-9.9 10.1-10.7 11-3.3 3.6-3.6 3.6-4.5 3.6h-33V15h-6v30h39c3.7 0 5.6-1.9 8.9-5.5.8-.8 10-10.2 10.7-11 3.4-3.7 6.8-7.5 13.3-7.5h42v-6h-42c-9 0-14 5.5-17.7 9.4zM726.6 75c-6.5 0-10-3.8-13.3-7.5-.7-.8-10-10.2-10.7-11-3.3-3.6-5.2-5.5-8.9-5.5h-39v30h6V57h33c.9 0 1.2 0 4.5 3.6.8.9 10 10.3 10.7 11 3.6 4 8.6 9.4 17.8 9.4h42v-6h-42.1zm-8.9-42.5c-.8.8-10 10.2-10.7 11-1.4 1.6-2.9 3.2-4.6 4.5 1.7 1.3 3.2 2.9 4.6 4.5.7.8 10 10.2 10.7 11 3.3 3.6 5.2 5.5 8.9 5.5h42v-6h-42c-.9 0-1.2 0-4.5-3.6-.8-.9-10.9-11.2-11.1-11.4.1-.1 10.3-10.5 11.1-11.4 3.3-3.6 3.6-3.6 4.5-3.6h42v-6h-42c-3.7 0-5.6 1.9-8.9 5.5zm579.9-10.3c-3.6 0-5.5-2.8-5.5-4.5 0-1.7 1.2-2.4 2-2.4 2.5 0 2.2 3.2 5.5 3.2 3 0 4.8-2.2 4.8-4.8 0-3.6-3.2-6.8-7.5-6.8-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1c2.8 0 5.3-1.4 6.7-3.6-.1.1-2 2.7-6 2.7z"/>
    </svg>
  </SvgWrapper>
);

export default Backseat;
