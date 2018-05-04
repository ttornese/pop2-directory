import React from 'react';
import SvgWrapper from './SvgWrapper';

const Porsche = () => (
  <SvgWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1545 96">
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
      <path fill="url(#a)" d="M1122.6 51h108v6h-108c-1.7 0-3 1.3-3 3s1.3 3 3 3h108v6h-108c-5 0-9-4-9-9 0-1.6.4-3.2 1.2-4.5 1.6-2.7 4.5-4.5 7.8-4.5zm-9-15c0 1.6.4 3.2 1.2 4.5 1.6 2.7 4.5 4.5 7.8 4.5h108v-6h-108c-1.7 0-3-1.3-3-3s1.3-3 3-3h108v-6h-108c-4.9 0-9 4-9 9zm-12 0c0 4.5 1.4 8.6 3.8 12-2.4 3.4-3.8 7.5-3.8 12 0 11.6 9.4 21 21 21h108v-6h-108c-8.3 0-15-6.7-15-15 0-2.7.7-5.3 2-7.5 1-1.8 2.4-3.3 4-4.5-1.6-1.2-3-2.7-4-4.5-1.3-2.2-2-4.8-2-7.5 0-8.3 6.7-15 15-15h108v-6h-108c-11.6 0-21 9.4-21 21zm-248.9 0v24c0 5 4 9 9 9h105v-6h-105c-1.7 0-3-1.3-3-3V36c0-1.7 1.3-3 3-3h105v-6h-105c-4.9 0-9 4-9 9zm9-21c-11.6 0-21 9.4-21 21v24c0 11.6 9.4 21 21 21h105v-6h-105c-8.3 0-15-6.7-15-15V36c0-8.3 6.7-15 15-15h105v-6h-105zM558.6 36v24c0 5-4 9-9 9h-84c-5 0-9-4-9-9V36c0-5 4-9 9-9h84c5 0 9 4 9 9zm-6 24V36c0-1.7-1.3-3-3-3h-84c-1.7 0-3 1.3-3 3v24c0 1.7 1.3 3 3 3h84c1.7 0 3-1.3 3-3zm18-24v24c0 11.6-9.4 21-21 21h-84c-11.6 0-21-9.4-21-21V36c0-11.6 9.4-21 21-21h84c11.6 0 21 9.4 21 21zm-6 24V36c0-8.3-6.7-15-15-15h-84c-8.3 0-15 6.7-15 15v24c0 8.3 6.7 15 15 15h84c8.3 0 15-6.7 15-15zm252-21h-90c-1.7 0-3-1.3-3-3s1.3-3 3-3h108v-6h-108c-5 0-9 4-9 9s4 9 9 9h90c8.3 0 15 6.7 15 15s-6.7 15-15 15h-108v6h108c11.6 0 21-9.4 21-21s-9.4-21-21-21zm-90 18h90c1.7 0 3 1.3 3 3s-1.3 3-3 3h-108v6h108c5 0 9-4 9-9s-4-9-9-9h-90c-8.3 0-15-6.7-15-15s6.7-15 15-15h108v-6h-108c-11.6 0-21 9.4-21 21s9.4 21 21 21zm-42-12h-96V27h96c5 0 9 4 9 9s-4 9-9 9zm-90-6h90c1.7 0 3-1.3 3-3s-1.3-3-3-3h-90v6zm48 36c-6.5 0-10-3.8-13.3-7.5-.7-.8-10-10.2-10.7-11-3.3-3.6-5.2-5.5-8.9-5.5h-21v30h6V57h15c.9 0 1.2 0 4.5 3.6.8.9 10 10.3 10.7 11 3.6 4 8.6 9.4 17.8 9.4h60v-6h-60.1zm6-12h-6c-.9 0-1.2 0-4.5-3.6-.7-.8-1.4-1.6-2.2-2.4h48.8c11.6 0 21-9.4 21-21s-9.4-21-21-21h-108v66h6V21h102c8.3 0 15 6.7 15 15s-6.7 15-15 15h-63c.5.5 11.3 11.6 12.1 12.5 3.3 3.6 5.2 5.5 8.9 5.5h60v-6h-54.1zm-228-18h-96V27h96c5 0 9 4 9 9s-4 9-9 9zm-90-6h90c1.7 0 3-1.3 3-3s-1.3-3-3-3h-90v6zm90-24h-108v45c0 11.6 9.4 21 21 21h45v-6h-45c-8.3 0-15-6.7-15-15V21h102c8.3 0 15 6.7 15 15s-6.7 15-15 15h-96v9c0 5 4 9 9 9h45v-6h-45c-1.7 0-3-1.3-3-3v-3h90c11.6 0 21-9.4 21-21s-9.4-21-21-21zm824.5 7.2c-3.6 0-5.5-2.8-5.5-4.5s1.2-2.4 2-2.4c2.5 0 2.2 3.2 5.5 3.2 3 0 4.8-2.2 4.8-4.8 0-3.6-3.2-6.8-7.5-6.8-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1c2.8 0 5.3-1.4 6.7-3.6-.1.1-2 2.7-6 2.7zM993.7 45h84c3.3 0 6.2-1.8 7.8-4.5.8-1.3 1.2-2.9 1.2-4.5V15h-6v21c0 1.7-1.3 3-3 3h-84c-1.7 0-3-1.3-3-3V15h-6v21c0 1.6.4 3.2 1.2 4.5 1.6 2.7 4.5 4.5 7.8 4.5zm-12.9-1.5c-1.3-2.2-2-4.8-2-7.5V15h-6v21c0 4.5 1.4 8.6 3.8 12-2.4 3.4-3.8 7.5-3.8 12v21h6V60c0-2.7.7-5.3 2-7.5 1-1.8 2.4-3.3 4-4.5-1.6-1.2-3-2.7-4-4.5zm96.9 7.5h-84c-3.3 0-6.2 1.8-7.8 4.5-.8 1.3-1.2 2.9-1.2 4.5v21h6V60c0-1.7 1.3-3 3-3h84c1.7 0 3 1.3 3 3v21h6V60c0-1.6-.4-3.2-1.2-4.5-1.5-2.7-4.4-4.5-7.8-4.5zm15-15c0 2.7-.7 5.3-2 7.5-1 1.8-2.4 3.3-4 4.5 1.6 1.2 3 2.7 4 4.5 1.3 2.2 2 4.8 2 7.5v21h6V60c0-4.5-1.4-8.6-3.8-12 2.4-3.4 3.8-7.5 3.8-12V15h-6v21z" class="gradientfill"/>
    </svg>
  </SvgWrapper>
);

export default Porsche;
