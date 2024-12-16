import React from "react";

function NotFound() {
  return (
    <>
      <div class="gradient">
        <svg class="milk-404" viewBox="0 0 500 500">
          <g id="milk-spill" fill="#fff">
            <path
              id="milk-spill--large"
              d="M132.6 317.5c-1.9.5-3.6 1.3-5.2 2.3-7.3 5-1.4 10.3.7 15.8 7.5 19.6-40.9 16.6-46.8 33.5-2.4 6.8-.4 14.6 5.1 20.1 4.8 4.8 11.8 7.6 18.9 9.7 32.8 9.5 72.4 9.2 106.9 10.5 41 1.5 82.3 2.2 123.3 1 6.7-.2 13.6-.5 19.9-2.6 6.3-2.1 11.9-6.4 13.1-11.8 3.1-13.3-19.4-24.5-14.8-37.5 3.8-10.8 20.1-11.6 30.6-15.3 6.4-2.3 12.6-5.7 15.6-10.9 16.9-28.4-57.7-30.5-74.8-30.3-30.2.3-59.9 5.2-89.9 7.1-32.5 2.1-66 1.4-97.8 7.4-1.6.2-3.2.5-4.8 1"
            />
            <path
              id="milk-spill--right"
              d="M435.6 465.7c4.7 1.5 10.5 1.6 15.9 1.7 3.2 0 6.4.1 9.6.1 4.4.1 9.2 0 12.6-1.5 1.2-.6 2.2-1.4 2.3-2.2.2-2-3.9-3.2-7.5-3.4-9.3-.7-15.7-4.4-25.6-2.8-6.3.9-16.7 5.1-7.3 8.1"
            />
            <path
              id="milk-spill--left"
              d="M73.8 321.1c-2.7.4-5.5 1-7.6 2.8-2 1.8-2.9 5.2-1.2 7.3 1.2 1.4 3.1 1.9 4.9 2.3 9.7 1.9 19.6 2.8 29.5 2.7 3 0 6.1-.2 8.8-1.6 5.8-3 0-5.2-2.6-6.8-2.6-1.6-2.9-4.3-4.9-6.2-2.7-2.6-7.7-1.7-11.2-1.6-5.2 0-10.5.3-15.7 1.1"
            />
          </g>
          <g id="milk-container">
            <path fill="#f1fbfe" d="M272.4 473.6V168.4l151.7-16.7v302.6z" />
            <path
              fill="#c2e8f8"
              d="M211.6 131.5l60.8 36.9v305.2l-60.8-42.5zm177.8-51.2l-177.8 51.2L242 92.9z"
            />
            <path
              fill="#f0f9fc"
              d="M388.2 56.2c-.5-9.5-8.7-16.8-18.2-16.2l-112 7.4c-9 .6-16 8.1-16 17.1v28.4l147.5-12.5-1.3-24.2z"
            />
            <path fill="#b1dfef" d="M315.6 97.7l-104 33.8 60.8 36.9z" />
            <path
              fill="#e4f5f9"
              d="M272.4 168.4L242 92.9l147.4-12.6 34.7 71.4z"
            />
            <path
              fill="#5f4b8b"
              d="M334.4 306.1c.3 1.5.5 2.9.5 4.3s-.2 2.8-.5 4.4l-2.9.3v6.9c-.8.3-1.5.5-2.3.6-.7.1-1.5.3-2.2.3-.7.1-1.5.1-2.2.2-.7 0-1.5 0-2.3-.1v-6.9l-17.5 2-.9-1.6 14.8-35.3c1.4 0 2.8.2 4.2.5 1.4.3 2.7.9 4 1.8l-10 24.5 5.4-.6v-6.5c.8-.3 1.6-.5 2.3-.6.8-.1 1.5-.3 2.2-.3.7-.1 1.4-.1 2.2-.2.8 0 1.5 0 2.3.1v6.5l2.9-.3zm18.7-28.4c2.5-.3 4.6 0 6.4.8 1.8.8 3.3 2 4.4 3.7 1.2 1.6 2 3.6 2.6 6 .5 2.3.8 4.9.8 7.7s-.3 5.4-.9 7.9c-.6 2.4-1.5 4.6-2.6 6.5-1.2 1.9-2.7 3.4-4.5 4.6-1.8 1.2-4 1.9-6.4 2.2-2.5.3-4.6 0-6.4-.8-1.8-.8-3.3-2-4.4-3.6-1.2-1.6-2-3.6-2.6-5.9-.6-2.3-.9-4.9-.9-7.7s.3-5.4.9-7.9c.6-2.5 1.5-4.7 2.6-6.6 1.2-1.9 2.7-3.5 4.5-4.7s4-1.9 6.5-2.2m-.2 8.8c-1.5.2-2.6 1.2-3.4 3.1-.8 1.9-1.2 4.7-1.2 8.4 0 3.6.4 6.3 1.2 8 .8 1.7 1.9 2.5 3.4 2.4 1.4-.2 2.5-1.2 3.3-3.1.8-1.9 1.2-4.7 1.2-8.3 0-3.7-.4-6.3-1.2-8.1-.8-1.8-1.9-2.6-3.3-2.4m47.7 12c.3 1.5.5 2.9.5 4.3s-.2 2.8-.5 4.4l-2.9.3v6.9c-.8.3-1.5.5-2.3.6-.8.1-1.5.3-2.2.3-.7.1-1.5.1-2.2.2-.8 0-1.5 0-2.3-.1v-6.9l-17.5 2-.9-1.6 14.8-35.3c1.4 0 2.8.2 4.2.5 1.4.3 2.7.9 4 1.8l-10 24.5 5.4-.6v-6.5c.8-.3 1.6-.5 2.3-.6.7-.1 1.5-.3 2.2-.3.7-.1 1.4-.1 2.2-.2.7 0 1.5 0 2.3.1v6.5l2.9-.3zM305.7 336c.7-.2 1.7-.4 3-.7 1.4-.3 3.1-.6 5.1-.8 1.5-.2 3.1-.2 4.6-.1s2.9.5 4.2 1.2c1.2.7 2.3 1.8 3 3.2.8 1.4 1.2 3.4 1.2 5.8 0 2.2-.3 4-.9 5.5-.6 1.5-1.4 2.7-2.4 3.7s-2.2 1.7-3.5 2.2c-1.3.5-2.6.8-4 1-.5.1-1.1.1-1.7.1h-1.2v10.6c-.7.2-1.4.4-2 .6-.6.1-1.2.2-1.7.3-1 .1-2.2.1-3.7 0V336zm7.4 14.5c.1 0 .4.1.7.1.3 0 .7 0 1.1-.1 1.2-.1 2.2-.6 3-1.5.8-.8 1.2-2 1.2-3.6 0-.9-.1-1.7-.4-2.3-.2-.6-.6-1.1-1-1.4-.4-.3-.9-.5-1.5-.6-.6-.1-1.2-.1-1.8 0-.2 0-.4 0-.6.1-.2 0-.5.1-.7.1v9.2zm19.8 15c-.7.2-1.3.4-1.8.5-.5.1-1.1.2-1.6.3-.5.1-1.1.1-1.8.1s-1.4 0-2.3-.1l9.6-33.7c.7-.2 1.4-.3 2.1-.5.6-.1 1.3-.2 2-.3.5-.1 1.1-.1 1.8-.1h2.2l9.5 31.5c-1.6.5-3.1.8-4.3.9-.6.1-1.1.1-1.7.1-.6 0-1.2 0-1.8-.1l-1.6-6.2c-.8.3-1.6.6-2.3.8-.7.2-1.5.3-2.2.4-.7.1-1.3.1-2 .1s-1.4-.1-2.2-.2l-1.6 6.5zm6-24.8l-2.9 12.1c.5.1.9.2 1.4.2h1.3c.5-.1 1-.1 1.4-.3.5-.1 1-.3 1.5-.5l-2.7-11.5zm31.5 2.8c.8-.2 1.5-.4 2.1-.5.6-.1 1.2-.2 1.7-.3.5-.1 1.1-.1 1.8-.1h2v16.6c-1.7.9-3.4 1.5-5 1.9-1.6.4-3.1.7-4.2.8-2.5.3-4.7.1-6.6-.5-1.9-.6-3.5-1.6-4.7-2.9-1.3-1.3-2.2-3-2.9-5-.6-2-.9-4.2-.9-6.6s.3-4.7 1-6.9 1.6-4.1 2.9-5.7c1.2-1.7 2.8-3 4.6-4.1 1.8-1.1 3.9-1.7 6.2-2 1.4-.2 2.7-.2 3.9-.1 1.2.1 2.6.4 4.1.9-.1 1.3-.3 2.5-.6 3.7-.4 1.2-.8 2.3-1.2 3.1-.6-.1-1.1-.3-1.6-.4-.5-.1-.9-.2-1.4-.2-.4 0-.9-.1-1.3-.1s-.9 0-1.4.1c-2.3.3-4.1 1.3-5.4 3.1-1.3 1.8-1.9 4.3-1.9 7.6s.6 5.6 1.8 7.1c1.2 1.5 3.1 2 5.5 1.8l1.5-.3v-11zm28.6-2.6c0 1.1-.1 2.3-.4 3.6l-8.3.9v6.5l10.8-1.2c.3 1.3.4 2.4.4 3.4 0 1.1-.1 2.3-.4 3.6l-18.4 2.1V327l18.1-2.1c.1.7.2 1.3.3 1.8.1.6.1 1.1.1 1.6 0 1-.1 2.2-.3 3.6l-10.5 1.2v5l8.3-.9c.1 1.5.3 2.7.3 3.7m-93.4 32.8c.8-.2 1.5-.4 2.1-.6.6-.1 1.3-.3 1.9-.3.6-.1 1.3-.1 2-.1s1.3.1 1.8.1l12.4 20.8v-22.2c.9-.3 1.8-.5 2.5-.6.7-.2 1.4-.3 2-.3.6-.1 1.2-.1 1.9-.1s1.4 0 2.1.1l-.1 40.4c-.4.2-.9.3-1.5.5-.7.2-1.4.3-2.2.4-.9.1-1.7.1-2.4.1s-1.2-.1-1.5-.1l-12.4-20.7v22.1c-1.6.5-3 .9-4.3 1-1.3.1-2.7.1-4.3 0v-40.5zm34.1 16.5c0-3 .3-5.9 1-8.5.7-2.7 1.7-5 3-7.1 1.4-2 3.1-3.7 5.2-5 2.1-1.3 4.6-2.1 7.5-2.5 2.9-.3 5.4-.1 7.5.8 2.1.8 3.8 2.1 5.2 3.8 1.4 1.7 2.4 3.9 3 6.4.7 2.5 1 5.3 1 8.3 0 3-.3 5.8-1 8.5-.7 2.6-1.7 4.9-3 7-1.4 2-3.1 3.7-5.2 5-2.1 1.3-4.6 2.1-7.5 2.4-2.9.3-5.4.1-7.5-.7-2.1-.8-3.9-2-5.2-3.8-1.4-1.7-2.4-3.8-3-6.3-.7-2.5-1-5.3-1-8.3m23.6-2.7c0-8.2-2.3-12.1-6.8-11.6-4.6.5-6.9 4.9-6.9 13.1 0 4.1.6 7.1 1.7 9 1.1 1.9 2.9 2.7 5.2 2.4 4.5-.4 6.8-4.7 6.8-12.9m20.7-14l-8.9 1c-.3-1.6-.5-3.1-.5-4.4 0-1.2.2-2.7.5-4.4l27.2-3.1c.1.8.2 1.6.3 2.3.1.7.1 1.4.1 2 0 1.2-.1 2.8-.4 4.5l-8.9 1v31.7c-1.9.6-3.4.9-4.7 1-1.3.1-2.9.2-4.7 0v-31.6zM305.6 420l13-1.5c.1.5.1.9.2 1.3 0 .4.1.8.1 1.2 0 .7-.1 1.6-.2 2.6l-7.5.9v4l5.9-.7c.2 1 .3 1.8.3 2.5s-.1 1.6-.3 2.6l-5.9.7v9.2c-1.1.3-2 .5-2.7.6-.8.1-1.7.1-2.7 0V420zm14.4 10.2c0-1.7.2-3.4.6-4.9.4-1.5 1-2.9 1.7-4.1.8-1.2 1.8-2.1 3-2.9 1.2-.8 2.7-1.2 4.3-1.4 1.7-.2 3.1 0 4.3.4 1.2.5 2.2 1.2 3 2.2.8 1 1.4 2.2 1.8 3.7.4 1.4.6 3 .6 4.8s-.2 3.4-.6 4.9c-.4 1.5-1 2.8-1.8 4-.8 1.2-1.8 2.1-3 2.9-1.2.7-2.6 1.2-4.3 1.4-1.7.2-3.1.1-4.3-.4-1.2-.5-2.2-1.2-3-2.2-.8-1-1.4-2.2-1.7-3.6-.4-1.5-.6-3.1-.6-4.8m13.6-1.6c0-4.7-1.3-7-3.9-6.7-2.7.3-4 2.8-4 7.6 0 2.4.3 4.1 1 5.2.6 1.1 1.6 1.6 3 1.4 2.6-.3 3.9-2.8 3.9-7.5m17.2 10.1c-1.7.2-3 .1-4.1-.2-1.1-.4-2-.9-2.6-1.8-.6-.8-1.1-1.9-1.3-3.1-.3-1.3-.4-2.7-.4-4.3V416c.6-.2 1.1-.3 1.5-.4s.8-.1 1.2-.2c.3 0 .7-.1 1.2-.1h1.5v12.6c0 1.1 0 2 .1 2.8.1.8.2 1.4.4 1.8.2.5.5.8.9.9.4.2.9.2 1.5.1s1.2-.2 1.5-.5c.4-.3.7-.6.9-1.1.2-.5.4-1.1.4-1.9.1-.8.1-1.7.1-2.8v-12.6c.6-.2 1.1-.3 1.5-.4.4-.1.8-.1 1.2-.2.4 0 .8-.1 1.2-.1h1.5v13.3c0 1.6-.1 3.1-.4 4.4-.3 1.3-.7 2.5-1.3 3.4-.6 1-1.5 1.8-2.6 2.4-.9.7-2.3 1.1-3.9 1.3m12-25.1c.5-.1.9-.3 1.2-.3.4-.1.7-.1 1.1-.2.4 0 .8-.1 1.2-.1.4 0 .7 0 1 .1l7.1 12v-12.8c.5-.1 1-.3 1.4-.4.4-.1.8-.2 1.2-.2.3 0 .7-.1 1.1-.1.4 0 .8 0 1.2.1V435c-.2.1-.5.2-.9.3-.4.1-.8.2-1.3.2-.5.1-1 .1-1.4 0-.4 0-.7-.1-.9-.1l-7.2-11.9v12.7c-.9.3-1.7.5-2.5.6s-1.6.1-2.5 0v-23.2zm26.3-3.5c3.9-.4 6.8.2 8.8 2.1 2 1.8 3 4.8 3 8.8 0 4.1-1 7.3-3.1 9.4-2 2.2-5.1 3.5-9.1 3.9-1 .1-2 .2-3 .2h-2.8v-23.3c.3-.1.7-.2 1.2-.3l1.5-.3c.6-.1 1.1-.2 1.7-.3.7 0 1.2-.1 1.8-.2m-.7 19.2h.5c.2 0 .4 0 .6-.1.8-.1 1.5-.3 2.3-.6s1.3-.7 1.8-1.3c.5-.6.9-1.3 1.2-2.3.3-.9.4-2.1.4-3.5s-.2-2.5-.5-3.4c-.3-.9-.7-1.6-1.2-2-.5-.5-1.1-.8-1.8-.9-.7-.1-1.4-.2-2.1-.1-.4 0-.7.1-.9.1-.2 0-.3 0-.4.1v14zm15.7-164.6l-102.3 11.7v-94.1l102.3-11.7z"
            />
            <path
              fill="#7367a4"
              d="M216.7 182.1l.6.3c.2.1.4.3.6.4.2.1.4.3.6.5.2.2.4.3.6.5l2 7.4 2.1-4.7.6.3.6.3c.2.1.4.3.6.4.2.2.4.3.6.5l.5 11.9c-.2-.1-.3-.1-.5-.2s-.4-.2-.7-.4c-.3-.2-.7-.5-1.2-.9l-.2-6.9-1.6 3.4c-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.3-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.4l-1.4-5.3-.2 6.6c-.4-.2-.8-.4-1.1-.6-.3-.2-.7-.5-1.1-.9l.5-11.3zm12.4 20c-.3-.2-.8-.6-1.3-1v-11.6c.3.1.5.2.7.4l.6.3c.2.1.4.3.6.4.2.2.4.3.7.6v11.6c-.6-.3-1-.5-1.3-.7m6.9-2.7c.4.4.8.9 1.1 1.3.3.4.6.8.8 1.2.2.4.4.9.5 1.3.1.5.2.9.2 1.5s-.1 1-.3 1.4c-.2.3-.4.6-.8.7-.3.1-.8.1-1.3-.1s-1.1-.4-1.7-.9c-.6-.4-1.1-.8-1.6-1.2l-1.5-1.5c0-.4.1-.7.2-1.1.1-.4.2-.7.3-1.1.9 1 1.6 1.7 2.3 2.2.5.3.9.5 1.1.5.3 0 .4-.2.4-.6 0-.2 0-.3-.1-.5s-.1-.3-.2-.5c-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.4-.4l-.8-.9c-.3-.4-.7-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.4-.8-.5-1.2-.1-.4-.2-.9-.2-1.3 0-.6.1-1 .3-1.4.2-.3.4-.5.7-.7.3-.1.7-.1 1.1 0 .4.1.9.4 1.5.7.5.3.9.7 1.4 1.1l1.4 1.4c0 .3-.1.7-.2 1-.1.4-.2.7-.4.9-.2-.3-.5-.6-.9-1-.3-.4-.7-.7-1.2-1-.2-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.4 0 .3.1.6.3.9.2.3.4.5.6.8l1 1zm7.7 5.1c.4.4.8.9 1.1 1.3.3.4.6.8.8 1.2.2.4.4.9.5 1.3.1.5.2.9.2 1.5s-.1 1-.3 1.4c-.2.3-.4.6-.8.7-.3.1-.8.1-1.3-.1s-1.1-.4-1.7-.9c-.6-.4-1.1-.8-1.6-1.2-.5-.4-.9-.9-1.5-1.5 0-.4.1-.7.2-1.1.1-.4.2-.7.3-1.1.9 1 1.6 1.7 2.3 2.2.5.3.9.5 1.1.5.3 0 .4-.2.4-.6 0-.2 0-.3-.1-.5s-.1-.3-.2-.5c-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.4-.4l-.8-.9c-.3-.4-.7-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.4-.8-.5-1.2-.1-.4-.2-.9-.2-1.3 0-.6.1-1 .3-1.4.2-.3.4-.5.7-.7.3-.1.7-.1 1.1 0 .4.1.9.4 1.5.7.5.3.9.7 1.4 1.1l1.4 1.4c0 .3-.1.7-.2 1-.1.4-.2.7-.4.9-.2-.3-.5-.6-.9-1-.3-.4-.7-.7-1.2-1-.2-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.4 0 .3.1.6.3.9s.4.5.6.8l1 1zm5.3 10.8c-.3-.2-.8-.6-1.3-1v-11.6c.3.1.5.2.7.4l.6.3c.2.1.4.2.6.4.2.2.4.3.7.6V216c-.6-.3-1-.5-1.3-.7m2.9-9.8l.6.3c.2.1.3.2.5.3.2.1.3.2.5.4s.3.3.5.4l3.3 8.6v-6.4c.2.1.5.2.7.3.2.1.4.2.5.3.2.1.3.2.5.4.2.1.4.3.6.5v11.6c-.1 0-.2-.1-.4-.2l-.6-.3c-.2-.2-.4-.3-.6-.5l-.4-.4-3.3-8.5v6.3c-.4-.2-.8-.4-1.1-.6-.3-.2-.7-.5-1.1-.9v-11.6zm14.7 15.1c.3.1.5.2.7.4l.6.3c.2.1.4.2.6.4.2.2.4.4.7.5v5.9c-.6-.1-1.1-.3-1.7-.6-.5-.3-1-.6-1.4-.8-.8-.6-1.6-1.2-2.2-1.9-.6-.7-1.1-1.5-1.6-2.3-.4-.8-.7-1.7-.9-2.5-.2-.9-.3-1.7-.3-2.6 0-.9.1-1.6.3-2.2.2-.6.5-1 .9-1.3.4-.3.9-.4 1.5-.3s1.3.4 2.1.9c.5.3.9.6 1.3 1 .4.3.9.8 1.4 1.4 0 .4-.1.8-.2 1.2-.1.3-.3.6-.4.8l-.5-.5-.4-.4c-.1-.1-.3-.2-.4-.4-.1-.1-.3-.2-.5-.3-.8-.5-1.4-.6-1.8-.3-.4.3-.6 1.1-.6 2.2 0 1.2.2 2.2.6 3 .4.8 1 1.5 1.8 2.1.2.1.3.2.5.3v-4zm-50.4 127c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v17.3l6.2 4.1c.1.6.1 1.1.2 1.5v2.2c0 .4-.1.8-.2 1.3l-11-7.3v-22.3zm15.7 32.8c-.7-.4-1.5-1.1-2.4-1.9v-22.1c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v22.1c-1-.5-1.8-.9-2.4-1.3m5.6-18.7c.4.2.8.4 1.1.5l.9.6c.3.2.7.5 1 .8.4.3.7.5.9.8l6.3 16.3v-12.1c.5.2.9.4 1.3.7.4.2.7.4 1 .6.3.2.6.4 1 .7.3.3.7.6 1.1.9v22.1c-.2-.1-.4-.2-.8-.3-.3-.2-.7-.4-1.1-.6-.5-.3-.9-.6-1.2-.9-.4-.3-.6-.5-.8-.7l-6.3-16.3v12.1c-.8-.3-1.5-.7-2.2-1.2-.6-.4-1.4-1-2.2-1.7v-22.3zm17.8 11.8c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v22.1c-1-.4-1.7-.9-2.4-1.3s-1.5-1.1-2.4-1.9v-22.1zm10.4 17.6l5.1 14.8c-.3-.1-.7-.3-1.2-.6s-1-.6-1.4-.8c-.5-.3-1-.7-1.5-1.1-.5-.4-.9-.7-1.2-1l-4.9-14.4 4.6-7.9c.5.3 1 .5 1.4.7.4.2.8.5 1.2.8.2.1.4.3.7.5s.5.4.7.6c.2.2.5.4.7.6.2.2.4.3.6.5l-4.8 7.3zm-22.6-84.4l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1l.9.6c4.7 3.1 8.6 10.1 8.6 15.6v12.9c0 5.4-3.8 7.3-8.6 4.1m-.9-28.2c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-2.7-1.9-6.2-4.3-7.8l-.9-.6zm.9-7.9l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1 1.2.8 2.1 2.5 2.1 3.9s-1 1.8-2.1 1c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v12.9c.1 5.4-3.7 7.2-8.5 4.1"
            />
            <path
              fill="#7367a4"
              d="M242.7 285.9c-1.2-.8-2.1-2.5-2.1-3.9v-20.2c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v20.2c0 1.4-.9 1.8-2.1 1m.4 57.8l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1l.9.6c4.7 3.1 8.6 10.1 8.6 15.6v12.9c0 5.4-3.8 7.2-8.6 4.1m-.9-28.3c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-2.7-1.9-6.2-4.3-7.8l-.9-.6z"
            />
            <path
              fill="#7367a4"
              d="M242.7 322.9c-1.2-.8-2.1-2.5-2.1-3.9v-20.2c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v20.2c0 1.3-.9 1.7-2.1 1"
            />
            <path
              fill="#7367a4"
              d="M269.5 373.7l-53.6-35.6V206.4l53.6 35.6v131.7zm-49.6-37.6l45.5 30.2V243.9l-45.5-30.2v122.4zm-3.6-174.9v8.2l50.3 29.1v-8.4zm0 222.7v8.2l50.3 29.1v-8.4z"
            />
          </g>
          <g id="web-page">
            <path fill="#fff" d="M399.1 259.1l-92.3 10.6V188l92.3-10.5v19.6z" />
            <path
              fill="#aa9dce"
              d="M399.1 184.8l-92.3 10.5V188l92.3-10.5v1.5z"
            />
            <path
              fill="#fff"
              d="M312.9 191.5c0 .8-.6 1.5-1.4 1.6s-1.4-.5-1.4-1.3.6-1.5 1.4-1.6c.8-.1 1.4.5 1.4 1.3m5.6-.6c0 .8-.6 1.5-1.4 1.6-.8.1-1.4-.5-1.4-1.3s.6-1.5 1.4-1.6c.8-.1 1.4.4 1.4 1.3m5.7-.7c0 .8-.6 1.5-1.4 1.6-.8.1-1.4-.5-1.4-1.3s.6-1.5 1.4-1.6c.8-.1 1.4.5 1.4 1.3"
            />
          </g>
          <g id="milk-face">
            <path
              id="mouth"
              fill="none"
              stroke="#4f3e7c"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M338.4 239.8l32-3.9"
            />
            <path
              id="mouth-smile"
              fill="none"
              stroke="#4f3e7c"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M341.1 240.5s15.4 10.5 27.3-3.5"
            />
            <path
              id="mouth-frown"
              fill="none"
              stroke="#4f3e7c"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M368.4 240.8s-15.4-10.5-27.3 3.5"
            />
            <g id="eyes">
              <circle
                id="eye-right-open"
                cx="375.3"
                cy="215.6"
                r="5"
                fill="#4f3e7c"
              />
              <circle
                id="eye-left-open"
                cx="330.9"
                cy="220"
                r="5"
                fill="#4f3e7c"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

export default NotFound;
