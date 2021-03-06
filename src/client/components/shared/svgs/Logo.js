import React from 'react';

import SvgWrapper from './SvgWrapper';

const Logo = () => (
  <SvgWrapper excludeMargin>
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 3030 600">
      <linearGradient id="a" x1="-200%" y1="300%" x2="200%" y2="-100%">
        <stop offset=".394" stopColor="#A69ACA">
          <animate attributeName="offset" values="0;.5;" dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".644" stopColor="#776FA4">
          <animate attributeName="offset" values=".25;.75;" dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".894" stopColor="#A69ACA">
          <animate attributeName="offset" values=".5;1;" dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".947" stopColor="#776FA4">
          <animate attributeName="offset" values=".75;1;" dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset="1" stopColor="#A69ACA">
          <animate attributeName="offset" values="1;" dur="4s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      <path d="M1869.4 367.6H1578l-19.4 19.4v-38.8H1869c16.1 0 29.2-13.1 29.2-29.2s-13.1-29.2-29.2-29.2h-329.8v135.8l-19.4 19.4V270.4H1869c26.8 0 48.6 21.8 48.6 48.6.4 26.8-21.3 48.6-48.2 48.6zm495.8-19.4H1957V319c0-16.1 13.1-29.2 29.2-29.2h329.9c26.8 0 48.6-21.8 48.6-48.6s-21.8-48.6-48.6-48.6H1150l-19.4 19.4h1183.5c16.1 0 29.2 13.1 29.2 29.2s-13.1 29.2-29.2 29.2h-327.9c-26.8 0-48.6 21.8-48.6 48.6v48.6h407.7l19.9-19.4zM1490.3 319c0 26.8-21.8 48.6-48.6 48.6h-311.1c-26.8 0-48.6-21.8-48.6-48.6s21.8-48.6 48.6-48.6H1441c27.5 0 49.3 21.8 49.3 48.6zm-19.5 0c0-16.1-13.1-29.2-29.2-29.2h-311c-16.1 0-29.2 13.1-29.2 29.2s13.1 29.2 29.2 29.2H1441c16.8 0 29.8-13.1 29.8-29.2zm-379.1-77.8c0-26.8-21.8-48.6-48.6-48.6H673.8v126.1c0 26.8 21.8 48.6 48.6 48.6h145.5l19.4-19.4h-165c-16.1 0-29.2-13.1-29.2-29.2V212h349.7c16.1 0 29.2 13.1 29.2 29.2s-13.1 29.2-29.2 29.2H712.6v38.8l19.4-19.4h310.8c27.1 0 48.9-21.7 48.9-48.6z" fill="url(#a)">
        <animate attributeName="opacity" values="1;1;.95;.9;.8;.6;.3;0;.3;.6;.8;.9;.95;1;1;" dur="6s" repeatCount="indefinite"/>
      </path>
      <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1069.653" y1="700.736" x2="1826.491" y2="-56.101">
        <stop offset="0" stopColor="#d1c9dc"/>
        <stop offset=".443" stopColor="#ab9fc6"/>
        <stop offset="1" stopColor="#dfd8eb"/>
      </linearGradient>
      <path d="M1986.1 309.3c-5.4 0-9.7 4.4-9.7 9.7v9.7H2384l-19.4 19.4H1957V319c0-16.1 13.1-29.2 29.2-29.2h329.9c26.8 0 48.6-21.8 48.6-48.6s-21.8-48.6-48.6-48.6H1228h19.4-97.4l19.4-19.4h77.6-19.4 1086.5c37.6 0 68.1 30.5 68.1 68.1 0 37.6-30.5 68.1-68.1 68.1h-328zm340.3 58.3h19.4l-19.4 19.4h-68 19.4H1918v-20.4c-12.4 12.6-29.6 20.5-48.6 20.5h-310.8l19.4-19.4h291c26.8 0 48.6-21.8 48.6-48.6s-21.8-48.6-48.6-48.6h-349.2v174.6l-19.4 19.4V353.8c-11.9 19.8-33.5 33.1-58.3 33.1h-311.5c-37.6 0-68.1-30.5-68.1-68.1 0-4.4.5-8.8 1.3-13-6.5 2.1-13.5 3.2-20.7 3.2H712.6l19.4-19.4h310.8c26.8 0 48.6-21.8 48.6-48.6s-21.8-48.6-48.6-48.6h-369v126.1c0 26.8 21.8 48.6 48.6 48.6h145.5l-19.4 19.4H722.3c-37.6 0-68.1-30.5-68.1-68.1V172.9h388.6c37.6 0 68.1 30.5 68.1 68.1 0 4.4-.5 8.8-1.3 13 6.5-2.1 13.5-3.2 20.7-3.2h310.4c24.8 0 46.4 13.3 58.3 33.1v-33.1h368.6c24.8 0 46.4 13.3 58.3 33.1 11.9-19.8 33.5-33.1 58.3-33.1h329.9c5.4 0 9.7-4.4 9.7-9.7 0-5.4-4.4-9.7-9.7-9.7H1111.2l19.4-19.4h1183.5c16.1 0 29.2 13.1 29.2 29.2s-13.1 29.2-29.2 29.2h-327.9c-26.8 0-48.6 21.8-48.6 48.6v48.6h339.7-19.4 68.5zM1490.3 319c0-26.8-21.8-48.6-48.6-48.6h-311.1c-26.8 0-48.6 21.8-48.6 48.6s21.8 48.6 48.6 48.6H1441c27.5 0 49.3-21.8 49.3-48.6zm-19.5 0c0 16.1-13.1 29.2-29.2 29.2h-311c-16.1 0-29.2-13.1-29.2-29.2s13.1-29.2 29.2-29.2H1441c16.8 0 29.8 13.1 29.8 29.2zm-19.4 0c0-5.4-4.4-9.7-9.7-9.7h-311.1c-5.4 0-9.7 4.4-9.7 9.7 0 5.4 4.4 9.7 9.7 9.7H1441c6 0 10.4-4.3 10.4-9.7zm106.9 29.2v-38.8h310.4c5.4 0 9.7 4.4 9.7 9.7 0 5.4-4.4 9.7-9.7 9.7H1578l-19.7 19.4h310.4c16.1 0 29.2-13.1 29.2-29.2s-13.1-29.2-29.2-29.2h-329.5v135.8l19.4-19.4v-58zm-845.8-77.8v-38.8h330.3c5.4 0 9.7 4.4 9.7 9.7 0 5.4-4.4 9.7-9.7 9.7H732l-19.5 19.4h330.3c16.1 0 29.2-13.1 29.2-29.2s-13.1-29.2-29.2-29.2H693.2v106.7c0 16.1 13.1 29.2 29.2 29.2h164.9l19.4-19.4H722.3c-5.4 0-9.7-4.4-9.7-9.7v-48.4zm1694.8-74c-11.7 0-17.7-9.1-17.7-14.7 0-5.7 3.9-7.7 6.4-7.7 8 0 7.1 10.5 17.8 10.5 9.6 0 15.5-7.1 15.5-15.4 0-11.8-10.3-22-24.4-22-14.4 0-26.2 11.7-26.2 26.2 0 14.4 11.7 26.2 26.2 26.2 9.1 0 17-4.6 21.7-11.6-.2.3-6.4 8.5-19.3 8.5z" fill="url(#b)"/>
      <linearGradient id="c" gradientUnits="objectBoundingBox" y1="1" x2="1">
        <stop offset="0" stopColor="#FFF">
          <animate attributeName="offset" values="0;0;0;" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".207" stopColor="#F7C9FF">
          <animate attributeName="offset" values=".15;.25;.15;" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".307" stopColor="#594689">
          <animate attributeName="offset" values=".25;.35;.25;" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".435" stopColor="#CCFFEC">
          <animate attributeName="offset" values=".35;.5;.35;" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".642" stopColor="#63C6FF">
          <animate attributeName="offset" values=".5;.75;.5;" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset=".892" stopColor="#FF7676">
          <animate attributeName="offset" values=".75;1;.75;" dur="3s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      <path d="M1122.1 314.4c-.8 1.4-1.2 2.9-1.2 4.6 0 5.4 4.4 9.7 9.7 9.7H1441c1.7 0 3.2-.5 4.6-1.2-1.6 3-4.8 5.1-8.5 5.1h-310.3c-5.4 0-9.7-4.4-9.7-9.7-.1-3.7 1.9-6.9 5-8.5zM767 254.8h272c3.7 0 6.9-2.1 8.5-5.1-1.4.8-2.9 1.2-4.6 1.2H732l-3.9 3.9H767zm1234.7 0h310.5c3.7 0 6.9-2.1 8.5-5.1-1.4.8-2.9 1.2-4.6 1.2h-329.9c-19.8 0-37.6 8.5-50 22 12.1-11.2 28.3-18.1 46.1-18.1h19.4zM728.1 215.9H1039c16.1 0 29.2 13.1 29.2 29.2 0 7.1-2.5 13.5-6.7 18.6 6.5-5.3 10.6-13.4 10.6-22.5 0-16.1-13.1-29.2-29.2-29.2H693.2v3.9h34.9zm350 107c0 26.8 21.8 48.6 48.6 48.6h310.4c14.4 0 27.3-6.3 36.2-16.3-8.6 7.7-19.9 12.4-32.3 12.4h-310.4c-26.8 0-48.6-21.8-48.6-48.6 0-12.4 4.7-23.7 12.4-32.3-10 8.9-16.3 21.8-16.3 36.2zm392.7-3.9c0-16.1-13.1-29.2-29.2-29.2h-311c-9 0-17.1 4.1-22.5 10.6 5-4.2 11.5-6.7 18.6-6.7h310.4c16.1 0 29.2 13.1 29.2 29.2 0 7.1-2.5 13.5-6.7 18.6 7.1-5.4 11.2-13.5 11.2-22.5zm530.9-25.3h310.5c14.4 0 27.3-6.3 36.2-16.3-8.6 7.7-19.9 12.4-32.3 12.4h-329.9c-9 0-17.1 4.1-22.5 10.6 5-4.2 11.5-6.7 18.6-6.7h19.4zM1535 254.8h329.8c24.8 0 46.4 13.3 58.3 33.1 1-1.7 2.1-3.3 3.3-4.9-12-19.3-33.3-32.1-57.7-32.1H1500v3.9h35zm810.8-13.6c0-16.1-13.1-29.2-29.2-29.2h-1186l-3.9 3.9h1183.5c16.1 0 29.2 13.1 29.2 29.2 0 7.1-2.5 13.5-6.7 18.6 9-5.4 13.1-13.4 13.1-22.5zm-733 130.3H1865c14.4 0 27.3-6.3 36.2-16.3-8.6 7.7-19.9 12.4-32.3 12.4H1578l-3.9 3.9h38.7zm-38.9-77.8h291c16.1 0 29.2 13.1 29.2 29.2 0 7.1-2.5 13.5-6.7 18.6 6.5-5.3 10.6-13.4 10.6-22.5 0-16.1-13.1-29.2-29.2-29.2h-329.6v3.9h34.7zm38.9 38.9H1865c3.7 0 6.9-2.1 8.5-5.1-1.4.8-2.9 1.2-4.6 1.2H1578l-3.9 3.9h38.7zm-569.7-159.4H654.4v3.9H1039c37.6 0 68.1 30.5 68.1 68.1 0 4.4-.5 8.8-1.3 13 6.5-2.1 13.5-3.2 20.7-3.2h310.4c24.8 0 46.4 13.3 58.3 33.1l3.9-3.9c-11.9-19.8-33.5-33.1-58.3-33.1h-310.2c-7.2 0-14.2 1.1-20.7 3.2.8-4.2 1.3-8.5 1.3-13-.1-37.7-30.5-68.1-68.1-68.1M767 293.7h272c14.4 0 27.3-6.3 36.2-16.3-8.6 7.7-19.9 12.4-32.3 12.4H732l-3.9 3.9H767zm787.4 15.6v101.1l3.9-3.9v-97.2h-3.9zm869.9-119c-2.9 2.6-8.5 6.1-17 6.1-11.7 0-17.7-9.1-17.7-14.7 0-2 .5-3.5 1.3-4.7-1.7 1.1-3.2 3.2-3.2 6.6 0 2.5 1.2 5.7 3.6 8.5 4.4 3.3 9.8 5.3 15.7 5.3 5.4 0 10.4-1.7 14.6-4.5 1.3-1.1 2.2-2 2.7-2.6zm2-2c-.4.4-1 1.1-1.9 1.9-.3.5-.7.9-1 1.3.6-.5 1.1-1 1.6-1.5.5-.6 1-1.2 1.3-1.7.1-.1 0 0 0 0zm1.2-17.3c0 3.3-1 6.4-2.7 9 .4-.3.7-.5 1.1-.8 2.3-2.7 3.6-6.3 3.6-10.1 0-11.8-10.3-22-24.4-22-6.7 0-12.7 2.5-17.3 6.6-.4.4-.7.8-1.1 1.2 4.5-3.6 10.2-5.8 16.4-5.8 14.1-.1 24.4 10.1 24.4 21.9zm-110.9 2.2H1228h19.4-77.6l-3.9 3.9h77.6-19.4 1086.5c37.6 0 68.1 30.5 68.1 68.1 0 17.8-6.9 34-18.1 46.1 13.5-12.4 22-30.2 22-50 2.1-37.7-28.4-68.1-66-68.1zm29.2 155.5h-369.4V319c0-1.7.5-3.2 1.2-4.6-3 1.6-5.1 4.8-5.1 8.5v9.7h407.6l3.9-3.9h-38.2zm-38.9 38.9h-48.6 19.4-340.2V319c0-12.4 4.7-23.7 12.4-32.3-10 8.9-16.3 21.8-16.3 36.2v48.6h368.9-29.2 68l3.9-3.9h-38.3zM712.5 250.9v-19.4h-3.9v42.7l3.9-3.9v-19.4zm116.7 116.7H722.3c-26.8 0-48.6-21.8-48.6-48.6V192.9h-3.9v130c0 26.8 21.8 48.6 48.6 48.6H864l3.9-3.9h-38.7zm-116.7-77.8v-19.4l-3.9 3.9v38.8l3.9-3.9v-19.4zm155.6 38.9H722.3c-5.4 0-9.7-4.4-9.7-9.7v-9.7l-3.9 3.9v9.7c0 5.4 4.4 9.7 9.7 9.7h184.4l3.9-3.9h-38.6zm647.5-58.3v178.5l3.9-3.9V270.4h-3.9z" fill="url(#c)"/>
    </svg>
  </SvgWrapper>
);

export default Logo;
