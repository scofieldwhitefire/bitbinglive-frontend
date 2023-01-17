import { useState } from "react";
import { Helmet } from "react-helmet";

const DashboardHelmet = ({ title }) => {
  const [tit] = useState(title)
  return (
    <Helmet titleTemplate="Bitbinglive | %s">
      {/* <body className="home page-template-default page page-id-32 elementor-default elementor-kit-6 elementor-page elementor-page-32" /> */}
      Tit
      <title>{tit}</title>
      <style type="text/css">
        {`
        @font-face {
          font-family: swiper-icons;
          src: url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA");
          font-weight: 400;
          font-style: normal;
        }
        :root {
          --swiper-theme-color: #007aff;
        }
        .swiper {
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
        }
        .swiper-vertical > .swiper-wrapper {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-transition-property: -webkit-transform;
          transition-property: -webkit-transform;
          -o-transition-property: transform;
          transition-property: transform;
          transition-property: transform, -webkit-transform;
          -webkit-box-sizing: content-box;
          box-sizing: content-box;
        }
        .swiper-android .swiper-slide,
        .swiper-wrapper {
          -webkit-transform: translate3d(0px, 0, 0);
          transform: translate3d(0px, 0, 0);
        }
        .swiper-pointer-events {
          -ms-touch-action: pan-y;
          touch-action: pan-y;
        }
        .swiper-pointer-events.swiper-vertical {
          -ms-touch-action: pan-x;
          touch-action: pan-x;
        }
        .swiper-slide {
          -webkit-flex-shrink: 0;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          position: relative;
          -webkit-transition-property: -webkit-transform;
          transition-property: -webkit-transform;
          -o-transition-property: transform;
          transition-property: transform;
          transition-property: transform, -webkit-transform;
        }
        .swiper-slide-invisible-blank {
          visibility: hidden;
        }
        .swiper-autoheight,
        .swiper-autoheight .swiper-slide {
          height: auto;
        }
        .swiper-autoheight .swiper-wrapper {
          -webkit-box-align: start;
          -webkit-align-items: flex-start;
          -ms-flex-align: start;
          align-items: flex-start;
          -webkit-transition-property: height, -webkit-transform;
          transition-property: height, -webkit-transform;
          -o-transition-property: transform, height;
          transition-property: transform, height;
          transition-property: transform, height, -webkit-transform;
        }
        .swiper-backface-hidden .swiper-slide {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .swiper-3d,
        .swiper-3d.swiper-css-mode .swiper-wrapper {
          -webkit-perspective: 1200px;
          perspective: 1200px;
        }
        .swiper-3d .swiper-cube-shadow,
        .swiper-3d .swiper-slide,
        .swiper-3d .swiper-slide-shadow,
        .swiper-3d .swiper-slide-shadow-bottom,
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right,
        .swiper-3d .swiper-slide-shadow-top,
        .swiper-3d .swiper-wrapper {
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
        }
        .swiper-3d .swiper-slide-shadow,
        .swiper-3d .swiper-slide-shadow-bottom,
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right,
        .swiper-3d .swiper-slide-shadow-top {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }
        .swiper-3d .swiper-slide-shadow {
          background: rgba(0, 0, 0, 0.15);
        }
        .swiper-3d .swiper-slide-shadow-left {
          background-image: -webkit-gradient(
            linear,
            right top,
            left top,
            from(rgba(0, 0, 0, 0.5)),
            to(rgba(0, 0, 0, 0))
          );
          background-image: -webkit-linear-gradient(
            right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: -o-linear-gradient(
            right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-3d .swiper-slide-shadow-right {
          background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(rgba(0, 0, 0, 0.5)),
            to(rgba(0, 0, 0, 0))
          );
          background-image: -webkit-linear-gradient(
            left,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: -o-linear-gradient(
            left,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-3d .swiper-slide-shadow-top {
          background-image: -webkit-gradient(
            linear,
            left bottom,
            left top,
            from(rgba(0, 0, 0, 0.5)),
            to(rgba(0, 0, 0, 0))
          );
          background-image: -webkit-linear-gradient(
            bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: -o-linear-gradient(
            bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-3d .swiper-slide-shadow-bottom {
          background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 0.5)),
            to(rgba(0, 0, 0, 0))
          );
          background-image: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: -o-linear-gradient(
            top,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-css-mode > .swiper-wrapper {
          overflow: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
          display: none;
        }
        .swiper-css-mode > .swiper-wrapper > .swiper-slide {
          scroll-snap-align: start start;
        }
        .swiper-horizontal.swiper-css-mode > .swiper-wrapper {
          -webkit-scroll-snap-type: x mandatory;
          -ms-scroll-snap-type: x mandatory;
          scroll-snap-type: x mandatory;
        }
        .swiper-vertical.swiper-css-mode > .swiper-wrapper {
          -webkit-scroll-snap-type: y mandatory;
          -ms-scroll-snap-type: y mandatory;
          scroll-snap-type: y mandatory;
        }
        .swiper-centered > .swiper-wrapper::before {
          content: "";
          -webkit-flex-shrink: 0;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          -webkit-box-ordinal-group: 10000;
          -webkit-order: 9999;
          -ms-flex-order: 9999;
          order: 9999;
        }
        .swiper-centered.swiper-horizontal
          > .swiper-wrapper
          > .swiper-slide:first-child {
          -webkit-margin-start: var(--swiper-centered-offset-before);
          -moz-margin-start: var(--swiper-centered-offset-before);
          margin-inline-start: var(--swiper-centered-offset-before);
        }
        .swiper-centered.swiper-horizontal > .swiper-wrapper::before {
          height: 100%;
          min-height: 1px;
          width: var(--swiper-centered-offset-after);
        }
        .swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
          -webkit-margin-before: var(--swiper-centered-offset-before);
          margin-block-start: var(--swiper-centered-offset-before);
        }
        .swiper-centered.swiper-vertical > .swiper-wrapper::before {
          width: 100%;
          min-width: 1px;
          height: var(--swiper-centered-offset-after);
        }
        .swiper-centered > .swiper-wrapper > .swiper-slide {
          scroll-snap-align: center center;
        }
        .swiper-virtual .swiper-slide {
          -webkit-backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        .swiper-virtual.swiper-css-mode .swiper-wrapper::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          pointer-events: none;
        }
        .swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
          height: 1px;
          width: var(--swiper-virtual-size);
        }
        .swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
          width: 1px;
          height: var(--swiper-virtual-size);
        }
        :root {
          --swiper-navigation-size: 44px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          width: calc(var(--swiper-navigation-size) / 44 * 27);
          height: var(--swiper-navigation-size);
          margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
          z-index: 10;
          cursor: pointer;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          color: var(--swiper-navigation-color, var(--swiper-theme-color));
        }
        .swiper-button-next.swiper-button-disabled,
        .swiper-button-prev.swiper-button-disabled {
          opacity: 0.35;
          cursor: auto;
          pointer-events: none;
        }
        .swiper-button-next.swiper-button-hidden,
        .swiper-button-prev.swiper-button-hidden {
          opacity: 0;
          cursor: auto;
          pointer-events: none;
        }
        .swiper-navigation-disabled .swiper-button-next,
        .swiper-navigation-disabled .swiper-button-prev {
          display: none !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-family: swiper-icons;
          font-size: var(--swiper-navigation-size);
          text-transform: none !important;
          letter-spacing: 0;
          font-variant: initial;
          line-height: 1;
        }
        .swiper-button-prev,
        .swiper-rtl .swiper-button-next {
          left: 10px;
          right: auto;
        }
        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after {
          content: "prev";
        }
        .swiper-button-next,
        .swiper-rtl .swiper-button-prev {
          right: 10px;
          left: auto;
        }
        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
          content: "next";
        }
        .swiper-button-lock {
          display: none;
        }
        .swiper-pagination {
          position: absolute;
          text-align: center;
          -webkit-transition: 0.3s opacity;
          -o-transition: 0.3s opacity;
          transition: 0.3s opacity;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          z-index: 10;
        }
        .swiper-pagination.swiper-pagination-hidden {
          opacity: 0;
        }
        .swiper-pagination-disabled > .swiper-pagination,
        .swiper-pagination.swiper-pagination-disabled {
          display: none !important;
        }
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
          bottom: 10px;
          left: 0;
          width: 100%;
        }
        .swiper-pagination-bullets-dynamic {
          overflow: hidden;
          font-size: 0;
        }
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
          -webkit-transform: scale(0.33);
          -ms-transform: scale(0.33);
          transform: scale(0.33);
          position: relative;
        }
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
          -webkit-transform: scale(0.66);
          -ms-transform: scale(0.66);
          transform: scale(0.66);
        }
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
          -webkit-transform: scale(0.33);
          -ms-transform: scale(0.33);
          transform: scale(0.33);
        }
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
          -webkit-transform: scale(0.66);
          -ms-transform: scale(0.66);
          transform: scale(0.66);
        }
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
          -webkit-transform: scale(0.33);
          -ms-transform: scale(0.33);
          transform: scale(0.33);
        }
        .swiper-pagination-bullet {
          width: var(
            --swiper-pagination-bullet-width,
            var(--swiper-pagination-bullet-size, 8px)
          );
          height: var(
            --swiper-pagination-bullet-height,
            var(--swiper-pagination-bullet-size, 8px)
          );
          display: inline-block;
          border-radius: 50%;
          background: var(--swiper-pagination-bullet-inactive-color, #000);
          opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
        }
        button.swiper-pagination-bullet {
          border: none;
          margin: 0;
          padding: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        .swiper-pagination-clickable .swiper-pagination-bullet {
          cursor: pointer;
        }
        .swiper-pagination-bullet:only-child {
          display: none !important;
        }
        .swiper-pagination-bullet-active {
          opacity: var(--swiper-pagination-bullet-opacity, 1);
          background: var(--swiper-pagination-color, var(--swiper-theme-color));
        }
        .swiper-pagination-vertical.swiper-pagination-bullets,
        .swiper-vertical > .swiper-pagination-bullets {
          right: 10px;
          top: 50%;
          -webkit-transform: translate3d(0px, -50%, 0);
          transform: translate3d(0px, -50%, 0);
        }
        .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,
        .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
          margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
          display: block;
        }
        .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
        .swiper-vertical
          > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 8px;
        }
        .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
          .swiper-pagination-bullet,
        .swiper-vertical
          > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
          .swiper-pagination-bullet {
          display: inline-block;
          -webkit-transition: 0.2s transform, 0.2s top;
          -o-transition: 0.2s transform, 0.2s top;
          transition: 0.2s transform, 0.2s top;
        }
        .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
        .swiper-pagination-horizontal.swiper-pagination-bullets
          .swiper-pagination-bullet {
          margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
        }
        .swiper-horizontal
          > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
        .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
          left: 50%;
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          white-space: nowrap;
        }
        .swiper-horizontal
          > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
          .swiper-pagination-bullet,
        .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
          .swiper-pagination-bullet {
          -webkit-transition: 0.2s transform, 0.2s left;
          -o-transition: 0.2s transform, 0.2s left;
          transition: 0.2s transform, 0.2s left;
        }
        .swiper-horizontal.swiper-rtl
          > .swiper-pagination-bullets-dynamic
          .swiper-pagination-bullet {
          -webkit-transition: 0.2s transform, 0.2s right;
          -o-transition: 0.2s transform, 0.2s right;
          transition: 0.2s transform, 0.2s right;
        }
        .swiper-pagination-progressbar {
          background: rgba(0, 0, 0, 0.25);
          position: absolute;
        }
        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: var(--swiper-pagination-color, var(--swiper-theme-color));
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          -webkit-transform: scale(0);
          -ms-transform: scale(0);
          transform: scale(0);
          -webkit-transform-origin: left top;
          -ms-transform-origin: left top;
          transform-origin: left top;
        }
        .swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          -webkit-transform-origin: right top;
          -ms-transform-origin: right top;
          transform-origin: right top;
        }
        .swiper-horizontal > .swiper-pagination-progressbar,
        .swiper-pagination-progressbar.swiper-pagination-horizontal,
        .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
        .swiper-vertical
          > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
          width: 100%;
          height: 4px;
          left: 0;
          top: 0;
        }
        .swiper-horizontal
          > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
        .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,
        .swiper-pagination-progressbar.swiper-pagination-vertical,
        .swiper-vertical > .swiper-pagination-progressbar {
          width: 4px;
          height: 100%;
          left: 0;
          top: 0;
        }
        .swiper-pagination-lock {
          display: none;
        }
        .swiper-scrollbar {
          border-radius: 10px;
          position: relative;
          -ms-touch-action: none;
          background: rgba(0, 0, 0, 0.1);
        }
        .swiper-scrollbar-disabled > .swiper-scrollbar,
        .swiper-scrollbar.swiper-scrollbar-disabled {
          display: none !important;
        }
        .swiper-horizontal > .swiper-scrollbar,
        .swiper-scrollbar.swiper-scrollbar-horizontal {
          position: absolute;
          left: 1%;
          bottom: 3px;
          z-index: 50;
          height: 5px;
          width: 98%;
        }
        .swiper-scrollbar.swiper-scrollbar-vertical,
        .swiper-vertical > .swiper-scrollbar {
          position: absolute;
          right: 3px;
          top: 1%;
          z-index: 50;
          width: 5px;
          height: 98%;
        }
        .swiper-scrollbar-drag {
          height: 100%;
          width: 100%;
          position: relative;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          left: 0;
          top: 0;
        }
        .swiper-scrollbar-cursor-drag {
          cursor: move;
        }
        .swiper-scrollbar-lock {
          display: none;
        }
        .swiper-zoom-container {
          width: 100%;
          height: 100%;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          text-align: center;
        }
        .swiper-zoom-container > canvas,
        .swiper-zoom-container > img,
        .swiper-zoom-container > svg {
          max-width: 100%;
          max-height: 100%;
          -o-object-fit: contain;
          object-fit: contain;
        }
        .swiper-slide-zoomed {
          cursor: move;
        }
        .swiper-lazy-preloader {
          width: 42px;
          height: 42px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -21px;
          margin-top: -21px;
          z-index: 10;
          -webkit-transform-origin: 50%;
          -ms-transform-origin: 50%;
          transform-origin: 50%;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
          border-radius: 50%;
          border-top-color: transparent;
        }
        .swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,
        .swiper:not(.swiper-watch-progress) .swiper-lazy-preloader {
          -webkit-animation: swiper-preloader-spin 1s infinite linear;
          animation: swiper-preloader-spin 1s infinite linear;
        }
        .swiper-lazy-preloader-white {
          --swiper-preloader-color: #fff;
        }
        .swiper-lazy-preloader-black {
          --swiper-preloader-color: #000;
        }
        @-webkit-keyframes swiper-preloader-spin {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes swiper-preloader-spin {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        .swiper .swiper-notification {
          position: absolute;
          left: 0;
          top: 0;
          pointer-events: none;
          opacity: 0;
          z-index: -1000;
        }
        .swiper-free-mode > .swiper-wrapper {
          -webkit-transition-timing-function: ease-out;
          -o-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
          margin: 0 auto;
        }
        .swiper-grid > .swiper-wrapper {
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
        }
        .swiper-grid-column > .swiper-wrapper {
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .swiper-fade.swiper-free-mode .swiper-slide {
          -webkit-transition-timing-function: ease-out;
          -o-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
        }
        .swiper-fade .swiper-slide {
          pointer-events: none;
          -webkit-transition-property: opacity;
          -o-transition-property: opacity;
          transition-property: opacity;
        }
        .swiper-fade .swiper-slide .swiper-slide {
          pointer-events: none;
        }
        .swiper-fade .swiper-slide-active,
        .swiper-fade .swiper-slide-active .swiper-slide-active {
          pointer-events: auto;
        }
        .swiper-cube {
          overflow: visible;
        }
        .swiper-cube .swiper-slide {
          pointer-events: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          z-index: 1;
          visibility: hidden;
          -webkit-transform-origin: 0 0;
          -ms-transform-origin: 0 0;
          transform-origin: 0 0;
          width: 100%;
          height: 100%;
        }
        .swiper-cube .swiper-slide .swiper-slide {
          pointer-events: none;
        }
        .swiper-cube.swiper-rtl .swiper-slide {
          -webkit-transform-origin: 100% 0;
          -ms-transform-origin: 100% 0;
          transform-origin: 100% 0;
        }
        .swiper-cube .swiper-slide-active,
        .swiper-cube .swiper-slide-active .swiper-slide-active {
          pointer-events: auto;
        }
        .swiper-cube .swiper-slide-active,
        .swiper-cube .swiper-slide-next,
        .swiper-cube .swiper-slide-next + .swiper-slide,
        .swiper-cube .swiper-slide-prev {
          pointer-events: auto;
          visibility: visible;
        }
        .swiper-cube .swiper-slide-shadow-bottom,
        .swiper-cube .swiper-slide-shadow-left,
        .swiper-cube .swiper-slide-shadow-right,
        .swiper-cube .swiper-slide-shadow-top {
          z-index: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .swiper-cube .swiper-cube-shadow {
          position: absolute;
          left: 0;
          bottom: 0px;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          z-index: 0;
        }
        .swiper-cube .swiper-cube-shadow:before {
          content: "";
          background: #000;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          -webkit-filter: blur(50px);
          filter: blur(50px);
        }
        .swiper-flip {
          overflow: visible;
        }
        .swiper-flip .swiper-slide {
          pointer-events: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          z-index: 1;
        }
        .swiper-flip .swiper-slide .swiper-slide {
          pointer-events: none;
        }
        .swiper-flip .swiper-slide-active,
        .swiper-flip .swiper-slide-active .swiper-slide-active {
          pointer-events: auto;
        }
        .swiper-flip .swiper-slide-shadow-bottom,
        .swiper-flip .swiper-slide-shadow-left,
        .swiper-flip .swiper-slide-shadow-right,
        .swiper-flip .swiper-slide-shadow-top {
          z-index: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .swiper-creative .swiper-slide {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          overflow: hidden;
          -webkit-transition-property: opacity, height, -webkit-transform;
          transition-property: opacity, height, -webkit-transform;
          -o-transition-property: transform, opacity, height;
          transition-property: transform, opacity, height;
          transition-property: transform, opacity, height, -webkit-transform;
        }
        .swiper-cards {
          overflow: visible;
        }
        .swiper-cards .swiper-slide {
          -webkit-transform-origin: center bottom;
          -ms-transform-origin: center bottom;
          transform-origin: center bottom;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          overflow: hidden;
        }
        `}
      </style>
      <style type="text/css">
        {`
      @-webkit-keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    40%,
    43% {
        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0);
    }
    70% {
        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0);
    }
}
@keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    40%,
    43% {
        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -30px, 0);
        transform: translate3d(0, -30px, 0);
    }
    70% {
        -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -15px, 0);
        transform: translate3d(0, -15px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, -4px, 0);
        transform: translate3d(0, -4px, 0);
    }
}
.bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
        transform-origin: center bottom;
}
@-webkit-keyframes flash {
    0%,
    50%,
    to {
        opacity: 1;
    }
    25%,
    75% {
        opacity: 0;
    }
}
@keyframes flash {
    0%,
    50%,
    to {
        opacity: 1;
    }
    25%,
    75% {
        opacity: 0;
    }
}
.flash {
    -webkit-animation-name: flash;
    animation-name: flash;
}
@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
@keyframes pulse {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
.pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
}
@-webkit-keyframes rubberBand {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }
    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }
    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }
    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }
    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }
    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
@keyframes rubberBand {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }
    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }
    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }
    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }
    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }
    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
.rubberBand {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
}
@-webkit-keyframes shake {
    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
}
@keyframes shake {
    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
}
.shake {
    -webkit-animation-name: shake;
    animation-name: shake;
}
@-webkit-keyframes headShake {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg);
    }
    50% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes headShake {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    6.5% {
        -webkit-transform: translateX(-6px) rotateY(-9deg);
        transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
        -webkit-transform: translateX(5px) rotateY(7deg);
        transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
        -webkit-transform: translateX(-3px) rotateY(-5deg);
        transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
        -webkit-transform: translateX(2px) rotateY(3deg);
        transform: translateX(2px) rotateY(3deg);
    }
    50% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
.headShake {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-name: headShake;
    animation-name: headShake;
}
@-webkit-keyframes swing {
    20% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
    }
    40% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    60% {
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
    }
    80% {
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg);
    }
    to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
@keyframes swing {
    20% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
    }
    40% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    60% {
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
    }
    80% {
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg);
    }
    to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
.swing {
    -webkit-transform-origin: top center;
    -ms-transform-origin: top center;
        transform-origin: top center;
    -webkit-animation-name: swing;
    animation-name: swing;
}
@-webkit-keyframes tada {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    10%,
    20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
        transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
    }
    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
@keyframes tada {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    10%,
    20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
        transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
    }
    to {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
.tada {
    -webkit-animation-name: tada;
    animation-name: tada;
}
@-webkit-keyframes wobble {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate(-5deg);
        transform: translate3d(-25%, 0, 0) rotate(-5deg);
    }
    30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate(3deg);
        transform: translate3d(20%, 0, 0) rotate(3deg);
    }
    45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate(-3deg);
        transform: translate3d(-15%, 0, 0) rotate(-3deg);
    }
    60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate(2deg);
        transform: translate3d(10%, 0, 0) rotate(2deg);
    }
    75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate(-1deg);
        transform: translate3d(-5%, 0, 0) rotate(-1deg);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes wobble {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate(-5deg);
        transform: translate3d(-25%, 0, 0) rotate(-5deg);
    }
    30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate(3deg);
        transform: translate3d(20%, 0, 0) rotate(3deg);
    }
    45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate(-3deg);
        transform: translate3d(-15%, 0, 0) rotate(-3deg);
    }
    60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate(2deg);
        transform: translate3d(10%, 0, 0) rotate(2deg);
    }
    75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate(-1deg);
        transform: translate3d(-5%, 0, 0) rotate(-1deg);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.wobble {
    -webkit-animation-name: wobble;
    animation-name: wobble;
}
@-webkit-keyframes jello {
    0%,
    11.1%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
        transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
        -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
        transform: skewX(0.390625deg) skewY(0.390625deg);
    }
    88.8% {
        -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
}
@keyframes jello {
    0%,
    11.1%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    22.2% {
        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
        transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
        -webkit-transform: skewX(6.25deg) skewY(6.25deg);
        transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
        transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
        transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
        -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
        transform: skewX(0.390625deg) skewY(0.390625deg);
    }
    88.8% {
        -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
}
.jello {
    -webkit-animation-name: jello;
    animation-name: jello;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
        transform-origin: center;
}
@-webkit-keyframes heartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    28% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
@keyframes heartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    28% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
.heartBeat {
    -webkit-animation-name: heartBeat;
    animation-name: heartBeat;
    -webkit-animation-duration: 1.3s;
    animation-duration: 1.3s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
}
@-webkit-keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
        opacity: 1;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
@keyframes bounceIn {
    0%,
    20%,
    40%,
    60%,
    80%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
        -webkit-transform: scale3d(0.97, 0.97, 0.97);
        transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
        opacity: 1;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
}
.bounceIn {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
}
@-webkit-keyframes bounceInDown {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes bounceInDown {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
}
@-webkit-keyframes bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
}
@-webkit-keyframes bounceInRight {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes bounceInRight {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight;
}
@-webkit-keyframes bounceInUp {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes bounceInUp {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
}
@-webkit-keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
}
@keyframes bounceOut {
    20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
        transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
        opacity: 1;
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
}
.bounceOut {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-name: bounceOut;
    animation-name: bounceOut;
}
@-webkit-keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
}
@keyframes bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
}
.bounceOutDown {
    -webkit-animation-name: bounceOutDown;
    animation-name: bounceOutDown;
}
@-webkit-keyframes bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
}
@keyframes bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
}
.bounceOutLeft {
    -webkit-animation-name: bounceOutLeft;
    animation-name: bounceOutLeft;
}
@-webkit-keyframes bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
}
@keyframes bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
}
.bounceOutRight {
    -webkit-animation-name: bounceOutRight;
    animation-name: bounceOutRight;
}
@-webkit-keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
}
@keyframes bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
}
.bounceOutUp {
    -webkit-animation-name: bounceOutUp;
    animation-name: bounceOutUp;
}
@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}
@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDownBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInDownBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInDownBig {
    -webkit-animation-name: fadeInDownBig;
    animation-name: fadeInDownBig;
}
@-webkit-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
}
@-webkit-keyframes fadeInLeftBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInLeftBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInLeftBig {
    -webkit-animation-name: fadeInLeftBig;
    animation-name: fadeInLeftBig;
}
@-webkit-keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
}
@-webkit-keyframes fadeInRightBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInRightBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
}
@-webkit-keyframes fadeInUpBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes fadeInUpBig {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.fadeInUpBig {
    -webkit-animation-name: fadeInUpBig;
    animation-name: fadeInUpBig;
}
@-webkit-keyframes fadeOut {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
}
@-webkit-keyframes fadeOutDown {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
}
@keyframes fadeOutDown {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
}
.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown;
}
@-webkit-keyframes fadeOutDownBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
}
@keyframes fadeOutDownBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
}
.fadeOutDownBig {
    -webkit-animation-name: fadeOutDownBig;
    animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeOutLeft {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}
@keyframes fadeOutLeft {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}
.fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
}
@-webkit-keyframes fadeOutLeftBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
}
@keyframes fadeOutLeftBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
}
.fadeOutLeftBig {
    -webkit-animation-name: fadeOutLeftBig;
    animation-name: fadeOutLeftBig;
}
@-webkit-keyframes fadeOutRight {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}
@keyframes fadeOutRight {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}
.fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
}
@-webkit-keyframes fadeOutRightBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
}
@keyframes fadeOutRightBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
}
.fadeOutRightBig {
    -webkit-animation-name: fadeOutRightBig;
    animation-name: fadeOutRightBig;
}
@-webkit-keyframes fadeOutUp {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
}
@keyframes fadeOutUp {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
}
.fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp;
}
@-webkit-keyframes fadeOutUpBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
}
@keyframes fadeOutUpBig {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
}
.fadeOutUpBig {
    -webkit-animation-name: fadeOutUpBig;
    animation-name: fadeOutUpBig;
}
@-webkit-keyframes flip {
    0% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    40% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    50% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    80% {
        -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    to {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
}
@keyframes flip {
    0% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    40% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    50% {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    80% {
        -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    to {
        -webkit-transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
}
.animated.flip {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    -webkit-animation-name: flip;
    animation-name: flip;
}
@-webkit-keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    60% {
        -webkit-transform: perspective(400px) rotateX(10deg);
        transform: perspective(400px) rotateX(10deg);
        opacity: 1;
    }
    80% {
        -webkit-transform: perspective(400px) rotateX(-5deg);
        transform: perspective(400px) rotateX(-5deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}
@keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    60% {
        -webkit-transform: perspective(400px) rotateX(10deg);
        transform: perspective(400px) rotateX(10deg);
        opacity: 1;
    }
    80% {
        -webkit-transform: perspective(400px) rotateX(-5deg);
        transform: perspective(400px) rotateX(-5deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}
.flipInX {
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInX;
    animation-name: flipInX;
}
@-webkit-keyframes flipInY {
    0% {
        -webkit-transform: perspective(400px) rotateY(90deg);
        transform: perspective(400px) rotateY(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        -webkit-transform: perspective(400px) rotateY(-20deg);
        transform: perspective(400px) rotateY(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    60% {
        -webkit-transform: perspective(400px) rotateY(10deg);
        transform: perspective(400px) rotateY(10deg);
        opacity: 1;
    }
    80% {
        -webkit-transform: perspective(400px) rotateY(-5deg);
        transform: perspective(400px) rotateY(-5deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}
@keyframes flipInY {
    0% {
        -webkit-transform: perspective(400px) rotateY(90deg);
        transform: perspective(400px) rotateY(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        -webkit-transform: perspective(400px) rotateY(-20deg);
        transform: perspective(400px) rotateY(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    60% {
        -webkit-transform: perspective(400px) rotateY(10deg);
        transform: perspective(400px) rotateY(10deg);
        opacity: 1;
    }
    80% {
        -webkit-transform: perspective(400px) rotateY(-5deg);
        transform: perspective(400px) rotateY(-5deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}
.flipInY {
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInY;
    animation-name: flipInY;
}
@-webkit-keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
        opacity: 1;
    }
    to {
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        opacity: 0;
    }
}
@keyframes flipOutX {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
        opacity: 1;
    }
    to {
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
        opacity: 0;
    }
}
.flipOutX {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-name: flipOutX;
    animation-name: flipOutX;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
}
@-webkit-keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        -webkit-transform: perspective(400px) rotateY(-15deg);
        transform: perspective(400px) rotateY(-15deg);
        opacity: 1;
    }
    to {
        -webkit-transform: perspective(400px) rotateY(90deg);
        transform: perspective(400px) rotateY(90deg);
        opacity: 0;
    }
}
@keyframes flipOutY {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        -webkit-transform: perspective(400px) rotateY(-15deg);
        transform: perspective(400px) rotateY(-15deg);
        opacity: 1;
    }
    to {
        -webkit-transform: perspective(400px) rotateY(90deg);
        transform: perspective(400px) rotateY(90deg);
        opacity: 0;
    }
}
.flipOutY {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
}
@-webkit-keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0;
    }
    60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1;
    }
    80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes lightSpeedIn {
    0% {
        -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0;
    }
    60% {
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        opacity: 1;
    }
    80% {
        -webkit-transform: skewX(-5deg);
        transform: skewX(-5deg);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.lightSpeedIn {
    -webkit-animation-name: lightSpeedIn;
    animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedOut {
    0% {
        opacity: 1;
    }
    to {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0;
    }
}
@keyframes lightSpeedOut {
    0% {
        opacity: 1;
    }
    to {
        -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
        transform: translate3d(100%, 0, 0) skewX(30deg);
        opacity: 0;
    }
}
.lightSpeedOut {
    -webkit-animation-name: lightSpeedOut;
    animation-name: lightSpeedOut;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
}
@-webkit-keyframes rotateIn {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate(-200deg);
        transform: rotate(-200deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
@keyframes rotateIn {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate(-200deg);
        transform: rotate(-200deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
.rotateIn {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
}
@-webkit-keyframes rotateInDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
@keyframes rotateInDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
.rotateInDownLeft {
    -webkit-animation-name: rotateInDownLeft;
    animation-name: rotateInDownLeft;
}
@-webkit-keyframes rotateInDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
@keyframes rotateInDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
.rotateInDownRight {
    -webkit-animation-name: rotateInDownRight;
    animation-name: rotateInDownRight;
}
@-webkit-keyframes rotateInUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
@keyframes rotateInUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
.rotateInUpLeft {
    -webkit-animation-name: rotateInUpLeft;
    animation-name: rotateInUpLeft;
}
@-webkit-keyframes rotateInUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
@keyframes rotateInUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        opacity: 0;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}
.rotateInUpRight {
    -webkit-animation-name: rotateInUpRight;
    animation-name: rotateInUpRight;
}
@-webkit-keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate(200deg);
        transform: rotate(200deg);
        opacity: 0;
    }
}
@keyframes rotateOut {
    0% {
        -webkit-transform-origin: center;
        transform-origin: center;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate(200deg);
        transform: rotate(200deg);
        opacity: 0;
    }
}
.rotateOut {
    -webkit-animation-name: rotateOut;
    animation-name: rotateOut;
}
@-webkit-keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0;
    }
}
@keyframes rotateOutDownLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0;
    }
}
.rotateOutDownLeft {
    -webkit-animation-name: rotateOutDownLeft;
    animation-name: rotateOutDownLeft;
}
@-webkit-keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }
}
@keyframes rotateOutDownRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }
}
.rotateOutDownRight {
    -webkit-animation-name: rotateOutDownRight;
    animation-name: rotateOutDownRight;
}
@-webkit-keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }
}
@keyframes rotateOutUpLeft {
    0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: 0;
    }
}
.rotateOutUpLeft {
    -webkit-animation-name: rotateOutUpLeft;
    animation-name: rotateOutUpLeft;
}
@-webkit-keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        opacity: 0;
    }
}
@keyframes rotateOutUpRight {
    0% {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        opacity: 1;
    }
    to {
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        opacity: 0;
    }
}
.rotateOutUpRight {
    -webkit-animation-name: rotateOutUpRight;
    animation-name: rotateOutUpRight;
}
@-webkit-keyframes hinge {
    0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    20%,
    60% {
        -webkit-transform: rotate(80deg);
        transform: rotate(80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    40%,
    80% {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1;
    }
    to {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0;
    }
}
@keyframes hinge {
    0% {
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    20%,
    60% {
        -webkit-transform: rotate(80deg);
        transform: rotate(80deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    }
    40%,
    80% {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        opacity: 1;
    }
    to {
        -webkit-transform: translate3d(0, 700px, 0);
        transform: translate3d(0, 700px, 0);
        opacity: 0;
    }
}
.hinge {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-name: hinge;
    animation-name: hinge;
}
@-webkit-keyframes jackInTheBox {
    0% {
        opacity: 0;
        -webkit-transform: scale(0.1) rotate(30deg);
        transform: scale(0.1) rotate(30deg);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
    }
    50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
    }
    to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
@keyframes jackInTheBox {
    0% {
        opacity: 0;
        -webkit-transform: scale(0.1) rotate(30deg);
        transform: scale(0.1) rotate(30deg);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
    }
    50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
    }
    to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
.jackInTheBox {
    -webkit-animation-name: jackInTheBox;
    animation-name: jackInTheBox;
}
@-webkit-keyframes rollIn {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate(-120deg);
        transform: translate3d(-100%, 0, 0) rotate(-120deg);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes rollIn {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0) rotate(-120deg);
        transform: translate3d(-100%, 0, 0) rotate(-120deg);
    }
    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.rollIn {
    -webkit-animation-name: rollIn;
    animation-name: rollIn;
}
@-webkit-keyframes rollOut {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate(120deg);
        transform: translate3d(100%, 0, 0) rotate(120deg);
    }
}
@keyframes rollOut {
    0% {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0) rotate(120deg);
        transform: translate3d(100%, 0, 0) rotate(120deg);
    }
}
.rollOut {
    -webkit-animation-name: rollOut;
    animation-name: rollOut;
}
@-webkit-keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
        opacity: 1;
    }
}
@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
        opacity: 1;
    }
}
.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
}
@-webkit-keyframes zoomInDown {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
@keyframes zoomInDown {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
.zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown;
}
@-webkit-keyframes zoomInLeft {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
@keyframes zoomInLeft {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
.zoomInLeft {
    -webkit-animation-name: zoomInLeft;
    animation-name: zoomInLeft;
}
@-webkit-keyframes zoomInRight {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
@keyframes zoomInRight {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
.zoomInRight {
    -webkit-animation-name: zoomInRight;
    animation-name: zoomInRight;
}
@-webkit-keyframes zoomInUp {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
@keyframes zoomInUp {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
.zoomInUp {
    -webkit-animation-name: zoomInUp;
    animation-name: zoomInUp;
}
@-webkit-keyframes zoomOut {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
        opacity: 0;
    }
}
@keyframes zoomOut {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
        opacity: 0;
    }
}
.zoomOut {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
}
@-webkit-keyframes zoomOutDown {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
@keyframes zoomOutDown {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
.zoomOutDown {
    -webkit-animation-name: zoomOutDown;
    animation-name: zoomOutDown;
}
@-webkit-keyframes zoomOutLeft {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
        transform: scale(0.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        transform-origin: left center;
    }
}
@keyframes zoomOutLeft {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
        transform: scale(0.1) translate3d(-2000px, 0, 0);
        -webkit-transform-origin: left center;
        transform-origin: left center;
    }
}
.zoomOutLeft {
    -webkit-animation-name: zoomOutLeft;
    animation-name: zoomOutLeft;
}
@-webkit-keyframes zoomOutRight {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
        transform: scale(0.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        transform-origin: right center;
    }
}
@keyframes zoomOutRight {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
        transform: scale(0.1) translate3d(2000px, 0, 0);
        -webkit-transform-origin: right center;
        transform-origin: right center;
    }
}
.zoomOutRight {
    -webkit-animation-name: zoomOutRight;
    animation-name: zoomOutRight;
}
@-webkit-keyframes zoomOutUp {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
@keyframes zoomOutUp {
    40% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
.zoomOutUp {
    -webkit-animation-name: zoomOutUp;
    animation-name: zoomOutUp;
}
@-webkit-keyframes slideInDown {
    0% {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes slideInDown {
    0% {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.slideInDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
}
@-webkit-keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
}
@-webkit-keyframes slideInRight {
    0% {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes slideInRight {
    0% {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
}
@-webkit-keyframes slideInUp {
    0% {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
@keyframes slideInUp {
    0% {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}
.slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
}
@-webkit-keyframes slideOutDown {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
}
@keyframes slideOutDown {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
}
.slideOutDown {
    -webkit-animation-name: slideOutDown;
    animation-name: slideOutDown;
}
@-webkit-keyframes slideOutLeft {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}
@keyframes slideOutLeft {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}
.slideOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft;
}
@-webkit-keyframes slideOutRight {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}
@keyframes slideOutRight {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}
.slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight;
}
@-webkit-keyframes slideOutUp {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
}
@keyframes slideOutUp {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
}
.slideOutUp {
    -webkit-animation-name: slideOutUp;
    animation-name: slideOutUp;
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
.animated.delay-1s {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}
.animated.delay-2s {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}
.animated.delay-3s {
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
}
.animated.delay-4s {
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
}
.animated.delay-5s {
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
}
.animated.fast {
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
}
.animated.faster {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
}
.animated.slow {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
}
.animated.slower {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
}
@media (prefers-reduced-motion: reduce), (print) {
    .animated {
        -webkit-animation-duration: 1ms !important;
        animation-duration: 1ms !important;
        -webkit-transition-duration: 1ms !important;
        -o-transition-duration: 1ms !important;
           transition-duration: 1ms !important;
        -webkit-animation-iteration-count: 1 !important;
        animation-iteration-count: 1 !important;
    }
}
`}
      </style>
      <style type="text/css">
        {`
  /*---------------------------
 CSS Index  
****************************

1. variables
2. typography
3. spacing
4. reset
5. forms
6. mixins
7. shortcode
8. common
9. animations
10. text-animation
11. sal animation
12. header
13. nav
14. breadcrumb
15. mobile-menu
16. button
17. swiper
18. banner
19. about
20. service
21. cta
22. business-goal
23. counterup
24. gallery
25. project
26. trusted-client
27. team
28. feature
29. testimonial
30. pricing
31. blog
32. appoinment
33. faq
34. contact
35. map-area
36. team-details
37. working-process
38. back-totop
39. preloader
40. footer

----------------------------*/
/* Default  */
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap");
:root {
  --color-primary: #DF0A0A;
  --color-primary-2: #0B4DF5;
  --color-primary-3: #F64A00;
  --color-primary-4: #5264F3;
  --color-primary-5: #FA360A;
  --color-primary-alta: #FFECEC;
  --color-secondary:#111D5E;
  --color-terciary:#90FF03;
  --color-gray: #f6f6f6;
  --color-gray-2: #f5f8fa;
  --color-subtitle: #f9004d;
  --color-body: #5D666F;
  --color-heading-1: #1C2539;
  --background-color-1:#181C25;
  --color-white:#fff;
  --color-light-heading: #181c32;
  --color-light-body: #65676b;
  --color-border-white: #00000024;
  --color-success: #3EB75E;
  --color-danger: #FF0003;
  --color-warning: #FF8F3C;
  --color-info: #1BA2DB;
  --color-facebook: #3B5997;
  --color-twitter: #1BA1F2;
  --color-youtube: #ED4141;
  --color-linkedin: #0077B5;
  --color-pinterest: #E60022;
  --color-instagram: #C231A1;
  --color-vimeo: #00ADEF;
  --color-twitch: #6441A3;
  --color-discord: #7289da;
  --p-light: 300;
  --p-regular: 400;
  --p-medium: 500;
  --p-semi-bold: 600;
  --p-bold: 700;
  --p-extra-bold: 800;
  --p-black: 900;
  --s-light: 300;
  --s-regular: 400;
  --s-medium: 500;
  --s-semi-bold: 600;
  --s-bold: 700;
  --s-extra-bold: 800;
  --s-black: 900;
  --transition: 0.3s;
  --font-primary: "DM Sans", sans-serif;
  --font-secondary: "Red Hat Display", sans-serif;
  --font-size-b1: 16px;
  --font-size-b2: 18px;
  --font-size-b3: 22px;
  --line-height-b1: 26px;
  --line-height-b2: 30px;
  --line-height-b3: 1.7;
  --h1: 60px;
  --h2: 48px;
  --h3: 36px;
  --h4: 30px;
  --h5: 24px;
  --h6: 20px;
}

* {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  font-size: 10px;
  overflow: hidden;
  overflow-y: auto;
  scroll-behavior: auto !important;
}

body {
  font-size: var(--font-size-b1);
  line-height: var(--line-height-b1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "DM Sans", sans-serif;
  color: var(--color-body);
  font-weight: var(--p-regular);
  position: relative;
  overflow-x: hidden;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  body {
    overflow: hidden;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  body {
    overflow: hidden;
  }
}
@media only screen and (max-width: 767px) {
  body {
    overflow: hidden;
  }
}
body::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  opacity: 0.05;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
address,
p,
pre,
blockquote,
menu,
ol,
ul,
table,
hr {
  margin: 0;
  margin-bottom: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  word-break: break-word;
  font-family: "Red Hat Display", sans-serif;
  line-height: 1.4074;
  color: var(--color-heading-1);
}

h1,
.h1 {
  font-size: var(--h1);
  line-height: 91px;
  font-weight: 900;
}

h2,
.h2 {
  font-size: var(--h2);
  line-height: 1.23;
}

h3,
.h3 {
  font-size: var(--h3);
  line-height: 54px;
}

h4,
.h4 {
  font-size: var(--h4);
  line-height: 1.25;
}

h5,
.h5 {
  font-size: var(--h5);
  line-height: 1.24;
}

h6,
.h6 {
  font-size: var(--h6);
  line-height: 1.25;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a,
.h1 a,
.h2 a,
.h3 a,
.h4 a,
.h5 a,
.h6 a {
  color: inherit;
}

.bg-color-tertiary h1,
.bg-color-tertiary h2,
.bg-color-tertiary h3,
.bg-color-tertiary h4,
.bg-color-tertiary h5,
.bg-color-tertiary h6,
.bg-color-tertiary .h1,
.bg-color-tertiary .h2,
.bg-color-tertiary .h3,
.bg-color-tertiary .h4,
.bg-color-tertiary .h5,
.bg-color-tertiary .h6 {
  color: #fff;
}
.bg-color-tertiary p {
  color: #6c7279;
}
.bg-color-tertiary a {
  color: #6c7279;
}
a {
  text-decoration: none;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  h1,
.h1 {
    font-size: 38px;
  }

  h2,
.h2 {
    font-size: 32px;
  }

  h3,
.h3 {
    font-size: 28px;
  }

  h4,
.h4 {
    font-size: 24px;
  }

  h5,
.h5 {
    font-size: 18px;
  }
}
@media only screen and (max-width: 767px) {
  h1,
.h1 {
    font-size: 34px;
  }

  h2,
.h2 {
    font-size: 28px;
  }

  h3,
.h3 {
    font-size: 24px;
  }

  h4,
.h4 {
    font-size: 20px;
  }

  h5,
.h5 {
    font-size: 20px;
  }
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  font-weight: var(--s-bold);
}

h4,
.h4,
h5,
.h5 {
  font-weight: var(--s-bold);
}

h6,
.h6 {
  font-weight: var(--s-bold);
}

p {
  font-size: var(--font-size-b2);
  line-height: var(--line-height-b2);
  font-weight: var(--p-regular);
  color: var(--color-body);
  margin: 0 0 40px;
}
@media only screen and (max-width: 767px) {
  p {
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 28px;
  }
}
p.b1 {
  font-size: var(--font-size-b1);
  line-height: var(--line-height-b1);
}
p.b3 {
  font-size: var(--font-size-b3);
  line-height: var(--line-height-b3);
}
p.has-large-font-size {
  line-height: 1.5;
  font-size: 36px;
}
p.has-medium-font-size {
  font-size: 24px;
  line-height: 36px;
}
p.has-small-font-size {
  font-size: 13px;
}
p.has-very-light-gray-color {
  color: var(--color-white);
}
p.has-background {
  padding: 20px 30px;
}
p.b1 {
  font-size: var(--font-size-b1);
  line-height: var(--line-height-b1);
}
p.b2 {
  font-size: var(--font-size-b2);
  line-height: var(--line-height-b2);
}
p.b3 {
  font-size: var(--font-size-b3);
  line-height: var(--line-height-b3);
}
p:last-child {
  margin-bottom: 0;
}

.b1 {
  font-size: var(--font-size-b1);
  line-height: var(--line-height-b1);
}

.b2 {
  font-size: var(--font-size-b2);
  line-height: var(--line-height-b2);
}

.b3 {
  font-size: var(--font-size-b3);
  line-height: var(--line-height-b3);
}

.b4 {
  font-size: var(--font-size-b4);
  line-height: var(--line-height-b4);
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 0 20px;
  width: 100%;
}

table a,
table a:link,
table a:visited {
  text-decoration: none;
}

cite,
.wp-block-pullquote cite,
.wp-block-pullquote.is-style-solid-color blockquote cite,
.wp-block-quote cite {
  color: var(--color-heading);
}

var {
  font-family: "Red Hat Display", sans-serif;
}

/*---------------------------
	List Style 
---------------------------*/
ul,
ol {
  padding-left: 18px;
}

ul {
  list-style: square;
  margin-bottom: 30px;
  padding-left: 20px;
}
ul.liststyle.bullet li {
  font-size: 18px;
  line-height: 30px;
  color: var(--color-body);
  position: relative;
  padding-left: 30px;
}
@media only screen and (max-width: 767px) {
  ul.liststyle.bullet li {
    padding-left: 19px;
  }
}
ul.liststyle.bullet li::before {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background: var(--color-body);
  left: 0;
  top: 10px;
}
ul.liststyle.bullet li + li {
  margin-top: 8px;
}
ul li {
  font-size: var(--font-size-b1);
  line-height: var(--line-height-b1);
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--color-body);
  list-style: none;
}
ul li a {
  text-decoration: none;
  color: var(--color-gray);
}
ul li a:hover {
  color: var(--color-primary);
}
ul ul {
  margin-bottom: 0;
}

ol {
  margin-bottom: 30px;
}
ol li {
  font-size: var(--font-size-b1);
  line-height: var(--line-height-b1);
  color: var(--color-body);
  margin-top: 10px;
  margin-bottom: 10px;
}
ol li a {
  color: var(--color-heading);
  text-decoration: none;
}
ol li a:hover {
  color: var(--color-primary);
}
ol ul {
  padding-left: 30px;
}

.typo-title-area .title {
  margin-top: 0;
}

.paragraph-area p.disc {
  margin-bottom: 20px;
  color: #fff;
}

@media only screen and (max-width: 1199px) {
  h1 {
    font-size: 64px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  h1 {
    font-size: 54px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  h1 {
    font-size: 40px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 767px) {
  h1 {
    font-size: 30px;
    line-height: 45px;
  }
}
@media only screen and (max-width: 575px) {
  h1 {
    font-size: 28px;
    line-height: 36px;
  }
}
@media only screen and (max-width: 479px) {
  h1 {
    font-size: 26px;
    line-height: 30px;
  }
}

@media only screen and (max-width: 1199px) {
  h2 {
    font-size: 54px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  h2 {
    font-size: 44px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  h2 {
    font-size: 36px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 767px) {
  h2 {
    font-size: 30px;
    line-height: 45px;
  }
}
@media only screen and (max-width: 575px) {
  h2 {
    font-size: 26px;
    line-height: 36px;
  }
}
@media only screen and (max-width: 479px) {
  h2 {
    font-size: 24px;
    line-height: 30px;
  }
}

@media only screen and (max-width: 1199px) {
  h3 {
    font-size: 40px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  h3 {
    font-size: 36px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  h3 {
    font-size: 30px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 767px) {
  h3 {
    font-size: 30px;
    line-height: 45px;
  }
}
@media only screen and (max-width: 575px) {
  h3 {
    font-size: 24px;
    line-height: 36px;
  }
}
@media only screen and (max-width: 479px) {
  h3 {
    font-size: 22px;
    line-height: 30px;
  }
}

.rts-typography-style .container .style {
  margin-bottom: 40px;
}
.rts-typography-style .container .style .title {
  margin-bottom: 30px;
}
.rts-typography-style .container .style p {
  font-size: 16px;
}

/*=========================
    Section Separation 
==========================*/
.slick-dotted.slick-slider {
  margin-bottom: 0;
}

.mb_dec--25 {
  margin-bottom: -25px;
}

.mb_dec--30 {
  margin-bottom: -30px;
}

.m--0 {
  margin: 0;
}

.rts-section-gap {
  padding: 120px 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-section-gap {
    padding: 80px 0;
  }
}
@media only screen and (max-width: 767px) {
  .rts-section-gap {
    padding: 60px 0;
  }
}

.rts-section-gapBottom {
  padding-bottom: 120px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-section-gapBottom {
    padding-bottom: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-section-gapBottom {
    padding-bottom: 60px;
  }
}

.rts-section-gapTop {
  padding-top: 120px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-section-gapTop {
    padding-top: 70px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-section-gapTop {
    padding-top: 60px;
  }
}

.pl--0 {
  padding-left: 0 !important;
}

.pr--0 {
  padding-right: 0 !important;
}

.pt--0 {
  padding-top: 0 !important;
}

.pb--0 {
  padding-bottom: 0 !important;
}

.mr--0 {
  margin-right: 0 !important;
}

.ml--0 {
  margin-left: 0 !important;
}

.mt--0 {
  margin-top: 0 !important;
}

.mb--0 {
  margin-bottom: 0 !important;
}

.ptb--5 {
  padding: 5px 0 !important;
}

.plr--5 {
  padding: 0 5px !important;
}

.pt--5 {
  padding-top: 5px !important;
}

.pb--5 {
  padding-bottom: 5px !important;
}

.pl--5 {
  padding-left: 5px !important;
}

.pr--5 {
  padding-right: 5px !important;
}

.mt--5 {
  margin-top: 5px !important;
}

.mb--5 {
  margin-bottom: 5px !important;
}

.mr--5 {
  margin-right: 5px !important;
}

.ml--5 {
  margin-left: 5px !important;
}

.ptb--10 {
  padding: 10px 0 !important;
}

.plr--10 {
  padding: 0 10px !important;
}

.pt--10 {
  padding-top: 10px !important;
}

.pb--10 {
  padding-bottom: 10px !important;
}

.pl--10 {
  padding-left: 10px !important;
}

.pr--10 {
  padding-right: 10px !important;
}

.mt--10 {
  margin-top: 10px !important;
}

.mb--10 {
  margin-bottom: 10px !important;
}

.mr--10 {
  margin-right: 10px !important;
}

.ml--10 {
  margin-left: 10px !important;
}

.ptb--15 {
  padding: 15px 0 !important;
}

.plr--15 {
  padding: 0 15px !important;
}

.pt--15 {
  padding-top: 15px !important;
}

.pb--15 {
  padding-bottom: 15px !important;
}

.pl--15 {
  padding-left: 15px !important;
}

.pr--15 {
  padding-right: 15px !important;
}

.mt--15 {
  margin-top: 15px !important;
}

.mb--15 {
  margin-bottom: 15px !important;
}

.mr--15 {
  margin-right: 15px !important;
}

.ml--15 {
  margin-left: 15px !important;
}

.ptb--20 {
  padding: 20px 0 !important;
}

.plr--20 {
  padding: 0 20px !important;
}

.pt--20 {
  padding-top: 20px !important;
}

.pb--20 {
  padding-bottom: 20px !important;
}

.pl--20 {
  padding-left: 20px !important;
}

.pr--20 {
  padding-right: 20px !important;
}

.mt--20 {
  margin-top: 20px !important;
}

.mb--20 {
  margin-bottom: 20px !important;
}

.mr--20 {
  margin-right: 20px !important;
}

.ml--20 {
  margin-left: 20px !important;
}

.ptb--25 {
  padding: 25px 0 !important;
}

.plr--25 {
  padding: 0 25px !important;
}

.pt--25 {
  padding-top: 25px !important;
}

.pb--25 {
  padding-bottom: 25px !important;
}

.pl--25 {
  padding-left: 25px !important;
}

.pr--25 {
  padding-right: 25px !important;
}

.mt--25 {
  margin-top: 25px !important;
}

.mb--25 {
  margin-bottom: 25px !important;
}

.mr--25 {
  margin-right: 25px !important;
}

.ml--25 {
  margin-left: 25px !important;
}

.ptb--30 {
  padding: 30px 0 !important;
}

.plr--30 {
  padding: 0 30px !important;
}

.pt--30 {
  padding-top: 30px !important;
}

.pb--30 {
  padding-bottom: 30px !important;
}

.pl--30 {
  padding-left: 30px !important;
}

.pr--30 {
  padding-right: 30px !important;
}

.mt--30 {
  margin-top: 30px !important;
}

.mb--30 {
  margin-bottom: 30px !important;
}

.mr--30 {
  margin-right: 30px !important;
}

.ml--30 {
  margin-left: 30px !important;
}

.ptb--35 {
  padding: 35px 0 !important;
}

.plr--35 {
  padding: 0 35px !important;
}

.pt--35 {
  padding-top: 35px !important;
}

.pb--35 {
  padding-bottom: 35px !important;
}

.pl--35 {
  padding-left: 35px !important;
}

.pr--35 {
  padding-right: 35px !important;
}

.mt--35 {
  margin-top: 35px !important;
}

.mb--35 {
  margin-bottom: 35px !important;
}

.mr--35 {
  margin-right: 35px !important;
}

.ml--35 {
  margin-left: 35px !important;
}

.ptb--40 {
  padding: 40px 0 !important;
}

.plr--40 {
  padding: 0 40px !important;
}

.pt--40 {
  padding-top: 40px !important;
}

.pb--40 {
  padding-bottom: 40px !important;
}

.pl--40 {
  padding-left: 40px !important;
}

.pr--40 {
  padding-right: 40px !important;
}

.mt--40 {
  margin-top: 40px !important;
}

.mb--40 {
  margin-bottom: 40px !important;
}

.mr--40 {
  margin-right: 40px !important;
}

.ml--40 {
  margin-left: 40px !important;
}

.ptb--45 {
  padding: 45px 0 !important;
}

.plr--45 {
  padding: 0 45px !important;
}

.pt--45 {
  padding-top: 45px !important;
}

.pb--45 {
  padding-bottom: 45px !important;
}

.pl--45 {
  padding-left: 45px !important;
}

.pr--45 {
  padding-right: 45px !important;
}

.mt--45 {
  margin-top: 45px !important;
}

.mb--45 {
  margin-bottom: 45px !important;
}

.mr--45 {
  margin-right: 45px !important;
}

.ml--45 {
  margin-left: 45px !important;
}

.ptb--50 {
  padding: 50px 0 !important;
}

.plr--50 {
  padding: 0 50px !important;
}

.pt--50 {
  padding-top: 50px !important;
}

.pb--50 {
  padding-bottom: 50px !important;
}

.pl--50 {
  padding-left: 50px !important;
}

.pr--50 {
  padding-right: 50px !important;
}

.mt--50 {
  margin-top: 50px !important;
}

.mb--50 {
  margin-bottom: 50px !important;
}

.mr--50 {
  margin-right: 50px !important;
}

.ml--50 {
  margin-left: 50px !important;
}

.ptb--55 {
  padding: 55px 0 !important;
}

.plr--55 {
  padding: 0 55px !important;
}

.pt--55 {
  padding-top: 55px !important;
}

.pb--55 {
  padding-bottom: 55px !important;
}

.pl--55 {
  padding-left: 55px !important;
}

.pr--55 {
  padding-right: 55px !important;
}

.mt--55 {
  margin-top: 55px !important;
}

.mb--55 {
  margin-bottom: 55px !important;
}

.mr--55 {
  margin-right: 55px !important;
}

.ml--55 {
  margin-left: 55px !important;
}

.ptb--60 {
  padding: 60px 0 !important;
}

.plr--60 {
  padding: 0 60px !important;
}

.pt--60 {
  padding-top: 60px !important;
}

.pb--60 {
  padding-bottom: 60px !important;
}

.pl--60 {
  padding-left: 60px !important;
}

.pr--60 {
  padding-right: 60px !important;
}

.mt--60 {
  margin-top: 60px !important;
}

.mb--60 {
  margin-bottom: 60px !important;
}

.mr--60 {
  margin-right: 60px !important;
}

.ml--60 {
  margin-left: 60px !important;
}

.ptb--65 {
  padding: 65px 0 !important;
}

.plr--65 {
  padding: 0 65px !important;
}

.pt--65 {
  padding-top: 65px !important;
}

.pb--65 {
  padding-bottom: 65px !important;
}

.pl--65 {
  padding-left: 65px !important;
}

.pr--65 {
  padding-right: 65px !important;
}

.mt--65 {
  margin-top: 65px !important;
}

.mb--65 {
  margin-bottom: 65px !important;
}

.mr--65 {
  margin-right: 65px !important;
}

.ml--65 {
  margin-left: 65px !important;
}

.ptb--70 {
  padding: 70px 0 !important;
}

.plr--70 {
  padding: 0 70px !important;
}

.pt--70 {
  padding-top: 70px !important;
}

.pb--70 {
  padding-bottom: 70px !important;
}

.pl--70 {
  padding-left: 70px !important;
}

.pr--70 {
  padding-right: 70px !important;
}

.mt--70 {
  margin-top: 70px !important;
}

.mb--70 {
  margin-bottom: 70px !important;
}

.mr--70 {
  margin-right: 70px !important;
}

.ml--70 {
  margin-left: 70px !important;
}

.ptb--75 {
  padding: 75px 0 !important;
}

.plr--75 {
  padding: 0 75px !important;
}

.pt--75 {
  padding-top: 75px !important;
}

.pb--75 {
  padding-bottom: 75px !important;
}

.pl--75 {
  padding-left: 75px !important;
}

.pr--75 {
  padding-right: 75px !important;
}

.mt--75 {
  margin-top: 75px !important;
}

.mb--75 {
  margin-bottom: 75px !important;
}

.mr--75 {
  margin-right: 75px !important;
}

.ml--75 {
  margin-left: 75px !important;
}

.ptb--80 {
  padding: 80px 0 !important;
}

.plr--80 {
  padding: 0 80px !important;
}

.pt--80 {
  padding-top: 80px !important;
}

.pb--80 {
  padding-bottom: 80px !important;
}

.pl--80 {
  padding-left: 80px !important;
}

.pr--80 {
  padding-right: 80px !important;
}

.mt--80 {
  margin-top: 80px !important;
}

.mb--80 {
  margin-bottom: 80px !important;
}

.mr--80 {
  margin-right: 80px !important;
}

.ml--80 {
  margin-left: 80px !important;
}

.ptb--85 {
  padding: 85px 0 !important;
}

.plr--85 {
  padding: 0 85px !important;
}

.pt--85 {
  padding-top: 85px !important;
}

.pb--85 {
  padding-bottom: 85px !important;
}

.pl--85 {
  padding-left: 85px !important;
}

.pr--85 {
  padding-right: 85px !important;
}

.mt--85 {
  margin-top: 85px !important;
}

.mb--85 {
  margin-bottom: 85px !important;
}

.mr--85 {
  margin-right: 85px !important;
}

.ml--85 {
  margin-left: 85px !important;
}

.ptb--90 {
  padding: 90px 0 !important;
}

.plr--90 {
  padding: 0 90px !important;
}

.pt--90 {
  padding-top: 90px !important;
}

.pb--90 {
  padding-bottom: 90px !important;
}

.pl--90 {
  padding-left: 90px !important;
}

.pr--90 {
  padding-right: 90px !important;
}

.mt--90 {
  margin-top: 90px !important;
}

.mb--90 {
  margin-bottom: 90px !important;
}

.mr--90 {
  margin-right: 90px !important;
}

.ml--90 {
  margin-left: 90px !important;
}

.ptb--95 {
  padding: 95px 0 !important;
}

.plr--95 {
  padding: 0 95px !important;
}

.pt--95 {
  padding-top: 95px !important;
}

.pb--95 {
  padding-bottom: 95px !important;
}

.pl--95 {
  padding-left: 95px !important;
}

.pr--95 {
  padding-right: 95px !important;
}

.mt--95 {
  margin-top: 95px !important;
}

.mb--95 {
  margin-bottom: 95px !important;
}

.mr--95 {
  margin-right: 95px !important;
}

.ml--95 {
  margin-left: 95px !important;
}

.ptb--100 {
  padding: 100px 0 !important;
}

.plr--100 {
  padding: 0 100px !important;
}

.pt--100 {
  padding-top: 100px !important;
}

.pb--100 {
  padding-bottom: 100px !important;
}

.pl--100 {
  padding-left: 100px !important;
}

.pr--100 {
  padding-right: 100px !important;
}

.mt--100 {
  margin-top: 100px !important;
}

.mb--100 {
  margin-bottom: 100px !important;
}

.mr--100 {
  margin-right: 100px !important;
}

.ml--100 {
  margin-left: 100px !important;
}

.ptb--105 {
  padding: 105px 0 !important;
}

.plr--105 {
  padding: 0 105px !important;
}

.pt--105 {
  padding-top: 105px !important;
}

.pb--105 {
  padding-bottom: 105px !important;
}

.pl--105 {
  padding-left: 105px !important;
}

.pr--105 {
  padding-right: 105px !important;
}

.mt--105 {
  margin-top: 105px !important;
}

.mb--105 {
  margin-bottom: 105px !important;
}

.mr--105 {
  margin-right: 105px !important;
}

.ml--105 {
  margin-left: 105px !important;
}

.ptb--110 {
  padding: 110px 0 !important;
}

.plr--110 {
  padding: 0 110px !important;
}

.pt--110 {
  padding-top: 110px !important;
}

.pb--110 {
  padding-bottom: 110px !important;
}

.pl--110 {
  padding-left: 110px !important;
}

.pr--110 {
  padding-right: 110px !important;
}

.mt--110 {
  margin-top: 110px !important;
}

.mb--110 {
  margin-bottom: 110px !important;
}

.mr--110 {
  margin-right: 110px !important;
}

.ml--110 {
  margin-left: 110px !important;
}

.ptb--115 {
  padding: 115px 0 !important;
}

.plr--115 {
  padding: 0 115px !important;
}

.pt--115 {
  padding-top: 115px !important;
}

.pb--115 {
  padding-bottom: 115px !important;
}

.pl--115 {
  padding-left: 115px !important;
}

.pr--115 {
  padding-right: 115px !important;
}

.mt--115 {
  margin-top: 115px !important;
}

.mb--115 {
  margin-bottom: 115px !important;
}

.mr--115 {
  margin-right: 115px !important;
}

.ml--115 {
  margin-left: 115px !important;
}

.ptb--120 {
  padding: 120px 0 !important;
}

.plr--120 {
  padding: 0 120px !important;
}

.pt--120 {
  padding-top: 120px !important;
}

.pb--120 {
  padding-bottom: 120px !important;
}

.pl--120 {
  padding-left: 120px !important;
}

.pr--120 {
  padding-right: 120px !important;
}

.mt--120 {
  margin-top: 120px !important;
}

.mb--120 {
  margin-bottom: 120px !important;
}

.mr--120 {
  margin-right: 120px !important;
}

.ml--120 {
  margin-left: 120px !important;
}

.ptb--125 {
  padding: 125px 0 !important;
}

.plr--125 {
  padding: 0 125px !important;
}

.pt--125 {
  padding-top: 125px !important;
}

.pb--125 {
  padding-bottom: 125px !important;
}

.pl--125 {
  padding-left: 125px !important;
}

.pr--125 {
  padding-right: 125px !important;
}

.mt--125 {
  margin-top: 125px !important;
}

.mb--125 {
  margin-bottom: 125px !important;
}

.mr--125 {
  margin-right: 125px !important;
}

.ml--125 {
  margin-left: 125px !important;
}

.ptb--130 {
  padding: 130px 0 !important;
}

.plr--130 {
  padding: 0 130px !important;
}

.pt--130 {
  padding-top: 130px !important;
}

.pb--130 {
  padding-bottom: 130px !important;
}

.pl--130 {
  padding-left: 130px !important;
}

.pr--130 {
  padding-right: 130px !important;
}

.mt--130 {
  margin-top: 130px !important;
}

.mb--130 {
  margin-bottom: 130px !important;
}

.mr--130 {
  margin-right: 130px !important;
}

.ml--130 {
  margin-left: 130px !important;
}

.ptb--135 {
  padding: 135px 0 !important;
}

.plr--135 {
  padding: 0 135px !important;
}

.pt--135 {
  padding-top: 135px !important;
}

.pb--135 {
  padding-bottom: 135px !important;
}

.pl--135 {
  padding-left: 135px !important;
}

.pr--135 {
  padding-right: 135px !important;
}

.mt--135 {
  margin-top: 135px !important;
}

.mb--135 {
  margin-bottom: 135px !important;
}

.mr--135 {
  margin-right: 135px !important;
}

.ml--135 {
  margin-left: 135px !important;
}

.ptb--140 {
  padding: 140px 0 !important;
}

.plr--140 {
  padding: 0 140px !important;
}

.pt--140 {
  padding-top: 140px !important;
}

.pb--140 {
  padding-bottom: 140px !important;
}

.pl--140 {
  padding-left: 140px !important;
}

.pr--140 {
  padding-right: 140px !important;
}

.mt--140 {
  margin-top: 140px !important;
}

.mb--140 {
  margin-bottom: 140px !important;
}

.mr--140 {
  margin-right: 140px !important;
}

.ml--140 {
  margin-left: 140px !important;
}

.ptb--145 {
  padding: 145px 0 !important;
}

.plr--145 {
  padding: 0 145px !important;
}

.pt--145 {
  padding-top: 145px !important;
}

.pb--145 {
  padding-bottom: 145px !important;
}

.pl--145 {
  padding-left: 145px !important;
}

.pr--145 {
  padding-right: 145px !important;
}

.mt--145 {
  margin-top: 145px !important;
}

.mb--145 {
  margin-bottom: 145px !important;
}

.mr--145 {
  margin-right: 145px !important;
}

.ml--145 {
  margin-left: 145px !important;
}

.ptb--150 {
  padding: 150px 0 !important;
}

.plr--150 {
  padding: 0 150px !important;
}

.pt--150 {
  padding-top: 150px !important;
}

.pb--150 {
  padding-bottom: 150px !important;
}

.pl--150 {
  padding-left: 150px !important;
}

.pr--150 {
  padding-right: 150px !important;
}

.mt--150 {
  margin-top: 150px !important;
}

.mb--150 {
  margin-bottom: 150px !important;
}

.mr--150 {
  margin-right: 150px !important;
}

.ml--150 {
  margin-left: 150px !important;
}

.ptb--155 {
  padding: 155px 0 !important;
}

.plr--155 {
  padding: 0 155px !important;
}

.pt--155 {
  padding-top: 155px !important;
}

.pb--155 {
  padding-bottom: 155px !important;
}

.pl--155 {
  padding-left: 155px !important;
}

.pr--155 {
  padding-right: 155px !important;
}

.mt--155 {
  margin-top: 155px !important;
}

.mb--155 {
  margin-bottom: 155px !important;
}

.mr--155 {
  margin-right: 155px !important;
}

.ml--155 {
  margin-left: 155px !important;
}

.ptb--160 {
  padding: 160px 0 !important;
}

.plr--160 {
  padding: 0 160px !important;
}

.pt--160 {
  padding-top: 160px !important;
}

.pb--160 {
  padding-bottom: 160px !important;
}

.pl--160 {
  padding-left: 160px !important;
}

.pr--160 {
  padding-right: 160px !important;
}

.mt--160 {
  margin-top: 160px !important;
}

.mb--160 {
  margin-bottom: 160px !important;
}

.mr--160 {
  margin-right: 160px !important;
}

.ml--160 {
  margin-left: 160px !important;
}

.ptb--165 {
  padding: 165px 0 !important;
}

.plr--165 {
  padding: 0 165px !important;
}

.pt--165 {
  padding-top: 165px !important;
}

.pb--165 {
  padding-bottom: 165px !important;
}

.pl--165 {
  padding-left: 165px !important;
}

.pr--165 {
  padding-right: 165px !important;
}

.mt--165 {
  margin-top: 165px !important;
}

.mb--165 {
  margin-bottom: 165px !important;
}

.mr--165 {
  margin-right: 165px !important;
}

.ml--165 {
  margin-left: 165px !important;
}

.ptb--170 {
  padding: 170px 0 !important;
}

.plr--170 {
  padding: 0 170px !important;
}

.pt--170 {
  padding-top: 170px !important;
}

.pb--170 {
  padding-bottom: 170px !important;
}

.pl--170 {
  padding-left: 170px !important;
}

.pr--170 {
  padding-right: 170px !important;
}

.mt--170 {
  margin-top: 170px !important;
}

.mb--170 {
  margin-bottom: 170px !important;
}

.mr--170 {
  margin-right: 170px !important;
}

.ml--170 {
  margin-left: 170px !important;
}

.ptb--175 {
  padding: 175px 0 !important;
}

.plr--175 {
  padding: 0 175px !important;
}

.pt--175 {
  padding-top: 175px !important;
}

.pb--175 {
  padding-bottom: 175px !important;
}

.pl--175 {
  padding-left: 175px !important;
}

.pr--175 {
  padding-right: 175px !important;
}

.mt--175 {
  margin-top: 175px !important;
}

.mb--175 {
  margin-bottom: 175px !important;
}

.mr--175 {
  margin-right: 175px !important;
}

.ml--175 {
  margin-left: 175px !important;
}

.ptb--180 {
  padding: 180px 0 !important;
}

.plr--180 {
  padding: 0 180px !important;
}

.pt--180 {
  padding-top: 180px !important;
}

.pb--180 {
  padding-bottom: 180px !important;
}

.pl--180 {
  padding-left: 180px !important;
}

.pr--180 {
  padding-right: 180px !important;
}

.mt--180 {
  margin-top: 180px !important;
}

.mb--180 {
  margin-bottom: 180px !important;
}

.mr--180 {
  margin-right: 180px !important;
}

.ml--180 {
  margin-left: 180px !important;
}

.ptb--185 {
  padding: 185px 0 !important;
}

.plr--185 {
  padding: 0 185px !important;
}

.pt--185 {
  padding-top: 185px !important;
}

.pb--185 {
  padding-bottom: 185px !important;
}

.pl--185 {
  padding-left: 185px !important;
}

.pr--185 {
  padding-right: 185px !important;
}

.mt--185 {
  margin-top: 185px !important;
}

.mb--185 {
  margin-bottom: 185px !important;
}

.mr--185 {
  margin-right: 185px !important;
}

.ml--185 {
  margin-left: 185px !important;
}

.ptb--190 {
  padding: 190px 0 !important;
}

.plr--190 {
  padding: 0 190px !important;
}

.pt--190 {
  padding-top: 190px !important;
}

.pb--190 {
  padding-bottom: 190px !important;
}

.pl--190 {
  padding-left: 190px !important;
}

.pr--190 {
  padding-right: 190px !important;
}

.mt--190 {
  margin-top: 190px !important;
}

.mb--190 {
  margin-bottom: 190px !important;
}

.mr--190 {
  margin-right: 190px !important;
}

.ml--190 {
  margin-left: 190px !important;
}

.ptb--195 {
  padding: 195px 0 !important;
}

.plr--195 {
  padding: 0 195px !important;
}

.pt--195 {
  padding-top: 195px !important;
}

.pb--195 {
  padding-bottom: 195px !important;
}

.pl--195 {
  padding-left: 195px !important;
}

.pr--195 {
  padding-right: 195px !important;
}

.mt--195 {
  margin-top: 195px !important;
}

.mb--195 {
  margin-bottom: 195px !important;
}

.mr--195 {
  margin-right: 195px !important;
}

.ml--195 {
  margin-left: 195px !important;
}

.ptb--200 {
  padding: 200px 0 !important;
}

.plr--200 {
  padding: 0 200px !important;
}

.pt--200 {
  padding-top: 200px !important;
}

.pb--200 {
  padding-bottom: 200px !important;
}

.pl--200 {
  padding-left: 200px !important;
}

.pr--200 {
  padding-right: 200px !important;
}

.mt--200 {
  margin-top: 200px !important;
}

.mb--200 {
  margin-bottom: 200px !important;
}

.mr--200 {
  margin-right: 200px !important;
}

.ml--200 {
  margin-left: 200px !important;
}

@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .ptb_lp--5 {
    padding: 5px 0;
  }

  .plr_lp--5 {
    padding: 0 5px;
  }

  .pt_lp--5 {
    padding-top: 5px;
  }

  .pb_lp--5 {
    padding-bottom: 5px;
  }

  .pl_lp--5 {
    padding-left: 5px;
  }

  .pr_lp--5 {
    padding-right: 5px;
  }

  .mt_lp--5 {
    margin-top: 5px;
  }

  .mb_lp--5 {
    margin-bottom: 5px;
  }

  .ptb_lp--10 {
    padding: 10px 0;
  }

  .plr_lp--10 {
    padding: 0 10px;
  }

  .pt_lp--10 {
    padding-top: 10px;
  }

  .pb_lp--10 {
    padding-bottom: 10px;
  }

  .pl_lp--10 {
    padding-left: 10px;
  }

  .pr_lp--10 {
    padding-right: 10px;
  }

  .mt_lp--10 {
    margin-top: 10px;
  }

  .mb_lp--10 {
    margin-bottom: 10px;
  }

  .ptb_lp--15 {
    padding: 15px 0;
  }

  .plr_lp--15 {
    padding: 0 15px;
  }

  .pt_lp--15 {
    padding-top: 15px;
  }

  .pb_lp--15 {
    padding-bottom: 15px;
  }

  .pl_lp--15 {
    padding-left: 15px;
  }

  .pr_lp--15 {
    padding-right: 15px;
  }

  .mt_lp--15 {
    margin-top: 15px;
  }

  .mb_lp--15 {
    margin-bottom: 15px;
  }

  .ptb_lp--20 {
    padding: 20px 0;
  }

  .plr_lp--20 {
    padding: 0 20px;
  }

  .pt_lp--20 {
    padding-top: 20px;
  }

  .pb_lp--20 {
    padding-bottom: 20px;
  }

  .pl_lp--20 {
    padding-left: 20px;
  }

  .pr_lp--20 {
    padding-right: 20px;
  }

  .mt_lp--20 {
    margin-top: 20px;
  }

  .mb_lp--20 {
    margin-bottom: 20px;
  }

  .ptb_lp--25 {
    padding: 25px 0;
  }

  .plr_lp--25 {
    padding: 0 25px;
  }

  .pt_lp--25 {
    padding-top: 25px;
  }

  .pb_lp--25 {
    padding-bottom: 25px;
  }

  .pl_lp--25 {
    padding-left: 25px;
  }

  .pr_lp--25 {
    padding-right: 25px;
  }

  .mt_lp--25 {
    margin-top: 25px;
  }

  .mb_lp--25 {
    margin-bottom: 25px;
  }

  .ptb_lp--30 {
    padding: 30px 0;
  }

  .plr_lp--30 {
    padding: 0 30px;
  }

  .pt_lp--30 {
    padding-top: 30px;
  }

  .pb_lp--30 {
    padding-bottom: 30px;
  }

  .pl_lp--30 {
    padding-left: 30px;
  }

  .pr_lp--30 {
    padding-right: 30px;
  }

  .mt_lp--30 {
    margin-top: 30px;
  }

  .mb_lp--30 {
    margin-bottom: 30px;
  }

  .ptb_lp--35 {
    padding: 35px 0;
  }

  .plr_lp--35 {
    padding: 0 35px;
  }

  .pt_lp--35 {
    padding-top: 35px;
  }

  .pb_lp--35 {
    padding-bottom: 35px;
  }

  .pl_lp--35 {
    padding-left: 35px;
  }

  .pr_lp--35 {
    padding-right: 35px;
  }

  .mt_lp--35 {
    margin-top: 35px;
  }

  .mb_lp--35 {
    margin-bottom: 35px;
  }

  .ptb_lp--40 {
    padding: 40px 0;
  }

  .plr_lp--40 {
    padding: 0 40px;
  }

  .pt_lp--40 {
    padding-top: 40px;
  }

  .pb_lp--40 {
    padding-bottom: 40px;
  }

  .pl_lp--40 {
    padding-left: 40px;
  }

  .pr_lp--40 {
    padding-right: 40px;
  }

  .mt_lp--40 {
    margin-top: 40px;
  }

  .mb_lp--40 {
    margin-bottom: 40px;
  }

  .ptb_lp--45 {
    padding: 45px 0;
  }

  .plr_lp--45 {
    padding: 0 45px;
  }

  .pt_lp--45 {
    padding-top: 45px;
  }

  .pb_lp--45 {
    padding-bottom: 45px;
  }

  .pl_lp--45 {
    padding-left: 45px;
  }

  .pr_lp--45 {
    padding-right: 45px;
  }

  .mt_lp--45 {
    margin-top: 45px;
  }

  .mb_lp--45 {
    margin-bottom: 45px;
  }

  .ptb_lp--50 {
    padding: 50px 0;
  }

  .plr_lp--50 {
    padding: 0 50px;
  }

  .pt_lp--50 {
    padding-top: 50px;
  }

  .pb_lp--50 {
    padding-bottom: 50px;
  }

  .pl_lp--50 {
    padding-left: 50px;
  }

  .pr_lp--50 {
    padding-right: 50px;
  }

  .mt_lp--50 {
    margin-top: 50px;
  }

  .mb_lp--50 {
    margin-bottom: 50px;
  }

  .ptb_lp--55 {
    padding: 55px 0;
  }

  .plr_lp--55 {
    padding: 0 55px;
  }

  .pt_lp--55 {
    padding-top: 55px;
  }

  .pb_lp--55 {
    padding-bottom: 55px;
  }

  .pl_lp--55 {
    padding-left: 55px;
  }

  .pr_lp--55 {
    padding-right: 55px;
  }

  .mt_lp--55 {
    margin-top: 55px;
  }

  .mb_lp--55 {
    margin-bottom: 55px;
  }

  .ptb_lp--60 {
    padding: 60px 0;
  }

  .plr_lp--60 {
    padding: 0 60px;
  }

  .pt_lp--60 {
    padding-top: 60px;
  }

  .pb_lp--60 {
    padding-bottom: 60px;
  }

  .pl_lp--60 {
    padding-left: 60px;
  }

  .pr_lp--60 {
    padding-right: 60px;
  }

  .mt_lp--60 {
    margin-top: 60px;
  }

  .mb_lp--60 {
    margin-bottom: 60px;
  }

  .ptb_lp--65 {
    padding: 65px 0;
  }

  .plr_lp--65 {
    padding: 0 65px;
  }

  .pt_lp--65 {
    padding-top: 65px;
  }

  .pb_lp--65 {
    padding-bottom: 65px;
  }

  .pl_lp--65 {
    padding-left: 65px;
  }

  .pr_lp--65 {
    padding-right: 65px;
  }

  .mt_lp--65 {
    margin-top: 65px;
  }

  .mb_lp--65 {
    margin-bottom: 65px;
  }

  .ptb_lp--70 {
    padding: 70px 0;
  }

  .plr_lp--70 {
    padding: 0 70px;
  }

  .pt_lp--70 {
    padding-top: 70px;
  }

  .pb_lp--70 {
    padding-bottom: 70px;
  }

  .pl_lp--70 {
    padding-left: 70px;
  }

  .pr_lp--70 {
    padding-right: 70px;
  }

  .mt_lp--70 {
    margin-top: 70px;
  }

  .mb_lp--70 {
    margin-bottom: 70px;
  }

  .ptb_lp--75 {
    padding: 75px 0;
  }

  .plr_lp--75 {
    padding: 0 75px;
  }

  .pt_lp--75 {
    padding-top: 75px;
  }

  .pb_lp--75 {
    padding-bottom: 75px;
  }

  .pl_lp--75 {
    padding-left: 75px;
  }

  .pr_lp--75 {
    padding-right: 75px;
  }

  .mt_lp--75 {
    margin-top: 75px;
  }

  .mb_lp--75 {
    margin-bottom: 75px;
  }

  .ptb_lp--80 {
    padding: 80px 0;
  }

  .plr_lp--80 {
    padding: 0 80px;
  }

  .pt_lp--80 {
    padding-top: 80px;
  }

  .pb_lp--80 {
    padding-bottom: 80px;
  }

  .pl_lp--80 {
    padding-left: 80px;
  }

  .pr_lp--80 {
    padding-right: 80px;
  }

  .mt_lp--80 {
    margin-top: 80px;
  }

  .mb_lp--80 {
    margin-bottom: 80px;
  }

  .ptb_lp--85 {
    padding: 85px 0;
  }

  .plr_lp--85 {
    padding: 0 85px;
  }

  .pt_lp--85 {
    padding-top: 85px;
  }

  .pb_lp--85 {
    padding-bottom: 85px;
  }

  .pl_lp--85 {
    padding-left: 85px;
  }

  .pr_lp--85 {
    padding-right: 85px;
  }

  .mt_lp--85 {
    margin-top: 85px;
  }

  .mb_lp--85 {
    margin-bottom: 85px;
  }

  .ptb_lp--90 {
    padding: 90px 0;
  }

  .plr_lp--90 {
    padding: 0 90px;
  }

  .pt_lp--90 {
    padding-top: 90px;
  }

  .pb_lp--90 {
    padding-bottom: 90px;
  }

  .pl_lp--90 {
    padding-left: 90px;
  }

  .pr_lp--90 {
    padding-right: 90px;
  }

  .mt_lp--90 {
    margin-top: 90px;
  }

  .mb_lp--90 {
    margin-bottom: 90px;
  }

  .ptb_lp--95 {
    padding: 95px 0;
  }

  .plr_lp--95 {
    padding: 0 95px;
  }

  .pt_lp--95 {
    padding-top: 95px;
  }

  .pb_lp--95 {
    padding-bottom: 95px;
  }

  .pl_lp--95 {
    padding-left: 95px;
  }

  .pr_lp--95 {
    padding-right: 95px;
  }

  .mt_lp--95 {
    margin-top: 95px;
  }

  .mb_lp--95 {
    margin-bottom: 95px;
  }

  .ptb_lp--100 {
    padding: 100px 0;
  }

  .plr_lp--100 {
    padding: 0 100px;
  }

  .pt_lp--100 {
    padding-top: 100px;
  }

  .pb_lp--100 {
    padding-bottom: 100px;
  }

  .pl_lp--100 {
    padding-left: 100px;
  }

  .pr_lp--100 {
    padding-right: 100px;
  }

  .mt_lp--100 {
    margin-top: 100px;
  }

  .mb_lp--100 {
    margin-bottom: 100px;
  }

  .ptb_lp--105 {
    padding: 105px 0;
  }

  .plr_lp--105 {
    padding: 0 105px;
  }

  .pt_lp--105 {
    padding-top: 105px;
  }

  .pb_lp--105 {
    padding-bottom: 105px;
  }

  .pl_lp--105 {
    padding-left: 105px;
  }

  .pr_lp--105 {
    padding-right: 105px;
  }

  .mt_lp--105 {
    margin-top: 105px;
  }

  .mb_lp--105 {
    margin-bottom: 105px;
  }

  .ptb_lp--110 {
    padding: 110px 0;
  }

  .plr_lp--110 {
    padding: 0 110px;
  }

  .pt_lp--110 {
    padding-top: 110px;
  }

  .pb_lp--110 {
    padding-bottom: 110px;
  }

  .pl_lp--110 {
    padding-left: 110px;
  }

  .pr_lp--110 {
    padding-right: 110px;
  }

  .mt_lp--110 {
    margin-top: 110px;
  }

  .mb_lp--110 {
    margin-bottom: 110px;
  }

  .ptb_lp--115 {
    padding: 115px 0;
  }

  .plr_lp--115 {
    padding: 0 115px;
  }

  .pt_lp--115 {
    padding-top: 115px;
  }

  .pb_lp--115 {
    padding-bottom: 115px;
  }

  .pl_lp--115 {
    padding-left: 115px;
  }

  .pr_lp--115 {
    padding-right: 115px;
  }

  .mt_lp--115 {
    margin-top: 115px;
  }

  .mb_lp--115 {
    margin-bottom: 115px;
  }

  .ptb_lp--120 {
    padding: 120px 0;
  }

  .plr_lp--120 {
    padding: 0 120px;
  }

  .pt_lp--120 {
    padding-top: 120px;
  }

  .pb_lp--120 {
    padding-bottom: 120px;
  }

  .pl_lp--120 {
    padding-left: 120px;
  }

  .pr_lp--120 {
    padding-right: 120px;
  }

  .mt_lp--120 {
    margin-top: 120px;
  }

  .mb_lp--120 {
    margin-bottom: 120px;
  }

  .ptb_lp--125 {
    padding: 125px 0;
  }

  .plr_lp--125 {
    padding: 0 125px;
  }

  .pt_lp--125 {
    padding-top: 125px;
  }

  .pb_lp--125 {
    padding-bottom: 125px;
  }

  .pl_lp--125 {
    padding-left: 125px;
  }

  .pr_lp--125 {
    padding-right: 125px;
  }

  .mt_lp--125 {
    margin-top: 125px;
  }

  .mb_lp--125 {
    margin-bottom: 125px;
  }

  .ptb_lp--130 {
    padding: 130px 0;
  }

  .plr_lp--130 {
    padding: 0 130px;
  }

  .pt_lp--130 {
    padding-top: 130px;
  }

  .pb_lp--130 {
    padding-bottom: 130px;
  }

  .pl_lp--130 {
    padding-left: 130px;
  }

  .pr_lp--130 {
    padding-right: 130px;
  }

  .mt_lp--130 {
    margin-top: 130px;
  }

  .mb_lp--130 {
    margin-bottom: 130px;
  }

  .ptb_lp--135 {
    padding: 135px 0;
  }

  .plr_lp--135 {
    padding: 0 135px;
  }

  .pt_lp--135 {
    padding-top: 135px;
  }

  .pb_lp--135 {
    padding-bottom: 135px;
  }

  .pl_lp--135 {
    padding-left: 135px;
  }

  .pr_lp--135 {
    padding-right: 135px;
  }

  .mt_lp--135 {
    margin-top: 135px;
  }

  .mb_lp--135 {
    margin-bottom: 135px;
  }

  .ptb_lp--140 {
    padding: 140px 0;
  }

  .plr_lp--140 {
    padding: 0 140px;
  }

  .pt_lp--140 {
    padding-top: 140px;
  }

  .pb_lp--140 {
    padding-bottom: 140px;
  }

  .pl_lp--140 {
    padding-left: 140px;
  }

  .pr_lp--140 {
    padding-right: 140px;
  }

  .mt_lp--140 {
    margin-top: 140px;
  }

  .mb_lp--140 {
    margin-bottom: 140px;
  }

  .ptb_lp--145 {
    padding: 145px 0;
  }

  .plr_lp--145 {
    padding: 0 145px;
  }

  .pt_lp--145 {
    padding-top: 145px;
  }

  .pb_lp--145 {
    padding-bottom: 145px;
  }

  .pl_lp--145 {
    padding-left: 145px;
  }

  .pr_lp--145 {
    padding-right: 145px;
  }

  .mt_lp--145 {
    margin-top: 145px;
  }

  .mb_lp--145 {
    margin-bottom: 145px;
  }

  .ptb_lp--150 {
    padding: 150px 0;
  }

  .plr_lp--150 {
    padding: 0 150px;
  }

  .pt_lp--150 {
    padding-top: 150px;
  }

  .pb_lp--150 {
    padding-bottom: 150px;
  }

  .pl_lp--150 {
    padding-left: 150px;
  }

  .pr_lp--150 {
    padding-right: 150px;
  }

  .mt_lp--150 {
    margin-top: 150px;
  }

  .mb_lp--150 {
    margin-bottom: 150px;
  }

  .ptb_lp--155 {
    padding: 155px 0;
  }

  .plr_lp--155 {
    padding: 0 155px;
  }

  .pt_lp--155 {
    padding-top: 155px;
  }

  .pb_lp--155 {
    padding-bottom: 155px;
  }

  .pl_lp--155 {
    padding-left: 155px;
  }

  .pr_lp--155 {
    padding-right: 155px;
  }

  .mt_lp--155 {
    margin-top: 155px;
  }

  .mb_lp--155 {
    margin-bottom: 155px;
  }

  .ptb_lp--160 {
    padding: 160px 0;
  }

  .plr_lp--160 {
    padding: 0 160px;
  }

  .pt_lp--160 {
    padding-top: 160px;
  }

  .pb_lp--160 {
    padding-bottom: 160px;
  }

  .pl_lp--160 {
    padding-left: 160px;
  }

  .pr_lp--160 {
    padding-right: 160px;
  }

  .mt_lp--160 {
    margin-top: 160px;
  }

  .mb_lp--160 {
    margin-bottom: 160px;
  }

  .ptb_lp--165 {
    padding: 165px 0;
  }

  .plr_lp--165 {
    padding: 0 165px;
  }

  .pt_lp--165 {
    padding-top: 165px;
  }

  .pb_lp--165 {
    padding-bottom: 165px;
  }

  .pl_lp--165 {
    padding-left: 165px;
  }

  .pr_lp--165 {
    padding-right: 165px;
  }

  .mt_lp--165 {
    margin-top: 165px;
  }

  .mb_lp--165 {
    margin-bottom: 165px;
  }

  .ptb_lp--170 {
    padding: 170px 0;
  }

  .plr_lp--170 {
    padding: 0 170px;
  }

  .pt_lp--170 {
    padding-top: 170px;
  }

  .pb_lp--170 {
    padding-bottom: 170px;
  }

  .pl_lp--170 {
    padding-left: 170px;
  }

  .pr_lp--170 {
    padding-right: 170px;
  }

  .mt_lp--170 {
    margin-top: 170px;
  }

  .mb_lp--170 {
    margin-bottom: 170px;
  }

  .ptb_lp--175 {
    padding: 175px 0;
  }

  .plr_lp--175 {
    padding: 0 175px;
  }

  .pt_lp--175 {
    padding-top: 175px;
  }

  .pb_lp--175 {
    padding-bottom: 175px;
  }

  .pl_lp--175 {
    padding-left: 175px;
  }

  .pr_lp--175 {
    padding-right: 175px;
  }

  .mt_lp--175 {
    margin-top: 175px;
  }

  .mb_lp--175 {
    margin-bottom: 175px;
  }

  .ptb_lp--180 {
    padding: 180px 0;
  }

  .plr_lp--180 {
    padding: 0 180px;
  }

  .pt_lp--180 {
    padding-top: 180px;
  }

  .pb_lp--180 {
    padding-bottom: 180px;
  }

  .pl_lp--180 {
    padding-left: 180px;
  }

  .pr_lp--180 {
    padding-right: 180px;
  }

  .mt_lp--180 {
    margin-top: 180px;
  }

  .mb_lp--180 {
    margin-bottom: 180px;
  }

  .ptb_lp--185 {
    padding: 185px 0;
  }

  .plr_lp--185 {
    padding: 0 185px;
  }

  .pt_lp--185 {
    padding-top: 185px;
  }

  .pb_lp--185 {
    padding-bottom: 185px;
  }

  .pl_lp--185 {
    padding-left: 185px;
  }

  .pr_lp--185 {
    padding-right: 185px;
  }

  .mt_lp--185 {
    margin-top: 185px;
  }

  .mb_lp--185 {
    margin-bottom: 185px;
  }

  .ptb_lp--190 {
    padding: 190px 0;
  }

  .plr_lp--190 {
    padding: 0 190px;
  }

  .pt_lp--190 {
    padding-top: 190px;
  }

  .pb_lp--190 {
    padding-bottom: 190px;
  }

  .pl_lp--190 {
    padding-left: 190px;
  }

  .pr_lp--190 {
    padding-right: 190px;
  }

  .mt_lp--190 {
    margin-top: 190px;
  }

  .mb_lp--190 {
    margin-bottom: 190px;
  }

  .ptb_lp--195 {
    padding: 195px 0;
  }

  .plr_lp--195 {
    padding: 0 195px;
  }

  .pt_lp--195 {
    padding-top: 195px;
  }

  .pb_lp--195 {
    padding-bottom: 195px;
  }

  .pl_lp--195 {
    padding-left: 195px;
  }

  .pr_lp--195 {
    padding-right: 195px;
  }

  .mt_lp--195 {
    margin-top: 195px;
  }

  .mb_lp--195 {
    margin-bottom: 195px;
  }

  .ptb_lp--200 {
    padding: 200px 0;
  }

  .plr_lp--200 {
    padding: 0 200px;
  }

  .pt_lp--200 {
    padding-top: 200px;
  }

  .pb_lp--200 {
    padding-bottom: 200px;
  }

  .pl_lp--200 {
    padding-left: 200px;
  }

  .pr_lp--200 {
    padding-right: 200px;
  }

  .mt_lp--200 {
    margin-top: 200px;
  }

  .mb_lp--200 {
    margin-bottom: 200px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .ptb_lg--5 {
    padding: 5px 0 !important;
  }

  .plr_lg--5 {
    padding: 0 5px !important;
  }

  .pt_lg--5 {
    padding-top: 5px !important;
  }

  .pb_lg--5 {
    padding-bottom: 5px !important;
  }

  .pl_lg--5 {
    padding-left: 5px !important;
  }

  .pr_lg--5 {
    padding-right: 5px !important;
  }

  .mt_lg--5 {
    margin-top: 5px !important;
  }

  .mb_lg--5 {
    margin-bottom: 5px !important;
  }

  .ml_lg--5 {
    margin-left: 5px !important;
  }

  .ptb_lg--10 {
    padding: 10px 0 !important;
  }

  .plr_lg--10 {
    padding: 0 10px !important;
  }

  .pt_lg--10 {
    padding-top: 10px !important;
  }

  .pb_lg--10 {
    padding-bottom: 10px !important;
  }

  .pl_lg--10 {
    padding-left: 10px !important;
  }

  .pr_lg--10 {
    padding-right: 10px !important;
  }

  .mt_lg--10 {
    margin-top: 10px !important;
  }

  .mb_lg--10 {
    margin-bottom: 10px !important;
  }

  .ml_lg--10 {
    margin-left: 10px !important;
  }

  .ptb_lg--15 {
    padding: 15px 0 !important;
  }

  .plr_lg--15 {
    padding: 0 15px !important;
  }

  .pt_lg--15 {
    padding-top: 15px !important;
  }

  .pb_lg--15 {
    padding-bottom: 15px !important;
  }

  .pl_lg--15 {
    padding-left: 15px !important;
  }

  .pr_lg--15 {
    padding-right: 15px !important;
  }

  .mt_lg--15 {
    margin-top: 15px !important;
  }

  .mb_lg--15 {
    margin-bottom: 15px !important;
  }

  .ml_lg--15 {
    margin-left: 15px !important;
  }

  .ptb_lg--20 {
    padding: 20px 0 !important;
  }

  .plr_lg--20 {
    padding: 0 20px !important;
  }

  .pt_lg--20 {
    padding-top: 20px !important;
  }

  .pb_lg--20 {
    padding-bottom: 20px !important;
  }

  .pl_lg--20 {
    padding-left: 20px !important;
  }

  .pr_lg--20 {
    padding-right: 20px !important;
  }

  .mt_lg--20 {
    margin-top: 20px !important;
  }

  .mb_lg--20 {
    margin-bottom: 20px !important;
  }

  .ml_lg--20 {
    margin-left: 20px !important;
  }

  .ptb_lg--25 {
    padding: 25px 0 !important;
  }

  .plr_lg--25 {
    padding: 0 25px !important;
  }

  .pt_lg--25 {
    padding-top: 25px !important;
  }

  .pb_lg--25 {
    padding-bottom: 25px !important;
  }

  .pl_lg--25 {
    padding-left: 25px !important;
  }

  .pr_lg--25 {
    padding-right: 25px !important;
  }

  .mt_lg--25 {
    margin-top: 25px !important;
  }

  .mb_lg--25 {
    margin-bottom: 25px !important;
  }

  .ml_lg--25 {
    margin-left: 25px !important;
  }

  .ptb_lg--30 {
    padding: 30px 0 !important;
  }

  .plr_lg--30 {
    padding: 0 30px !important;
  }

  .pt_lg--30 {
    padding-top: 30px !important;
  }

  .pb_lg--30 {
    padding-bottom: 30px !important;
  }

  .pl_lg--30 {
    padding-left: 30px !important;
  }

  .pr_lg--30 {
    padding-right: 30px !important;
  }

  .mt_lg--30 {
    margin-top: 30px !important;
  }

  .mb_lg--30 {
    margin-bottom: 30px !important;
  }

  .ml_lg--30 {
    margin-left: 30px !important;
  }

  .ptb_lg--35 {
    padding: 35px 0 !important;
  }

  .plr_lg--35 {
    padding: 0 35px !important;
  }

  .pt_lg--35 {
    padding-top: 35px !important;
  }

  .pb_lg--35 {
    padding-bottom: 35px !important;
  }

  .pl_lg--35 {
    padding-left: 35px !important;
  }

  .pr_lg--35 {
    padding-right: 35px !important;
  }

  .mt_lg--35 {
    margin-top: 35px !important;
  }

  .mb_lg--35 {
    margin-bottom: 35px !important;
  }

  .ml_lg--35 {
    margin-left: 35px !important;
  }

  .ptb_lg--40 {
    padding: 40px 0 !important;
  }

  .plr_lg--40 {
    padding: 0 40px !important;
  }

  .pt_lg--40 {
    padding-top: 40px !important;
  }

  .pb_lg--40 {
    padding-bottom: 40px !important;
  }

  .pl_lg--40 {
    padding-left: 40px !important;
  }

  .pr_lg--40 {
    padding-right: 40px !important;
  }

  .mt_lg--40 {
    margin-top: 40px !important;
  }

  .mb_lg--40 {
    margin-bottom: 40px !important;
  }

  .ml_lg--40 {
    margin-left: 40px !important;
  }

  .ptb_lg--45 {
    padding: 45px 0 !important;
  }

  .plr_lg--45 {
    padding: 0 45px !important;
  }

  .pt_lg--45 {
    padding-top: 45px !important;
  }

  .pb_lg--45 {
    padding-bottom: 45px !important;
  }

  .pl_lg--45 {
    padding-left: 45px !important;
  }

  .pr_lg--45 {
    padding-right: 45px !important;
  }

  .mt_lg--45 {
    margin-top: 45px !important;
  }

  .mb_lg--45 {
    margin-bottom: 45px !important;
  }

  .ml_lg--45 {
    margin-left: 45px !important;
  }

  .ptb_lg--50 {
    padding: 50px 0 !important;
  }

  .plr_lg--50 {
    padding: 0 50px !important;
  }

  .pt_lg--50 {
    padding-top: 50px !important;
  }

  .pb_lg--50 {
    padding-bottom: 50px !important;
  }

  .pl_lg--50 {
    padding-left: 50px !important;
  }

  .pr_lg--50 {
    padding-right: 50px !important;
  }

  .mt_lg--50 {
    margin-top: 50px !important;
  }

  .mb_lg--50 {
    margin-bottom: 50px !important;
  }

  .ml_lg--50 {
    margin-left: 50px !important;
  }

  .ptb_lg--55 {
    padding: 55px 0 !important;
  }

  .plr_lg--55 {
    padding: 0 55px !important;
  }

  .pt_lg--55 {
    padding-top: 55px !important;
  }

  .pb_lg--55 {
    padding-bottom: 55px !important;
  }

  .pl_lg--55 {
    padding-left: 55px !important;
  }

  .pr_lg--55 {
    padding-right: 55px !important;
  }

  .mt_lg--55 {
    margin-top: 55px !important;
  }

  .mb_lg--55 {
    margin-bottom: 55px !important;
  }

  .ml_lg--55 {
    margin-left: 55px !important;
  }

  .ptb_lg--60 {
    padding: 60px 0 !important;
  }

  .plr_lg--60 {
    padding: 0 60px !important;
  }

  .pt_lg--60 {
    padding-top: 60px !important;
  }

  .pb_lg--60 {
    padding-bottom: 60px !important;
  }

  .pl_lg--60 {
    padding-left: 60px !important;
  }

  .pr_lg--60 {
    padding-right: 60px !important;
  }

  .mt_lg--60 {
    margin-top: 60px !important;
  }

  .mb_lg--60 {
    margin-bottom: 60px !important;
  }

  .ml_lg--60 {
    margin-left: 60px !important;
  }

  .ptb_lg--65 {
    padding: 65px 0 !important;
  }

  .plr_lg--65 {
    padding: 0 65px !important;
  }

  .pt_lg--65 {
    padding-top: 65px !important;
  }

  .pb_lg--65 {
    padding-bottom: 65px !important;
  }

  .pl_lg--65 {
    padding-left: 65px !important;
  }

  .pr_lg--65 {
    padding-right: 65px !important;
  }

  .mt_lg--65 {
    margin-top: 65px !important;
  }

  .mb_lg--65 {
    margin-bottom: 65px !important;
  }

  .ml_lg--65 {
    margin-left: 65px !important;
  }

  .ptb_lg--70 {
    padding: 70px 0 !important;
  }

  .plr_lg--70 {
    padding: 0 70px !important;
  }

  .pt_lg--70 {
    padding-top: 70px !important;
  }

  .pb_lg--70 {
    padding-bottom: 70px !important;
  }

  .pl_lg--70 {
    padding-left: 70px !important;
  }

  .pr_lg--70 {
    padding-right: 70px !important;
  }

  .mt_lg--70 {
    margin-top: 70px !important;
  }

  .mb_lg--70 {
    margin-bottom: 70px !important;
  }

  .ml_lg--70 {
    margin-left: 70px !important;
  }

  .ptb_lg--75 {
    padding: 75px 0 !important;
  }

  .plr_lg--75 {
    padding: 0 75px !important;
  }

  .pt_lg--75 {
    padding-top: 75px !important;
  }

  .pb_lg--75 {
    padding-bottom: 75px !important;
  }

  .pl_lg--75 {
    padding-left: 75px !important;
  }

  .pr_lg--75 {
    padding-right: 75px !important;
  }

  .mt_lg--75 {
    margin-top: 75px !important;
  }

  .mb_lg--75 {
    margin-bottom: 75px !important;
  }

  .ml_lg--75 {
    margin-left: 75px !important;
  }

  .ptb_lg--80 {
    padding: 80px 0 !important;
  }

  .plr_lg--80 {
    padding: 0 80px !important;
  }

  .pt_lg--80 {
    padding-top: 80px !important;
  }

  .pb_lg--80 {
    padding-bottom: 80px !important;
  }

  .pl_lg--80 {
    padding-left: 80px !important;
  }

  .pr_lg--80 {
    padding-right: 80px !important;
  }

  .mt_lg--80 {
    margin-top: 80px !important;
  }

  .mb_lg--80 {
    margin-bottom: 80px !important;
  }

  .ml_lg--80 {
    margin-left: 80px !important;
  }

  .ptb_lg--85 {
    padding: 85px 0 !important;
  }

  .plr_lg--85 {
    padding: 0 85px !important;
  }

  .pt_lg--85 {
    padding-top: 85px !important;
  }

  .pb_lg--85 {
    padding-bottom: 85px !important;
  }

  .pl_lg--85 {
    padding-left: 85px !important;
  }

  .pr_lg--85 {
    padding-right: 85px !important;
  }

  .mt_lg--85 {
    margin-top: 85px !important;
  }

  .mb_lg--85 {
    margin-bottom: 85px !important;
  }

  .ml_lg--85 {
    margin-left: 85px !important;
  }

  .ptb_lg--90 {
    padding: 90px 0 !important;
  }

  .plr_lg--90 {
    padding: 0 90px !important;
  }

  .pt_lg--90 {
    padding-top: 90px !important;
  }

  .pb_lg--90 {
    padding-bottom: 90px !important;
  }

  .pl_lg--90 {
    padding-left: 90px !important;
  }

  .pr_lg--90 {
    padding-right: 90px !important;
  }

  .mt_lg--90 {
    margin-top: 90px !important;
  }

  .mb_lg--90 {
    margin-bottom: 90px !important;
  }

  .ml_lg--90 {
    margin-left: 90px !important;
  }

  .ptb_lg--95 {
    padding: 95px 0 !important;
  }

  .plr_lg--95 {
    padding: 0 95px !important;
  }

  .pt_lg--95 {
    padding-top: 95px !important;
  }

  .pb_lg--95 {
    padding-bottom: 95px !important;
  }

  .pl_lg--95 {
    padding-left: 95px !important;
  }

  .pr_lg--95 {
    padding-right: 95px !important;
  }

  .mt_lg--95 {
    margin-top: 95px !important;
  }

  .mb_lg--95 {
    margin-bottom: 95px !important;
  }

  .ml_lg--95 {
    margin-left: 95px !important;
  }

  .ptb_lg--100 {
    padding: 100px 0 !important;
  }

  .plr_lg--100 {
    padding: 0 100px !important;
  }

  .pt_lg--100 {
    padding-top: 100px !important;
  }

  .pb_lg--100 {
    padding-bottom: 100px !important;
  }

  .pl_lg--100 {
    padding-left: 100px !important;
  }

  .pr_lg--100 {
    padding-right: 100px !important;
  }

  .mt_lg--100 {
    margin-top: 100px !important;
  }

  .mb_lg--100 {
    margin-bottom: 100px !important;
  }

  .ml_lg--100 {
    margin-left: 100px !important;
  }

  .ptb_lg--105 {
    padding: 105px 0 !important;
  }

  .plr_lg--105 {
    padding: 0 105px !important;
  }

  .pt_lg--105 {
    padding-top: 105px !important;
  }

  .pb_lg--105 {
    padding-bottom: 105px !important;
  }

  .pl_lg--105 {
    padding-left: 105px !important;
  }

  .pr_lg--105 {
    padding-right: 105px !important;
  }

  .mt_lg--105 {
    margin-top: 105px !important;
  }

  .mb_lg--105 {
    margin-bottom: 105px !important;
  }

  .ml_lg--105 {
    margin-left: 105px !important;
  }

  .ptb_lg--110 {
    padding: 110px 0 !important;
  }

  .plr_lg--110 {
    padding: 0 110px !important;
  }

  .pt_lg--110 {
    padding-top: 110px !important;
  }

  .pb_lg--110 {
    padding-bottom: 110px !important;
  }

  .pl_lg--110 {
    padding-left: 110px !important;
  }

  .pr_lg--110 {
    padding-right: 110px !important;
  }

  .mt_lg--110 {
    margin-top: 110px !important;
  }

  .mb_lg--110 {
    margin-bottom: 110px !important;
  }

  .ml_lg--110 {
    margin-left: 110px !important;
  }

  .ptb_lg--115 {
    padding: 115px 0 !important;
  }

  .plr_lg--115 {
    padding: 0 115px !important;
  }

  .pt_lg--115 {
    padding-top: 115px !important;
  }

  .pb_lg--115 {
    padding-bottom: 115px !important;
  }

  .pl_lg--115 {
    padding-left: 115px !important;
  }

  .pr_lg--115 {
    padding-right: 115px !important;
  }

  .mt_lg--115 {
    margin-top: 115px !important;
  }

  .mb_lg--115 {
    margin-bottom: 115px !important;
  }

  .ml_lg--115 {
    margin-left: 115px !important;
  }

  .ptb_lg--120 {
    padding: 120px 0 !important;
  }

  .plr_lg--120 {
    padding: 0 120px !important;
  }

  .pt_lg--120 {
    padding-top: 120px !important;
  }

  .pb_lg--120 {
    padding-bottom: 120px !important;
  }

  .pl_lg--120 {
    padding-left: 120px !important;
  }

  .pr_lg--120 {
    padding-right: 120px !important;
  }

  .mt_lg--120 {
    margin-top: 120px !important;
  }

  .mb_lg--120 {
    margin-bottom: 120px !important;
  }

  .ml_lg--120 {
    margin-left: 120px !important;
  }

  .ptb_lg--125 {
    padding: 125px 0 !important;
  }

  .plr_lg--125 {
    padding: 0 125px !important;
  }

  .pt_lg--125 {
    padding-top: 125px !important;
  }

  .pb_lg--125 {
    padding-bottom: 125px !important;
  }

  .pl_lg--125 {
    padding-left: 125px !important;
  }

  .pr_lg--125 {
    padding-right: 125px !important;
  }

  .mt_lg--125 {
    margin-top: 125px !important;
  }

  .mb_lg--125 {
    margin-bottom: 125px !important;
  }

  .ml_lg--125 {
    margin-left: 125px !important;
  }

  .ptb_lg--130 {
    padding: 130px 0 !important;
  }

  .plr_lg--130 {
    padding: 0 130px !important;
  }

  .pt_lg--130 {
    padding-top: 130px !important;
  }

  .pb_lg--130 {
    padding-bottom: 130px !important;
  }

  .pl_lg--130 {
    padding-left: 130px !important;
  }

  .pr_lg--130 {
    padding-right: 130px !important;
  }

  .mt_lg--130 {
    margin-top: 130px !important;
  }

  .mb_lg--130 {
    margin-bottom: 130px !important;
  }

  .ml_lg--130 {
    margin-left: 130px !important;
  }

  .ptb_lg--135 {
    padding: 135px 0 !important;
  }

  .plr_lg--135 {
    padding: 0 135px !important;
  }

  .pt_lg--135 {
    padding-top: 135px !important;
  }

  .pb_lg--135 {
    padding-bottom: 135px !important;
  }

  .pl_lg--135 {
    padding-left: 135px !important;
  }

  .pr_lg--135 {
    padding-right: 135px !important;
  }

  .mt_lg--135 {
    margin-top: 135px !important;
  }

  .mb_lg--135 {
    margin-bottom: 135px !important;
  }

  .ml_lg--135 {
    margin-left: 135px !important;
  }

  .ptb_lg--140 {
    padding: 140px 0 !important;
  }

  .plr_lg--140 {
    padding: 0 140px !important;
  }

  .pt_lg--140 {
    padding-top: 140px !important;
  }

  .pb_lg--140 {
    padding-bottom: 140px !important;
  }

  .pl_lg--140 {
    padding-left: 140px !important;
  }

  .pr_lg--140 {
    padding-right: 140px !important;
  }

  .mt_lg--140 {
    margin-top: 140px !important;
  }

  .mb_lg--140 {
    margin-bottom: 140px !important;
  }

  .ml_lg--140 {
    margin-left: 140px !important;
  }

  .ptb_lg--145 {
    padding: 145px 0 !important;
  }

  .plr_lg--145 {
    padding: 0 145px !important;
  }

  .pt_lg--145 {
    padding-top: 145px !important;
  }

  .pb_lg--145 {
    padding-bottom: 145px !important;
  }

  .pl_lg--145 {
    padding-left: 145px !important;
  }

  .pr_lg--145 {
    padding-right: 145px !important;
  }

  .mt_lg--145 {
    margin-top: 145px !important;
  }

  .mb_lg--145 {
    margin-bottom: 145px !important;
  }

  .ml_lg--145 {
    margin-left: 145px !important;
  }

  .ptb_lg--150 {
    padding: 150px 0 !important;
  }

  .plr_lg--150 {
    padding: 0 150px !important;
  }

  .pt_lg--150 {
    padding-top: 150px !important;
  }

  .pb_lg--150 {
    padding-bottom: 150px !important;
  }

  .pl_lg--150 {
    padding-left: 150px !important;
  }

  .pr_lg--150 {
    padding-right: 150px !important;
  }

  .mt_lg--150 {
    margin-top: 150px !important;
  }

  .mb_lg--150 {
    margin-bottom: 150px !important;
  }

  .ml_lg--150 {
    margin-left: 150px !important;
  }

  .ptb_lg--155 {
    padding: 155px 0 !important;
  }

  .plr_lg--155 {
    padding: 0 155px !important;
  }

  .pt_lg--155 {
    padding-top: 155px !important;
  }

  .pb_lg--155 {
    padding-bottom: 155px !important;
  }

  .pl_lg--155 {
    padding-left: 155px !important;
  }

  .pr_lg--155 {
    padding-right: 155px !important;
  }

  .mt_lg--155 {
    margin-top: 155px !important;
  }

  .mb_lg--155 {
    margin-bottom: 155px !important;
  }

  .ml_lg--155 {
    margin-left: 155px !important;
  }

  .ptb_lg--160 {
    padding: 160px 0 !important;
  }

  .plr_lg--160 {
    padding: 0 160px !important;
  }

  .pt_lg--160 {
    padding-top: 160px !important;
  }

  .pb_lg--160 {
    padding-bottom: 160px !important;
  }

  .pl_lg--160 {
    padding-left: 160px !important;
  }

  .pr_lg--160 {
    padding-right: 160px !important;
  }

  .mt_lg--160 {
    margin-top: 160px !important;
  }

  .mb_lg--160 {
    margin-bottom: 160px !important;
  }

  .ml_lg--160 {
    margin-left: 160px !important;
  }

  .ptb_lg--165 {
    padding: 165px 0 !important;
  }

  .plr_lg--165 {
    padding: 0 165px !important;
  }

  .pt_lg--165 {
    padding-top: 165px !important;
  }

  .pb_lg--165 {
    padding-bottom: 165px !important;
  }

  .pl_lg--165 {
    padding-left: 165px !important;
  }

  .pr_lg--165 {
    padding-right: 165px !important;
  }

  .mt_lg--165 {
    margin-top: 165px !important;
  }

  .mb_lg--165 {
    margin-bottom: 165px !important;
  }

  .ml_lg--165 {
    margin-left: 165px !important;
  }

  .ptb_lg--170 {
    padding: 170px 0 !important;
  }

  .plr_lg--170 {
    padding: 0 170px !important;
  }

  .pt_lg--170 {
    padding-top: 170px !important;
  }

  .pb_lg--170 {
    padding-bottom: 170px !important;
  }

  .pl_lg--170 {
    padding-left: 170px !important;
  }

  .pr_lg--170 {
    padding-right: 170px !important;
  }

  .mt_lg--170 {
    margin-top: 170px !important;
  }

  .mb_lg--170 {
    margin-bottom: 170px !important;
  }

  .ml_lg--170 {
    margin-left: 170px !important;
  }

  .ptb_lg--175 {
    padding: 175px 0 !important;
  }

  .plr_lg--175 {
    padding: 0 175px !important;
  }

  .pt_lg--175 {
    padding-top: 175px !important;
  }

  .pb_lg--175 {
    padding-bottom: 175px !important;
  }

  .pl_lg--175 {
    padding-left: 175px !important;
  }

  .pr_lg--175 {
    padding-right: 175px !important;
  }

  .mt_lg--175 {
    margin-top: 175px !important;
  }

  .mb_lg--175 {
    margin-bottom: 175px !important;
  }

  .ml_lg--175 {
    margin-left: 175px !important;
  }

  .ptb_lg--180 {
    padding: 180px 0 !important;
  }

  .plr_lg--180 {
    padding: 0 180px !important;
  }

  .pt_lg--180 {
    padding-top: 180px !important;
  }

  .pb_lg--180 {
    padding-bottom: 180px !important;
  }

  .pl_lg--180 {
    padding-left: 180px !important;
  }

  .pr_lg--180 {
    padding-right: 180px !important;
  }

  .mt_lg--180 {
    margin-top: 180px !important;
  }

  .mb_lg--180 {
    margin-bottom: 180px !important;
  }

  .ml_lg--180 {
    margin-left: 180px !important;
  }

  .ptb_lg--185 {
    padding: 185px 0 !important;
  }

  .plr_lg--185 {
    padding: 0 185px !important;
  }

  .pt_lg--185 {
    padding-top: 185px !important;
  }

  .pb_lg--185 {
    padding-bottom: 185px !important;
  }

  .pl_lg--185 {
    padding-left: 185px !important;
  }

  .pr_lg--185 {
    padding-right: 185px !important;
  }

  .mt_lg--185 {
    margin-top: 185px !important;
  }

  .mb_lg--185 {
    margin-bottom: 185px !important;
  }

  .ml_lg--185 {
    margin-left: 185px !important;
  }

  .ptb_lg--190 {
    padding: 190px 0 !important;
  }

  .plr_lg--190 {
    padding: 0 190px !important;
  }

  .pt_lg--190 {
    padding-top: 190px !important;
  }

  .pb_lg--190 {
    padding-bottom: 190px !important;
  }

  .pl_lg--190 {
    padding-left: 190px !important;
  }

  .pr_lg--190 {
    padding-right: 190px !important;
  }

  .mt_lg--190 {
    margin-top: 190px !important;
  }

  .mb_lg--190 {
    margin-bottom: 190px !important;
  }

  .ml_lg--190 {
    margin-left: 190px !important;
  }

  .ptb_lg--195 {
    padding: 195px 0 !important;
  }

  .plr_lg--195 {
    padding: 0 195px !important;
  }

  .pt_lg--195 {
    padding-top: 195px !important;
  }

  .pb_lg--195 {
    padding-bottom: 195px !important;
  }

  .pl_lg--195 {
    padding-left: 195px !important;
  }

  .pr_lg--195 {
    padding-right: 195px !important;
  }

  .mt_lg--195 {
    margin-top: 195px !important;
  }

  .mb_lg--195 {
    margin-bottom: 195px !important;
  }

  .ml_lg--195 {
    margin-left: 195px !important;
  }

  .ptb_lg--200 {
    padding: 200px 0 !important;
  }

  .plr_lg--200 {
    padding: 0 200px !important;
  }

  .pt_lg--200 {
    padding-top: 200px !important;
  }

  .pb_lg--200 {
    padding-bottom: 200px !important;
  }

  .pl_lg--200 {
    padding-left: 200px !important;
  }

  .pr_lg--200 {
    padding-right: 200px !important;
  }

  .mt_lg--200 {
    margin-top: 200px !important;
  }

  .mb_lg--200 {
    margin-bottom: 200px !important;
  }

  .ml_lg--200 {
    margin-left: 200px !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ptb_md--0 {
    padding: 0 !important;
  }

  .pl_md--0 {
    padding-left: 0 !important;
  }

  .pr_md--0 {
    padding-right: 0 !important;
  }

  .pt_md--0 {
    padding-top: 0 !important;
  }

  .pb_md--0 {
    padding-bottom: 0 !important;
  }

  .mr_md--0 {
    margin-right: 0 !important;
  }

  .ml_md--0 {
    margin-left: 0 !important;
  }

  .mt_md--0 {
    margin-top: 0 !important;
  }

  .mb_md--0 {
    margin-bottom: 0 !important;
  }

  .ptb_md--250 {
    padding: 250px 0 !important;
  }

  .ptb_md--5 {
    padding: 5px 0 !important;
  }

  .plr_md--5 {
    padding: 0 5px !important;
  }

  .pt_md--5 {
    padding-top: 5px !important;
  }

  .pb_md--5 {
    padding-bottom: 5px !important;
  }

  .pl_md--5 {
    padding-left: 5px !important;
  }

  .pr_md--5 {
    padding-right: 5px !important;
  }

  .mt_md--5 {
    margin-top: 5px !important;
  }

  .mb_md--5 {
    margin-bottom: 5px !important;
  }

  .ptb_md--10 {
    padding: 10px 0 !important;
  }

  .plr_md--10 {
    padding: 0 10px !important;
  }

  .pt_md--10 {
    padding-top: 10px !important;
  }

  .pb_md--10 {
    padding-bottom: 10px !important;
  }

  .pl_md--10 {
    padding-left: 10px !important;
  }

  .pr_md--10 {
    padding-right: 10px !important;
  }

  .mt_md--10 {
    margin-top: 10px !important;
  }

  .mb_md--10 {
    margin-bottom: 10px !important;
  }

  .ptb_md--15 {
    padding: 15px 0 !important;
  }

  .plr_md--15 {
    padding: 0 15px !important;
  }

  .pt_md--15 {
    padding-top: 15px !important;
  }

  .pb_md--15 {
    padding-bottom: 15px !important;
  }

  .pl_md--15 {
    padding-left: 15px !important;
  }

  .pr_md--15 {
    padding-right: 15px !important;
  }

  .mt_md--15 {
    margin-top: 15px !important;
  }

  .mb_md--15 {
    margin-bottom: 15px !important;
  }

  .ptb_md--20 {
    padding: 20px 0 !important;
  }

  .plr_md--20 {
    padding: 0 20px !important;
  }

  .pt_md--20 {
    padding-top: 20px !important;
  }

  .pb_md--20 {
    padding-bottom: 20px !important;
  }

  .pl_md--20 {
    padding-left: 20px !important;
  }

  .pr_md--20 {
    padding-right: 20px !important;
  }

  .mt_md--20 {
    margin-top: 20px !important;
  }

  .mb_md--20 {
    margin-bottom: 20px !important;
  }

  .ptb_md--25 {
    padding: 25px 0 !important;
  }

  .plr_md--25 {
    padding: 0 25px !important;
  }

  .pt_md--25 {
    padding-top: 25px !important;
  }

  .pb_md--25 {
    padding-bottom: 25px !important;
  }

  .pl_md--25 {
    padding-left: 25px !important;
  }

  .pr_md--25 {
    padding-right: 25px !important;
  }

  .mt_md--25 {
    margin-top: 25px !important;
  }

  .mb_md--25 {
    margin-bottom: 25px !important;
  }

  .ptb_md--30 {
    padding: 30px 0 !important;
  }

  .plr_md--30 {
    padding: 0 30px !important;
  }

  .pt_md--30 {
    padding-top: 30px !important;
  }

  .pb_md--30 {
    padding-bottom: 30px !important;
  }

  .pl_md--30 {
    padding-left: 30px !important;
  }

  .pr_md--30 {
    padding-right: 30px !important;
  }

  .mt_md--30 {
    margin-top: 30px !important;
  }

  .mb_md--30 {
    margin-bottom: 30px !important;
  }

  .ptb_md--35 {
    padding: 35px 0 !important;
  }

  .plr_md--35 {
    padding: 0 35px !important;
  }

  .pt_md--35 {
    padding-top: 35px !important;
  }

  .pb_md--35 {
    padding-bottom: 35px !important;
  }

  .pl_md--35 {
    padding-left: 35px !important;
  }

  .pr_md--35 {
    padding-right: 35px !important;
  }

  .mt_md--35 {
    margin-top: 35px !important;
  }

  .mb_md--35 {
    margin-bottom: 35px !important;
  }

  .ptb_md--40 {
    padding: 40px 0 !important;
  }

  .plr_md--40 {
    padding: 0 40px !important;
  }

  .pt_md--40 {
    padding-top: 40px !important;
  }

  .pb_md--40 {
    padding-bottom: 40px !important;
  }

  .pl_md--40 {
    padding-left: 40px !important;
  }

  .pr_md--40 {
    padding-right: 40px !important;
  }

  .mt_md--40 {
    margin-top: 40px !important;
  }

  .mb_md--40 {
    margin-bottom: 40px !important;
  }

  .ptb_md--45 {
    padding: 45px 0 !important;
  }

  .plr_md--45 {
    padding: 0 45px !important;
  }

  .pt_md--45 {
    padding-top: 45px !important;
  }

  .pb_md--45 {
    padding-bottom: 45px !important;
  }

  .pl_md--45 {
    padding-left: 45px !important;
  }

  .pr_md--45 {
    padding-right: 45px !important;
  }

  .mt_md--45 {
    margin-top: 45px !important;
  }

  .mb_md--45 {
    margin-bottom: 45px !important;
  }

  .ptb_md--50 {
    padding: 50px 0 !important;
  }

  .plr_md--50 {
    padding: 0 50px !important;
  }

  .pt_md--50 {
    padding-top: 50px !important;
  }

  .pb_md--50 {
    padding-bottom: 50px !important;
  }

  .pl_md--50 {
    padding-left: 50px !important;
  }

  .pr_md--50 {
    padding-right: 50px !important;
  }

  .mt_md--50 {
    margin-top: 50px !important;
  }

  .mb_md--50 {
    margin-bottom: 50px !important;
  }

  .ptb_md--55 {
    padding: 55px 0 !important;
  }

  .plr_md--55 {
    padding: 0 55px !important;
  }

  .pt_md--55 {
    padding-top: 55px !important;
  }

  .pb_md--55 {
    padding-bottom: 55px !important;
  }

  .pl_md--55 {
    padding-left: 55px !important;
  }

  .pr_md--55 {
    padding-right: 55px !important;
  }

  .mt_md--55 {
    margin-top: 55px !important;
  }

  .mb_md--55 {
    margin-bottom: 55px !important;
  }

  .ptb_md--60 {
    padding: 60px 0 !important;
  }

  .plr_md--60 {
    padding: 0 60px !important;
  }

  .pt_md--60 {
    padding-top: 60px !important;
  }

  .pb_md--60 {
    padding-bottom: 60px !important;
  }

  .pl_md--60 {
    padding-left: 60px !important;
  }

  .pr_md--60 {
    padding-right: 60px !important;
  }

  .mt_md--60 {
    margin-top: 60px !important;
  }

  .mb_md--60 {
    margin-bottom: 60px !important;
  }

  .ptb_md--65 {
    padding: 65px 0 !important;
  }

  .plr_md--65 {
    padding: 0 65px !important;
  }

  .pt_md--65 {
    padding-top: 65px !important;
  }

  .pb_md--65 {
    padding-bottom: 65px !important;
  }

  .pl_md--65 {
    padding-left: 65px !important;
  }

  .pr_md--65 {
    padding-right: 65px !important;
  }

  .mt_md--65 {
    margin-top: 65px !important;
  }

  .mb_md--65 {
    margin-bottom: 65px !important;
  }

  .ptb_md--70 {
    padding: 70px 0 !important;
  }

  .plr_md--70 {
    padding: 0 70px !important;
  }

  .pt_md--70 {
    padding-top: 70px !important;
  }

  .pb_md--70 {
    padding-bottom: 70px !important;
  }

  .pl_md--70 {
    padding-left: 70px !important;
  }

  .pr_md--70 {
    padding-right: 70px !important;
  }

  .mt_md--70 {
    margin-top: 70px !important;
  }

  .mb_md--70 {
    margin-bottom: 70px !important;
  }

  .ptb_md--75 {
    padding: 75px 0 !important;
  }

  .plr_md--75 {
    padding: 0 75px !important;
  }

  .pt_md--75 {
    padding-top: 75px !important;
  }

  .pb_md--75 {
    padding-bottom: 75px !important;
  }

  .pl_md--75 {
    padding-left: 75px !important;
  }

  .pr_md--75 {
    padding-right: 75px !important;
  }

  .mt_md--75 {
    margin-top: 75px !important;
  }

  .mb_md--75 {
    margin-bottom: 75px !important;
  }

  .ptb_md--80 {
    padding: 80px 0 !important;
  }

  .plr_md--80 {
    padding: 0 80px !important;
  }

  .pt_md--80 {
    padding-top: 80px !important;
  }

  .pb_md--80 {
    padding-bottom: 80px !important;
  }

  .pl_md--80 {
    padding-left: 80px !important;
  }

  .pr_md--80 {
    padding-right: 80px !important;
  }

  .mt_md--80 {
    margin-top: 80px !important;
  }

  .mb_md--80 {
    margin-bottom: 80px !important;
  }

  .ptb_md--85 {
    padding: 85px 0 !important;
  }

  .plr_md--85 {
    padding: 0 85px !important;
  }

  .pt_md--85 {
    padding-top: 85px !important;
  }

  .pb_md--85 {
    padding-bottom: 85px !important;
  }

  .pl_md--85 {
    padding-left: 85px !important;
  }

  .pr_md--85 {
    padding-right: 85px !important;
  }

  .mt_md--85 {
    margin-top: 85px !important;
  }

  .mb_md--85 {
    margin-bottom: 85px !important;
  }

  .ptb_md--90 {
    padding: 90px 0 !important;
  }

  .plr_md--90 {
    padding: 0 90px !important;
  }

  .pt_md--90 {
    padding-top: 90px !important;
  }

  .pb_md--90 {
    padding-bottom: 90px !important;
  }

  .pl_md--90 {
    padding-left: 90px !important;
  }

  .pr_md--90 {
    padding-right: 90px !important;
  }

  .mt_md--90 {
    margin-top: 90px !important;
  }

  .mb_md--90 {
    margin-bottom: 90px !important;
  }

  .ptb_md--95 {
    padding: 95px 0 !important;
  }

  .plr_md--95 {
    padding: 0 95px !important;
  }

  .pt_md--95 {
    padding-top: 95px !important;
  }

  .pb_md--95 {
    padding-bottom: 95px !important;
  }

  .pl_md--95 {
    padding-left: 95px !important;
  }

  .pr_md--95 {
    padding-right: 95px !important;
  }

  .mt_md--95 {
    margin-top: 95px !important;
  }

  .mb_md--95 {
    margin-bottom: 95px !important;
  }

  .ptb_md--100 {
    padding: 100px 0 !important;
  }

  .plr_md--100 {
    padding: 0 100px !important;
  }

  .pt_md--100 {
    padding-top: 100px !important;
  }

  .pb_md--100 {
    padding-bottom: 100px !important;
  }

  .pl_md--100 {
    padding-left: 100px !important;
  }

  .pr_md--100 {
    padding-right: 100px !important;
  }

  .mt_md--100 {
    margin-top: 100px !important;
  }

  .mb_md--100 {
    margin-bottom: 100px !important;
  }

  .ptb_md--105 {
    padding: 105px 0 !important;
  }

  .plr_md--105 {
    padding: 0 105px !important;
  }

  .pt_md--105 {
    padding-top: 105px !important;
  }

  .pb_md--105 {
    padding-bottom: 105px !important;
  }

  .pl_md--105 {
    padding-left: 105px !important;
  }

  .pr_md--105 {
    padding-right: 105px !important;
  }

  .mt_md--105 {
    margin-top: 105px !important;
  }

  .mb_md--105 {
    margin-bottom: 105px !important;
  }

  .ptb_md--110 {
    padding: 110px 0 !important;
  }

  .plr_md--110 {
    padding: 0 110px !important;
  }

  .pt_md--110 {
    padding-top: 110px !important;
  }

  .pb_md--110 {
    padding-bottom: 110px !important;
  }

  .pl_md--110 {
    padding-left: 110px !important;
  }

  .pr_md--110 {
    padding-right: 110px !important;
  }

  .mt_md--110 {
    margin-top: 110px !important;
  }

  .mb_md--110 {
    margin-bottom: 110px !important;
  }

  .ptb_md--115 {
    padding: 115px 0 !important;
  }

  .plr_md--115 {
    padding: 0 115px !important;
  }

  .pt_md--115 {
    padding-top: 115px !important;
  }

  .pb_md--115 {
    padding-bottom: 115px !important;
  }

  .pl_md--115 {
    padding-left: 115px !important;
  }

  .pr_md--115 {
    padding-right: 115px !important;
  }

  .mt_md--115 {
    margin-top: 115px !important;
  }

  .mb_md--115 {
    margin-bottom: 115px !important;
  }

  .ptb_md--120 {
    padding: 120px 0 !important;
  }

  .plr_md--120 {
    padding: 0 120px !important;
  }

  .pt_md--120 {
    padding-top: 120px !important;
  }

  .pb_md--120 {
    padding-bottom: 120px !important;
  }

  .pl_md--120 {
    padding-left: 120px !important;
  }

  .pr_md--120 {
    padding-right: 120px !important;
  }

  .mt_md--120 {
    margin-top: 120px !important;
  }

  .mb_md--120 {
    margin-bottom: 120px !important;
  }

  .ptb_md--125 {
    padding: 125px 0 !important;
  }

  .plr_md--125 {
    padding: 0 125px !important;
  }

  .pt_md--125 {
    padding-top: 125px !important;
  }

  .pb_md--125 {
    padding-bottom: 125px !important;
  }

  .pl_md--125 {
    padding-left: 125px !important;
  }

  .pr_md--125 {
    padding-right: 125px !important;
  }

  .mt_md--125 {
    margin-top: 125px !important;
  }

  .mb_md--125 {
    margin-bottom: 125px !important;
  }

  .ptb_md--130 {
    padding: 130px 0 !important;
  }

  .plr_md--130 {
    padding: 0 130px !important;
  }

  .pt_md--130 {
    padding-top: 130px !important;
  }

  .pb_md--130 {
    padding-bottom: 130px !important;
  }

  .pl_md--130 {
    padding-left: 130px !important;
  }

  .pr_md--130 {
    padding-right: 130px !important;
  }

  .mt_md--130 {
    margin-top: 130px !important;
  }

  .mb_md--130 {
    margin-bottom: 130px !important;
  }

  .ptb_md--135 {
    padding: 135px 0 !important;
  }

  .plr_md--135 {
    padding: 0 135px !important;
  }

  .pt_md--135 {
    padding-top: 135px !important;
  }

  .pb_md--135 {
    padding-bottom: 135px !important;
  }

  .pl_md--135 {
    padding-left: 135px !important;
  }

  .pr_md--135 {
    padding-right: 135px !important;
  }

  .mt_md--135 {
    margin-top: 135px !important;
  }

  .mb_md--135 {
    margin-bottom: 135px !important;
  }

  .ptb_md--140 {
    padding: 140px 0 !important;
  }

  .plr_md--140 {
    padding: 0 140px !important;
  }

  .pt_md--140 {
    padding-top: 140px !important;
  }

  .pb_md--140 {
    padding-bottom: 140px !important;
  }

  .pl_md--140 {
    padding-left: 140px !important;
  }

  .pr_md--140 {
    padding-right: 140px !important;
  }

  .mt_md--140 {
    margin-top: 140px !important;
  }

  .mb_md--140 {
    margin-bottom: 140px !important;
  }

  .ptb_md--145 {
    padding: 145px 0 !important;
  }

  .plr_md--145 {
    padding: 0 145px !important;
  }

  .pt_md--145 {
    padding-top: 145px !important;
  }

  .pb_md--145 {
    padding-bottom: 145px !important;
  }

  .pl_md--145 {
    padding-left: 145px !important;
  }

  .pr_md--145 {
    padding-right: 145px !important;
  }

  .mt_md--145 {
    margin-top: 145px !important;
  }

  .mb_md--145 {
    margin-bottom: 145px !important;
  }

  .ptb_md--150 {
    padding: 150px 0 !important;
  }

  .plr_md--150 {
    padding: 0 150px !important;
  }

  .pt_md--150 {
    padding-top: 150px !important;
  }

  .pb_md--150 {
    padding-bottom: 150px !important;
  }

  .pl_md--150 {
    padding-left: 150px !important;
  }

  .pr_md--150 {
    padding-right: 150px !important;
  }

  .mt_md--150 {
    margin-top: 150px !important;
  }

  .mb_md--150 {
    margin-bottom: 150px !important;
  }

  .ptb_md--155 {
    padding: 155px 0 !important;
  }

  .plr_md--155 {
    padding: 0 155px !important;
  }

  .pt_md--155 {
    padding-top: 155px !important;
  }

  .pb_md--155 {
    padding-bottom: 155px !important;
  }

  .pl_md--155 {
    padding-left: 155px !important;
  }

  .pr_md--155 {
    padding-right: 155px !important;
  }

  .mt_md--155 {
    margin-top: 155px !important;
  }

  .mb_md--155 {
    margin-bottom: 155px !important;
  }

  .ptb_md--160 {
    padding: 160px 0 !important;
  }

  .plr_md--160 {
    padding: 0 160px !important;
  }

  .pt_md--160 {
    padding-top: 160px !important;
  }

  .pb_md--160 {
    padding-bottom: 160px !important;
  }

  .pl_md--160 {
    padding-left: 160px !important;
  }

  .pr_md--160 {
    padding-right: 160px !important;
  }

  .mt_md--160 {
    margin-top: 160px !important;
  }

  .mb_md--160 {
    margin-bottom: 160px !important;
  }

  .ptb_md--165 {
    padding: 165px 0 !important;
  }

  .plr_md--165 {
    padding: 0 165px !important;
  }

  .pt_md--165 {
    padding-top: 165px !important;
  }

  .pb_md--165 {
    padding-bottom: 165px !important;
  }

  .pl_md--165 {
    padding-left: 165px !important;
  }

  .pr_md--165 {
    padding-right: 165px !important;
  }

  .mt_md--165 {
    margin-top: 165px !important;
  }

  .mb_md--165 {
    margin-bottom: 165px !important;
  }

  .ptb_md--170 {
    padding: 170px 0 !important;
  }

  .plr_md--170 {
    padding: 0 170px !important;
  }

  .pt_md--170 {
    padding-top: 170px !important;
  }

  .pb_md--170 {
    padding-bottom: 170px !important;
  }

  .pl_md--170 {
    padding-left: 170px !important;
  }

  .pr_md--170 {
    padding-right: 170px !important;
  }

  .mt_md--170 {
    margin-top: 170px !important;
  }

  .mb_md--170 {
    margin-bottom: 170px !important;
  }

  .ptb_md--175 {
    padding: 175px 0 !important;
  }

  .plr_md--175 {
    padding: 0 175px !important;
  }

  .pt_md--175 {
    padding-top: 175px !important;
  }

  .pb_md--175 {
    padding-bottom: 175px !important;
  }

  .pl_md--175 {
    padding-left: 175px !important;
  }

  .pr_md--175 {
    padding-right: 175px !important;
  }

  .mt_md--175 {
    margin-top: 175px !important;
  }

  .mb_md--175 {
    margin-bottom: 175px !important;
  }

  .ptb_md--180 {
    padding: 180px 0 !important;
  }

  .plr_md--180 {
    padding: 0 180px !important;
  }

  .pt_md--180 {
    padding-top: 180px !important;
  }

  .pb_md--180 {
    padding-bottom: 180px !important;
  }

  .pl_md--180 {
    padding-left: 180px !important;
  }

  .pr_md--180 {
    padding-right: 180px !important;
  }

  .mt_md--180 {
    margin-top: 180px !important;
  }

  .mb_md--180 {
    margin-bottom: 180px !important;
  }

  .ptb_md--185 {
    padding: 185px 0 !important;
  }

  .plr_md--185 {
    padding: 0 185px !important;
  }

  .pt_md--185 {
    padding-top: 185px !important;
  }

  .pb_md--185 {
    padding-bottom: 185px !important;
  }

  .pl_md--185 {
    padding-left: 185px !important;
  }

  .pr_md--185 {
    padding-right: 185px !important;
  }

  .mt_md--185 {
    margin-top: 185px !important;
  }

  .mb_md--185 {
    margin-bottom: 185px !important;
  }

  .ptb_md--190 {
    padding: 190px 0 !important;
  }

  .plr_md--190 {
    padding: 0 190px !important;
  }

  .pt_md--190 {
    padding-top: 190px !important;
  }

  .pb_md--190 {
    padding-bottom: 190px !important;
  }

  .pl_md--190 {
    padding-left: 190px !important;
  }

  .pr_md--190 {
    padding-right: 190px !important;
  }

  .mt_md--190 {
    margin-top: 190px !important;
  }

  .mb_md--190 {
    margin-bottom: 190px !important;
  }

  .ptb_md--195 {
    padding: 195px 0 !important;
  }

  .plr_md--195 {
    padding: 0 195px !important;
  }

  .pt_md--195 {
    padding-top: 195px !important;
  }

  .pb_md--195 {
    padding-bottom: 195px !important;
  }

  .pl_md--195 {
    padding-left: 195px !important;
  }

  .pr_md--195 {
    padding-right: 195px !important;
  }

  .mt_md--195 {
    margin-top: 195px !important;
  }

  .mb_md--195 {
    margin-bottom: 195px !important;
  }

  .ptb_md--200 {
    padding: 200px 0 !important;
  }

  .plr_md--200 {
    padding: 0 200px !important;
  }

  .pt_md--200 {
    padding-top: 200px !important;
  }

  .pb_md--200 {
    padding-bottom: 200px !important;
  }

  .pl_md--200 {
    padding-left: 200px !important;
  }

  .pr_md--200 {
    padding-right: 200px !important;
  }

  .mt_md--200 {
    margin-top: 200px !important;
  }

  .mb_md--200 {
    margin-bottom: 200px !important;
  }
}
@media only screen and (max-width: 767px) {
  .ptb_sm--250 {
    padding: 250px 0 !important;
  }

  .ptb_sm--0 {
    padding: 0 !important;
  }

  .pl_sm--0 {
    padding-left: 0 !important;
  }

  .pr_sm--0 {
    padding-right: 0 !important;
  }

  .pt_sm--0 {
    padding-top: 0 !important;
  }

  .pb_sm--0 {
    padding-bottom: 0 !important;
  }

  .mr_sm--0 {
    margin-right: 0 !important;
  }

  .ml_sm--0 {
    margin-left: 0 !important;
  }

  .mt_sm--0 {
    margin-top: 0 !important;
  }

  .mb_sm--0 {
    margin-bottom: 0 !important;
  }

  .pt_sm--150 {
    padding-top: 150px !important;
  }

  .pb_sm--110 {
    padding-bottom: 110px !important;
  }

  .ptb_sm--5 {
    padding: 5px 0 !important;
  }

  .plr_sm--5 {
    padding: 0 5px !important;
  }

  .pt_sm--5 {
    padding-top: 5px !important;
  }

  .pb_sm--5 {
    padding-bottom: 5px !important;
  }

  .pl_sm--5 {
    padding-left: 5px !important;
  }

  .pr_sm--5 {
    padding-right: 5px !important;
  }

  .mt_sm--5 {
    margin-top: 5px !important;
  }

  .ml_sm--5 {
    margin-left: 5px !important;
  }

  .mr_sm--5 {
    margin-right: 5px !important;
  }

  .mb_sm--5 {
    margin-bottom: 5px !important;
  }

  .ptb_sm--10 {
    padding: 10px 0 !important;
  }

  .plr_sm--10 {
    padding: 0 10px !important;
  }

  .pt_sm--10 {
    padding-top: 10px !important;
  }

  .pb_sm--10 {
    padding-bottom: 10px !important;
  }

  .pl_sm--10 {
    padding-left: 10px !important;
  }

  .pr_sm--10 {
    padding-right: 10px !important;
  }

  .mt_sm--10 {
    margin-top: 10px !important;
  }

  .ml_sm--10 {
    margin-left: 10px !important;
  }

  .mr_sm--10 {
    margin-right: 10px !important;
  }

  .mb_sm--10 {
    margin-bottom: 10px !important;
  }

  .ptb_sm--15 {
    padding: 15px 0 !important;
  }

  .plr_sm--15 {
    padding: 0 15px !important;
  }

  .pt_sm--15 {
    padding-top: 15px !important;
  }

  .pb_sm--15 {
    padding-bottom: 15px !important;
  }

  .pl_sm--15 {
    padding-left: 15px !important;
  }

  .pr_sm--15 {
    padding-right: 15px !important;
  }

  .mt_sm--15 {
    margin-top: 15px !important;
  }

  .ml_sm--15 {
    margin-left: 15px !important;
  }

  .mr_sm--15 {
    margin-right: 15px !important;
  }

  .mb_sm--15 {
    margin-bottom: 15px !important;
  }

  .ptb_sm--20 {
    padding: 20px 0 !important;
  }

  .plr_sm--20 {
    padding: 0 20px !important;
  }

  .pt_sm--20 {
    padding-top: 20px !important;
  }

  .pb_sm--20 {
    padding-bottom: 20px !important;
  }

  .pl_sm--20 {
    padding-left: 20px !important;
  }

  .pr_sm--20 {
    padding-right: 20px !important;
  }

  .mt_sm--20 {
    margin-top: 20px !important;
  }

  .ml_sm--20 {
    margin-left: 20px !important;
  }

  .mr_sm--20 {
    margin-right: 20px !important;
  }

  .mb_sm--20 {
    margin-bottom: 20px !important;
  }

  .ptb_sm--25 {
    padding: 25px 0 !important;
  }

  .plr_sm--25 {
    padding: 0 25px !important;
  }

  .pt_sm--25 {
    padding-top: 25px !important;
  }

  .pb_sm--25 {
    padding-bottom: 25px !important;
  }

  .pl_sm--25 {
    padding-left: 25px !important;
  }

  .pr_sm--25 {
    padding-right: 25px !important;
  }

  .mt_sm--25 {
    margin-top: 25px !important;
  }

  .ml_sm--25 {
    margin-left: 25px !important;
  }

  .mr_sm--25 {
    margin-right: 25px !important;
  }

  .mb_sm--25 {
    margin-bottom: 25px !important;
  }

  .ptb_sm--30 {
    padding: 30px 0 !important;
  }

  .plr_sm--30 {
    padding: 0 30px !important;
  }

  .pt_sm--30 {
    padding-top: 30px !important;
  }

  .pb_sm--30 {
    padding-bottom: 30px !important;
  }

  .pl_sm--30 {
    padding-left: 30px !important;
  }

  .pr_sm--30 {
    padding-right: 30px !important;
  }

  .mt_sm--30 {
    margin-top: 30px !important;
  }

  .ml_sm--30 {
    margin-left: 30px !important;
  }

  .mr_sm--30 {
    margin-right: 30px !important;
  }

  .mb_sm--30 {
    margin-bottom: 30px !important;
  }

  .ptb_sm--35 {
    padding: 35px 0 !important;
  }

  .plr_sm--35 {
    padding: 0 35px !important;
  }

  .pt_sm--35 {
    padding-top: 35px !important;
  }

  .pb_sm--35 {
    padding-bottom: 35px !important;
  }

  .pl_sm--35 {
    padding-left: 35px !important;
  }

  .pr_sm--35 {
    padding-right: 35px !important;
  }

  .mt_sm--35 {
    margin-top: 35px !important;
  }

  .ml_sm--35 {
    margin-left: 35px !important;
  }

  .mr_sm--35 {
    margin-right: 35px !important;
  }

  .mb_sm--35 {
    margin-bottom: 35px !important;
  }

  .ptb_sm--40 {
    padding: 40px 0 !important;
  }

  .plr_sm--40 {
    padding: 0 40px !important;
  }

  .pt_sm--40 {
    padding-top: 40px !important;
  }

  .pb_sm--40 {
    padding-bottom: 40px !important;
  }

  .pl_sm--40 {
    padding-left: 40px !important;
  }

  .pr_sm--40 {
    padding-right: 40px !important;
  }

  .mt_sm--40 {
    margin-top: 40px !important;
  }

  .ml_sm--40 {
    margin-left: 40px !important;
  }

  .mr_sm--40 {
    margin-right: 40px !important;
  }

  .mb_sm--40 {
    margin-bottom: 40px !important;
  }

  .ptb_sm--45 {
    padding: 45px 0 !important;
  }

  .plr_sm--45 {
    padding: 0 45px !important;
  }

  .pt_sm--45 {
    padding-top: 45px !important;
  }

  .pb_sm--45 {
    padding-bottom: 45px !important;
  }

  .pl_sm--45 {
    padding-left: 45px !important;
  }

  .pr_sm--45 {
    padding-right: 45px !important;
  }

  .mt_sm--45 {
    margin-top: 45px !important;
  }

  .ml_sm--45 {
    margin-left: 45px !important;
  }

  .mr_sm--45 {
    margin-right: 45px !important;
  }

  .mb_sm--45 {
    margin-bottom: 45px !important;
  }

  .ptb_sm--50 {
    padding: 50px 0 !important;
  }

  .plr_sm--50 {
    padding: 0 50px !important;
  }

  .pt_sm--50 {
    padding-top: 50px !important;
  }

  .pb_sm--50 {
    padding-bottom: 50px !important;
  }

  .pl_sm--50 {
    padding-left: 50px !important;
  }

  .pr_sm--50 {
    padding-right: 50px !important;
  }

  .mt_sm--50 {
    margin-top: 50px !important;
  }

  .ml_sm--50 {
    margin-left: 50px !important;
  }

  .mr_sm--50 {
    margin-right: 50px !important;
  }

  .mb_sm--50 {
    margin-bottom: 50px !important;
  }

  .ptb_sm--55 {
    padding: 55px 0 !important;
  }

  .plr_sm--55 {
    padding: 0 55px !important;
  }

  .pt_sm--55 {
    padding-top: 55px !important;
  }

  .pb_sm--55 {
    padding-bottom: 55px !important;
  }

  .pl_sm--55 {
    padding-left: 55px !important;
  }

  .pr_sm--55 {
    padding-right: 55px !important;
  }

  .mt_sm--55 {
    margin-top: 55px !important;
  }

  .ml_sm--55 {
    margin-left: 55px !important;
  }

  .mr_sm--55 {
    margin-right: 55px !important;
  }

  .mb_sm--55 {
    margin-bottom: 55px !important;
  }

  .ptb_sm--60 {
    padding: 60px 0 !important;
  }

  .plr_sm--60 {
    padding: 0 60px !important;
  }

  .pt_sm--60 {
    padding-top: 60px !important;
  }

  .pb_sm--60 {
    padding-bottom: 60px !important;
  }

  .pl_sm--60 {
    padding-left: 60px !important;
  }

  .pr_sm--60 {
    padding-right: 60px !important;
  }

  .mt_sm--60 {
    margin-top: 60px !important;
  }

  .ml_sm--60 {
    margin-left: 60px !important;
  }

  .mr_sm--60 {
    margin-right: 60px !important;
  }

  .mb_sm--60 {
    margin-bottom: 60px !important;
  }

  .ptb_sm--65 {
    padding: 65px 0 !important;
  }

  .plr_sm--65 {
    padding: 0 65px !important;
  }

  .pt_sm--65 {
    padding-top: 65px !important;
  }

  .pb_sm--65 {
    padding-bottom: 65px !important;
  }

  .pl_sm--65 {
    padding-left: 65px !important;
  }

  .pr_sm--65 {
    padding-right: 65px !important;
  }

  .mt_sm--65 {
    margin-top: 65px !important;
  }

  .ml_sm--65 {
    margin-left: 65px !important;
  }

  .mr_sm--65 {
    margin-right: 65px !important;
  }

  .mb_sm--65 {
    margin-bottom: 65px !important;
  }

  .ptb_sm--70 {
    padding: 70px 0 !important;
  }

  .plr_sm--70 {
    padding: 0 70px !important;
  }

  .pt_sm--70 {
    padding-top: 70px !important;
  }

  .pb_sm--70 {
    padding-bottom: 70px !important;
  }

  .pl_sm--70 {
    padding-left: 70px !important;
  }

  .pr_sm--70 {
    padding-right: 70px !important;
  }

  .mt_sm--70 {
    margin-top: 70px !important;
  }

  .ml_sm--70 {
    margin-left: 70px !important;
  }

  .mr_sm--70 {
    margin-right: 70px !important;
  }

  .mb_sm--70 {
    margin-bottom: 70px !important;
  }

  .ptb_sm--75 {
    padding: 75px 0 !important;
  }

  .plr_sm--75 {
    padding: 0 75px !important;
  }

  .pt_sm--75 {
    padding-top: 75px !important;
  }

  .pb_sm--75 {
    padding-bottom: 75px !important;
  }

  .pl_sm--75 {
    padding-left: 75px !important;
  }

  .pr_sm--75 {
    padding-right: 75px !important;
  }

  .mt_sm--75 {
    margin-top: 75px !important;
  }

  .ml_sm--75 {
    margin-left: 75px !important;
  }

  .mr_sm--75 {
    margin-right: 75px !important;
  }

  .mb_sm--75 {
    margin-bottom: 75px !important;
  }

  .ptb_sm--80 {
    padding: 80px 0 !important;
  }

  .plr_sm--80 {
    padding: 0 80px !important;
  }

  .pt_sm--80 {
    padding-top: 80px !important;
  }

  .pb_sm--80 {
    padding-bottom: 80px !important;
  }

  .pl_sm--80 {
    padding-left: 80px !important;
  }

  .pr_sm--80 {
    padding-right: 80px !important;
  }

  .mt_sm--80 {
    margin-top: 80px !important;
  }

  .ml_sm--80 {
    margin-left: 80px !important;
  }

  .mr_sm--80 {
    margin-right: 80px !important;
  }

  .mb_sm--80 {
    margin-bottom: 80px !important;
  }

  .ptb_sm--85 {
    padding: 85px 0 !important;
  }

  .plr_sm--85 {
    padding: 0 85px !important;
  }

  .pt_sm--85 {
    padding-top: 85px !important;
  }

  .pb_sm--85 {
    padding-bottom: 85px !important;
  }

  .pl_sm--85 {
    padding-left: 85px !important;
  }

  .pr_sm--85 {
    padding-right: 85px !important;
  }

  .mt_sm--85 {
    margin-top: 85px !important;
  }

  .ml_sm--85 {
    margin-left: 85px !important;
  }

  .mr_sm--85 {
    margin-right: 85px !important;
  }

  .mb_sm--85 {
    margin-bottom: 85px !important;
  }

  .ptb_sm--90 {
    padding: 90px 0 !important;
  }

  .plr_sm--90 {
    padding: 0 90px !important;
  }

  .pt_sm--90 {
    padding-top: 90px !important;
  }

  .pb_sm--90 {
    padding-bottom: 90px !important;
  }

  .pl_sm--90 {
    padding-left: 90px !important;
  }

  .pr_sm--90 {
    padding-right: 90px !important;
  }

  .mt_sm--90 {
    margin-top: 90px !important;
  }

  .ml_sm--90 {
    margin-left: 90px !important;
  }

  .mr_sm--90 {
    margin-right: 90px !important;
  }

  .mb_sm--90 {
    margin-bottom: 90px !important;
  }

  .ptb_sm--95 {
    padding: 95px 0 !important;
  }

  .plr_sm--95 {
    padding: 0 95px !important;
  }

  .pt_sm--95 {
    padding-top: 95px !important;
  }

  .pb_sm--95 {
    padding-bottom: 95px !important;
  }

  .pl_sm--95 {
    padding-left: 95px !important;
  }

  .pr_sm--95 {
    padding-right: 95px !important;
  }

  .mt_sm--95 {
    margin-top: 95px !important;
  }

  .ml_sm--95 {
    margin-left: 95px !important;
  }

  .mr_sm--95 {
    margin-right: 95px !important;
  }

  .mb_sm--95 {
    margin-bottom: 95px !important;
  }

  .ptb_sm--100 {
    padding: 100px 0 !important;
  }

  .plr_sm--100 {
    padding: 0 100px !important;
  }

  .pt_sm--100 {
    padding-top: 100px !important;
  }

  .pb_sm--100 {
    padding-bottom: 100px !important;
  }

  .pl_sm--100 {
    padding-left: 100px !important;
  }

  .pr_sm--100 {
    padding-right: 100px !important;
  }

  .mt_sm--100 {
    margin-top: 100px !important;
  }

  .ml_sm--100 {
    margin-left: 100px !important;
  }

  .mr_sm--100 {
    margin-right: 100px !important;
  }

  .mb_sm--100 {
    margin-bottom: 100px !important;
  }

  .ptb_sm--105 {
    padding: 105px 0 !important;
  }

  .plr_sm--105 {
    padding: 0 105px !important;
  }

  .pt_sm--105 {
    padding-top: 105px !important;
  }

  .pb_sm--105 {
    padding-bottom: 105px !important;
  }

  .pl_sm--105 {
    padding-left: 105px !important;
  }

  .pr_sm--105 {
    padding-right: 105px !important;
  }

  .mt_sm--105 {
    margin-top: 105px !important;
  }

  .ml_sm--105 {
    margin-left: 105px !important;
  }

  .mr_sm--105 {
    margin-right: 105px !important;
  }

  .mb_sm--105 {
    margin-bottom: 105px !important;
  }

  .ptb_sm--110 {
    padding: 110px 0 !important;
  }

  .plr_sm--110 {
    padding: 0 110px !important;
  }

  .pt_sm--110 {
    padding-top: 110px !important;
  }

  .pb_sm--110 {
    padding-bottom: 110px !important;
  }

  .pl_sm--110 {
    padding-left: 110px !important;
  }

  .pr_sm--110 {
    padding-right: 110px !important;
  }

  .mt_sm--110 {
    margin-top: 110px !important;
  }

  .ml_sm--110 {
    margin-left: 110px !important;
  }

  .mr_sm--110 {
    margin-right: 110px !important;
  }

  .mb_sm--110 {
    margin-bottom: 110px !important;
  }

  .ptb_sm--115 {
    padding: 115px 0 !important;
  }

  .plr_sm--115 {
    padding: 0 115px !important;
  }

  .pt_sm--115 {
    padding-top: 115px !important;
  }

  .pb_sm--115 {
    padding-bottom: 115px !important;
  }

  .pl_sm--115 {
    padding-left: 115px !important;
  }

  .pr_sm--115 {
    padding-right: 115px !important;
  }

  .mt_sm--115 {
    margin-top: 115px !important;
  }

  .ml_sm--115 {
    margin-left: 115px !important;
  }

  .mr_sm--115 {
    margin-right: 115px !important;
  }

  .mb_sm--115 {
    margin-bottom: 115px !important;
  }

  .ptb_sm--120 {
    padding: 120px 0 !important;
  }

  .plr_sm--120 {
    padding: 0 120px !important;
  }

  .pt_sm--120 {
    padding-top: 120px !important;
  }

  .pb_sm--120 {
    padding-bottom: 120px !important;
  }

  .pl_sm--120 {
    padding-left: 120px !important;
  }

  .pr_sm--120 {
    padding-right: 120px !important;
  }

  .mt_sm--120 {
    margin-top: 120px !important;
  }

  .ml_sm--120 {
    margin-left: 120px !important;
  }

  .mr_sm--120 {
    margin-right: 120px !important;
  }

  .mb_sm--120 {
    margin-bottom: 120px !important;
  }

  .ptb_sm--125 {
    padding: 125px 0 !important;
  }

  .plr_sm--125 {
    padding: 0 125px !important;
  }

  .pt_sm--125 {
    padding-top: 125px !important;
  }

  .pb_sm--125 {
    padding-bottom: 125px !important;
  }

  .pl_sm--125 {
    padding-left: 125px !important;
  }

  .pr_sm--125 {
    padding-right: 125px !important;
  }

  .mt_sm--125 {
    margin-top: 125px !important;
  }

  .ml_sm--125 {
    margin-left: 125px !important;
  }

  .mr_sm--125 {
    margin-right: 125px !important;
  }

  .mb_sm--125 {
    margin-bottom: 125px !important;
  }

  .ptb_sm--130 {
    padding: 130px 0 !important;
  }

  .plr_sm--130 {
    padding: 0 130px !important;
  }

  .pt_sm--130 {
    padding-top: 130px !important;
  }

  .pb_sm--130 {
    padding-bottom: 130px !important;
  }

  .pl_sm--130 {
    padding-left: 130px !important;
  }

  .pr_sm--130 {
    padding-right: 130px !important;
  }

  .mt_sm--130 {
    margin-top: 130px !important;
  }

  .ml_sm--130 {
    margin-left: 130px !important;
  }

  .mr_sm--130 {
    margin-right: 130px !important;
  }

  .mb_sm--130 {
    margin-bottom: 130px !important;
  }

  .ptb_sm--135 {
    padding: 135px 0 !important;
  }

  .plr_sm--135 {
    padding: 0 135px !important;
  }

  .pt_sm--135 {
    padding-top: 135px !important;
  }

  .pb_sm--135 {
    padding-bottom: 135px !important;
  }

  .pl_sm--135 {
    padding-left: 135px !important;
  }

  .pr_sm--135 {
    padding-right: 135px !important;
  }

  .mt_sm--135 {
    margin-top: 135px !important;
  }

  .ml_sm--135 {
    margin-left: 135px !important;
  }

  .mr_sm--135 {
    margin-right: 135px !important;
  }

  .mb_sm--135 {
    margin-bottom: 135px !important;
  }

  .ptb_sm--140 {
    padding: 140px 0 !important;
  }

  .plr_sm--140 {
    padding: 0 140px !important;
  }

  .pt_sm--140 {
    padding-top: 140px !important;
  }

  .pb_sm--140 {
    padding-bottom: 140px !important;
  }

  .pl_sm--140 {
    padding-left: 140px !important;
  }

  .pr_sm--140 {
    padding-right: 140px !important;
  }

  .mt_sm--140 {
    margin-top: 140px !important;
  }

  .ml_sm--140 {
    margin-left: 140px !important;
  }

  .mr_sm--140 {
    margin-right: 140px !important;
  }

  .mb_sm--140 {
    margin-bottom: 140px !important;
  }

  .ptb_sm--145 {
    padding: 145px 0 !important;
  }

  .plr_sm--145 {
    padding: 0 145px !important;
  }

  .pt_sm--145 {
    padding-top: 145px !important;
  }

  .pb_sm--145 {
    padding-bottom: 145px !important;
  }

  .pl_sm--145 {
    padding-left: 145px !important;
  }

  .pr_sm--145 {
    padding-right: 145px !important;
  }

  .mt_sm--145 {
    margin-top: 145px !important;
  }

  .ml_sm--145 {
    margin-left: 145px !important;
  }

  .mr_sm--145 {
    margin-right: 145px !important;
  }

  .mb_sm--145 {
    margin-bottom: 145px !important;
  }

  .ptb_sm--150 {
    padding: 150px 0 !important;
  }

  .plr_sm--150 {
    padding: 0 150px !important;
  }

  .pt_sm--150 {
    padding-top: 150px !important;
  }

  .pb_sm--150 {
    padding-bottom: 150px !important;
  }

  .pl_sm--150 {
    padding-left: 150px !important;
  }

  .pr_sm--150 {
    padding-right: 150px !important;
  }

  .mt_sm--150 {
    margin-top: 150px !important;
  }

  .ml_sm--150 {
    margin-left: 150px !important;
  }

  .mr_sm--150 {
    margin-right: 150px !important;
  }

  .mb_sm--150 {
    margin-bottom: 150px !important;
  }

  .ptb_sm--155 {
    padding: 155px 0 !important;
  }

  .plr_sm--155 {
    padding: 0 155px !important;
  }

  .pt_sm--155 {
    padding-top: 155px !important;
  }

  .pb_sm--155 {
    padding-bottom: 155px !important;
  }

  .pl_sm--155 {
    padding-left: 155px !important;
  }

  .pr_sm--155 {
    padding-right: 155px !important;
  }

  .mt_sm--155 {
    margin-top: 155px !important;
  }

  .ml_sm--155 {
    margin-left: 155px !important;
  }

  .mr_sm--155 {
    margin-right: 155px !important;
  }

  .mb_sm--155 {
    margin-bottom: 155px !important;
  }

  .ptb_sm--160 {
    padding: 160px 0 !important;
  }

  .plr_sm--160 {
    padding: 0 160px !important;
  }

  .pt_sm--160 {
    padding-top: 160px !important;
  }

  .pb_sm--160 {
    padding-bottom: 160px !important;
  }

  .pl_sm--160 {
    padding-left: 160px !important;
  }

  .pr_sm--160 {
    padding-right: 160px !important;
  }

  .mt_sm--160 {
    margin-top: 160px !important;
  }

  .ml_sm--160 {
    margin-left: 160px !important;
  }

  .mr_sm--160 {
    margin-right: 160px !important;
  }

  .mb_sm--160 {
    margin-bottom: 160px !important;
  }

  .ptb_sm--165 {
    padding: 165px 0 !important;
  }

  .plr_sm--165 {
    padding: 0 165px !important;
  }

  .pt_sm--165 {
    padding-top: 165px !important;
  }

  .pb_sm--165 {
    padding-bottom: 165px !important;
  }

  .pl_sm--165 {
    padding-left: 165px !important;
  }

  .pr_sm--165 {
    padding-right: 165px !important;
  }

  .mt_sm--165 {
    margin-top: 165px !important;
  }

  .ml_sm--165 {
    margin-left: 165px !important;
  }

  .mr_sm--165 {
    margin-right: 165px !important;
  }

  .mb_sm--165 {
    margin-bottom: 165px !important;
  }

  .ptb_sm--170 {
    padding: 170px 0 !important;
  }

  .plr_sm--170 {
    padding: 0 170px !important;
  }

  .pt_sm--170 {
    padding-top: 170px !important;
  }

  .pb_sm--170 {
    padding-bottom: 170px !important;
  }

  .pl_sm--170 {
    padding-left: 170px !important;
  }

  .pr_sm--170 {
    padding-right: 170px !important;
  }

  .mt_sm--170 {
    margin-top: 170px !important;
  }

  .ml_sm--170 {
    margin-left: 170px !important;
  }

  .mr_sm--170 {
    margin-right: 170px !important;
  }

  .mb_sm--170 {
    margin-bottom: 170px !important;
  }

  .ptb_sm--175 {
    padding: 175px 0 !important;
  }

  .plr_sm--175 {
    padding: 0 175px !important;
  }

  .pt_sm--175 {
    padding-top: 175px !important;
  }

  .pb_sm--175 {
    padding-bottom: 175px !important;
  }

  .pl_sm--175 {
    padding-left: 175px !important;
  }

  .pr_sm--175 {
    padding-right: 175px !important;
  }

  .mt_sm--175 {
    margin-top: 175px !important;
  }

  .ml_sm--175 {
    margin-left: 175px !important;
  }

  .mr_sm--175 {
    margin-right: 175px !important;
  }

  .mb_sm--175 {
    margin-bottom: 175px !important;
  }

  .ptb_sm--180 {
    padding: 180px 0 !important;
  }

  .plr_sm--180 {
    padding: 0 180px !important;
  }

  .pt_sm--180 {
    padding-top: 180px !important;
  }

  .pb_sm--180 {
    padding-bottom: 180px !important;
  }

  .pl_sm--180 {
    padding-left: 180px !important;
  }

  .pr_sm--180 {
    padding-right: 180px !important;
  }

  .mt_sm--180 {
    margin-top: 180px !important;
  }

  .ml_sm--180 {
    margin-left: 180px !important;
  }

  .mr_sm--180 {
    margin-right: 180px !important;
  }

  .mb_sm--180 {
    margin-bottom: 180px !important;
  }

  .ptb_sm--185 {
    padding: 185px 0 !important;
  }

  .plr_sm--185 {
    padding: 0 185px !important;
  }

  .pt_sm--185 {
    padding-top: 185px !important;
  }

  .pb_sm--185 {
    padding-bottom: 185px !important;
  }

  .pl_sm--185 {
    padding-left: 185px !important;
  }

  .pr_sm--185 {
    padding-right: 185px !important;
  }

  .mt_sm--185 {
    margin-top: 185px !important;
  }

  .ml_sm--185 {
    margin-left: 185px !important;
  }

  .mr_sm--185 {
    margin-right: 185px !important;
  }

  .mb_sm--185 {
    margin-bottom: 185px !important;
  }

  .ptb_sm--190 {
    padding: 190px 0 !important;
  }

  .plr_sm--190 {
    padding: 0 190px !important;
  }

  .pt_sm--190 {
    padding-top: 190px !important;
  }

  .pb_sm--190 {
    padding-bottom: 190px !important;
  }

  .pl_sm--190 {
    padding-left: 190px !important;
  }

  .pr_sm--190 {
    padding-right: 190px !important;
  }

  .mt_sm--190 {
    margin-top: 190px !important;
  }

  .ml_sm--190 {
    margin-left: 190px !important;
  }

  .mr_sm--190 {
    margin-right: 190px !important;
  }

  .mb_sm--190 {
    margin-bottom: 190px !important;
  }

  .ptb_sm--195 {
    padding: 195px 0 !important;
  }

  .plr_sm--195 {
    padding: 0 195px !important;
  }

  .pt_sm--195 {
    padding-top: 195px !important;
  }

  .pb_sm--195 {
    padding-bottom: 195px !important;
  }

  .pl_sm--195 {
    padding-left: 195px !important;
  }

  .pr_sm--195 {
    padding-right: 195px !important;
  }

  .mt_sm--195 {
    margin-top: 195px !important;
  }

  .ml_sm--195 {
    margin-left: 195px !important;
  }

  .mr_sm--195 {
    margin-right: 195px !important;
  }

  .mb_sm--195 {
    margin-bottom: 195px !important;
  }

  .ptb_sm--200 {
    padding: 200px 0 !important;
  }

  .plr_sm--200 {
    padding: 0 200px !important;
  }

  .pt_sm--200 {
    padding-top: 200px !important;
  }

  .pb_sm--200 {
    padding-bottom: 200px !important;
  }

  .pl_sm--200 {
    padding-left: 200px !important;
  }

  .pr_sm--200 {
    padding-right: 200px !important;
  }

  .mt_sm--200 {
    margin-top: 200px !important;
  }

  .ml_sm--200 {
    margin-left: 200px !important;
  }

  .mr_sm--200 {
    margin-right: 200px !important;
  }

  .mb_sm--200 {
    margin-bottom: 200px !important;
  }

  .pl_sm--0 {
    padding-left: 0;
  }

  .pr_sm--0 {
    padding-right: 0;
  }

  .pt_sm--0 {
    padding-top: 0;
  }

  .pb_sm--0 {
    padding-bottom: 0;
  }

  .mr_sm--0 {
    margin-right: 0;
  }

  .ml_sm--0 {
    margin-left: 0;
  }

  .mt_sm--0 {
    margin-top: 0;
  }

  .mb_sm--0 {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 575px) {
  .ptb_mobile--5 {
    padding: 5px 0 !important;
  }

  .plr_mobile--5 {
    padding: 0 5px !important;
  }

  .pt_mobile--5 {
    padding-top: 5px !important;
  }

  .pb_mobile--5 {
    padding-bottom: 5px !important;
  }

  .pl_mobile--5 {
    padding-left: 5px !important;
  }

  .pr_mobile--5 {
    padding-right: 5px !important;
  }

  .mt_mobile--5 {
    margin-top: 5px !important;
  }

  .mb_mobile--5 {
    margin-bottom: 5px !important;
  }

  .ptb_mobile--10 {
    padding: 10px 0 !important;
  }

  .plr_mobile--10 {
    padding: 0 10px !important;
  }

  .pt_mobile--10 {
    padding-top: 10px !important;
  }

  .pb_mobile--10 {
    padding-bottom: 10px !important;
  }

  .pl_mobile--10 {
    padding-left: 10px !important;
  }

  .pr_mobile--10 {
    padding-right: 10px !important;
  }

  .mt_mobile--10 {
    margin-top: 10px !important;
  }

  .mb_mobile--10 {
    margin-bottom: 10px !important;
  }

  .ptb_mobile--15 {
    padding: 15px 0 !important;
  }

  .plr_mobile--15 {
    padding: 0 15px !important;
  }

  .pt_mobile--15 {
    padding-top: 15px !important;
  }

  .pb_mobile--15 {
    padding-bottom: 15px !important;
  }

  .pl_mobile--15 {
    padding-left: 15px !important;
  }

  .pr_mobile--15 {
    padding-right: 15px !important;
  }

  .mt_mobile--15 {
    margin-top: 15px !important;
  }

  .mb_mobile--15 {
    margin-bottom: 15px !important;
  }

  .ptb_mobile--20 {
    padding: 20px 0 !important;
  }

  .plr_mobile--20 {
    padding: 0 20px !important;
  }

  .pt_mobile--20 {
    padding-top: 20px !important;
  }

  .pb_mobile--20 {
    padding-bottom: 20px !important;
  }

  .pl_mobile--20 {
    padding-left: 20px !important;
  }

  .pr_mobile--20 {
    padding-right: 20px !important;
  }

  .mt_mobile--20 {
    margin-top: 20px !important;
  }

  .mb_mobile--20 {
    margin-bottom: 20px !important;
  }

  .ptb_mobile--25 {
    padding: 25px 0 !important;
  }

  .plr_mobile--25 {
    padding: 0 25px !important;
  }

  .pt_mobile--25 {
    padding-top: 25px !important;
  }

  .pb_mobile--25 {
    padding-bottom: 25px !important;
  }

  .pl_mobile--25 {
    padding-left: 25px !important;
  }

  .pr_mobile--25 {
    padding-right: 25px !important;
  }

  .mt_mobile--25 {
    margin-top: 25px !important;
  }

  .mb_mobile--25 {
    margin-bottom: 25px !important;
  }

  .ptb_mobile--30 {
    padding: 30px 0 !important;
  }

  .plr_mobile--30 {
    padding: 0 30px !important;
  }

  .pt_mobile--30 {
    padding-top: 30px !important;
  }

  .pb_mobile--30 {
    padding-bottom: 30px !important;
  }

  .pl_mobile--30 {
    padding-left: 30px !important;
  }

  .pr_mobile--30 {
    padding-right: 30px !important;
  }

  .mt_mobile--30 {
    margin-top: 30px !important;
  }

  .mb_mobile--30 {
    margin-bottom: 30px !important;
  }

  .ptb_mobile--35 {
    padding: 35px 0 !important;
  }

  .plr_mobile--35 {
    padding: 0 35px !important;
  }

  .pt_mobile--35 {
    padding-top: 35px !important;
  }

  .pb_mobile--35 {
    padding-bottom: 35px !important;
  }

  .pl_mobile--35 {
    padding-left: 35px !important;
  }

  .pr_mobile--35 {
    padding-right: 35px !important;
  }

  .mt_mobile--35 {
    margin-top: 35px !important;
  }

  .mb_mobile--35 {
    margin-bottom: 35px !important;
  }

  .ptb_mobile--40 {
    padding: 40px 0 !important;
  }

  .plr_mobile--40 {
    padding: 0 40px !important;
  }

  .pt_mobile--40 {
    padding-top: 40px !important;
  }

  .pb_mobile--40 {
    padding-bottom: 40px !important;
  }

  .pl_mobile--40 {
    padding-left: 40px !important;
  }

  .pr_mobile--40 {
    padding-right: 40px !important;
  }

  .mt_mobile--40 {
    margin-top: 40px !important;
  }

  .mb_mobile--40 {
    margin-bottom: 40px !important;
  }

  .ptb_mobile--45 {
    padding: 45px 0 !important;
  }

  .plr_mobile--45 {
    padding: 0 45px !important;
  }

  .pt_mobile--45 {
    padding-top: 45px !important;
  }

  .pb_mobile--45 {
    padding-bottom: 45px !important;
  }

  .pl_mobile--45 {
    padding-left: 45px !important;
  }

  .pr_mobile--45 {
    padding-right: 45px !important;
  }

  .mt_mobile--45 {
    margin-top: 45px !important;
  }

  .mb_mobile--45 {
    margin-bottom: 45px !important;
  }

  .ptb_mobile--50 {
    padding: 50px 0 !important;
  }

  .plr_mobile--50 {
    padding: 0 50px !important;
  }

  .pt_mobile--50 {
    padding-top: 50px !important;
  }

  .pb_mobile--50 {
    padding-bottom: 50px !important;
  }

  .pl_mobile--50 {
    padding-left: 50px !important;
  }

  .pr_mobile--50 {
    padding-right: 50px !important;
  }

  .mt_mobile--50 {
    margin-top: 50px !important;
  }

  .mb_mobile--50 {
    margin-bottom: 50px !important;
  }

  .ptb_mobile--55 {
    padding: 55px 0 !important;
  }

  .plr_mobile--55 {
    padding: 0 55px !important;
  }

  .pt_mobile--55 {
    padding-top: 55px !important;
  }

  .pb_mobile--55 {
    padding-bottom: 55px !important;
  }

  .pl_mobile--55 {
    padding-left: 55px !important;
  }

  .pr_mobile--55 {
    padding-right: 55px !important;
  }

  .mt_mobile--55 {
    margin-top: 55px !important;
  }

  .mb_mobile--55 {
    margin-bottom: 55px !important;
  }

  .ptb_mobile--60 {
    padding: 60px 0 !important;
  }

  .plr_mobile--60 {
    padding: 0 60px !important;
  }

  .pt_mobile--60 {
    padding-top: 60px !important;
  }

  .pb_mobile--60 {
    padding-bottom: 60px !important;
  }

  .pl_mobile--60 {
    padding-left: 60px !important;
  }

  .pr_mobile--60 {
    padding-right: 60px !important;
  }

  .mt_mobile--60 {
    margin-top: 60px !important;
  }

  .mb_mobile--60 {
    margin-bottom: 60px !important;
  }

  .ptb_mobile--65 {
    padding: 65px 0 !important;
  }

  .plr_mobile--65 {
    padding: 0 65px !important;
  }

  .pt_mobile--65 {
    padding-top: 65px !important;
  }

  .pb_mobile--65 {
    padding-bottom: 65px !important;
  }

  .pl_mobile--65 {
    padding-left: 65px !important;
  }

  .pr_mobile--65 {
    padding-right: 65px !important;
  }

  .mt_mobile--65 {
    margin-top: 65px !important;
  }

  .mb_mobile--65 {
    margin-bottom: 65px !important;
  }

  .ptb_mobile--70 {
    padding: 70px 0 !important;
  }

  .plr_mobile--70 {
    padding: 0 70px !important;
  }

  .pt_mobile--70 {
    padding-top: 70px !important;
  }

  .pb_mobile--70 {
    padding-bottom: 70px !important;
  }

  .pl_mobile--70 {
    padding-left: 70px !important;
  }

  .pr_mobile--70 {
    padding-right: 70px !important;
  }

  .mt_mobile--70 {
    margin-top: 70px !important;
  }

  .mb_mobile--70 {
    margin-bottom: 70px !important;
  }

  .ptb_mobile--75 {
    padding: 75px 0 !important;
  }

  .plr_mobile--75 {
    padding: 0 75px !important;
  }

  .pt_mobile--75 {
    padding-top: 75px !important;
  }

  .pb_mobile--75 {
    padding-bottom: 75px !important;
  }

  .pl_mobile--75 {
    padding-left: 75px !important;
  }

  .pr_mobile--75 {
    padding-right: 75px !important;
  }

  .mt_mobile--75 {
    margin-top: 75px !important;
  }

  .mb_mobile--75 {
    margin-bottom: 75px !important;
  }

  .ptb_mobile--80 {
    padding: 80px 0 !important;
  }

  .plr_mobile--80 {
    padding: 0 80px !important;
  }

  .pt_mobile--80 {
    padding-top: 80px !important;
  }

  .pb_mobile--80 {
    padding-bottom: 80px !important;
  }

  .pl_mobile--80 {
    padding-left: 80px !important;
  }

  .pr_mobile--80 {
    padding-right: 80px !important;
  }

  .mt_mobile--80 {
    margin-top: 80px !important;
  }

  .mb_mobile--80 {
    margin-bottom: 80px !important;
  }

  .ptb_mobile--85 {
    padding: 85px 0 !important;
  }

  .plr_mobile--85 {
    padding: 0 85px !important;
  }

  .pt_mobile--85 {
    padding-top: 85px !important;
  }

  .pb_mobile--85 {
    padding-bottom: 85px !important;
  }

  .pl_mobile--85 {
    padding-left: 85px !important;
  }

  .pr_mobile--85 {
    padding-right: 85px !important;
  }

  .mt_mobile--85 {
    margin-top: 85px !important;
  }

  .mb_mobile--85 {
    margin-bottom: 85px !important;
  }

  .ptb_mobile--90 {
    padding: 90px 0 !important;
  }

  .plr_mobile--90 {
    padding: 0 90px !important;
  }

  .pt_mobile--90 {
    padding-top: 90px !important;
  }

  .pb_mobile--90 {
    padding-bottom: 90px !important;
  }

  .pl_mobile--90 {
    padding-left: 90px !important;
  }

  .pr_mobile--90 {
    padding-right: 90px !important;
  }

  .mt_mobile--90 {
    margin-top: 90px !important;
  }

  .mb_mobile--90 {
    margin-bottom: 90px !important;
  }

  .ptb_mobile--95 {
    padding: 95px 0 !important;
  }

  .plr_mobile--95 {
    padding: 0 95px !important;
  }

  .pt_mobile--95 {
    padding-top: 95px !important;
  }

  .pb_mobile--95 {
    padding-bottom: 95px !important;
  }

  .pl_mobile--95 {
    padding-left: 95px !important;
  }

  .pr_mobile--95 {
    padding-right: 95px !important;
  }

  .mt_mobile--95 {
    margin-top: 95px !important;
  }

  .mb_mobile--95 {
    margin-bottom: 95px !important;
  }

  .ptb_mobile--100 {
    padding: 100px 0 !important;
  }

  .plr_mobile--100 {
    padding: 0 100px !important;
  }

  .pt_mobile--100 {
    padding-top: 100px !important;
  }

  .pb_mobile--100 {
    padding-bottom: 100px !important;
  }

  .pl_mobile--100 {
    padding-left: 100px !important;
  }

  .pr_mobile--100 {
    padding-right: 100px !important;
  }

  .mt_mobile--100 {
    margin-top: 100px !important;
  }

  .mb_mobile--100 {
    margin-bottom: 100px !important;
  }
}
.slick-gutter-5 {
  margin-left: -5px;
  margin-right: -5px;
}
.slick-gutter-5 .slick-slide {
  padding-left: 5px;
  padding-right: 5px;
}

.slick-gutter-10 {
  margin-left: -10px;
  margin-right: -10px;
}
.slick-gutter-10 .slick-slide {
  padding-left: 10px;
  padding-right: 10px;
}

.slick-gutter-15 {
  margin-left: -15px;
  margin-right: -15px;
}
.slick-gutter-15 .slick-slide {
  padding-left: 15px;
  padding-right: 15px;
}

.slick-gutter-20 {
  margin-left: -20px;
  margin-right: -20px;
}
.slick-gutter-20 .slick-slide {
  padding-left: 20px;
  padding-right: 20px;
}

.slick-gutter-25 {
  margin-left: -25px;
  margin-right: -25px;
}
.slick-gutter-25 .slick-slide {
  padding-left: 25px;
  padding-right: 25px;
}

.slick-gutter-30 {
  margin-left: -30px;
  margin-right: -30px;
}
.slick-gutter-30 .slick-slide {
  padding-left: 30px;
  padding-right: 30px;
}

.slick-gutter-35 {
  margin-left: -35px;
  margin-right: -35px;
}
.slick-gutter-35 .slick-slide {
  padding-left: 35px;
  padding-right: 35px;
}

.slick-gutter-40 {
  margin-left: -40px;
  margin-right: -40px;
}
.slick-gutter-40 .slick-slide {
  padding-left: 40px;
  padding-right: 40px;
}

.slick-gutter-45 {
  margin-left: -45px;
  margin-right: -45px;
}
.slick-gutter-45 .slick-slide {
  padding-left: 45px;
  padding-right: 45px;
}

.slick-gutter-50 {
  margin-left: -50px;
  margin-right: -50px;
}
.slick-gutter-50 .slick-slide {
  padding-left: 50px;
  padding-right: 50px;
}

.slick-gutter-55 {
  margin-left: -55px;
  margin-right: -55px;
}
.slick-gutter-55 .slick-slide {
  padding-left: 55px;
  padding-right: 55px;
}

.slick-gutter-60 {
  margin-left: -60px;
  margin-right: -60px;
}
.slick-gutter-60 .slick-slide {
  padding-left: 60px;
  padding-right: 60px;
}

.slick-gutter-65 {
  margin-left: -65px;
  margin-right: -65px;
}
.slick-gutter-65 .slick-slide {
  padding-left: 65px;
  padding-right: 65px;
}

.slick-gutter-70 {
  margin-left: -70px;
  margin-right: -70px;
}
.slick-gutter-70 .slick-slide {
  padding-left: 70px;
  padding-right: 70px;
}

.slick-gutter-75 {
  margin-left: -75px;
  margin-right: -75px;
}
.slick-gutter-75 .slick-slide {
  padding-left: 75px;
  padding-right: 75px;
}

.slick-gutter-80 {
  margin-left: -80px;
  margin-right: -80px;
}
.slick-gutter-80 .slick-slide {
  padding-left: 80px;
  padding-right: 80px;
}

.slick-gutter-85 {
  margin-left: -85px;
  margin-right: -85px;
}
.slick-gutter-85 .slick-slide {
  padding-left: 85px;
  padding-right: 85px;
}

.slick-gutter-90 {
  margin-left: -90px;
  margin-right: -90px;
}
.slick-gutter-90 .slick-slide {
  padding-left: 90px;
  padding-right: 90px;
}

.slick-gutter-95 {
  margin-left: -95px;
  margin-right: -95px;
}
.slick-gutter-95 .slick-slide {
  padding-left: 95px;
  padding-right: 95px;
}

.slick-gutter-100 {
  margin-left: -100px;
  margin-right: -100px;
}
.slick-gutter-100 .slick-slide {
  padding-left: 100px;
  padding-right: 100px;
}

.mt-dec-30 {
  margin-top: -30px !important;
}

.mt_dec--30 {
  margin-top: -30px !important;
}

.mt-dec-100 {
  margin-top: -100px !important;
}

@media only screen and (max-width: 479px) {
  .small-margin-pricing {
    margin-bottom: 25px !important;
  }
}

@media only screen and (max-width: 479px) {
  .contact-input {
    margin-bottom: 35px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mb_dec--35 {
    margin-bottom: -50px;
  }
}

@media only screen and (max-width: 767px) {
  .mb_dec--35 {
    margin-bottom: -75px;
  }
}
@media only screen and (max-width: 575px) {
  .mb_dec--35 {
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 575px) {
  .mt-contact-sm {
    margin-top: 30px !important;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .testimonial-pb {
    padding-bottom: 35px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-input {
    padding-bottom: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .contact-input {
    padding-bottom: 30px;
  }
}

.pb_xl--130 {
  padding-bottom: 130px;
}
@media only screen and (max-width: 1199px) {
  .pb_xl--130 {
    padding-bottom: 110px;
  }
}

@media only screen and (max-width: 1199px) {
  .mt_experience {
    margin-top: -10px;
  }
}

.mt_dec--120 {
  margin-top: -120px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .plr_md--0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

.padding-contorler-am-slide {
  padding-left: 246px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .padding-contorler-am-slide {
    padding-left: 100px;
  }
}
@media only screen and (max-width: 1199px) {
  .padding-contorler-am-slide {
    padding-left: 100px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .padding-contorler-am-slide {
    padding-left: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .padding-contorler-am-slide {
    padding-left: 15px;
  }
}

.padding-contorler-am-slide-11 {
  padding-left: 246px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .padding-contorler-am-slide-11 {
    padding-left: 100px;
  }
}
@media only screen and (max-width: 1199px) {
  .padding-contorler-am-slide-11 {
    padding-left: 0;
  }
}

.padding-contorler-am-slide-right {
  padding-right: 200px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .padding-contorler-am-slide-right {
    padding-right: 30px;
  }
}
@media only screen and (max-width: 1199px) {
  .padding-contorler-am-slide-right {
    padding-right: 30px;
    padding-top: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .padding-contorler-am-slide-right {
    padding-right: 30px;
    padding-top: 50px;
  }
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden] {
  display: none;
}

a {
  color: var(--color-heading);
  text-decoration: none;
  outline: none;
}

a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
  color: var(--color-primary);
}

a:focus {
  outline: none;
}

address {
  margin: 0 0 24px;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

mark {
  background: var(--color-primary);
  color: #ffffff;
}

code,
kbd,
pre,
samp {
  font-size: var(--font-size-b3);
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  color: var(--color-primary);
}

kbd,
ins {
  color: #ffffff;
}

pre {
  font-family: "Raleway", sans-serif;
  font-size: var(--font-size-b3);
  margin: 10px 0;
  overflow: auto;
  padding: 20px;
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: var(--color-body);
  background: var(--color-lighter);
}

small {
  font-size: smaller;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

dl {
  margin-top: 0;
  margin-bottom: 10px;
}

dd {
  margin: 0 15px 15px;
}

dt {
  font-weight: bold;
  color: var(--color-heading);
}

menu,
ol,
ul {
  margin: 16px 0;
  padding: 0 0 0 40px;
}

nav ul,
nav ol {
  list-style: none;
  list-style-image: none;
}

li > ul,
li > ol {
  margin: 0;
}

ol ul {
  margin-bottom: 0;
}

img {
  -ms-interpolation-mode: bicubic;
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}

form {
  margin: 0;
}

fieldset {
  border: 1px solid var(--color-border);
  margin: 0 2px;
  min-width: inherit;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
  white-space: normal;
}

button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
  max-width: 100%;
  vertical-align: baseline;
}

button,
input {
  line-height: normal;
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  cursor: pointer;
}

button[disabled],
input[disabled] {
  cursor: default;
}

input[type=checkbox],
input[type=radio] {
  padding: 0;
}

input[type=search] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  appearance: textfield;
  padding-right: 2px;
  width: 270px;
}

input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  vertical-align: top;
}

caption,
th,
td {
  font-weight: normal;
}

th {
  font-weight: 500;
  text-transform: uppercase;
}

td,
.wp-block-calendar tfoot td {
  border: 1px solid var(--color-border);
  padding: 7px 10px;
}

del {
  color: #333;
}

ins {
  background: rgba(255, 47, 47, 0.4);
  text-decoration: none;
}

hr {
  background-size: 4px 4px;
  border: 0;
  height: 1px;
  margin: 0 0 24px;
}

table a,
table a:link,
table a:visited {
  text-decoration: underline;
}

dt {
  font-weight: bold;
  margin-bottom: 10px;
}

dd {
  margin: 0 15px 15px;
}

caption {
  caption-side: top;
}

kbd {
  background: var(--heading-color);
}

dfn,
cite,
em {
  font-style: italic;
}

/* BlockQuote  */
blockquote,
q {
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

blockquote {
  font-size: var(--font-size-b1);
  font-style: italic;
  font-weight: var(--p-light);
  margin: 24px 40px;
}

blockquote blockquote {
  margin-right: 0;
}

blockquote cite,
blockquote small {
  font-size: var(--font-size-b3);
  font-weight: normal;
}

blockquote strong,
blockquote b {
  font-weight: 700;
}

/* ========= Forms Styles ========= */
input,
button,
select,
textarea {
  background: transparent;
  border: 1px solid var(--color-border);
  transition: all 0.4s ease-out 0s;
  color: var(--color-body);
  width: 100%;
}
input:focus, input:active,
button:focus,
button:active,
select:focus,
select:active,
textarea:focus,
textarea:active {
  outline: none;
  border-color: var(--color-primary);
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

input {
  height: 40px;
  padding: 0 15px;
}

input[type=text],
input[type=password],
input[type=email],
input[type=number],
input[type=tel],
textarea {
  font-size: var(--font-size-b2);
  font-weight: 400;
  height: auto;
  line-height: 28px;
  background: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 0 15px;
  outline: none;
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius);
  /* -- Placeholder -- */
}
input[type=text]::placeholder,
input[type=password]::placeholder,
input[type=email]::placeholder,
input[type=number]::placeholder,
input[type=tel]::placeholder,
textarea::placeholder {
  color: var(--body-color);
  /* Firefox */
  opacity: 1;
}
input[type=text]:-ms-input-placeholder,
input[type=password]:-ms-input-placeholder,
input[type=email]:-ms-input-placeholder,
input[type=number]:-ms-input-placeholder,
input[type=tel]:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--body-color);
}
input[type=text]::-ms-input-placeholder,
input[type=password]::-ms-input-placeholder,
input[type=email]::-ms-input-placeholder,
input[type=number]::-ms-input-placeholder,
input[type=tel]::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--body-color);
}
input[type=text].p-holder__active, .input-active input[type=text], input[type=text].input-active,
input[type=password].p-holder__active,
.input-active input[type=password],
input[type=password].input-active,
input[type=email].p-holder__active,
.input-active input[type=email],
input[type=email].input-active,
input[type=number].p-holder__active,
.input-active input[type=number],
input[type=number].input-active,
input[type=tel].p-holder__active,
.input-active input[type=tel],
input[type=tel].input-active,
textarea.p-holder__active,
textarea.input-active {
  border-color: var(--color-primary);
  /* -- Placeholder -- */
}
input[type=text].p-holder__active::placeholder, .input-active input[type=text]::placeholder, input[type=text].input-active::placeholder,
input[type=password].p-holder__active::placeholder,
.input-active input[type=password]::placeholder,
input[type=password].input-active::placeholder,
input[type=email].p-holder__active::placeholder,
.input-active input[type=email]::placeholder,
input[type=email].input-active::placeholder,
input[type=number].p-holder__active::placeholder,
.input-active input[type=number]::placeholder,
input[type=number].input-active::placeholder,
input[type=tel].p-holder__active::placeholder,
.input-active input[type=tel]::placeholder,
input[type=tel].input-active::placeholder,
textarea.p-holder__active::placeholder,
textarea.input-active::placeholder {
  color: var(--color-primary);
  /* Firefox */
  opacity: 1;
}
input[type=text].p-holder__active:-ms-input-placeholder, .input-active input[type=text]:-ms-input-placeholder, input[type=text].input-active:-ms-input-placeholder,
input[type=password].p-holder__active:-ms-input-placeholder,
.input-active input[type=password]:-ms-input-placeholder,
input[type=password].input-active:-ms-input-placeholder,
input[type=email].p-holder__active:-ms-input-placeholder,
.input-active input[type=email]:-ms-input-placeholder,
input[type=email].input-active:-ms-input-placeholder,
input[type=number].p-holder__active:-ms-input-placeholder,
.input-active input[type=number]:-ms-input-placeholder,
input[type=number].input-active:-ms-input-placeholder,
input[type=tel].p-holder__active:-ms-input-placeholder,
.input-active input[type=tel]:-ms-input-placeholder,
input[type=tel].input-active:-ms-input-placeholder,
textarea.p-holder__active:-ms-input-placeholder,
textarea.input-active:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--color-primary);
}
input[type=text].p-holder__active::-ms-input-placeholder, .input-active input[type=text]::-ms-input-placeholder, input[type=text].input-active::-ms-input-placeholder,
input[type=password].p-holder__active::-ms-input-placeholder,
.input-active input[type=password]::-ms-input-placeholder,
input[type=password].input-active::-ms-input-placeholder,
input[type=email].p-holder__active::-ms-input-placeholder,
.input-active input[type=email]::-ms-input-placeholder,
input[type=email].input-active::-ms-input-placeholder,
input[type=number].p-holder__active::-ms-input-placeholder,
.input-active input[type=number]::-ms-input-placeholder,
input[type=number].input-active::-ms-input-placeholder,
input[type=tel].p-holder__active::-ms-input-placeholder,
.input-active input[type=tel]::-ms-input-placeholder,
input[type=tel].input-active::-ms-input-placeholder,
textarea.p-holder__active::-ms-input-placeholder,
textarea.input-active::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--color-primary);
}
input[type=text].p-holder__error, .input-error input[type=text], input[type=text].input-error,
input[type=password].p-holder__error,
.input-error input[type=password],
input[type=password].input-error,
input[type=email].p-holder__error,
.input-error input[type=email],
input[type=email].input-error,
input[type=number].p-holder__error,
.input-error input[type=number],
input[type=number].input-error,
input[type=tel].p-holder__error,
.input-error input[type=tel],
input[type=tel].input-error,
textarea.p-holder__error,
textarea.input-error {
  border-color: #f4282d;
  /* -- Placeholder -- */
}
input[type=text].p-holder__error::placeholder, .input-error input[type=text]::placeholder, input[type=text].input-error::placeholder,
input[type=password].p-holder__error::placeholder,
.input-error input[type=password]::placeholder,
input[type=password].input-error::placeholder,
input[type=email].p-holder__error::placeholder,
.input-error input[type=email]::placeholder,
input[type=email].input-error::placeholder,
input[type=number].p-holder__error::placeholder,
.input-error input[type=number]::placeholder,
input[type=number].input-error::placeholder,
input[type=tel].p-holder__error::placeholder,
.input-error input[type=tel]::placeholder,
input[type=tel].input-error::placeholder,
textarea.p-holder__error::placeholder,
textarea.input-error::placeholder {
  color: #f4282d;
  /* Firefox */
  opacity: 1;
}
input[type=text].p-holder__error:-ms-input-placeholder, .input-error input[type=text]:-ms-input-placeholder, input[type=text].input-error:-ms-input-placeholder,
input[type=password].p-holder__error:-ms-input-placeholder,
.input-error input[type=password]:-ms-input-placeholder,
input[type=password].input-error:-ms-input-placeholder,
input[type=email].p-holder__error:-ms-input-placeholder,
.input-error input[type=email]:-ms-input-placeholder,
input[type=email].input-error:-ms-input-placeholder,
input[type=number].p-holder__error:-ms-input-placeholder,
.input-error input[type=number]:-ms-input-placeholder,
input[type=number].input-error:-ms-input-placeholder,
input[type=tel].p-holder__error:-ms-input-placeholder,
.input-error input[type=tel]:-ms-input-placeholder,
input[type=tel].input-error:-ms-input-placeholder,
textarea.p-holder__error:-ms-input-placeholder,
textarea.input-error:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #f4282d;
}
input[type=text].p-holder__error::-ms-input-placeholder, .input-error input[type=text]::-ms-input-placeholder, input[type=text].input-error::-ms-input-placeholder,
input[type=password].p-holder__error::-ms-input-placeholder,
.input-error input[type=password]::-ms-input-placeholder,
input[type=password].input-error::-ms-input-placeholder,
input[type=email].p-holder__error::-ms-input-placeholder,
.input-error input[type=email]::-ms-input-placeholder,
input[type=email].input-error::-ms-input-placeholder,
input[type=number].p-holder__error::-ms-input-placeholder,
.input-error input[type=number]::-ms-input-placeholder,
input[type=number].input-error::-ms-input-placeholder,
input[type=tel].p-holder__error::-ms-input-placeholder,
.input-error input[type=tel]::-ms-input-placeholder,
input[type=tel].input-error::-ms-input-placeholder,
textarea.p-holder__error::-ms-input-placeholder,
textarea.input-error::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #f4282d;
}
input[type=text].p-holder__error:focus, .input-error input[type=text]:focus, input[type=text].input-error:focus,
input[type=password].p-holder__error:focus,
.input-error input[type=password]:focus,
input[type=password].input-error:focus,
input[type=email].p-holder__error:focus,
.input-error input[type=email]:focus,
input[type=email].input-error:focus,
input[type=number].p-holder__error:focus,
.input-error input[type=number]:focus,
input[type=number].input-error:focus,
input[type=tel].p-holder__error:focus,
.input-error input[type=tel]:focus,
input[type=tel].input-error:focus,
textarea.p-holder__error:focus,
textarea.input-error:focus {
  border-color: #f4282d;
}
input[type=text]:focus,
input[type=password]:focus,
input[type=email]:focus,
input[type=number]:focus,
input[type=tel]:focus,
textarea:focus {
  border-color: var(--color-primary);
}

input[type=checkbox],
input[type=radio] {
  opacity: 0;
  position: absolute;
}
input[type=checkbox] ~ label,
input[type=radio] ~ label {
  position: relative;
  font-size: 12px;
  line-height: 17px;
  color: var(--color-body);
  font-weight: 400;
  padding-left: 25px;
  cursor: pointer;
}
input[type=checkbox] ~ label::before,
input[type=radio] ~ label::before {
  content: " ";
  position: absolute;
  top: 1 px;
  left: 0;
  width: 15px;
  height: 15px;
  background-color: #5d5d7e;
  border-radius: 2px;
  transition: all 0.3s;
  border-radius: 2px;
}
input[type=checkbox] ~ label::after,
input[type=radio] ~ label::after {
  content: " ";
  position: absolute;
  top: 16%;
  left: 2px;
  width: 10px;
  height: 6px;
  background-color: transparent;
  border-bottom: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-radius: 2px;
  transform: rotate(-45deg);
  opacity: 0;
  transition: all 0.3s;
}
input[type=checkbox]:checked ~ label::after,
input[type=radio]:checked ~ label::after {
  opacity: 1;
}

input:checked ~ .rn-check-box-label::before {
  background: var(--color-primary) !important;
}

input[type=radio] ~ label::before {
  border-radius: 50%;
}
input[type=radio] ~ label::after {
  width: 8px;
  height: 8px;
  left: 3px;
  background: #fff;
  border-radius: 50%;
}

.form-group {
  margin-bottom: 20px;
}
.form-group label {
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
}
.form-group input {
  border: 0 none;
  border-radius: 4px;
  height: 50px;
  font-size: var(--font-size-b2);
  transition: var(--transition);
  padding: 0 20px;
  background-color: var(--color-lightest);
  border: 1px solid transparent;
  transition: var(--transition);
}
.form-group input:focus {
  border-color: var(--color-primary);
  box-shadow: none;
}
.form-group textarea {
  min-height: 160px;
  border: 0 none;
  border-radius: 4px;
  resize: none;
  padding: 15px;
  font-size: var(--font-size-b2);
  transition: var(--transition);
  background-color: var(--color-lightest);
  border: 1px solid transparent;
}
.form-group textarea:focus {
  border-color: var(--color-primary);
}

input[type=submit] {
  width: auto;
  padding: 0 30px;
  border-radius: 500px;
  display: inline-block;
  font-weight: 500;
  transition: 0.3s;
  height: 60px;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: var(--p-medium);
  font-size: var(--font-size-b2);
  line-height: var(--line-height-b3);
  height: 50px;
  border: 2px solid var(--color-primary);
  transition: var(--transition);
}
input[type=submit]:hover {
  background: transparent;
  color: var(--color-primary);
  transform: translateY(-5px);
}

/*==============================
 *  Utilities
=================================*/
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
}

.fix {
  overflow: hidden;
}

.slick-initialized .slick-slide {
  margin-bottom: -10px;
}

.slick-gutter-15 {
  margin: -30px -15px;
}
.slick-gutter-15 .slick-slide {
  padding: 30px 15px;
}

iframe {
  width: 100%;
}

/*===============================
    Background Color 
=================================*/
.bg-color-primary {
  background: var(--color-primary);
}

.bg-color-secondary {
  background: var(--color-secondary);
}

.bg-color-tertiary {
  background: var(--color-tertiary);
}

.bg-color-gray {
  background: var(--color-gray);
}

.bg-color-white {
  background: #FFFFFF;
}

.bg-color-black {
  background: #1A1A1A;
}

.bg-color-extra03 {
  background: var(--color-extra03);
}

/*===========================
Background Image 
=============================*/
.bg_image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.bg_tr-image--1 {
  background-size: cover !important;
}

.bg_tr-image--2 {
  background-size: cover !important;
}

.bg_tr-image--3 {
  background-size: cover !important;
}

.bg_tr-image--4 {
  background-size: cover !important;
}

.bg_tr-image--5 {
  background-size: cover !important;
}

.bg_tr-image--6 {
  background-size: cover !important;
}

.bg_tr-image--7 {
  background-size: cover !important;
}

.bg_tr-image--8 {
  background-size: cover !important;
}

.bg_tr-image--9 {
  background-size: cover !important;
}

.bg_tr-image--10 {
  background-size: cover !important;
}

.bg_tr-image--11 {
  background-size: cover !important;
}

.bg_tr-image--12 {
  background-size: cover !important;
}

.bg_tr-image--13 {
  background-size: cover !important;
}

.bg_tr-image--14 {
  background-size: cover !important;
}

.bg_tr-image--15 {
  background-size: cover !important;
}

.bg_tr-image--16 {
  background-size: cover !important;
}

.bg_tr-image--17 {
  background-size: cover !important;
}

.bg_tr-image--18 {
  background-size: cover !important;
}

.bg_tr-image--19 {
  background-size: cover !important;
}

.bg_tr-image--20 {
  background-size: cover !important;
}

/* Height and width */
.fullscreen {
  min-height: 980px;
  width: 100%;
}

/*===================
Custom Row
======================*/
.row--0 {
  margin-left: 0px;
  margin-right: 0px;
}
.row--0 > [class*=col] {
  padding-left: 0px;
  padding-right: 0px;
}

.row--5 {
  margin-left: -5px;
  margin-right: -5px;
}
.row--5 > [class*=col] {
  padding-left: 5px;
  padding-right: 5px;
}

.row--10 {
  margin-left: -10px;
  margin-right: -10px;
}
.row--10 > [class*=col] {
  padding-left: 10px;
  padding-right: 10px;
}

.row--20 {
  margin-left: -20px;
  margin-right: -20px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--20 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--20 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--20 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (max-width: 767px) {
  .row--20 {
    margin-left: -15px !important;
    margin-right: -15px !important;
  }
}
.row--20 > [class*=col], .row--20 > [class*=col-] {
  padding-left: 20px;
  padding-right: 20px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--20 > [class*=col], .row--20 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--20 > [class*=col], .row--20 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--20 > [class*=col], .row--20 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
@media only screen and (max-width: 767px) {
  .row--20 > [class*=col], .row--20 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.row--25 {
  margin-left: -25px;
  margin-right: -25px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--25 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--25 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--25 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (max-width: 767px) {
  .row--25 {
    margin-left: -15px !important;
    margin-right: -15px !important;
  }
}
.row--25 > [class*=col], .row--25 > [class*=col-] {
  padding-left: 25px;
  padding-right: 25px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--25 > [class*=col], .row--25 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--25 > [class*=col], .row--25 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--25 > [class*=col], .row--25 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
@media only screen and (max-width: 767px) {
  .row--25 > [class*=col], .row--25 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.row--30 {
  margin-left: -30px;
  margin-right: -30px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--30 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--30 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--30 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (max-width: 767px) {
  .row--30 {
    margin-left: -15px !important;
    margin-right: -15px !important;
  }
}
.row--30 > [class*=col], .row--30 > [class*=col-] {
  padding-left: 30px;
  padding-right: 30px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--30 > [class*=col], .row--30 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--30 > [class*=col], .row--30 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--30 > [class*=col], .row--30 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
@media only screen and (max-width: 767px) {
  .row--30 > [class*=col], .row--30 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.row--45 {
  margin-left: -45px;
  margin-right: -45px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--45 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--45 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--45 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (max-width: 767px) {
  .row--45 {
    margin-left: -15px !important;
    margin-right: -15px !important;
  }
}
.row--45 > [class*=col], .row--45 > [class*=col-] {
  padding-left: 45px;
  padding-right: 45px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--45 > [class*=col], .row--45 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--45 > [class*=col], .row--45 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--45 > [class*=col], .row--45 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
@media only screen and (max-width: 767px) {
  .row--45 > [class*=col], .row--45 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.row--40 {
  margin-left: -40px;
  margin-right: -40px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--40 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--40 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--40 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (max-width: 767px) {
  .row--40 {
    margin-left: -15px !important;
    margin-right: -15px !important;
  }
}
.row--40 > [class*=col], .row--40 > [class*=col-] {
  padding-left: 40px;
  padding-right: 40px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--40 > [class*=col], .row--40 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--40 > [class*=col], .row--40 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--40 > [class*=col], .row--40 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
@media only screen and (max-width: 767px) {
  .row--40 > [class*=col], .row--40 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.row--60 {
  margin-left: -60px;
  margin-right: -60px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--60 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--60 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--60 {
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media only screen and (max-width: 767px) {
  .row--60 {
    margin-left: -15px !important;
    margin-right: -15px !important;
  }
}
.row--60 > [class*=col], .row--60 > [class*=col-] {
  padding-left: 60px;
  padding-right: 60px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .row--60 > [class*=col], .row--60 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .row--60 > [class*=col], .row--60 > [class*=col-] {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .row--60 > [class*=col], .row--60 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
@media only screen and (max-width: 767px) {
  .row--60 > [class*=col], .row--60 > [class*=col-] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

/*===========================
    Input Placeholder
=============================*/
input:-moz-placeholder,
textarea:-moz-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

/*=============================
	Overlay styles 
==============================*/
[data-overlay],
[data-black-overlay],
[data-white-overlay] {
  position: relative;
  z-index: 2;
}

[data-overlay] > div,
[data-overlay] > *,
[data-black-overlay] > div,
[data-black-overlay] > *,
[data-white-overlay] > div,
[data-white-overlay] > * {
  position: relative;
  z-index: 2;
}

[data-overlay]:before,
[data-black-overlay]:before,
[data-white-overlay]:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

[data-overlay]:before {
  background: var(--color-primary);
}

[data-black-overlay]:before {
  background-color: #000000;
}

[data-white-overlay]:before {
  background-color: #ffffff;
}

[data-overlay="1"]:before,
[data-black-overlay="1"]:before,
[data-white-overlay="1"]:before {
  opacity: 0.1;
}

[data-overlay="2"]:before,
[data-black-overlay="2"]:before,
[data-white-overlay="2"]:before {
  opacity: 0.2;
}

[data-overlay="3"]:before,
[data-black-overlay="3"]:before,
[data-white-overlay="3"]:before {
  opacity: 0.3;
}

[data-overlay="4"]:before,
[data-black-overlay="4"]:before,
[data-white-overlay="4"]:before {
  opacity: 0.4;
}

[data-overlay="5"]:before,
[data-black-overlay="5"]:before,
[data-white-overlay="5"]:before {
  opacity: 0.5;
}

[data-overlay="6"]:before,
[data-black-overlay="6"]:before,
[data-white-overlay="6"]:before {
  opacity: 0.6;
}

[data-overlay="7"]:before,
[data-black-overlay="7"]:before,
[data-white-overlay="7"]:before {
  opacity: 0.7;
}

[data-overlay="8"]:before,
[data-black-overlay="8"]:before,
[data-white-overlay="8"]:before {
  opacity: 0.8;
}

[data-overlay="9"]:before,
[data-black-overlay="9"]:before,
[data-white-overlay="9"]:before {
  opacity: 0.9;
}

[data-overlay="10"]:before,
[data-black-overlay="10"]:before,
[data-white-overlay="10"]:before {
  opacity: 1;
}

/*------------------------------
    Scroll Up 
--------------------------------*/
#scrollUp {
  width: 70px;
  height: 80px;
  right: 100px;
  bottom: 60px;
  text-align: center;
  z-index: 9811 !important;
  text-decoration: none;
  background: #fff;
  line-height: 80px;
  color: #757589;
  font-size: 15px;
  font-weight: 400;
  transition: var(--transition);
  display: inline-block;
  background: #ffffff;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  #scrollUp {
    right: 20px;
    bottom: 40px;
  }
}
@media only screen and (max-width: 767px) {
  #scrollUp {
    right: 20px;
    bottom: 40px;
  }
}
#scrollUp::before {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background: rgba(0, 2, 72, 0.1);
  content: "";
  position: absolute;
  z-index: -1;
  transform-style: preserve-3d;
  transform: rotateY(-10deg);
  filter: blur(50px);
}
#scrollUp::after {
  background: #ffffff;
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform-style: preserve-3d;
  transform: rotateY(-10deg);
}
@media only screen and (max-width: 767px) {
  #scrollUp {
    right: 20px;
    bottom: 30px;
    width: 50px;
    height: 60px;
    line-height: 60px;
  }
}
#scrollUp span.text {
  position: relative;
  display: inline-block;
  margin-top: 7px;
}
@media only screen and (max-width: 767px) {
  #scrollUp span.text {
    margin-top: 3px;
  }
}
#scrollUp span.text::after {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 5px 7px 5px;
  border-color: transparent transparent var(--color-primary) transparent;
  position: absolute;
  content: "";
  left: 50%;
  top: 21%;
  transform: translateX(-50%);
}
#scrollUp:hover span.text {
  color: var(--color-primary);
}

body {
  scroll-behavior: auto;
  background: #FFFFFF;
}

/*------------------------
    Header Sticky 
--------------------------*/
.col-lg-20 {
  width: 20%;
  float: left;
}

.col-xs-20,
.col-sm-20,
.col-md-20,
.col-lg-20 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-top: 15px;
}

@media (min-width: 1200px) {
  .col-lg-20 {
    width: 20%;
    float: left;
  }
}
@media only screen and (max-width: 1199px) {
  .col-lg-20 {
    width: 33%;
    float: left;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .col-lg-20 {
    width: 50%;
    float: left;
  }
}
@media only screen and (max-width: 767px) {
  .col-lg-20 {
    width: 50%;
    float: left;
  }
}
@media only screen and (max-width: 575px) {
  .col-lg-20 {
    width: 50%;
    float: left;
  }
}
@media only screen and (max-width: 479px) {
  .col-lg-20 {
    width: 100%;
    float: left;
  }
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #5D666F !important;
  opacity: 1 !important;
  /* Firefox */
  font-size: 16px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #5D666F !important;
  font-size: 16px;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #5D666F !important;
  font-size: 16px;
}

.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.bg-1 {
  background: #e00a0a;
}

.bg-secondary {
  background: #1D2027 !important;
}

.bg-white {
  background: #FFFFFF;
}

.bg-footer-one {
  background-repeat: no-repeat;
  background-size: cover;
  background: #0E1422;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.bg-footer-one::after {
  content: "";
  position: absolute;
  height: 450px;
  width: 450px;
  right: -3%;
  background-repeat: no-repeat;
  bottom: -5%;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .bg-footer-one::after {
    right: -15%;
  }
}
@media only screen and (max-width: 1199px) {
  .bg-footer-one::after {
    right: -15%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-footer-one::after {
    left: 53%;
  }
}
.bg-footer-one::before {
  content: "";
  position: absolute;
  height: 800px;
  width: 823px;
  left: -16%;
  background-position: center;
  bottom: -13%;
  background-size: cover;
  z-index: -1;
  background-repeat: no-repeat;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .bg-footer-one::before {
    left: -25%;
  }
}
@media only screen and (max-width: 1199px) {
  .bg-footer-one::before {
    left: -25%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-footer-one::before {
    left: -48%;
  }
}
.bg-footer-one .bg-shape-f1 {
  position: relative;
  z-index: 1;
}
.bg-footer-one .bg-shape-f1::after {
  position: absolute;
  content: "";
  height: 500px;
  width: 523px;
  left: -25%;
  top: -20%;
  z-index: -1;
  background-repeat: no-repeat;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .bg-footer-one .bg-shape-f1::after {
    left: -30%;
    top: -32%;
  }
}
@media only screen and (max-width: 1199px) {
  .bg-footer-one .bg-shape-f1::after {
    left: -30%;
    top: -32%;
  }
}

.rts-title-area {
  position: relative;
  z-index: 1;
}
.rts-title-area::after {
  position: absolute;
  content: "About Us";
  left: -14%;
  top: -39%;
  color: #ffffff;
  background-color: #000;
  background-size: 100% 100%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.5px transparent;
  font-size: 120px;
  height: 100%;
  max-width: max-content;
  max-height: max-content;
  font-weight: 900;
  z-index: -1;
  display: flex;
  align-items: center;
  opacity: 0.35;
  font-family: var(--font-secondary);
}
@media only screen and (max-width: 1199px) {
  .rts-title-area::after {
    font-size: 90px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-title-area::after {
    font-size: 90px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-title-area::after {
    font-size: 70px;
  }
}
@media only screen and (max-width: 479px) {
  .rts-title-area::after {
    font-size: 50px;
  }
}
.rts-title-area p.pre-title {
  color: var(--color-primary);
  margin-bottom: 0;
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: -5px;
}
@media only screen and (max-width: 479px) {
  .rts-title-area p.pre-title {
    font-size: 14px;
  }
}
.rts-title-area .title {
  margin-bottom: 24px;
}
.rts-title-area.service::after {
  content: "Services";
  left: 50%;
  transform: translateX(-50%);
}
.rts-title-area.pricing-planes::after {
  content: "price plans";
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  height: 168px;
  top: -70%;
}
.rts-title-area.service-four::after {
  content: "Services";
  left: 50%;
  transform: translateX(-50%);
  top: -20%;
}
.rts-title-area.business::after {
  content: "Business Goal";
  min-width: max-content;
  min-height: 120px;
  left: 67%;
  transform: translateX(-50%);
  z-index: -1;
}
.rts-title-area.gallery::after {
  content: "Trades";
  left: 18%;
  transform: translateX(-50%);
  z-index: -1;
}
.rts-title-area.team::after {
  content: "Members";
  left: 49%;
  transform: translateX(-50%);
  z-index: -1;
  height: 109px;
}
.rts-title-area.feedback::after {
  content: "Testimonial";
  left: 49%;
  transform: translateX(-50%);
  z-index: -1;
  height: 109px;
}
.rts-title-area.feature::after {
  content: "Features";
  left: 32%;
  transform: translateX(-50%);
  z-index: -1;
  height: 109px;
  top: -18%;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .rts-title-area.feature::after {
    left: 55%;
    font-size: 110px;
  }
}
.rts-title-area.reviews::after {
  content: "Reviews";
  left: 32%;
  transform: translateX(-50%);
  z-index: -1;
  height: 109px;
  top: 2%;
}
.rts-title-area.contact::after {
  content: "Hello";
  left: 52%;
  transform: translateX(-50%);
  z-index: -1;
  height: 109px;
  top: -41%;
}
.rts-title-area.contact-appoinment::after {
  position: absolute;
  content: "Hello";
  left: 18%;
  top: -39%;
  color: #8b868600;
  background-color: #241e1e00;
  background-size: 100% 100%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px #585858;
  font-size: 150px;
  height: 100%;
  max-width: max-content;
  max-height: max-content;
  font-weight: 900;
  z-index: -1;
  display: flex;
  align-items: center;
  opacity: 0.35;
  font-family: var(--font-secondary);
}
@media only screen and (max-width: 575px) {
  .rts-title-area.contact-appoinment::after {
    font-size: 100px;
  }
}
.rts-title-area.contact-fluid::after {
  content: "Contact Us";
  left: 49%;
  transform: translateX(-50%);
  z-index: -1;
  height: 109px;
  top: -40%;
  min-width: max-content;
}

.about-founder-wrapper .author-inner {
  display: flex;
  align-items: center;
  position: relative;
}
.about-founder-wrapper .author-inner::after {
  position: absolute;
  content: "";
  right: 11%;
  top: 50%;
  transform: translateY(-50%);
  height: 70px;
  width: 1px;
  background: #EBEBEB;
}
@media only screen and (max-width: 1199px) {
  .about-founder-wrapper .author-inner::after {
    display: none;
  }
}
.about-founder-wrapper .author-inner .founder-details a .title {
  margin-bottom: 1px;
  transition: 0.3s;
}
.about-founder-wrapper .author-inner .founder-details a:hover .title {
  color: var(--color-title);
}
.about-founder-wrapper .author-inner .founder-details span {
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 400;
}
.about-founder-wrapper .author-inner a.thumbnail {
  display: block;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 16px;
}
.about-founder-wrapper .author-inner a.thumbnail img {
  transition: 0.3s;
}
.about-founder-wrapper .author-inner a.thumbnail:hover img {
  transform: scale(1.1);
}
.about-founder-wrapper .author-call-option {
  display: flex;
  align-items: center;
}
.about-founder-wrapper .author-call-option img {
  padding: 12px;
  background: var(--color-primary);
  border-radius: 14px;
  margin-right: 16px;
}
.about-founder-wrapper .author-call-option span {
  color: #5D666F;
  font-size: 14px;
}
.about-founder-wrapper .author-call-option .title {
  margin-bottom: 0;
  margin-top: 2px;
  transition: 0.3s;
  min-width: max-content;
}
.about-founder-wrapper .author-call-option .title:hover {
  color: var(--color-primary);
}

.pagination {
  margin: auto;
  max-width: max-content;
  margin-top: 25px;
}
.pagination button {
  max-width: max-content;
  padding: 15px;
  border: 1px solid #EBEBEB;
  border-radius: 15px;
  margin-right: 10px;
  color: #1C2539;
  font-weight: 700;
  height: 50px;
  width: 50px;
  line-height: 18px;
}
.pagination button.active {
  background: #e00a0a;
  color: #ffff;
}
.pagination button:hover {
  background: var(--color-primary);
  color: #fff;
}
.pagination button:last-child {
  margin-right: 0;
  font-size: 24px;
}
.pagination button:last-child i {
  margin-top: -3px;
}

.blog-grid-inner {
  border: 1px solid #E6E9F0;
  border-radius: 15px;
}
.blog-grid-inner .blog-header {
  position: relative;
}
.blog-grid-inner .blog-header .blog-info {
  position: absolute;
  display: flex;
  align-items: center;
  padding: 7px 30px;
  bottom: 0;
  background: #1C2539;
  width: 100%;
  left: 0;
}
@media only screen and (max-width: 767px) {
  .blog-grid-inner .blog-header .blog-info {
    padding-left: 15px;
  }
}
.blog-grid-inner .blog-header .blog-info .user {
  margin-right: 25px;
}
.blog-grid-inner .blog-header .blog-info .user i {
  color: #fff;
}
.blog-grid-inner .blog-header .blog-info .user span {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
}
.blog-grid-inner .blog-header .date {
  position: absolute;
  padding: 10px 20px;
  border-radius: 15px;
  right: 20px;
  bottom: 20px;
  background: #fff;
}
.blog-grid-inner .blog-header .date .title {
  margin-bottom: 0;
  color: #e00a0a;
  margin-bottom: -5px;
}
.blog-grid-inner .blog-header .date span {
  color: #e00a0a;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.blog-grid-inner .thumbnail {
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  width: 100%;
  display: block;
}
.blog-grid-inner .thumbnail:hover img {
  transform: scale(1.2);
}
.blog-grid-inner .thumbnail img {
  width: 100%;
  transition: 0.3s;
}
.blog-grid-inner .blog-body {
  padding: 30px;
}
@media only screen and (max-width: 767px) {
  .blog-grid-inner .blog-body {
    padding: 15px;
  }
}
.blog-grid-inner .blog-body a .title {
  margin-bottom: 0;
  transition: 0.3s;
  line-height: 32px;
}
.blog-grid-inner .blog-body a:hover .title {
  color: var(--color-primary);
}

.social-three-wrapper {
  display: flex;
  align-items: center;
  padding-left: 0;
}
.social-three-wrapper li {
  list-style: none;
  margin: 0 21px;
}
.social-three-wrapper li:first-child {
  margin-left: 16px;
}
.social-three-wrapper li a {
  position: relative;
  z-index: 1;
  transition: 0.3s;
  color: #1C2539;
}
.social-three-wrapper li a::after {
  position: absolute;
  content: "";
  background: #E8E8E8;
  height: 40px;
  width: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: -1;
  transition: 0.3s;
}
.social-three-wrapper li a:hover {
  color: #fff;
}
.social-three-wrapper li a:hover::after {
  background: var(--color-primary-3);
}

.over_link {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
  left: 0;
  top: 0;
}

.container-2 {
  max-width: 1680px;
  margin: auto;
}

.home-blue .title-area {
  position: relative;
  z-index: 1;
}
.home-blue .title-area::after {
  position: absolute;
  content: "00";
  left: 50%;
  transform: translateX(-50%);
  top: -39%;
  color: #ffffff;
  background-color: #000;
  background-size: 100% 100%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.5px transparent;
  font-size: 143px;
  height: 100%;
  max-width: max-content;
  max-height: max-content;
  font-weight: 900;
  z-index: -1;
  display: flex;
  align-items: center;
  opacity: 0.35;
  font-family: var(--font-secondary);
  z-index: -1;
}
.home-blue .title-area.blog::after {
  left: 50%;
  transform: translateX(-50%);
  top: -39%;
  content: "08";
}
.home-blue .title-area.about-company::after {
  left: 7%;
  transform: translateX(-50%);
  top: -42%;
  content: "02";
}
@media only screen and (max-width: 767px) {
  .home-blue .title-area.about-company::after {
    left: 18%;
    transform: translateX(-50%);
    top: -27%;
  }
}
.home-blue .title-area.service-h2::after {
  left: 7%;
  transform: translateX(-50%);
  top: -42%;
  content: "01";
}
.home-blue .title-area.business-case::after {
  left: 50%;
  transform: translateX(-50%);
  top: -25%;
  content: "05";
}
.home-blue .title-area.working-process::after {
  left: 51%;
  transform: translateX(-50%);
  top: -42%;
  content: "03";
}
.home-blue .title-area.service-h2::after {
  left: 3%;
  transform: translateX(-50%);
  top: -42%;
  content: "01";
}
@media only screen and (max-width: 767px) {
  .home-blue .title-area.service-h2::after {
    left: 18%;
  }
}
.home-blue .title-area.service-h2.service::after {
  left: 3%;
  transform: translateX(-50%);
  top: -42%;
  content: "04";
}
@media only screen and (max-width: 767px) {
  .home-blue .title-area.service-h2.service::after {
    left: 18%;
  }
}
.home-blue .title-area.testimonial-h2::after {
  left: 4%;
  transform: translateX(-50%);
  top: -38%;
  content: "06";
  color: #121212;
  background-color: #ffffff6b;
}
.home-blue .title-area.pricing-h2::after {
  left: 50%;
  transform: translateX(-50%);
  top: -40%;
  content: "07";
}
.home-blue .title-area span {
  font-size: 18px;
  color: #5D666F !important;
  font-weight: 500 !important;
}
.home-blue .title-area .title {
  font-size: 48px;
  color: #1C2539 !important;
  font-weight: 700;
  line-height: 58px;
}

.home-blue .single-feature-one i {
  background: var(--color-primary-2);
}

/*!
Animate.css - http://daneden.me/animate
Version - 3.4.0
Licensed under the MIT license - http://opensource.org/licenses/MIT

Copyright (c) 2015 Daniel Eden
*/
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
}

.animated.flipOutX,
.animated.flipOutY {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
}

@-webkit-keyframes bounce {
  from, 20%, 53%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
@keyframes bounce {
  from, 20%, 53%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

/*jump animation */
@keyframes jump-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  40% {
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes jump-2 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes jump-3 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes floating {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}
@keyframes slide-one {
  0% {
    -webkit-transform: translate3d(-60px, 0, 0);
    transform: translate3d(-60px, 0, 0);
  }
  25% {
    -webkit-transform: translate3d(-30px, 0, 0);
    transform: translate3d(-30px, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-30px, 0, 0);
    transform: translate3d(-30px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-60px, 0, 0);
    transform: translate3d(-60px, 0, 0);
  }
}
@keyframes slide-one1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
  25% {
    -webkit-transform: translate3d(-30px, 0, 0);
    transform: translate3d(-30px, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(-60px, 0, 0);
    transform: translate3d(-60px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-30px, 0, 0);
    transform: translate3d(-30px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slide-two {
  0% {
    -webkit-transform: translate3d(60px, 0, 0);
    transform: translate3d(60px, 0, 0);
  }
  25% {
    -webkit-transform: translate3d(30px, 0, 0);
    transform: translate3d(30px, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(30px, 0, 0);
    transform: translate3d(30px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(60px, 0, 0);
    transform: translate3d(60px, 0, 0);
  }
}
@keyframes slide-two1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  25% {
    -webkit-transform: translate3d(30px, 0, 0);
    transform: translate3d(30px, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(60px, 0, 0);
    transform: translate3d(60px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(30px, 0, 0);
    transform: translate3d(30px, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes flash {
  from, 50%, to {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}
@keyframes flash {
  from, 50%, to {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}
.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@-webkit-keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
@keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }
  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }
  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  10%, 20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  10%, 20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes wobble {
  from {
    -webkit-transform: none;
    transform: none;
  }
  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes wobble {
  from {
    -webkit-transform: none;
    transform: none;
  }
  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes jello {
  from, 11.1%, to {
    -webkit-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
@keyframes jello {
  from, 11.1%, to {
    -webkit-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
.jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

@-webkit-keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%, 55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.bounceOut {
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}

@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  40%, 45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes fadeOutDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
@keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
.flipOutX {
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
.flipOutY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

@-webkit-keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }
  to {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }
  to {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  from {
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
@keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
@keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  20%, 60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  40%, 80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
.hinge {
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
@keyframes rollOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}

@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}

@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}

@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
}

@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}
.zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
}

@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}
.zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
}

@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
}

@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}

@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}

@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}

@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}

@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

@keyframes jump-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  40% {
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes jump-2 {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes rotateIt {
  to {
    transform: rotate(-360deg);
  }
}
@keyframes rotateIt2 {
  to {
    transform: rotate(360deg);
  }
}
@keyframes animate-floting {
  0% {
    transform: translateX(50%);
  }
  50% {
    transform: translateX(-40%);
  }
  100% {
    transform: translateX(40%);
  }
}
@keyframes animate-floting-2 {
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(40%);
  }
  100% {
    transform: translateX(-40%);
  }
}
.floting-line {
  animation: animate-floting 15s linear infinite;
}
.floting-line:hover {
  animation-play-state: paused;
}

.floting-line-2 {
  animation: animate-floting-2 15s linear infinite;
}
.floting-line-2:hover {
  animation-play-state: paused;
}

@keyframes waves {
  0% {
    -webkit-transform: scale(0.2, 0.2);
    transform: scale(0.2, 0.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
  50% {
    opacity: 0.9;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
  }
  100% {
    -webkit-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
}
@keyframes customOne {
  0% {
    -webkit-transform: translateY(-50%) scale(0);
    transform: translateY(-50%) scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-50%) scale(1.3);
    transform: translateY(-50%) scale(1.3);
    opacity: 0;
  }
}
@keyframes liveAuction {
  0% {
    background: var(--color-white);
  }
  100% {
    background: var(--color-danger);
  }
}
.cd-intro {
  margin: 4em auto;
}

@media only screen and (min-width: 768px) {
  .cd-intro {
    margin: 5em auto;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-intro {
    margin: 6em auto;
  }
}
.cd-headline {
  font-size: 3rem;
  line-height: 1.2;
}

@media only screen and (min-width: 768px) {
  .cd-headline {
    font-size: 4.4rem;
    font-weight: 300;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-headline {
    font-size: 48px;
  }
}
@media only screen and (max-width: 768px) {
  .cd-headline {
    font-size: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .cd-headline {
    font-size: 26px;
  }
}
.cd-words-wrapper {
  display: inline-block;
  position: relative;
  text-align: left;
}

.cd-words-wrapper b {
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  left: 0;
  top: 0;
}

.cd-words-wrapper b.is-visible {
  position: relative;
}

.no-js .cd-words-wrapper b {
  opacity: 0;
}

.no-js .cd-words-wrapper b.is-visible {
  opacity: 1;
}

/* -------------------------------- 

xclip 

-------------------------------- */
.cd-headline.clip span {
  display: inline-block;
  padding: 0;
}

.cd-headline.clip .cd-words-wrapper {
  overflow: hidden;
  vertical-align: middle;
  position: relative;
  margin-top: -20px;
}
.cd-headline.clip .cd-words-wrapper b {
  font-weight: 700;
}

.cd-headline.clip .cd-words-wrapper::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 4px;
  height: 100%;
  background-color: var(--color-primary-3);
  transform: translateY(-50%);
}

.cd-headline.clip b {
  opacity: 0;
}

.cd-headline.clip b.is-visible {
  opacity: 1;
}

/**
 * Settings
 */
/**
  * Easings
  */
/**
  * Core
  */
[data-sal] {
  transition-duration: 0.2s;
  transition-delay: 0s;
  transition-duration: var(--sal-duration, 0.2s);
  transition-delay: var(--sal-delay, 0s);
  transition-timing-function: var(--sal-easing, ease);
}

[data-sal][data-sal-duration="200"] {
  transition-duration: 0.2s;
}

[data-sal][data-sal-duration="250"] {
  transition-duration: 0.25s;
}

[data-sal][data-sal-duration="300"] {
  transition-duration: 0.3s;
}

[data-sal][data-sal-duration="350"] {
  transition-duration: 0.35s;
}

[data-sal][data-sal-duration="400"] {
  transition-duration: 0.4s;
}

[data-sal][data-sal-duration="450"] {
  transition-duration: 0.45s;
}

[data-sal][data-sal-duration="500"] {
  transition-duration: 0.5s;
}

[data-sal][data-sal-duration="550"] {
  transition-duration: 0.55s;
}

[data-sal][data-sal-duration="600"] {
  transition-duration: 0.6s;
}

[data-sal][data-sal-duration="650"] {
  transition-duration: 0.65s;
}

[data-sal][data-sal-duration="700"] {
  transition-duration: 0.7s;
}

[data-sal][data-sal-duration="750"] {
  transition-duration: 0.75s;
}

[data-sal][data-sal-duration="800"] {
  transition-duration: 0.8s;
}

[data-sal][data-sal-duration="850"] {
  transition-duration: 0.85s;
}

[data-sal][data-sal-duration="900"] {
  transition-duration: 0.9s;
}

[data-sal][data-sal-duration="950"] {
  transition-duration: 0.95s;
}

[data-sal][data-sal-duration="1000"] {
  transition-duration: 1s;
}

[data-sal][data-sal-duration="1050"] {
  transition-duration: 1.05s;
}

[data-sal][data-sal-duration="1100"] {
  transition-duration: 1.1s;
}

[data-sal][data-sal-duration="1150"] {
  transition-duration: 1.15s;
}

[data-sal][data-sal-duration="1200"] {
  transition-duration: 1.2s;
}

[data-sal][data-sal-duration="1250"] {
  transition-duration: 1.25s;
}

[data-sal][data-sal-duration="1300"] {
  transition-duration: 1.3s;
}

[data-sal][data-sal-duration="1350"] {
  transition-duration: 1.35s;
}

[data-sal][data-sal-duration="1400"] {
  transition-duration: 1.4s;
}

[data-sal][data-sal-duration="1450"] {
  transition-duration: 1.45s;
}

[data-sal][data-sal-duration="1500"] {
  transition-duration: 1.5s;
}

[data-sal][data-sal-duration="1550"] {
  transition-duration: 1.55s;
}

[data-sal][data-sal-duration="1600"] {
  transition-duration: 1.6s;
}

[data-sal][data-sal-duration="1650"] {
  transition-duration: 1.65s;
}

[data-sal][data-sal-duration="1700"] {
  transition-duration: 1.7s;
}

[data-sal][data-sal-duration="1750"] {
  transition-duration: 1.75s;
}

[data-sal][data-sal-duration="1800"] {
  transition-duration: 1.8s;
}

[data-sal][data-sal-duration="1850"] {
  transition-duration: 1.85s;
}

[data-sal][data-sal-duration="1900"] {
  transition-duration: 1.9s;
}

[data-sal][data-sal-duration="1950"] {
  transition-duration: 1.95s;
}

[data-sal][data-sal-duration="2000"] {
  transition-duration: 2s;
}

[data-sal][data-sal-delay="50"] {
  transition-delay: 0.05s;
}

[data-sal][data-sal-delay="100"] {
  transition-delay: 0.1s;
}

[data-sal][data-sal-delay="150"] {
  transition-delay: 0.15s;
}

[data-sal][data-sal-delay="200"] {
  transition-delay: 0.2s;
}

[data-sal][data-sal-delay="250"] {
  transition-delay: 0.25s;
}

[data-sal][data-sal-delay="300"] {
  transition-delay: 0.3s;
}

[data-sal][data-sal-delay="350"] {
  transition-delay: 0.35s;
}

[data-sal][data-sal-delay="400"] {
  transition-delay: 0.4s;
}

[data-sal][data-sal-delay="450"] {
  transition-delay: 0.45s;
}

[data-sal][data-sal-delay="500"] {
  transition-delay: 0.5s;
}

[data-sal][data-sal-delay="550"] {
  transition-delay: 0.55s;
}

[data-sal][data-sal-delay="600"] {
  transition-delay: 0.6s;
}

[data-sal][data-sal-delay="650"] {
  transition-delay: 0.65s;
}

[data-sal][data-sal-delay="700"] {
  transition-delay: 0.7s;
}

[data-sal][data-sal-delay="750"] {
  transition-delay: 0.75s;
}

[data-sal][data-sal-delay="800"] {
  transition-delay: 0.8s;
}

[data-sal][data-sal-delay="850"] {
  transition-delay: 0.85s;
}

[data-sal][data-sal-delay="900"] {
  transition-delay: 0.9s;
}

[data-sal][data-sal-delay="950"] {
  transition-delay: 0.95s;
}

[data-sal][data-sal-delay="1000"] {
  transition-delay: 1s;
}

[data-sal][data-sal-easing=linear] {
  transition-timing-function: linear;
}

[data-sal][data-sal-easing=ease] {
  transition-timing-function: ease;
}

[data-sal][data-sal-easing=ease-in] {
  transition-timing-function: ease-in;
}

[data-sal][data-sal-easing=ease-out] {
  transition-timing-function: ease-out;
}

[data-sal][data-sal-easing=ease-in-out] {
  transition-timing-function: ease-in-out;
}

[data-sal][data-sal-easing=ease-in-cubic] {
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

[data-sal][data-sal-easing=ease-out-cubic] {
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

[data-sal][data-sal-easing=ease-in-out-cubic] {
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

[data-sal][data-sal-easing=ease-in-circ] {
  transition-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
}

[data-sal][data-sal-easing=ease-out-circ] {
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

[data-sal][data-sal-easing=ease-in-out-circ] {
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

[data-sal][data-sal-easing=ease-in-expo] {
  transition-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

[data-sal][data-sal-easing=ease-out-expo] {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

[data-sal][data-sal-easing=ease-in-out-expo] {
  transition-timing-function: cubic-bezier(1, 0, 0, 1);
}

[data-sal][data-sal-easing=ease-in-quad] {
  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

[data-sal][data-sal-easing=ease-out-quad] {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

[data-sal][data-sal-easing=ease-in-out-quad] {
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

[data-sal][data-sal-easing=ease-in-quart] {
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

[data-sal][data-sal-easing=ease-out-quart] {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

[data-sal][data-sal-easing=ease-in-out-quart] {
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}

[data-sal][data-sal-easing=ease-in-quint] {
  transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
}

[data-sal][data-sal-easing=ease-out-quint] {
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}

[data-sal][data-sal-easing=ease-in-out-quint] {
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

[data-sal][data-sal-easing=ease-in-sine] {
  transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
}

[data-sal][data-sal-easing=ease-out-sine] {
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

[data-sal][data-sal-easing=ease-in-out-sine] {
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

[data-sal][data-sal-easing=ease-in-back] {
  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

[data-sal][data-sal-easing=ease-out-back] {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

[data-sal][data-sal-easing=ease-in-out-back] {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/**
  * Animations
  */
[data-sal|=fade] {
  opacity: 0;
  transition-property: opacity;
}

[data-sal|=fade].sal-animate,
body.sal-disabled [data-sal|=fade] {
  opacity: 1;
}

[data-sal|=slide] {
  opacity: 0;
  transition-property: opacity, transform;
}

[data-sal=slide-up] {
  transform: translateY(20%);
}

[data-sal=slide-down] {
  transform: translateY(-20%);
}

[data-sal=slide-left] {
  transform: translateX(20%);
}

[data-sal=slide-right] {
  transform: translateX(-20%);
}

[data-sal|=slide].sal-animate,
body.sal-disabled [data-sal|=slide] {
  opacity: 1;
  transform: none;
}

[data-sal|=zoom] {
  opacity: 0;
  transition-property: opacity, transform;
}

[data-sal=zoom-in] {
  transform: scale(0.5);
}

[data-sal=zoom-out] {
  transform: scale(1.1);
}

[data-sal|=zoom].sal-animate,
body.sal-disabled [data-sal|=zoom] {
  opacity: 1;
  transform: none;
}

[data-sal|=flip] {
  backface-visibility: hidden;
  transition-property: transform;
}

[data-sal=flip-left] {
  transform: perspective(2000px) rotateY(-91deg);
}

[data-sal=flip-right] {
  transform: perspective(2000px) rotateY(91deg);
}

[data-sal=flip-up] {
  transform: perspective(2000px) rotateX(-91deg);
}

[data-sal=flip-down] {
  transform: perspective(2000px) rotateX(91deg);
}

[data-sal|=flip].sal-animate,
body.sal-disabled [data-sal|=flip] {
  transform: none;
}

/* Header style hear  */
.header-top-one .left {
  display: flex;
  align-items: center;
}
.header-top-one .left .mail {
  position: relative;
}
.header-top-one .left .mail a {
  padding: 11px 0;
  display: block;
  color: #fff;
  margin-right: 50px;
  font-size: 14px;
  position: relative;
  transition: var(--transition);
}
.header-top-one .left .mail a i {
  margin-right: 6px;
}
.header-top-one .left .mail a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 12px;
  height: 1px;
  width: 0%;
  background: #fff;
  transition: var(--transition);
}
.header-top-one .left .mail a:hover {
  color: var(--color-white);
}
.header-top-one .left .mail a:hover::after {
  width: 100%;
}
.header-top-one .left .mail::after {
  position: absolute;
  content: "";
  width: 1px;
  height: 14px;
  background: #F36464;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
}
.header-top-one .left .working-time p {
  color: #fff;
  font-size: 14px;
}
.header-top-one .left .working-time p i {
  margin-right: 6px;
}
.header-top-one .right {
  display: flex;
  justify-content: flex-end;
}
.header-top-one .right .top-nav {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.header-top-one .right .top-nav li {
  margin: 0;
  margin-right: 20px;
}
.header-top-one .right .top-nav li a {
  font-size: 14px;
  transition: var(--transition);
  position: relative;
  padding: 11px 0;
  display: block;
  color: #fff;
}
.header-top-one .right .top-nav li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 12px;
  height: 1px;
  width: 0%;
  background: #fff;
  transition: var(--transition);
}
.header-top-one .right .top-nav li a:hover::after {
  width: 100%;
}
.header-top-one .right .social-wrapper-one {
  margin-left: 30px;
  position: relative;
}
.header-top-one .right .social-wrapper-one a i {
  transition: 0.3s;
}
.header-top-one .right .social-wrapper-one a:hover i {
  transform: scale(1.2);
}
.header-top-one .right .social-wrapper-one i {
  color: #fff;
}
.header-top-one .right .social-wrapper-one::after {
  position: absolute;
  content: "";
  width: 1px;
  height: 14px;
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
  background: #F36464;
}
.header-top-one.header-top-four {
  border-bottom: 1px solid #EDEDED;
}
@media (max-width: 1200px) {
  .header-top-one.header-top-four {
    display: none;
  }
}
.header-top-one.header-top-four.header-top-five .top-left a {
  color: var(--color-primary-2);
}
.header-top-one.header-top-four.header-top-five .right-h-three .header-top-right .email i {
  color: var(--color-primary-2);
}
.header-top-one.header-top-four.header-top-five .right-h-three .header-top-right .call i {
  color: var(--color-primary-2);
}
.header-top-one.header-top-four .top-left {
  padding: 10px 0;
  padding-left: 0;
  font-size: 16px;
  font-weight: 400;
  color: #5D666F;
  display: flex;
  align-items: center;
}
.header-top-one.header-top-four .top-left a {
  color: var(--color-primary-4);
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.header-top-one.header-top-four .top-left a i {
  transition: 0.3s;
  margin-left: 5px;
}
.header-top-one.header-top-four .top-left a:hover i {
  margin-left: 10px;
}
.header-top-one.header-top-four .right-h-three {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header-top-one.header-top-four .right-h-three .header-top-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 0;
}
.header-top-one.header-top-four .right-h-three .header-top-right .email {
  margin-right: 30px;
}
.header-top-one.header-top-four .right-h-three .header-top-right .email i {
  margin-right: 10px;
  color: var(--color-primary-4);
}
.header-top-one.header-top-four .right-h-three .header-top-right .email a {
  color: #1C2539;
  transition: 0.3s;
  font-weight: 500;
}
.header-top-one.header-top-four .right-h-three .header-top-right .email a:hover {
  color: var(--color-primary-4);
}
.header-top-one.header-top-four .right-h-three .header-top-right .call {
  margin-right: 0;
}
.header-top-one.header-top-four .right-h-three .header-top-right .call i {
  margin-right: 10px;
  color: var(--color-primary-4);
  transform: rotate(-30deg);
}
.header-top-one.header-top-four .right-h-three .header-top-right .call a {
  color: #1C2539;
  transition: 0.3s;
  font-weight: 500;
}
.header-top-one.header-top-four .right-h-three .header-top-right .call a:hover {
  color: var(--color-primary-4);
}

.header-main-one .thumbnail a {
  padding: 36px 0;
  display: block;
  max-width: max-content;
}
@media only screen and (max-width: 479px) {
  .header-main-one .thumbnail a {
    padding: 18px 0;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .header-two .main-header .nav-main ul li {
    margin-right: 25px !important;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .header-two .main-header .nav-main ul li.has-droupdown {
    margin-right: 37px !important;
  }
}

.main-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.main-header .nav-main ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}
.main-header .nav-main ul li {
  margin: 0;
  margin-right: 36px;
}
.main-header .nav-main ul li a {
  padding: 48px 0;
  display: block;
  color: #1C2539;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  transition: var(--transition);
  min-width: max-content;
}
.main-header .nav-main ul li a::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 50px;
  height: 2px;
  width: 0%;
  border-radius: 1px;
  background: var(--color-primary);
  transition: var(--transition);
}
.main-header .nav-main ul li a:hover {
  color: var(--color-primary);
}
.main-header .nav-main ul li a:hover::after {
  width: 100%;
}
.main-header .button-area {
  display: flex;
  align-items: center;
  margin-left: 80px;
}
@media screen and (max-width: 1399px) {
  .main-header .button-area {
    margin-left: 16px;
  }
}
@media screen and (max-width: 1199px) {
  .main-header .button-area {
    margin-left: 16px;
    margin: 33px 0;
  }
}
@media only screen and (max-width: 479px) {
  .main-header .button-area {
    margin: 10px 0;
  }
}
.main-header .button-area button.menu .menu-dark {
  display: block;
  transition: 0.3s;
}
.main-header .button-area button.menu .menu-light {
  display: none;
  transition: 0.3s;
}
.main-header .button-area button.menu:hover .menu-dark {
  display: none;
}
.main-header .button-area button.menu:hover .menu-light {
  display: block;
}
.main-header.main-header-four .nav-main ul li a:hover {
  color: var(--color-primary-4);
}
.main-header.main-header-four .nav-main ul li a::after {
  background: var(--color-primary-4);
}
.main-header.main-header-four .nav-main ul li .submenu {
  border-color: var(--color-primary-4);
  border-width: 4px 0 0 0;
}
.main-header.main-header-four .nav-main ul li .submenu::after {
  border-bottom-color: var(--color-primary-4);
}
.main-header.main-header-four.main-header-five .nav-main ul li a:hover {
  color: var(--color-primary-2);
}
.main-header.main-header-four.main-header-five .nav-main ul li a::after {
  background: var(--color-primary-2);
}
.main-header.main-header-four.main-header-five .nav-main ul li .submenu {
  border-color: var(--color-primary-2);
  border-width: 4px 0 0 0;
}
.main-header.main-header-four.main-header-five .nav-main ul li .submenu::after {
  border-bottom-color: var(--color-primary-2);
}
.main-header.main-header-four.main-header-five .button-area .btn-primary-4 {
  background: var(--color-primary-2);
  border-radius: 30px;
}
.main-header.main-header-four.main-header-five .button-area .btn-primary-4:hover {
  background: var(--color-gray);
}
.main-header.main-header-four.main-header-five .button-area .btn-primary-alta-four {
  border-radius: 30px;
}
.main-header.main-header-four.main-header-five .button-area .btn-primary-alta-four:hover {
  background: var(--color-primary-2) !important;
}

.social-wrapper-one {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
}
.social-wrapper-one li {
  margin: 0;
}
.social-wrapper-one li a {
  color: #fff;
  margin-right: 20px;
  padding: 11px 0;
}
.social-wrapper-one li a i {
  color: #fff;
  transition: 0.3s;
  font-size: 14px;
}
.social-wrapper-one li a:hover i {
  color: var(--color-primary);
}

.header-three.header--sticky.sticky {
  backdrop-filter: none;
  box-shadow: none;
}

.header--sticky {
  transition: 0.3s;
  top: 0;
  z-index: 999;
  position: relative;
}

.header--sticky.sticky {
  position: fixed !important;
  top: 0;
  display: block;
  backdrop-filter: blur(9px);
  width: 100%;
  box-shadow: 0px 7px 18px #1810100d;
}

.header-three {
  position: absolute;
  width: 100%;
}
.header-three .main-header .nav-main ul li a {
  padding: 42px 0;
}
.header-three .main-header .nav-main ul li a::after {
  bottom: 46px;
}
.header-three .header-top-three {
  background: white;
  border-bottom: 1px solid #EDEDED;
}
@media only screen and (max-width: 1199px) {
  .header-three .header-top-three {
    display: none;
  }
}
.header-three .header-top-three .top-left {
  padding: 10px 0;
  padding-left: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #5D666F;
  display: flex;
  align-items: center;
}
.header-three .header-top-three .top-left a {
  color: var(--color-primary-3);
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.header-three .header-top-three .top-left a i {
  transition: 0.3s;
  margin-left: 5px;
}
.header-three .header-top-three .top-left a:hover i {
  margin-left: 10px;
}
.header-three .header-top-three .right-h-three {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header-three .header-top-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
}
.header-three .header-top-right .email {
  margin-right: 30px;
}
.header-three .header-top-right .email i {
  margin-right: 10px;
  color: #F64A00;
}
.header-three .header-top-right .email a {
  color: #1C2539;
  transition: 0.3s;
  font-weight: 500;
}
.header-three .header-top-right .email a:hover {
  color: var(--color-primary-3);
}
.header-three .header-top-right .call {
  margin-right: 30px;
}
.header-three .header-top-right .call i {
  margin-right: 10px;
  color: #F64A00;
  transform: rotate(-30deg);
}
.header-three .header-top-right .call a {
  color: #1C2539;
  transition: 0.3s;
  font-weight: 500;
}
.header-three .header-top-right .call a:hover {
  color: var(--color-primary-3);
}
.header-three .main-header-three {
  background: #fff;
}
.header-three .main-header-three.main-header {
  justify-content: flex-start;
  position: relative;
}
.header-three .main-header-three.main-header::after {
  content: "";
  position: absolute;
  left: -14px;
  top: -48%;
  height: 148%;
  background: var(--color-primary-3);
  width: 15px;
  border-radius: 0 0 0 15px;
}
.header-three .main-header-three.main-header::before {
  content: "";
  position: absolute;
  right: -14px;
  top: -48%;
  height: 148%;
  background: var(--color-primary-3);
  width: 15px;
  border-radius: 0 0 15px 0;
}
.header-three .main-header-three.main-header .nav-main ul li a:hover {
  color: var(--color-primary-3);
}
.header-three .main-header-three.main-header .nav-main ul li a::after {
  background: var(--color-primary-3);
}
.header-three .main-header-three.main-header .mainmenu li.has-droupdown .submenu {
  border-top-color: var(--color-primary-3);
}
.header-three .main-header-three.main-header-four::after {
  display: none;
}
.header-three .main-header-three.main-header-four::before {
  display: none;
}
.header-three .main-header-three a.thumbnail-logo img {
  padding: 30px 48px;
}
@media only screen and (max-width: 479px) {
  .header-three .main-header-three a.thumbnail-logo img {
    padding: 30px 15px;
  }
}
.header-three .main-header-three .right {
  display: flex;
  align-items: center;
  margin-right: 55px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .header-three .main-header-three .right {
    margin-right: 30px;
  }
}
@media only screen and (max-width: 1199px) {
  .header-three .main-header-three .right {
    margin-right: 15px;
  }
}
@media only screen and (max-width: 479px) {
  .header-three .main-header-three .right {
    margin-right: 5px;
  }
}
@media only screen and (max-width: 479px) {
  .header-three .main-header-three .right .rts-btn {
    padding: 11px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 479px) {
  .header-three .main-header-three .right #menu-btn {
    margin-left: 5px !important;
  }
}

.header-two .header-top {
  background: #fff;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-bottom: 1px solid #EAECF2;
}
@media only screen and (max-width: 1199px) {
  .header-two .header-top {
    display: none;
  }
}
.header-two .header-top::after {
  position: absolute;
  left: -5%;
  content: "";
  top: 0;
  width: 40%;
  height: 100%;
  background: var(--color-primary-2);
  z-index: -1;
  transform: skew(-20deg);
}
.header-two .header-top .content {
  max-width: 1560px;
  margin: 0 auto;
  display: flex;
  height: 45px;
  display: flex;
  align-items: center;
  width: 98%;
}
.header-two .header-top .content .left-header-top p {
  font-size: 16px;
  color: #fff;
}
.header-two .header-top .content .left-header-top p a {
  font-weight: 500;
}
.header-two .header-top .content .left-header-top p a i {
  transition: 0.3s;
}
.header-two .header-top .content .left-header-top p a:hover {
  color: #000;
}
.header-two .header-top .content .left-header-top p a:hover i {
  margin-left: 6px;
}
.header-two .header-top .content .right-header-top {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.header-two .header-top .content .right-header-top .working-time i {
  color: #1C2539;
}
.header-two .header-top .content .right-header-top .working-time span {
  color: #1C2539;
  font-size: 16px;
  font-weight: 400;
  margin-left: 7px;
}
.header-two .header-top .content .right-header-top .ht-social {
  display: flex;
  align-items: center;
  margin-left: 60px;
  position: relative;
}
.header-two .header-top .content .right-header-top .ht-social::after {
  position: absolute;
  left: -17%;
  content: "";
  height: 100%;
  width: 1px;
  background: #CFD2DC;
  transform: skew(-10deg);
}
.header-two .header-top .content .right-header-top .ht-social span {
  color: #1C2539;
  font-weight: 400;
}
.header-two .header-top .content .right-header-top .ht-social ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  margin-left: 20px;
}
.header-two .header-top .content .right-header-top .ht-social ul li {
  margin-right: 20px;
}
.header-two .header-top .content .right-header-top .ht-social ul li a i {
  color: #1C2539;
  transition: 0.3s;
}
.header-two .header-top .content .right-header-top .ht-social ul li a:hover i {
  color: var(--color-primary-2);
}
.header-two .header-top .content .right-header-top .ht-social ul li:last-child {
  margin-right: 0;
}
.header-two .main-header {
  justify-content: flex-start;
  display: block;
  background: #fff;
}
.header-two .main-header .content {
  max-width: 1560px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 98%;
}
@media only screen and (max-width: 1199px) {
  .header-two .main-header .content {
    max-width: 97%;
    margin: auto;
  }
}
@media only screen and (max-width: 479px) {
  .header-two .main-header .content {
    max-width: 99%;
  }
}
.header-two .main-header .content .header-left {
  display: flex;
  align-items: center;
}
.header-two .main-header .content .header-left a.thumbnail {
  margin-right: 20px;
}
@media only screen and (max-width: 767px) {
  .header-two .main-header .content .header-left a.thumbnail {
    margin-right: 0;
  }
}
.header-two .main-header .content .header-left a.thumbnail img {
  width: 100%;
}
@media only screen and (max-width: 479px) {
  .header-two .main-header .content .header-left a.thumbnail img {
    width: 73%;
  }
}
@media only screen and (max-width: 1199px) {
  .header-two .main-header .content .header-left a {
    padding: 20px 0;
  }
}
@media only screen and (max-width: 767px) {
  .header-two .main-header .content .header-left a {
    padding: 20px 0 20px 15px;
    width: 80%;
    margin-right: 0;
  }
}
@media only screen and (max-width: 479px) {
  .header-two .main-header .content .header-left a {
    width: 90%;
  }
}
.header-two .main-header .content .header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.header-two .main-header .content .header-right .call-area {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .header-two .main-header .content .header-right .call-area {
    display: none;
  }
}
.header-two .main-header .content .header-right .call-area .icon {
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.header-two .main-header .content .header-right .call-area .icon::after {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  background: #F6F6F6;
  height: 55px;
  width: 55px;
  z-index: -1;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}
.header-two .main-header .content .header-right .call-area .icon:hover::after {
  background: #fff;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
}
.header-two .main-header .content .header-right .call-area .number-area {
  margin-left: 30px;
}
.header-two .main-header .content .header-right .call-area .number-area span {
  color: #5D666F;
  font-size: 14px;
}
.header-two .main-header .content .header-right .call-area .number-area a .call {
  margin-bottom: 0;
  margin-top: 4px;
  min-width: max-content;
}
.header-two .main-header .content .header-right a.rts-btn {
  margin-left: 40px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .header-two .main-header .content .header-right a.rts-btn {
    margin-left: 20px;
  }
}
@media only screen and (max-width: 575px) {
  .header-two .main-header .content .header-right a.rts-btn {
    margin-left: 0;
    padding: 12px 15px;
    font-size: 14px;
  }
}
.header-two .main-header .content .header-right button {
  max-width: fit-content;
  background: #F7F7F7;
  padding: 19px;
}
.header-two .main-header .content .header-right button .menu-dark {
  display: block;
}
.header-two .main-header .content .header-right button .menu-light {
  display: none;
}
.header-two .main-header .content .header-right button:hover {
  background: var(--color-primary-2);
}
.header-two .main-header .content .header-right button:hover .menu-dark {
  display: none;
}
.header-two .main-header .content .header-right button:hover .menu-light {
  display: block;
}
.header-two .main-header nav {
  margin-left: 135px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .header-two .main-header nav {
    margin-left: 10px;
  }
}

.home-blue .main-header .nav-main ul li a:hover {
  color: var(--color-primary-2);
}
.home-blue .main-header .nav-main ul li a::after {
  background: var(--color-primary-2);
}
.home-blue .mainmenu li.has-droupdown .submenu {
  border-top-color: var(--color-primary-2);
}
.home-blue .mainmenu li.has-droupdown .submenu::after {
  top: -20px;
  left: 16%;
  transform: translateX(-50%);
  position: absolute;
  content: "";
  border: 8px solid transparent;
  border-bottom-color: var(--color-primary-2);
}

.header-one.header--sticky.sticky .header-top {
  display: none;
}

.header-three.sticky .header-top-three {
  display: none;
}

.home-blue .header-two.header--sticky.sticky .header-top {
  display: none;
}

.search-input-area.show {
  visibility: visible;
  transform: inherit;
  opacity: 1;
}

.search-input-area {
  transition: all 500ms ease;
  visibility: hidden;
  transform: translateY(-100%);
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 70px 0;
  background: white;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.46);
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 479px) {
  .search-input-area {
    padding: 20px 0;
  }
}
.search-input-area .search-input-inner {
  display: flex;
  align-items: center;
  position: relative;
}
.search-input-area .search-input-inner .input-div {
  width: 80%;
  display: flex;
  align-items: center;
  margin: auto;
}
.search-input-area .search-input-inner .input-div input {
  background: #F7F7F7;
  border-radius: 5px;
  height: 55px;
}
.search-input-area .search-input-inner .input-div button {
  max-width: max-content;
  padding: 17.5px;
  background: var(--color-primary);
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  display: block;
  margin-left: -9px;
  border-radius: 0 5px 5px 0;
}
.search-input-area .search-input-inner .search-close-icon {
  cursor: pointer;
  position: absolute;
  right: -21%;
  top: -42px;
}
.search-input-area .search-input-inner .search-close-icon i {
  position: relative;
  z-index: 1;
  color: var(--color-primary);
  transition: 0.3s;
}
.search-input-area .search-input-inner .search-close-icon i::after {
  position: absolute;
  height: 45px;
  width: 45px;
  content: "";
  border-radius: 5px;
  background: #F7F7F7;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: 0.3s;
}
.search-input-area .search-input-inner .search-close-icon:hover i {
  color: #fff;
}
.search-input-area .search-input-inner .search-close-icon:hover i::after {
  background: var(--color-primary);
}

#anywhere-home {
  background: #0e1013;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 500ms ease-in-out;
  pointer-events: none;
  z-index: 50;
}
#anywhere-home.bgshow {
  background: #0e1013;
  opacity: 70%;
  visibility: visible;
  pointer-events: visible;
  z-index: 60;
}

li.has-droupdown {
  margin-right: 48px !important;
}

@media only screen and (max-width: 575px) {
  .menu-block-none {
    display: none;
  }
}

.header-top-one.header-top-four.header-top-five.header-top-six .top-left a {
  color: var(--color-primary-5);
}

.header-top-one.header-top-four.header-top-five.header-top-six .right-h-three .header-top-right .email i {
  color: var(--color-primary-5);
}

.header-top-one.header-top-four.header-top-five.header-top-six .right-h-three .header-top-right .email a:hover {
  color: var(--color-primary-5);
}

.header-top-one.header-top-four.header-top-five.header-top-six .right-h-three .header-top-right .call i {
  color: var(--color-primary-5);
}

.header-top-one.header-top-four.header-top-five.header-top-six .right-h-three .header-top-right .call a:hover {
  color: var(--color-primary-5);
}

.main-header.main-header-four.main-header-five.main-header-six .button-area .btn-primary-4 {
  background: var(--color-primary-5);
}
.main-header.main-header-four.main-header-five.main-header-six .button-area .btn-primary-4:hover {
  background: var(--color-gray);
  color: #000;
}

.main-header-six #menu-btn:hover {
  background: var(--color-primary-5) !important;
}

.index-six .swiper.mygallery .swiper-button-next:hover::after {
  background: var(--color-primary-5);
}
.index-six .swiper.mygallery .swiper-button-prev:hover::after {
  background: var(--color-primary-5);
}
.index-six .title-area-client::before {
  background: var(--color-primary-5);
}
.index-six .title-area-client::after {
  background: var(--color-primary-5);
}
.index-six .header-four.header-five .nav-main ul li:hover a.nav-link {
  color: var(--color-primary-5);
}
.index-six .header-four.header-five .nav-main ul li:hover a.nav-link::before {
  color: var(--color-primary-5);
}
.index-six .main-header.main-header-four.main-header-five .nav-main ul li a:hover {
  color: var(--color-primary-5);
}
.index-six .main-header.main-header-four.main-header-five .nav-main ul li a::after {
  background: var(--color-primary-5);
}
.index-six .main-header.main-header-four.main-header-five .nav-main ul li .submenu {
  border-color: var(--color-primary-5);
}

.mainmenu li {
  position: relative;
}
.mainmenu li.has-droupdown > a {
  position: relative;
}
.mainmenu li.has-droupdown > a::before {
  position: absolute !important;
  top: 51%;
  font-family: "Font Awesome 5 Pro" !important;
  right: -18px;
  transform: translateY(-50%);
  transition: 0.3s;
}
.mainmenu li.has-droupdown > a:hover {
  color: var(--color-primary);
}
.mainmenu li.has-droupdown .submenu {
  min-width: 270px;
  height: auto;
  position: absolute;
  top: 90%;
  left: 0;
  z-index: 90;
  opacity: 0;
  visibility: hidden;
  text-align: left;
  transition: 0.3s;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  border-left: 1px solid #ffffff14;
  border-bottom: 1px solid #ffffff14;
  border-right: 1px solid #ffffff14;
  border-top: 4px solid var(--color-primary);
  display: inline-block;
  box-shadow: 0 36px 35px rgba(0, 0, 0, 0.08);
}
.mainmenu li.has-droupdown .submenu::after {
  top: -20px;
  left: 16%;
  transform: translateX(-50%);
  position: absolute;
  content: "";
  border: 8px solid transparent;
  border-bottom-color: var(--color-primary);
}
.mainmenu li.has-droupdown .submenu.menu-link {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 800px;
  left: -320px;
}
.mainmenu li.has-droupdown .submenu.menu-link::after {
  left: 44%;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item {
  width: 33.333%;
  margin-right: 20px;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item:not(:first-child) {
  border-left: 1px solid #C4C4C426;
  border-bottom: 0;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item:not(:last-child) {
  border-bottom: 0;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item .tag {
  padding: 20px 15px 0 15px;
  cursor: auto;
  font-size: 20px;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item .tag:hover {
  color: #1C2539;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item .tag::after {
  display: none;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item ul {
  display: block;
  padding: 10px 0;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item ul li {
  border: none;
}
.mainmenu li.has-droupdown .submenu.menu-link .menu-item ul li a {
  padding: 7px 0;
}
.mainmenu li.has-droupdown .submenu.menu-link2 {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 800px;
  left: -470px;
}
.mainmenu li.has-droupdown .submenu.menu-link2::after {
  left: 64%;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item {
  width: 33.333%;
  margin-right: 20px;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item:not(:first-child) {
  border-left: 1px solid #C4C4C426;
  border-bottom: 0;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item:not(:last-child) {
  border-bottom: 0;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item .tag {
  padding: 20px 15px 0 15px;
  cursor: auto;
  font-size: 20px;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item .tag:hover {
  color: #1C2539;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item .tag::after {
  display: none;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item ul {
  display: block;
  padding: 10px 0;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item ul li {
  border: none;
}
.mainmenu li.has-droupdown .submenu.menu-link2 .menu-item ul li a {
  padding: 7px 0;
}
.mainmenu li.has-droupdown .submenu.menu-link1 {
  display: flex;
  justify-content: space-between;
  width: 590px;
}
.mainmenu li.has-droupdown .submenu.menu-link1::after {
  left: 6%;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item {
  width: 45%;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item:not(:last-child) {
  border-right: 1px solid #C4C4C426;
  border-bottom: 0;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item:not(:last-child) {
  border-bottom: 0;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item .tag {
  padding: 20px 15px 0 15px;
  cursor: auto;
  font-size: 20px;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item .tag:hover {
  color: #1C2539;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item .tag::after {
  display: none;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item ul {
  display: block;
  padding: 10px 0;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item ul li {
  border: none;
}
.mainmenu li.has-droupdown .submenu.menu-link1 .menu-item ul li a {
  padding: 8px 0;
}
.mainmenu li.has-droupdown .submenu li {
  margin-right: 0;
  padding: 0 15px;
}
.mainmenu li.has-droupdown .submenu li:not(:last-child) {
  border-bottom: 1px solid #C4C4C426;
}
.mainmenu li.has-droupdown .submenu li a {
  padding: 12px 0;
}
.mainmenu li.has-droupdown .submenu li a::after {
  display: none;
}
.mainmenu li:hover .submenu {
  opacity: 1;
  visibility: visible;
  top: 100%;
}

.nav-main ul li:hover a.nav-link {
  color: var(--color-primary);
}
.nav-main ul li:hover a.nav-link::before {
  color: var(--color-primary);
}
.nav-main ul li:hover a.nav-link::after {
  width: 100%;
}

.header-two .nav-main ul li:hover a.nav-link {
  color: var(--color-primary-2);
}
.header-two .nav-main ul li:hover a.nav-link::before {
  color: var(--color-primary-2);
}
.header-two .nav-main ul li:hover a.nav-link::after {
  width: 100%;
}

.header-three .nav-main ul li:hover a.nav-link {
  color: var(--color-primary-3);
}
.header-three .nav-main ul li:hover a.nav-link::before {
  color: var(--color-primary-3);
}
.header-three .nav-main ul li:hover a.nav-link::after {
  width: 100%;
}

.header-four .nav-main ul li:hover a.nav-link {
  color: var(--color-primary-4);
}
.header-four .nav-main ul li:hover a.nav-link::before {
  color: var(--color-primary-4);
}
.header-four .nav-main ul li:hover a.nav-link::after {
  width: 100%;
}
.header-four.header-five .nav-main ul li:hover a.nav-link {
  color: var(--color-primary-2);
}
.header-four.header-five .nav-main ul li:hover a.nav-link::before {
  color: var(--color-primary-2);
}
.header-four.header-five .nav-main ul li:hover a.nav-link::after {
  width: 100%;
}
.header-four.header-five .nav-main ul li:hover a.nav-item {
  color: var(--color-primary-2);
}
.header-four.header-five .nav-main ul li a::after {
  background: var(--color-primary-2);
}
.header-four.header-five .nav-main ul li .submenu {
  border-color: var(--color-primary-2);
}

.rts-breadcrumb-area {
  padding-top: 153px;
  padding-bottom: 153px;
}
@media only screen and (max-width: 767px) {
  .rts-breadcrumb-area {
    padding: 80px 0;
  }
}
.rts-breadcrumb-area .title {
  color: #fff;
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .rts-breadcrumb-area .title {
    font-size: 30px;
  }
}
.rts-breadcrumb-area .bread-tag {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 30px;
  background: #fff;
  border-radius: 31px;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  max-width: max-content;
  margin-left: auto;
}
@media only screen and (max-width: 767px) {
  .rts-breadcrumb-area .bread-tag {
    margin: auto;
    margin-top: 30px;
  }
}
.rts-breadcrumb-area .bread-tag a {
  margin-right: 5px;
  font-weight: 700;
}
.rts-breadcrumb-area .bread-tag a.active {
  margin-left: 5px;
  color: #1C2539;
  margin-right: 0;
}
.rts-breadcrumb-area .bread-tag span {
  color: var(--color-primary);
}

.side-bar {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: -100%;
  width: 365px;
  padding: 40px 30px;
  padding-top: 50px;
  height: 100%;
  display: block;
  background-color: white;
  backdrop-filter: blur(7px);
  z-index: 1900;
  transition: all 600ms ease;
  box-shadow: -5px 0 20px -5px rgba(149, 22, 22, 0.12);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
@media only screen and (max-width: 479px) {
  .side-bar {
    width: 320px;
    box-shadow: none;
  }
}
.side-bar.show {
  right: 0;
}

.side-bar button {
  max-width: max-content;
}
.side-bar button i {
  color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -8px;
  margin-top: -3px;
}

.rts-sidebar-menu-desktop .logo {
  margin-top: 50px;
}
.rts-sidebar-menu-desktop p.disc {
  margin-top: 30px;
  font-size: 16px;
  line-height: 26px;
}
.rts-sidebar-menu-desktop .get-in-touch .title {
  margin-bottom: 30px;
}
.rts-sidebar-menu-desktop .get-in-touch .wrapper .single i {
  color: var(--color-primary);
  margin-right: 10px;
  margin-bottom: 15px;
}
.rts-sidebar-menu-desktop .get-in-touch .wrapper .single i:last-child {
  margin-bottom: 0;
}
.rts-sidebar-menu-desktop .get-in-touch .wrapper .single a {
  transition: 0.3s;
}

.social-wrapper-two.menu {
  margin-top: 50px;
  margin-left: 12px;
  padding-left: 0;
}
.social-wrapper-two a {
  margin-right: 40px;
  z-index: 1;
  position: relative;
}
.social-wrapper-two a i {
  color: #fff;
  transition: 0.3s;
  font-size: 16px;
}
.social-wrapper-two a::after {
  position: absolute;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  content: "";
  z-index: -1;
  background: var(--color-primary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}
.social-wrapper-two a:hover i {
  color: var(--color-primary);
}
.social-wrapper-two a:hover::after {
  background: #ffecec;
  box-shadow: 0px 10px 30px rgba(33, 5, 5, 0.05);
}

.logo-1 {
  display: block;
}

.logo-2 {
  display: none;
}

.logo-3 {
  display: none;
}

.logo-4 {
  display: none;
}

.home-blue .side-bar button i {
  background: var(--color-primary-2);
}
.home-blue .logo-1 {
  display: none;
}
.home-blue .logo-2 {
  display: block;
}
.home-blue .rts-sidebar-menu-desktop .get-in-touch .wrapper .single i {
  color: var(--color-primary-2);
}
.home-blue .social-wrapper-two a::after {
  background: var(--color-primary-2);
  color: #fff;
}
.home-blue .social-wrapper-two a:hover {
  color: var(--color-primary-2);
}
.home-blue .social-wrapper-two a:hover i {
  color: var(--color-primary-2);
}
.home-blue .social-wrapper-two a:hover::after {
  background: #8e8f9314;
  color: var(--color-primary-2);
}
.home-blue .rts-sidebar-menu-desktop .get-in-touch .wrapper .single a:hover {
  color: var(--color-primary-2);
}

.home-yellow #menu-btn:hover {
  background: var(--color-primary-3) !important;
}
.home-yellow .side-bar button i {
  background: var(--color-primary-3);
}
.home-yellow .logo-1 {
  display: none;
}
.home-yellow .logo-2 {
  display: none;
}
.home-yellow .logo-3 {
  display: block;
}
.home-yellow .rts-sidebar-menu-desktop .get-in-touch .wrapper .single i {
  color: var(--color-primary-3);
}
.home-yellow .social-wrapper-two a::after {
  background: var(--color-primary-3);
  color: #fff;
}
.home-yellow .social-wrapper-two a:hover {
  color: var(--color-primary-3);
}
.home-yellow .social-wrapper-two a:hover i {
  color: var(--color-primary-3);
}
.home-yellow .social-wrapper-two a:hover::after {
  background: #8e8f9314;
  color: var(--color-primary-3);
}
.home-yellow .rts-sidebar-menu-desktop .get-in-touch .wrapper .single a:hover {
  color: var(--color-primary-3);
}

.home-violet .side-bar button i {
  background: var(--color-primary-4);
}
.home-violet .logo-1 {
  display: none;
}
.home-violet .logo-2 {
  display: none;
}
.home-violet .logo-3 {
  display: none;
}
.home-violet .logo-4 {
  display: block;
}
.home-violet .rts-sidebar-menu-desktop .get-in-touch .wrapper .single i {
  color: var(--color-primary-4);
}
.home-violet .social-wrapper-two a::after {
  background: var(--color-primary-4);
  color: #fff;
}
.home-violet .social-wrapper-two a:hover {
  color: var(--color-primary-4);
}
.home-violet .social-wrapper-two a:hover i {
  color: var(--color-primary-4);
}
.home-violet .social-wrapper-two a:hover::after {
  background: #E4E7FF;
  color: var(--color-primary-4);
}
.home-violet .rts-sidebar-menu-desktop .get-in-touch .wrapper .single a:hover {
  color: var(--color-primary-4);
}

.rts-sidebar-menu-desktop .body-mobile .mainmenu-nav .mainmenu li a {
  color: #000;
  display: block;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu-nav .mainmenu li a.open {
  color: var(--color-primary);
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown > a::before {
  right: 10px;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu::after {
  display: none;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu {
  padding-left: 0;
  margin-top: 50px;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu > li {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.07);
  width: 100%;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu {
  display: none !important;
  position: inherit;
  border-top: none;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu li {
  margin: 0;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu.active {
  display: block !important;
  visibility: visible;
  opacity: 1;
}
.rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu.active li a {
  color: #000;
}

.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu-nav .mainmenu li a {
  color: #000;
  display: block;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu-nav .mainmenu li a.open {
  color: var(--color-primary-4);
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown > a::before {
  right: 10px;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu::after {
  display: none;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu {
  padding-left: 0;
  margin-top: 50px;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu > li {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.07);
  width: 100%;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu {
  display: none !important;
  position: inherit;
  border-top: none;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu li {
  margin: 0;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu.active {
  display: block !important;
  visibility: visible;
  opacity: 1;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .mainmenu li.has-droupdown .submenu.active li a {
  color: #000;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .social-wrapper-two.menu {
  margin-top: 50px;
  margin-left: 12px;
  padding-left: 0;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .social-wrapper-two a {
  margin-right: 40px;
  z-index: 1;
  position: relative;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .social-wrapper-two a i {
  color: #fff;
  transition: 0.3s;
  font-size: 16px;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .social-wrapper-two a::after {
  position: absolute;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  content: "";
  z-index: -1;
  background: var(--color-primary-4);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .social-wrapper-two a:hover i {
  color: var(--color-primary-4);
}
.home-violet .rts-sidebar-menu-desktop .body-mobile .social-wrapper-two a:hover::after {
  background: #ffecec;
  box-shadow: 0px 10px 30px rgba(33, 5, 5, 0.05);
}

.home-blue2 .side-bar button i {
  background: var(--color-primary-2);
}
.home-blue2 .logo-1 {
  display: none;
}
.home-blue2 .logo-2 {
  display: block;
}
.home-blue2 .rts-sidebar-menu-desktop .get-in-touch .wrapper .single i {
  color: var(--color-primary-2);
}
.home-blue2 .social-wrapper-two a::after {
  background: var(--color-primary-2);
  color: #fff;
}
.home-blue2 .social-wrapper-two a:hover {
  color: var(--color-primary-2);
}
.home-blue2 .social-wrapper-two a:hover i {
  color: var(--color-primary-2);
}
.home-blue2 .social-wrapper-two a:hover::after {
  background: #8e8f9314;
  color: var(--color-primary-2);
}
.home-blue2 .rts-sidebar-menu-desktop .get-in-touch .wrapper .single a:hover {
  color: var(--color-primary-2);
}

.index-six .main-header.main-header-four.main-header-five .nav-main ul li .submenu::after {
  border-bottom-color: var(--color-primary-5);
}
.index-six .progress-wrap svg.progress-circle path {
  stroke: var(--color-primary-5);
}
.index-six .progress-wrap::after {
  border: 1px solid var(--color-primary-5);
}
.index-six .progress-wrap::after {
  color: var(--color-primary-5);
}
.index-six .footer-one-single-wized .post-wrapper .single-footer-post .post-right a:hover .title {
  color: var(--color-primary-5);
}
.index-six .footer-one-single-wized .quick-link-inner .links li a:hover {
  color: var(--color-primary-5);
}
.index-six .footer-one-single-wized .quick-link-inner .links li a::after {
  background: var(--color-primary-5);
}
.index-six .footer-one-single-wized .post-wrapper .single-footer-post .post-right a {
  color: var(--color-primary-5);
}
.index-six .background-cta {
  background-color: #FA360A;
}
.index-six .rts-title-area::after {
  display: none;
}
.index-six .logo-1 {
  display: none;
}
.index-six .logo-3 {
  display: block;
}
.index-six .side-bar button i {
  background: var(--color-primary-5);
}
.index-six .rts-sidebar-menu-desktop .get-in-touch .wrapper .single i {
  color: var(--color-primary-5);
}
.index-six .social-wrapper-two a::after {
  background: var(--color-primary-5);
}
.index-six .social-wrapper-two a:hover::after {
  background: var(--color-gray);
}

/* elements style hear  */
.rts-btn {
  padding: 17px 30px;
  min-width: max-content;
  font-size: 16px;
  line-height: 21px;
  font-weight: 700;
  border-radius: 15px;
  transition: var(--transition);
}
.rts-btn.btn-light-3 {
  background: #f64a0026;
  color: var(--color-primary-3);
  border-radius: 5px;
  padding: 10px 19px;
  display: block;
  max-width: max-content;
  transition: 0.3s;
}
.rts-btn.btn-light-3:hover {
  background: #fff;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
}
.rts-btn:focus {
  outline: none;
  box-shadow: none;
}
.rts-btn.btn-primary {
  background: var(--color-primary);
}
.rts-btn.btn-primary:hover {
  background: var(--color-primary-alta);
  color: #1C2539;
}
.rts-btn.btn-primary-2 {
  background: var(--color-primary-2);
  color: #fff;
}
.rts-btn.btn-primary-2:hover {
  background: #F7F7F7;
  color: var(--color-primary-2);
}
.rts-btn.btn-primary-3 {
  background: var(--color-primary-3);
  color: #fff;
}
.rts-btn.btn-primary-3.transparent {
  background: transparent;
  border: 1px solid #FFFFFF;
}
.rts-btn.btn-primary-3:hover {
  background: var(--color-primary-alta);
  color: #1C2539;
}
.rts-btn.btn-primary-4 {
  background: var(--color-primary-4);
  color: #fff;
}
.rts-btn.btn-primary-4.transparent {
  background: transparent;
  border: 1px solid #FFFFFF;
}
.rts-btn.btn-primary-4:hover {
  background: var(--color-gray);
  color: #1C2539;
}
.rts-btn.btn-secondary-3 {
  background: #fff;
  color: var(--color-primary-3);
}
.rts-btn.btn-secondary-3:hover {
  background: var(--color-primary-3);
  color: #fff;
}
.rts-btn.btn-primary-alta {
  background: var(--color-primary-alta);
  padding: 17px;
}
.rts-btn.btn-primary-alta:hover {
  background: var(--color-primary);
}
.rts-btn.btn-primary-alta:hover i {
  color: #fff;
}
.rts-btn.btn-primary-alta i {
  color: #1C2539;
  position: relative;
  margin-bottom: -2px;
  transition: 0.3s;
  line-height: 22px;
}
.rts-btn.btn-primary-alta.btn-primary-alta-four {
  background: var(--color-gray) !important;
}
.rts-btn.btn-primary-alta.btn-primary-alta-four:hover {
  background: var(--color-primary-4) !important;
}
.rts-btn.btn-primary-alta.btn-primary-alta-four:hover i {
  color: #fff;
}
.rts-btn.btn-primary-alta.btn-primary-alta-four i {
  color: #1C2539;
  position: relative;
  margin-bottom: -2px;
  transition: 0.3s;
  line-height: 22px;
}
.rts-btn.btn-white {
  background: #fff;
  color: var(--color-primary);
  padding: 17px 35px;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
}
.rts-btn.btn-white:hover {
  background: var(--color-primary);
  color: #fff;
}
.rts-btn.rounded {
  border-radius: 50% !important;
  line-height: 7px;
  display: block;
  padding: 20px;
}
.rts-btn.rounded:hover {
  background: var(--color-primary-alta);
  color: #1C2539;
}

button.menu.rts-btn.btn-primary-3-menu {
  max-width: max-content;
  background: #F7F7F7;
  padding: 19px;
  margin-bottom: -1px;
  position: relative;
}
button.menu.rts-btn.btn-primary-3-menu .menu-dark {
  display: block;
}
button.menu.rts-btn.btn-primary-3-menu .menu-light {
  display: none;
}
button.menu.rts-btn.btn-primary-3-menu:hover {
  background: var(--color-primary-3);
  padding: 19px;
}
button.menu.rts-btn.btn-primary-3-menu:hover .menu-dark {
  display: none;
}
button.menu.rts-btn.btn-primary-3-menu:hover .menu-light {
  display: block;
}

.rts-read-more {
  font-weight: 600;
  color: #1C2539;
  transition: var(--transition);
}
.rts-read-more i {
  padding: 13px;
  background: #fff;
  border-radius: 50%;
  margin-right: 12px;
  color: #1C2539;
  line-height: 12px;
  font-size: 14px;
  transition: var(--transition);
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
}
.rts-read-more.btn-primary {
  background: transparent;
  color: #1C2539;
}
.rts-read-more:hover {
  color: var(--color-primary);
}
.rts-read-more:hover i {
  background: var(--color-primary);
  color: var(--color-white);
}
.rts-read-more:focus {
  box-shadow: none;
  outline: none;
}

.vedio-icone {
  position: relative;
}

.video-play-button {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 32px;
  height: 44px;
  border-radius: 50%;
  padding: 18px 20px 18px 28px;
  display: flex;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .video-play-button {
    right: -70%;
    left: auto;
  }
}
.video-play-button span.outer-text {
  border: none;
  min-width: max-content;
  margin-left: 75px;
  position: relative;
  margin-top: -12px;
  color: var(--color-primary);
  font-weight: 500;
}
.video-play-button:before {
  content: "";
  position: absolute;
  z-index: 0;
  left: -32%;
  top: -31%;
  display: block;
  width: 130px;
  height: 130px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid #f89696;
  animation: waves 3s ease-in-out infinite;
}
.video-play-button::after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 57px;
  height: 57px;
  background: #FBF0F0;
  border-radius: 50%;
  transition: all 200ms;
}

.video-overlay {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all ease 500ms;
}

.video-overlay-close {
  position: absolute;
  z-index: 1000;
  top: 15px;
  right: 20px;
  font-size: 36px;
  line-height: 1;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms;
}

.video-overlay.open {
  position: fixed;
  z-index: 1000;
  opacity: 1;
}

.video-play-button span {
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 14px solid #DF0A0A;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 47%;
}

.video-overlay iframe {
  width: 70%;
  height: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
}

@media only screen and (max-width: 479px) {
  .header-one-btn.rts-btn {
    padding: 10px 7px;
    font-size: 14px;
  }
}

@media only screen and (max-width: 479px) {
  #search {
    height: 42px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px !important;
    padding: 17px 13px !important;
  }
}

#menu-btn {
  background: var(--color-primary-alta);
  height: 55px;
  width: 55px;
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 479px) {
  #menu-btn {
    background: var(--color-primary-alta);
    height: 44px;
    width: 42px;
    padding: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media only screen and (max-width: 479px) {
  #menu-btn {
    padding: 17px 13px;
  }
}
#menu-btn:hover {
  background: var(--color-primary);
}

.home-blue #menu-btn {
  background: #F6F6F6;
}
@media only screen and (max-width: 575px) {
  .home-blue #menu-btn {
    margin-left: 5px;
  }
}
.home-blue #menu-btn:hover {
  background: var(--color-primary-2);
}

.home-yellow #menu-btn:hover {
  background: var(--color-primary-2);
}

#search {
  width: 55px;
}

@media only screen and (max-width: 575px) {
  .quote-btn {
    display: none;
  }
}

.quote-btnmenu {
  margin-top: 30px;
}
@media only screen and (min-width: 575px) {
  .quote-btnmenu {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
  .quote-btnmenu {
    display: block;
    max-width: max-content;
  }
}

.social-wrapper-two.menu.mobile-menu {
  margin-top: 35px;
  margin-left: 18px;
}
.social-wrapper-two.menu.mobile-menu a i {
  color: var(--color-primary);
}
.social-wrapper-two.menu.mobile-menu a::after {
  background: #fff;
  box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.07);
}
.social-wrapper-two.menu.mobile-menu a:hover i {
  color: #fff;
}
.social-wrapper-two.menu.mobile-menu a:hover::after {
  background: var(--color-primary);
}

.home-blue .quote-btnmenu {
  margin-top: 30px;
  background: var(--color-primary-2);
}
@media only screen and (min-width: 575px) {
  .home-blue .quote-btnmenu {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
  .home-blue .quote-btnmenu {
    display: block;
    max-width: max-content;
  }
}
.home-blue .social-wrapper-two.menu.mobile-menu {
  margin-top: 35px;
  margin-left: 18px;
}
.home-blue .social-wrapper-two.menu.mobile-menu a i {
  color: var(--color-primary-2);
}
.home-blue .social-wrapper-two.menu.mobile-menu a::after {
  background: #fff;
  box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.07);
}
.home-blue .social-wrapper-two.menu.mobile-menu a:hover i {
  color: #fff;
}
.home-blue .social-wrapper-two.menu.mobile-menu a:hover::after {
  background: var(--color-primary-2);
}

.home-blue .quote-btnmenu {
  margin-top: 30px;
  background: var(--color-primary-2);
}
@media only screen and (min-width: 575px) {
  .home-blue .quote-btnmenu {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
  .home-blue .quote-btnmenu {
    display: block;
    max-width: max-content;
  }
}
.home-blue .social-wrapper-two.menu.mobile-menu {
  margin-top: 35px;
  margin-left: 18px;
  padding-left: 0;
}
.home-blue .social-wrapper-two.menu.mobile-menu a i {
  color: var(--color-primary-2);
}
.home-blue .social-wrapper-two.menu.mobile-menu a::after {
  background: #fff;
  box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.07);
}
.home-blue .social-wrapper-two.menu.mobile-menu a:hover i {
  color: #fff;
}
.home-blue .social-wrapper-two.menu.mobile-menu a:hover::after {
  background: var(--color-primary-2);
}

.home-yellow .quote-btnmenu {
  margin-top: 30px;
  background: var(--color-primary-3);
}
@media only screen and (min-width: 575px) {
  .home-yellow .quote-btnmenu {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
  .home-yellow .quote-btnmenu {
    display: block;
    max-width: max-content;
  }
}
.home-yellow .social-wrapper-two.menu.mobile-menu {
  margin-top: 35px;
  margin-left: 18px;
  padding-left: 0;
}
.home-yellow .social-wrapper-two.menu.mobile-menu a i {
  color: var(--color-primary-3);
}
.home-yellow .social-wrapper-two.menu.mobile-menu a::after {
  background: #fff;
  box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.07);
}
.home-yellow .social-wrapper-two.menu.mobile-menu a:hover i {
  color: #fff;
}
.home-yellow .social-wrapper-two.menu.mobile-menu a:hover::after {
  background: var(--color-primary-3);
}

.home-violet .quote-btnmenu {
  margin-top: 30px;
  background: var(--color-primary-4);
}
@media only screen and (min-width: 575px) {
  .home-violet .quote-btnmenu {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
  .home-violet .quote-btnmenu {
    display: block;
    max-width: max-content;
  }
}

.button-area1 .button-area-inner {
  max-width: 600px;
  margin: 0 auto;
}
@media (max-width: 576px) {
  .button-area1 .button-area-inner {
    display: grid !important;
  }
  .button-area1 .button-area-inner .rts-btn {
    margin-bottom: 15px;
  }
}
.button-area1 .rts-btn {
  display: block;
}

.button-area2 .rts-btn {
  border: 1px solid var(--color-primary);
  border-radius: 0;
}
.button-area2 .rts-btn.two {
  border-radius: 15px;
}
.button-area2 .rts-btn.three {
  border-radius: 30px;
}

.button-area3 .rts-btn.one i {
  margin-left: 5px;
}

.index-six .rts-btn.btn-primary {
  background: var(--color-primary-5);
  border-radius: 30px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-one .swiper-wrapper .swiper-slide {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.offwrap {
  width: 100%;
  left: 100%;
  transition: all 0.8s ease-out 0s;
  position: fixed;
  background: #fff;
  height: 100vh;
  top: 0;
  bottom: 0;
  opacity: 0.6;
  z-index: 222;
}

.swiper.mySwiperh2_Service.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-backface-hidden {
  padding-bottom: 62px;
}

.mySwiperh2_Business_Cases .swiper-slide {
  border-radius: 20px;
}

.mySwiperh2_clients .swiper-slide {
  border-radius: 20px;
}

.mySwiperh3_business-case .swiper-slide {
  border-radius: 20px;
}

.mySwiperh1_team .swiper-slide {
  border-radius: 20px;
  padding-top: 20px;
  background: transparent;
}

.mySwiperh1_blog .swiper-slide {
  background: transparent;
  text-align: left;
}

.mySwiperh2_banner .swiper-slide {
  background: transparent;
}

.mySwiperh3_team {
  padding-bottom: 109px;
}
@media only screen and (max-width: 575px) {
  .mySwiperh3_team {
    padding-bottom: 30px;
  }
}

.mySwiperh2_Business_Cases .swiper-slide {
  background: transparent;
}

.rts-banner-one {
  position: relative;
}
.rts-banner-one .animation-img .shape-img {
  position: absolute;
}
.rts-banner-one .animation-img .shape-img.one {
  right: 3%;
  top: 34%;
  z-index: 1;
  animation: rotateIt2 25s linear infinite;
}
.rts-banner-one .animation-img .shape-img.two {
  right: -24px;
  top: 77%;
  z-index: 1;
  animation: jump-2 3s infinite;
}
.rts-banner-one .animation-img .shape-img.three {
  right: 13%;
  top: 21%;
  z-index: 1;
  animation: jump-1 3s infinite;
}

.banner-one-inner {
  width: 50%;
  margin-left: auto;
  padding: 160px 0 190px 0;
  position: relative;
}
@media only screen and (max-width: 1199px) {
  .banner-one-inner {
    width: 70%;
  }
}
@media only screen and (max-width: 1199px) {
  .banner-one-inner {
    margin-left: inherit;
  }
}
@media only screen and (max-width: 767px) {
  .banner-one-inner {
    width: 90%;
  }
}
.banner-one-inner .pre-title {
  color: #1C2539;
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 10px;
  font-family: var(--font-secondary);
  letter-spacing: 1px;
}
.banner-one-inner .pre-title span {
  color: #DF0A0A;
  font-weight: 800;
}
.banner-one-inner .title {
  font-weight: 700;
  line-height: 82px;
  margin-bottom: 23px;
  font-size: 60px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .banner-one-inner .title {
    line-height: 70px;
    margin-bottom: 23px;
  }
}
@media only screen and (max-width: 767px) {
  .banner-one-inner .title {
    font-size: 46px;
    line-height: 63px;
  }
}
@media only screen and (max-width: 575px) {
  .banner-one-inner .title {
    font-size: 32px;
    line-height: 45px;
  }
}
@media only screen and (max-width: 479px) {
  .banner-one-inner .title {
    font-size: 23px;
    line-height: 45px;
  }
}
.banner-one-inner .title span {
  font-style: italic;
  color: #DF0A0A;
  font-weight: 300;
  font-size: 70px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .banner-one-inner .title span {
    font-size: 56px;
  }
}
@media only screen and (max-width: 767px) {
  .banner-one-inner .title span {
    font-size: 46px;
  }
}
@media only screen and (max-width: 575px) {
  .banner-one-inner .title span {
    font-size: 32px;
  }
}
.banner-one-inner p {
  color: #1C2539;
}
.banner-one-inner .rts-btn {
  display: block;
  margin-top: 43px;
  max-width: max-content;
}

.banner-one .swiper-slide-active .pre-title {
  animation: fadeInUp 1.5s;
  animation-delay: 0s;
}
.banner-one .swiper-slide-active .title {
  animation: fadeInUp 1.5s;
  animation-delay: 0s;
}
.banner-one .swiper-slide-active p.disc {
  animation: fadeInUp 2s;
  animation-delay: 0s;
}
.banner-one .swiper-slide-active a.rts-btn {
  animation: fadeInUp 2.5s;
  animation-delay: 0s;
}

.rts-banner-area-two .swiper-slide-active .wrapper .sub {
  animation: fadeInUp 1.5s;
  animation-delay: 0s;
  display: block;
}
.rts-banner-area-two .swiper-slide-active .wrapper .title {
  animation: fadeInUp 1.5s;
  animation-delay: 0s;
}
.rts-banner-area-two .swiper-slide-active .wrapper a.rts-btn {
  animation: fadeInUp 2.5s;
  animation-delay: 0s;
}

.banner-three .swiper-slide-active .banner-three-innerr .subtitle-banner {
  animation: fadeInUp 1.5s;
  animation-delay: 0s;
  display: block;
}
.banner-three .swiper-slide-active .banner-three-innerr .title {
  animation: fadeInUp 1.5s;
  animation-delay: 0s;
}
.banner-three .swiper-slide-active .banner-three-innerr .disc {
  animation: fadeInUp 1.5s;
  animation-delay: 0s;
}
.banner-three .swiper-slide-active .banner-three-innerr a.rts-btn {
  animation: fadeInUp 2.5s;
  animation-delay: 0s;
}
.banner-three.banner-four {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.banner-three.banner-four::before {
  background: none;
}
.banner-three.banner-four .shape {
  position: absolute;
  right: 0;
}
.banner-three.banner-four .shape img {
  opacity: 0.7;
}
@media (max-width: 1200px) {
  .banner-three.banner-four .shape {
    height: 100%;
  }
  .banner-three.banner-four .shape img {
    height: 100%;
  }
}
@media (max-width: 991px) {
  .banner-three.banner-four .shape {
    display: none;
  }
}
.banner-three.banner-four .shape::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  filter: drop-shadow(1);
  clip-path: polygon(37% -3%, 0% 155%, 100% 100%);
}
@media (max-width: 1200px) {
  .banner-three.banner-four .shape::after {
    display: none;
  }
}
.banner-three.banner-four .shape1 {
  position: absolute;
  top: -21%;
  left: -12%;
  z-index: 1;
  animation: fadeInLeftBig 2s;
}
@media (max-width: 1200px) {
  .banner-three.banner-four .shape1 {
    left: -12%;
    top: -7%;
    width: 35%;
  }
}
.banner-three.banner-four .shape2 {
  position: absolute;
  top: 28%;
  left: -5%;
  animation: fadeInLeftBig 3s;
}
@media (max-width: 1200px) {
  .banner-three.banner-four .shape2 {
    left: -7%;
    top: 22%;
  }
}
@media (max-width: 991px) {
  .banner-three.banner-four .shape2 {
    left: -10%;
    top: 10%;
    width: 35%;
  }
}
.banner-three.banner-four .shape3 {
  position: absolute;
  top: 70px;
  left: -20%;
  animation: fadeInLeftBig 3.5s;
}
@media (max-width: 1200px) {
  .banner-three.banner-four .shape3 {
    top: 0%;
    left: -35%;
  }
}
@media (max-width: 991px) {
  .banner-three.banner-four .shape3 {
    display: none;
  }
}
.banner-three.banner-four .shape4 {
  position: absolute;
  top: 0;
  left: -22%;
  animation: fadeInLeftBig 4s;
}
@media (max-width: 1200px) {
  .banner-three.banner-four .shape4 {
    display: none;
  }
}
.banner-three.banner-four .bg_banner-four {
  background: none;
}
.banner-three.banner-four .bg_banner-four::after {
  display: none;
}
.banner-three.banner-four .bg_banner-four .banner-four-inner {
  padding: 100px 0 100px 0;
}
.banner-three.banner-four .bg_banner-four .banner-four-inner.banner-five-inner {
  padding: 100px 0 170px 0;
}
@media (max-width: 576px) {
  .banner-three.banner-four .bg_banner-four .banner-four-inner.banner-five-inner {
    padding: 50px 0;
  }
}
.banner-three.banner-four .bg_banner-four .banner-four-inner .subtitle-banner {
  font-size: 16px;
  line-height: 21px;
  color: #1C2539;
  font-weight: 400;
}
.banner-three.banner-four .bg_banner-four .banner-four-inner .title {
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
  text-transform: none;
  color: #1C2539;
  margin-bottom: 40px;
  margin-top: 25px;
}
@media (max-width: 576px) {
  .banner-three.banner-four .bg_banner-four .banner-four-inner .title {
    font-size: 44px;
    line-height: 55px;
  }
}
@media (max-width: 576px) {
  .banner-three.banner-four .bg_banner-four .banner-four-inner .title {
    font-size: 34px;
    line-height: 42px;
  }
}
.banner-three.banner-four .bg_banner-four .banner-four-inner .disc {
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #5D666F;
  margin-bottom: 56px;
}
@media (max-width: 991px) {
  .banner-three.banner-four .bg_banner-four .banner-four-inner .disc br {
    display: none;
  }
}
.banner-three.banner-four .bg_banner-four .banner-four-inner::after {
  display: none;
}
.banner-three.banner-four .bg_banner-four .banner-four-inner .button-group .btn-primary-4:hover {
  background: var(--color-gray);
  color: var(--color-primary-4);
  border-color: var(--color-gray);
}
@media (max-width: 576px) {
  .banner-three.banner-four .bg_banner-four .banner-four-inner .button-group .btn-primary-4 {
    padding: 17px 30px;
  }
}
.banner-three.banner-four .bg_banner-four .hero-section {
  position: absolute;
  top: 0;
  right: 0;
}
.banner-three.banner-four .bg_banner-four .hero-section .shape {
  position: absolute;
  top: 0;
  right: 0;
}
.banner-three.banner-four.banner-five {
  background-position: center;
  position: relative;
}
@media (max-width: 1200px) {
  .banner-three.banner-four.banner-five::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: #fff;
    opacity: 0.6;
    z-index: 1;
  }
}
.banner-three.banner-four.banner-five .banner-five-inner .banner-title {
  position: relative;
  padding-left: 30px;
}
@media (max-width: 450px) {
  .banner-three.banner-four.banner-five .banner-five-inner .banner-title {
    padding-left: 15px;
  }
}
.banner-three.banner-four.banner-five .banner-five-inner .banner-title::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 6px;
  background: var(--color-primary-2);
  left: 0;
}
@media (max-width: 450px) {
  .banner-three.banner-four.banner-five .banner-five-inner .banner-title::before {
    width: 4px;
  }
}
.banner-three.banner-four.banner-five .banner-five-inner .subtitle-banner {
  color: var(--color-primary-2) !important;
  letter-spacing: 1px;
}
@media (max-width: 420px) {
  .banner-three.banner-four.banner-five .banner-five-inner .subtitle-banner {
    letter-spacing: normal;
    font-size: 13px;
  }
}
.banner-three.banner-four.banner-five .banner-five-inner .title .changebox {
  margin: 0 5px -8px 0;
  color: var(--color-primary-2);
  overflow: hidden;
  transition: 0.8s;
  white-space: nowrap;
  display: inline-block;
  align-items: center;
  text-align: center;
  position: relative;
  line-height: 62px;
  bottom: -4px;
}
@media (max-width: 576px) {
  .banner-three.banner-four.banner-five .banner-five-inner .title .changebox {
    bottom: -7px;
  }
}
@media (max-width: 450px) {
  .banner-three.banner-four.banner-five .banner-five-inner .title .changebox {
    bottom: -12px;
  }
}
@media (max-width: 768px) {
  .banner-three.banner-four.banner-five .banner-five-inner .title {
    font-size: 50px;
    line-height: 60px;
  }
}
@media (max-width: 576px) {
  .banner-three.banner-four.banner-five .banner-five-inner .title {
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 50px;
  }
}
@media (max-width: 450px) {
  .banner-three.banner-four.banner-five .banner-five-inner .title {
    margin-top: 20px;
    font-size: 30px;
    line-height: 10px;
  }
}
.banner-three.banner-four.banner-five .banner-five-inner .disc {
  margin-bottom: 55px;
}
@media (max-width: 576px) {
  .banner-three.banner-four.banner-five .banner-five-inner .disc {
    margin-bottom: 30px;
  }
}
.banner-three.banner-four.banner-five .banner-five-inner .button-group .btn-primary-4 {
  background: var(--color-primary-2);
  padding: 17px 37px;
}
.banner-three.banner-four.banner-five .banner-five-inner .button-group .btn-primary-4:hover {
  color: var(--color-primary-2);
  background: var(--color-gray);
}

.bg_banner-three {
  position: relative;
  z-index: 1;
  width: 100%;
}

.bg_banner-three::after {
  position: absolute;
  height: 100%;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  background: #050a15b3;
  z-index: -1;
}

.banner-three-inner {
  padding: 300px 0 100px 0;
  max-width: 100%;
  position: relative;
  z-index: 2;
  text-align: left;
}
@media only screen and (max-width: 767px) {
  .banner-three-inner {
    padding: 170px 0 100px 0;
  }
}
@media only screen and (max-width: 479px) {
  .banner-three-inner {
    padding: 126px 0 0 0;
  }
}
@media only screen and (max-width: 479px) {
  .banner-three-inner .button-group {
    display: flex;
    flex-direction: column;
    max-width: max-content;
  }
  .banner-three-inner .button-group .rts-btn {
    margin-bottom: 30px;
  }
}
.banner-three-inner::after {
  position: absolute;
  content: "Solution Model";
  left: 15%;
  line-height: 198px;
  width: 100%;
  top: 36%;
  font-size: 100px;
  font-weight: 800;
  -webkit-background-clip: text;
  -webkit-text-stroke: 2px transparent;
  font-size: 150px;
  height: 128px;
  max-height: max-content;
  min-width: max-content;
  font-weight: 700;
  z-index: 0;
  display: flex;
  align-items: center;
  opacity: 0.25;
  font-family: var(--font-secondary);
  z-index: -1;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .banner-three-inner::after {
    font-size: 100px;
  }
}
@media only screen and (max-width: 1199px) {
  .banner-three-inner::after {
    font-size: 100px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .banner-three-inner::after {
    font-size: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .banner-three-inner::after {
    font-size: 60px;
    left: 0;
    top: 18%;
  }
}
@media only screen and (max-width: 575px) {
  .banner-three-inner::after {
    font-size: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .banner-three-inner::after {
    top: 12%;
  }
}
.banner-three-inner .subtitle-banner {
  color: #fff;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}
@media only screen and (max-width: 575px) {
  .banner-three-inner .subtitle-banner {
    letter-spacing: 0;
    font-size: 16px;
  }
}
.banner-three-inner .title {
  color: #fff;
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 900;
  margin-top: 5px;
  margin-bottom: 17px;
}
@media only screen and (max-width: 1199px) {
  .banner-three-inner .title {
    font-size: 75px;
  }
}
@media only screen and (max-width: 767px) {
  .banner-three-inner .title {
    font-size: 55px;
  }
}
@media only screen and (max-width: 575px) {
  .banner-three-inner .title {
    font-size: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .banner-three-inner .title {
    font-size: 30px;
  }
}
.banner-three-inner .disc {
  color: #fff;
  width: 68%;
  margin-bottom: 46px;
}
@media only screen and (max-width: 767px) {
  .banner-three-inner .disc {
    width: 100%;
  }
}
@media only screen and (max-width: 575px) {
  .banner-three-inner .disc {
    width: 90%;
  }
}
@media only screen and (max-width: 479px) {
  .banner-three-inner .disc {
    width: 99%;
    margin-bottom: 25px;
  }
}
.banner-three-inner .button-group .rts-btn {
  margin-right: 25px;
}
.banner-three-inner .button-group .rts-btn.btn-primary-3 {
  border: 1px solid transparent;
}
.banner-three-inner .button-group .rts-btn.btn-primary-3.transparent {
  border: 1px solid #fff;
}
.banner-three-inner .button-group .rts-btn.btn-primary-3.transparent:hover {
  background: var(--color-primary-3);
  border: 1px solid transparent;
}
.banner-three-inner .button-group .rts-btn.btn-primary-3:hover {
  background: transparent;
  border: 1px solid #FFFFFF;
  color: #fff;
}
.banner-three-inner.banner-four-inner .rts-btn.btn-primary-3 {
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  padding: 17px 50px;
}

.banner-two {
  height: 850px;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
  background-size: cover;
  width: 100%;
}
@media only screen and (max-width: 767px) {
  .banner-two {
    height: 500px;
  }
}

.banner-two-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 767px) {
  .banner-two-content {
    width: 100%;
  }
}
.banner-two-content .wrapper span.sub {
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
}
.banner-two-content .wrapper .title {
  font-weight: 300;
  font-size: 86px;
  line-height: 96px;
  color: #fff;
  margin-top: 24px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .banner-two-content .wrapper .title {
    font-size: 59px;
    line-height: 73px;
  }
}
@media only screen and (max-width: 1199px) {
  .banner-two-content .wrapper .title {
    font-size: 44px;
    line-height: 59px;
  }
}
@media only screen and (max-width: 575px) {
  .banner-two-content .wrapper .title {
    font-size: 30px;
    line-height: 40px;
  }
}
.banner-two-content .wrapper .title span {
  font-weight: 700;
}
.banner-two-content .wrapper a.rts-btn {
  background: #fff;
  border-radius: 15px;
  color: var(--color-primary-2);
  font-weight: 700;
  font-size: 16px;
  display: block;
  max-width: max-content;
  margin: 45px auto 0 auto;
}
.banner-two-content .wrapper a.rts-btn:hover {
  background: var(--color-primary-2);
  color: #ffff;
}

.rts-banner-one .swiper-wrapper .swiper-slide {
  position: relative;
}
.rts-banner-one .swiper-wrapper .swiper-slide::after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.336);
  display: none;
}
@media only screen and (max-width: 1199px) {
  .rts-banner-one .swiper-wrapper .swiper-slide::after {
    display: block;
  }
}
.rts-banner-one .swiper-wrapper .swiper-slide .banner-one-inner {
  position: relative;
  z-index: 1;
}
.rts-banner-one .swiper-wrapper .swiper-slide .banner-one-inner .shape-img.one {
  position: absolute;
  right: 40px;
  bottom: 100px;
  height: 436px;
  width: 436px;
  z-index: -1;
  animation: rotateIt2 25s linear infinite;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .rts-banner-one .swiper-wrapper .swiper-slide .banner-one-inner .shape-img.one {
    width: 300px;
    height: 300px;
  }
}
@media only screen and (max-width: 1199px) {
  .rts-banner-one .swiper-wrapper .swiper-slide .banner-one-inner .shape-img.one {
    width: 300px;
    height: 300px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-banner-one .swiper-wrapper .swiper-slide .banner-one-inner .shape-img.one {
    width: 300px;
    height: 300px;
    right: -15%;
  }
}
@media only screen and (max-width: 767px) {
  .rts-banner-one .swiper-wrapper .swiper-slide .banner-one-inner .shape-img.one {
    width: 250px;
    height: 250px;
    right: -15%;
  }
}
@media only screen and (max-width: 575px) {
  .rts-banner-one .swiper-wrapper .swiper-slide .banner-one-inner .shape-img.one {
    height: 150px;
    width: 150px;
    right: 15%;
  }
}

.banner-three {
  position: relative;
}
.banner-three::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 650px;
  background-size: cover;
  right: 0;
  bottom: 0;
  z-index: 3;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .banner-three::before {
    width: 370px;
  }
}
@media only screen and (max-width: 767px) {
  .banner-three::before {
    width: 350px;
  }
}
@media only screen and (max-width: 575px) {
  .banner-three::before {
    width: 250px;
  }
}

p.disc.banner-para {
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
}
@media only screen and (max-width: 575px) {
  p.disc.banner-para {
    font-size: 16px;
    line-height: 26px;
  }
}

@media only screen and (max-width: 767px) {
  .col-xl-6.col-lg-6.col-md-6.col-sm-12.col-12.breadcrumb-1 {
    text-align: center;
  }
}

.rts-btn.color-h-black:hover {
  background: #1c2539 !important;
  color: #fff !important;
}

.header-two .main-header .content .header-right a.rts-btn:hover {
  color: #000;
}

.banner-bg-h6 {
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner-bg-h6::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0.58) 100%);
}
.banner-bg-h6 .shape-banner-6 {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.rts-banner-wrapper-six {
  text-align-last: left;
  padding: 241px 0;
}
@media only screen and (max-width: 575px) {
  .rts-banner-wrapper-six {
    padding: 140px 0;
  }
}
.rts-banner-wrapper-six p.pre-title {
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #FFFFFF !important;
  font-family: var(--font-secondary);
}
.rts-banner-wrapper-six p.pre-title span {
  color: #FA360A;
  font-weight: 700;
}
.rts-banner-wrapper-six h1.banner-title {
  font-weight: 700;
  font-size: 86px;
  line-height: 96px;
  color: #FFFFFF;
  margin-bottom: 30px;
}
@media only screen and (max-width: 1199px) {
  .rts-banner-wrapper-six h1.banner-title {
    font-size: 60px;
    line-height: 76px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-banner-wrapper-six h1.banner-title {
    font-size: 46px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-banner-wrapper-six h1.banner-title {
    font-size: 46px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 575px) {
  .rts-banner-wrapper-six h1.banner-title {
    font-size: 36px;
    line-height: 46px;
  }
}
.rts-banner-wrapper-six h1.banner-title span {
  font-weight: 300;
  font-size: 86px;
  line-height: 96px;
  color: var(--color-primary-5);
}
@media only screen and (max-width: 1199px) {
  .rts-banner-wrapper-six h1.banner-title span {
    font-size: 60px;
    line-height: 76px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-banner-wrapper-six h1.banner-title span {
    font-size: 46px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-banner-wrapper-six h1.banner-title span {
    font-size: 46px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 575px) {
  .rts-banner-wrapper-six h1.banner-title span {
    font-size: 36px;
    line-height: 46px;
  }
}
.rts-banner-wrapper-six p.disc {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
  width: 63%;
  margin-bottom: 60px;
}
@media only screen and (max-width: 767px) {
  .rts-banner-wrapper-six p.disc {
    font-size: 16px;
    font-weight: 500;
    width: 80%;
  }
}
@media only screen and (max-width: 575px) {
  .rts-banner-wrapper-six p.disc {
    width: 100%;
  }
}
.rts-banner-wrapper-six .button-area {
  display: block;
}
.rts-banner-wrapper-six .button-area a.rts-btn.btn-primary {
  border: 2px solid transparent;
}
.rts-banner-wrapper-six .button-area a.rts-btn.btn-primary:hover {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}
.rts-banner-wrapper-six .button-area a.rts-btn.btn-primary.deactive {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}
.rts-banner-wrapper-six .button-area a.rts-btn.btn-primary.deactive:hover {
  background: var(--color-primary-5);
  border: 2px solid transparent;
}

.rts-banner-wrapper-six .button-area {
  display: flex;
  flex-wrap: wrap;
}
@media only screen and (max-width: 479px) {
  .rts-banner-wrapper-six .button-area a.rts-btn {
    margin-bottom: 20px;
  }
}

.about-inner p.disc {
  margin-bottom: 30px;
}

.bg-about-sm-shape {
  position: relative;
}
.bg-about-sm-shape::after {
  content: "";
  position: absolute;
  height: 150px;
  width: 150px;
  background-repeat: no-repeat;
  top: 32%;
  animation: jump-1 8s linear infinite;
}
@media only screen and (max-width: 767px) {
  .bg-about-sm-shape::after {
    right: -15%;
  }
}
@media only screen and (max-width: 479px) {
  .bg-about-sm-shape::after {
    right: -32%;
  }
}
.bg-about-sm-shape::before {
  content: "";
  position: absolute;
  height: 150px;
  width: 150px;
  background-repeat: no-repeat;
  top: 60%;
  right: -2%;
  animation: rotateIt 10s linear infinite;
  z-index: -1;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-about-sm-shape::before {
    top: 76%;
  }
}
@media only screen and (max-width: 767px) {
  .bg-about-sm-shape::before {
    top: 76%;
    height: 100px;
    width: 100px;
  }
}

.about-success-wrapper .single {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  align-items: flex-start;
}
.about-success-wrapper .single i {
  padding: 4px;
  background: var(--color-primary);
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  margin-right: 15px;
  margin-top: 5px;
}
.about-success-wrapper .single p.details {
  font-size: 16px;
  color: #1C2539;
  font-weight: 500;
}

.about-one-thumbnail {
  display: flex;
  justify-content: end;
  position: relative;
}
.about-one-thumbnail .small-img {
  position: absolute;
  left: 0%;
  top: 7%;
  animation: jump-1 10s linear infinite;
}
.about-one-thumbnail .experience {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 32px;
  background: var(--color-primary);
  border-radius: 15px;
  bottom: 7%;
  left: 1%;
  animation: jump-2 6s linear infinite;
  width: 310px;
}
.about-one-thumbnail .experience .single {
  width: 50%;
}
.about-one-thumbnail .experience .left .title {
  color: #fff;
  margin-bottom: 0;
  font-family: var(--font-secondary);
}
.about-one-thumbnail .experience .left p {
  font-size: 22px;
  color: #fff;
  font-family: var(--font-secondary);
  font-weight: 700;
  margin-top: -8px;
}
.about-one-thumbnail .experience .right p {
  color: #fff;
  line-height: 24px;
  font-size: 18px;
  font-weight: 700;
}

.about-image-v-inner .image-area {
  display: flex;
  position: relative;
}
.about-image-v-inner .image-area .img-1 {
  border-top: 10px solid var(--color-primary);
  padding-top: 10px;
}
@media only screen and (max-width: 767px) {
  .about-image-v-inner .image-area .img-1 {
    width: 65%;
  }
}
.about-image-v-inner .image-area .img-over {
  position: absolute;
  right: 0;
  top: 0;
  animation: jump-2 5s linear infinite;
}
@media only screen and (max-width: 767px) {
  .about-image-v-inner .image-area .img-over {
    width: 50%;
  }
}
.about-image-v-inner .image-area .goal-button-wrapper {
  position: absolute;
  bottom: -2%;
  right: 29%;
}
.about-image-v-inner .image-area .goal-button-wrapper .vedio-icone {
  background: #fff;
  padding: 65px;
  border-radius: 50%;
}
@media only screen and (max-width: 479px) {
  .about-image-v-inner .image-area .goal-button-wrapper .vedio-icone {
    padding: 53px;
  }
}
.about-image-v-inner .image-area .goal-button-wrapper .vedio-icone .video-play-button::after {
  background: var(--color-primary);
}
.about-image-v-inner .image-area .goal-button-wrapper .vedio-icone .video-play-button span {
  border-left: 14px solid #ffffff;
}
@media only screen and (max-width: 575px) {
  .about-image-v-inner .image-area .goal-button-wrapper {
    right: 24%;
  }
}

.about-progress-inner {
  padding-left: 30px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-progress-inner {
    padding-left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .about-progress-inner {
    padding-left: 0;
  }
}
.about-progress-inner .title-area span {
  color: var(--color-primary);
  font-size: 16px;
  letter-spacing: 0.1em;
  font-weight: 600;
}
.about-progress-inner .title-area .title {
  margin-top: 5px;
}
.about-progress-inner .inner .rts-progress-one-wrapper {
  padding: 40px;
  background: #F7F7F7;
}
@media only screen and (max-width: 767px) {
  .about-progress-inner .inner .rts-progress-one-wrapper {
    padding: 25px;
  }
}
@media only screen and (max-width: 479px) {
  .about-progress-inner .inner .rts-progress-one-wrapper {
    padding: 15px;
  }
}
.about-progress-inner .inner .rts-progress-one-wrapper .meter {
  background: #fff;
  height: 15px;
  display: flex;
  align-items: center;
  padding-left: 7px;
  overflow: hidden;
}
.about-progress-inner .inner .rts-progress-one-wrapper .meter span {
  height: 3px;
}
.about-progress-inner .inner .rts-progress-one-wrapper .single-progress {
  border-bottom: none;
}
.about-progress-inner .inner .rts-progress-one-wrapper .single-progress .progress-top p {
  color: #1C2539;
}
.about-progress-inner .inner .rts-progress-one-wrapper .single-progress .progress-top span {
  color: var(--color-primary);
  font-weight: 500;
  font-size: 16px;
}
.about-progress-inner .inner .rts-progress-one-wrapper .single-progress:last-child {
  margin-bottom: 0;
}
.about-progress-inner .inner a.rts-btn {
  display: block;
  max-width: max-content;
  margin-top: 40px;
}
.about-progress-inner.inner1 {
  max-width: 700px;
  margin: 0 auto;
}

.about-two-bg {
  background-size: cover;
  background-repeat: no-repeat;
}

.about-right-three .title-area-about-three span.sub {
  color: var(--color-primary-3);
  letter-spacing: 0.3em;
  font-weight: 700;
  text-transform: uppercase;
}
.about-right-three .title-area-about-three .title {
  font-size: 60px;
  line-height: 65px;
  text-transform: uppercase;
  margin-top: 20px;
}
@media only screen and (max-width: 1199px) {
  .about-right-three .title-area-about-three .title {
    font-size: 44px;
  }
}
@media only screen and (max-width: 767px) {
  .about-right-three .title-area-about-three .title {
    font-size: 36px;
    line-height: 55px;
  }
}
@media only screen and (max-width: 479px) {
  .about-right-three .title-area-about-three .title {
    font-size: 24px;
    line-height: 44px;
  }
}
.about-right-three .title-area-about-three .title span {
  font-size: 48px;
}
@media only screen and (max-width: 767px) {
  .about-right-three .title-area-about-three .title span {
    font-size: 36px;
  }
}
@media only screen and (max-width: 767px) {
  .about-right-three .title-area-about-three .title span {
    font-size: 24px;
  }
}
.about-right-three .title-area-about-three .title span span {
  color: var(--color-primary-3);
}

.about-three-thumbnail-left {
  position: relative;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-three-thumbnail-left img {
    width: 100%;
  }
}
.about-three-thumbnail-left::after {
  position: absolute;
  content: "";
  top: 60px;
  left: 20px;
  width: 200px;
  height: 10px;
  width: 120px;
  background: var(--color-primary-3);
}
.about-three-thumbnail-left .about-sm-thumb {
  position: absolute;
  top: 13%;
  left: -28%;
  animation: jump-1 5s linear infinite;
}
@media only screen and (max-width: 1199px) {
  .about-three-thumbnail-left .about-sm-thumb {
    left: -11%;
    width: 65%;
    top: 14%;
  }
}
.about-three-thumbnail-left .vedio-icone {
  position: absolute;
  right: -5%;
  bottom: -6%;
  max-width: max-content;
  padding: 0 !important;
  height: auto;
  object-fit: contain;
  cursor: auto;
}
@media only screen and (max-width: 479px) {
  .about-three-thumbnail-left .vedio-icone {
    right: -8%;
    bottom: -17%;
  }
}
.about-three-thumbnail-left .vedio-icone span {
  position: relative;
  height: auto;
  width: auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.about-three-thumbnail-left .vedio-icone span::after {
  display: none;
}
.about-three-thumbnail-left .vedio-icone span::before {
  display: none;
}
.about-three-thumbnail-left .vedio-icone span img {
  width: 120px;
  height: 143px;
}
.about-three-thumbnail-left .vedio-icone span span {
  position: relative;
  border-left: 25px solid #ffffff;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  transform: translate(-50%, -39%);
  left: -58px;
}

.inner-about-three p.disc {
  padding-left: 20px;
  border-left: 5px solid var(--color-primary-3);
  margin-bottom: 30px;
  margin-top: 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
}

.solution-wrapper-right {
  margin-left: -60px;
}
@media only screen and (max-width: 767px) {
  .solution-wrapper-right {
    margin-left: -20px;
  }
}
@media only screen and (max-width: 575px) {
  .solution-wrapper-right {
    margin-left: 0;
  }
}

.single-business-solution {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}
.single-business-solution:last-child {
  margin-bottom: 0;
}
.single-business-solution i {
  height: 18px;
  width: 18px;
  background: var(--color-primary-3);
  font-size: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
}
.single-business-solution p {
  color: #1C2539;
  font-weight: 500;
  font-size: 16px;
  margin-left: 10px;
}

.rts-user-three-wrapper {
  margin-top: 65px;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .rts-user-three-wrapper {
    align-items: inherit;
    flex-direction: column;
  }
}
.rts-user-three-wrapper .user-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  flex-basis: 27%;
}
.rts-user-three-wrapper .user-wrapper a {
  position: absolute;
  left: 0;
  z-index: 2;
  transition: 0.3s;
}
.rts-user-three-wrapper .user-wrapper a:nth-child(2) {
  margin-left: 50px;
  z-index: 4;
}
.rts-user-three-wrapper .user-wrapper a:nth-child(3) {
  margin-left: 100px;
  z-index: 3;
}
.rts-user-three-wrapper .user-wrapper a:hover {
  z-index: 10;
  transform: scale(1.05) translateY(-5px);
}
@media only screen and (max-width: 767px) {
  .rts-user-three-wrapper .reviews {
    margin-top: 50px;
  }
}
.rts-user-three-wrapper .reviews .title {
  margin-bottom: 0px;
}
.rts-user-three-wrapper .reviews span {
  color: var(--color-primary-3);
}
@media only screen and (max-width: 767px) {
  .rts-user-three-wrapper .rts-btn {
    max-width: max-content;
    margin-left: 0 !important;
    margin-top: 20px;
  }
}

.cta-three-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
@media only screen and (max-width: 767px) {
  .cta-three-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
}
.cta-three-wrapper .title {
  margin-bottom: 0;
  color: #fff;
  text-transform: uppercase;
}
@media only screen and (max-width: 1199px) {
  .cta-three-wrapper .title {
    font-size: 20px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cta-three-wrapper .title {
    font-size: 16px;
  }
}
.cta-three-wrapper .title a {
  color: var(--color-primary-3);
}
.cta-three-wrapper a {
  margin-left: auto;
}
@media only screen and (max-width: 767px) {
  .cta-three-wrapper a {
    margin-left: 0;
    margin-top: 20px;
  }
}

.contoler-company {
  display: flex;
}
@media only screen and (max-width: 767px) {
  .contoler-company {
    flex-direction: column;
  }
}
@media only screen and (max-width: 767px) {
  .contoler-company .tab-content {
    margin-top: 30px;
  }
}

.about-company-wrapper p.disc {
  color: #5D666F;
  font-size: 18px;
  margin-bottom: 60px;
  line-height: 28px;
}
@media only screen and (max-width: 767px) {
  .about-company-wrapper p.disc {
    font-size: 16px;
    margin-bottom: 25px;
  }
  .about-company-wrapper p.disc br {
    display: none;
  }
}

.rts-tab-style-one .button-area {
  padding: 30px;
  border: 1px solid #EDEFF3;
  border-radius: 20px;
  background: #fff;
  text-align: left;
  min-width: max-content;
}
@media only screen and (max-width: 767px) {
  .rts-tab-style-one .button-area {
    padding: 10px;
  }
}
.rts-tab-style-one .button-area button {
  background: transparent !important;
  color: #5D666F;
  padding-bottom: 20px;
  border-bottom: 1px solid #EDEFF3;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
}
@media only screen and (max-width: 767px) {
  .rts-tab-style-one .button-area button {
    font-size: 14px;
  }
}
.rts-tab-style-one .button-area button:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.rts-tab-style-one .button-area button.active {
  color: #0B4DF5;
}
.rts-tab-style-one .tab-content {
  margin-left: 30px;
}
@media only screen and (max-width: 767px) {
  .rts-tab-style-one .tab-content {
    margin-left: 10px;
  }
}
.rts-tab-style-one .tab-content .rts-tab-content-one {
  margin-right: -8px;
}
.rts-tab-style-one .tab-content .rts-tab-content-one p.disc {
  font-size: 16px;
  font-weight: 500;
  color: #1C2539;
  line-height: 26px;
  margin-top: -4px;
  margin-bottom: 24px;
}
.rts-tab-style-one .tab-content .rts-tab-content-one .check-area {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.rts-tab-style-one .tab-content .rts-tab-content-one .check-area:last-child {
  margin-bottom: 0;
}
.rts-tab-style-one .tab-content .rts-tab-content-one .check-area i {
  color: var(--color-primary-2);
  font-size: 18px;
}
.rts-tab-style-one .tab-content .rts-tab-content-one .check-area p {
  margin-bottom: 0;
  margin-left: 10px;
  font-size: 16px;
  color: #5D666F;
  font-weight: 400;
  margin-bottom: -6px;
}
.rts-tab-style-one .tab-content .rts-tab-content-one a.rts-btn {
  margin-top: 40px;
  display: block;
  max-width: max-content;
}

@media only screen and (max-width: 767px) {
  .home-blue .title-area.service-h2 .title {
    font-size: 23px;
    color: #1C2539 !important;
    font-weight: 700;
    line-height: 58px;
    line-height: 30px;
  }
}

@media only screen and (max-width: 767px) {
  .home-blue .title-area .title {
    font-size: 23px;
    line-height: 30px;
  }
}

.about-company-thumbnail {
  position: relative;
  z-index: 1;
}
.about-company-thumbnail::after {
  position: absolute;
  content: "";
  height: 517.43px;
  min-width: 712px;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
  top: -10%;
  left: 4%;
  animation: jump-1 5s linear infinite;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .about-company-thumbnail::after {
    height: 447.43px;
    min-width: 660px;
  }
}
@media only screen and (max-width: 1199px) {
  .about-company-thumbnail::after {
    height: 380.43px;
    min-width: 712px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-company-thumbnail::after {
    height: 96%;
  }
}
@media only screen and (max-width: 767px) {
  .about-company-thumbnail::after {
    height: 391.43px;
    min-width: 712px;
  }
}
@media only screen and (max-width: 479px) {
  .about-company-thumbnail::after {
    height: 100%;
    min-width: 708px;
  }
}
.about-company-thumbnail img {
  margin-left: 40px;
}
@media only screen and (max-width: 767px) {
  .about-company-thumbnail img {
    width: 76%;
  }
}

.rts-about-our-company-h2 {
  position: relative;
}
.rts-about-our-company-h2::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  contain: "";
  height: 235.7px;
  width: 213.54px;
  background-repeat: no-repeat;
  animation: jump-2 5s linear infinite;
  z-index: -1;
}
@media only screen and (max-width: 575px) {
  .rts-about-our-company-h2::after {
    display: none;
  }
}

.home-six-about h3.title {
  font-size: 40px;
  line-height: 52px;
}
@media only screen and (max-width: 575px) {
  .home-six-about h3.title {
    font-size: 26px;
    line-height: 35px;
  }
}

.inner-about-home-6 p.disc {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #5D666F;
  padding-right: 50px;
}

.about-home-six .thumbnail {
  position: relative;
}
.about-home-six .thumbnail img.small {
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 80px;
  animation: floating 5s linear infinite;
}
.about-home-six .thumbnail .experience-area {
  padding: 40px;
  background: #fff;
  width: 70%;
  bottom: 0;
  left: 60px;
  position: absolute;
  box-shadow: 0px 16px 29px rgba(0, 0, 0, 0.12);
}
.about-home-six .thumbnail .experience-area .title {
  font-weight: 800;
  font-size: 48px;
  line-height: 30px;
  color: var(--color-primary-5);
  margin-bottom: 10px;
}
.about-home-six .thumbnail .experience-area span {
  color: #F64A00;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
}

.about-single-home-6 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 46px;
  position: relative;
  z-index: 1;
}
.about-single-home-6:last-child::after {
  display: none;
}
.about-single-home-6::after {
  position: absolute;
  content: "";
  left: 30px;
  top: 65%;
  bottom: 0;
  height: 120px;
  width: 1px;
  background: #D9D9D9;
  z-index: -1;
}
@media only screen and (max-width: 575px) {
  .about-single-home-6::after {
    display: none;
  }
}
.about-single-home-6 .discription p.disc {
  max-width: 90%;
}
.about-single-home-6 .icon {
  margin-right: 25px;
}
.about-single-home-6 .icon img {
  box-shadow: 0px 9px 23px rgba(24, 16, 16, 0.1);
  border-radius: 50%;
}
.about-single-home-6 .discription .title {
  margin-bottom: 7px;
}

.background-service {
  padding: 70px;
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (max-width: 575px) {
  .background-service {
    padding: 20px;
  }
}
.background-service.service-three {
  padding: 70px 195px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .background-service.service-three {
    padding: 70px 100px;
  }
}
@media only screen and (max-width: 1199px) {
  .background-service.service-three {
    padding: 70px 100px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .background-service.service-three {
    padding: 70px 50px;
  }
}
@media only screen and (max-width: 767px) {
  .background-service.service-three {
    padding: 40px 0px 60px 20px;
  }
}
@media only screen and (max-width: 575px) {
  .background-service.service-three {
    padding: 0px 0px 40px 20px;
  }
}

.plr--120-service {
  padding: 0 120px;
}
@media only screen and (max-width: 1199px) {
  .plr--120-service {
    padding: 0;
  }
}

.service-one-inner {
  display: flex;
  padding: 52px 35px 40px 64px;
  position: relative;
  height: 100%;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .service-one-inner {
    padding: 36px 19px 40px 23px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .service-one-inner {
    padding: 42px 18px 25px 15px;
  }
}
@media only screen and (max-width: 767px) {
  .service-one-inner {
    padding: 42px 18px 25px 15px;
  }
}
@media only screen and (max-width: 1199px) {
  .service-one-inner::after {
    display: none;
  }
}
@media only screen and (max-width: 1199px) {
  .service-one-inner::before {
    display: none;
  }
}
.service-one-inner::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 1px;
  background: #0001;
  right: -15px;
}
.service-one-inner.one::before {
  position: absolute;
  content: "";
  width: 90%;
  height: 1px;
  background: #0001;
  bottom: 0;
  left: 13%;
}
.service-one-inner.two::before {
  position: absolute;
  content: "";
  width: 103%;
  height: 1px;
  background: #0001;
  bottom: 0;
  left: 0;
}
.service-one-inner.three::before {
  position: absolute;
  content: "";
  width: 103%;
  height: 1px;
  background: #0001;
  bottom: 0;
  left: 0;
}
.service-one-inner.three::after {
  display: none;
}
.service-one-inner.four::after {
  position: absolute;
  content: "";
  height: 71%;
  width: 1px;
  background: #0001;
  right: -15px;
}
.service-one-inner.five::after {
  position: absolute;
  content: "";
  height: 71%;
  width: 1px;
  background: #0001;
  right: -15px;
}
.service-one-inner.six::after {
  position: absolute;
  content: "";
  height: 71%;
  width: 1px;
  background: #0001;
  right: -15px;
  display: none;
}
.service-one-inner .thumbnail {
  margin-right: 37px;
}
@media only screen and (min-width: 1600px) and (max-width: 1919px) {
  .service-one-inner .thumbnail {
    margin-right: 20px;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .service-one-inner .thumbnail {
    margin-right: 20px;
  }
}
@media only screen and (max-width: 1199px) {
  .service-one-inner .thumbnail {
    margin-right: 20px;
  }
}
.service-one-inner .thumbnail img {
  max-width: 65px;
  height: auto;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .service-one-inner .thumbnail img {
    max-width: 50px;
  }
}
@media only screen and (max-width: 1199px) {
  .service-one-inner .thumbnail img {
    max-width: 40px;
  }
}
.service-one-inner .service-details .title {
  margin-bottom: 7px;
}
@media only screen and (min-width: 1600px) and (max-width: 1919px) {
  .service-one-inner .service-details .title {
    font-size: 21px;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .service-one-inner .service-details .title {
    font-size: 20px;
  }
}
.service-one-inner .service-details p {
  margin-bottom: 20px;
}

.color-primary {
  color: var(--color-primary);
}
.color-primary.sub {
  font-weight: 600;
  letter-spacing: 0.1em;
}
@media only screen and (max-width: 479px) {
  .color-primary.sub {
    font-size: 14px;
  }
}

.service-detials-step-2 p.disc {
  font-size: 16px;
  line-height: 26px;
}
.service-detials-step-2.inner {
  max-width: 900px;
  margin: 0 auto;
}

.service-detials-step-1 .thumbnail {
  margin-bottom: 45px;
}
.service-detials-step-1 .title {
  margin-bottom: 16px;
}
.service-detials-step-1 p.disc {
  margin-bottom: 23px;
  font-size: 16px;
  line-height: 26px;
}
.service-detials-step-1 .service-details-card {
  padding: 30px;
  box-shadow: 0px 8px 30px #6a6a6a1a;
  display: flex;
  align-items: flex-start;
  border-left: 5px solid var(--color-primary);
}
.service-detials-step-1 .service-details-card .thumbnail img {
  height: 29px;
  width: 74px;
}
.service-detials-step-1 .service-details-card .details {
  margin-left: 20px;
}
.service-detials-step-1 .service-details-card .details .title {
  margin-bottom: 5px;
  font-size: 20px;
}
.service-detials-step-1 .service-details-card .details p {
  margin-bottom: 0;
}

.service-detials-step-2 .single-service-step {
  background: #fff;
  padding: 40px 20px;
  border: 1px solid #EEEEEE;
  box-shadow: 0px 6px 39px #0000000a;
}
.service-detials-step-2 .single-service-step p.step {
  position: relative;
  color: #fff;
  z-index: 1;
  margin-bottom: 52px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin-top: 29px;
}
.service-detials-step-2 .single-service-step p.step::after {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  background: #DF0A0A;
  height: 60px;
  width: 60px;
  transform: translate(-50%, -50%);
  z-index: -1;
  border-radius: 50%;
}
.service-detials-step-2 .single-service-step p.step::before {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  background: #e81c2e1a;
  height: 90px;
  width: 90px;
  transform: translate(-50%, -50%);
  z-index: -1;
  border-radius: 50%;
}
.service-detials-step-2 .single-service-step .title {
  margin-bottom: 8px;
}
.service-detials-step-2 .single-service-step p.disc {
  font-size: 16px;
  line-height: 26px;
}

.service-detials-step-3 .title {
  margin-bottom: 8px;
}
.service-detials-step-3 p.disc {
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 20px;
}
.service-detials-step-3 .single-banifits {
  margin-bottom: 10px;
}
.service-detials-step-3 .single-banifits i {
  margin-right: 15px;
  color: var(--color-primary);
}

.service-two-inner {
  box-shadow: 0px 13px 40px #1810100a;
  position: relative;
  border-radius: 15px;
}
.service-two-inner .thumbnail {
  overflow: hidden;
  display: block;
  border-radius: 15px 15px 0 0;
  position: relative;
}
.service-two-inner .thumbnail::after {
  position: absolute;
  right: 0;
  top: 0;
  content: "01";
  font-size: 18px;
  background: #fff;
  border-radius: 0 0 0 15px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-weight: 700;
}
.service-two-inner .thumbnail.two::after {
  content: "02";
}
.service-two-inner .thumbnail.three::after {
  content: "03";
}
.service-two-inner .thumbnail.four::after {
  content: "04";
}
.service-two-inner .thumbnail.five::after {
  content: "05";
}
.service-two-inner .thumbnail.six::after {
  content: "06";
}
.service-two-inner .thumbnail.seven::after {
  content: "07";
}
.service-two-inner .thumbnail.eight::after {
  content: "08";
}
.service-two-inner .thumbnail.nine::after {
  content: "09";
}
.service-two-inner .thumbnail img {
  width: 100%;
  border-radius: 15px 15px 0 0;
  transition: 0.3s;
}
.service-two-inner .body-content {
  z-index: 5;
  padding: 40px;
  background: #fff;
  border-radius: 0 0 15px 15px;
  position: absolute;
  bottom: -50%;
}
@media only screen and (max-width: 767px) {
  .service-two-inner .body-content {
    bottom: -37%;
  }
}
@media only screen and (max-width: 479px) {
  .service-two-inner .body-content {
    padding: 20px;
  }
}
.service-two-inner .body-content .hidden-area {
  max-height: 80px;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}
.service-two-inner .body-content .title {
  margin-bottom: 8px;
  font-size: 22px;
}
.service-two-inner .body-content p {
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #5D666F;
  margin-bottom: 15px;
}
.service-two-inner .body-content .rts-read-more-two {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  display: flex;
}
.service-two-inner .body-content .rts-read-more-two i {
  margin-left: 5px;
  transition: 0.3s;
}
.service-two-inner .body-content .rts-read-more-two:hover i {
  margin-left: 8px;
}
.service-two-inner:hover .thumbnail img {
  transform: scale(1.15);
}
.service-two-inner:hover .body-content .hidden-area {
  max-height: 150px;
  bottom: 0;
}

@media only screen and (max-width: 479px) {
  .col-xl-4.col-md-6.col-sm-12.col-12.pb--140.pb_md--100,
.col-xl-4.col-md-6.col-sm-12.col-12.pb--140.pb_md--60 {
    padding-bottom: 80px !important;
  }
}

@media only screen and (max-width: 479px) {
  .col-xl-4.col-md-6.col-sm-12.col-12.pb--140.pb_md--60.pb_sm--60 {
    padding-bottom: 30px !important;
  }
}

.padding-controler {
  margin-bottom: -75px;
}


@media only screen and (max-width: 1199px) {
  .accordion-service-bg {
    background-image: none;
    background: #F6F6F6;
  }
}
.accordion-service-bg.inner {
  background-image: none;
}

.rts-accordion-area.service {
  padding-left: 120px;
  padding-right: 120px;
}
@media only screen and (max-width: 1199px) {
  .rts-accordion-area.service {
    padding-left: 0;
    padding-right: 0;
  }
}
.rts-accordion-area.inner {
  background-color: var(--color-gray);
}

.accordion-service-inner .accordion-area {
  padding-right: 130px;
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner .accordion-area {
    padding-right: 15px;
  }
}
.accordion-service-inner .accordion-area .accordion {
  margin-top: 45px;
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner .accordion-area .accordion {
    margin-left: 0;
    margin-top: 30px;
  }
}
.accordion-service-inner .accordion-area .accordion .accordion-item {
  background: transparent;
  border: none;
  padding-bottom: 30px;
  position: relative;
  padding-left: 60px;
}
.accordion-service-inner .accordion-area .accordion .accordion-item:last-child {
  padding-bottom: 0;
}
@media only screen and (max-width: 1199px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item {
    padding-left: 98px;
  }
}
@media only screen and (max-width: 767px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item {
    padding-left: 52px;
  }
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item {
    padding-left: 0;
    padding-bottom: 15px;
  }
}
@media only screen and (max-width: 479px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item {
    padding-left: 0;
  }
}
.accordion-service-inner .accordion-area .accordion .accordion-item:last-child::after {
  display: none;
}
.accordion-service-inner .accordion-area .accordion .accordion-item::after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  border: 1px dashed #DF0A0A;
  top: 3px;
  left: 18px;
  position: absolute;
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item::after {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header {
    margin-bottom: 10px;
  }
}
.accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button {
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  box-shadow: none;
  padding: 0;
  position: relative;
  color: #1C2539;
}
@media only screen and (max-width: 767px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true] {
    color: var(--color-primary);
  }
}
.accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button::before {
  content: "";
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  left: -11.5%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  background-color: #fff;
  z-index: 5;
  transition: 0.3s;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    left: -51px;
  }
}
@media only screen and (max-width: 1199px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    left: -12.5%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    left: -18.5%;
  }
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    display: none;
  }
}
.accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
  content: "";
  position: absolute;
  left: 0;
  background-image: none;
  height: 50px;
  width: 50px;
  left: -14.6%;
  background: var(--color-primary);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  z-index: 5;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    left: -66px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    left: -21.6%;
  }
}
@media only screen and (max-width: 767px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    left: -17.6%;
  }
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    display: none;
  }
}
.accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button:focus {
  box-shadow: none;
}
.accordion-service-inner .accordion-area .accordion .accordion-item .accordion-header button::after {
  display: none;
}
.accordion-service-inner .accordion-area .accordion .accordion-item .accordion-body {
  padding: 0;
}
.accordion-service-inner.inner {
  max-width: 700px;
  margin: 0 auto;
}
.accordion-service-inner.inner .accordion-area .accordion .accordion-item::after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  border: 1px dashed #DF0A0A;
  top: 0;
  left: 10px;
  position: absolute;
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item::after {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header {
    margin-bottom: 10px;
  }
}
.accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button {
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  box-shadow: none;
  padding: 0;
  position: relative;
  color: #1C2539;
}
@media only screen and (max-width: 767px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true] {
    color: var(--color-primary);
  }
}
.accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button::before {
  content: "";
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  left: -11.5%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  background-color: #fff;
  z-index: 5;
  transition: 0.3s;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    left: -51px;
  }
}
@media only screen and (max-width: 1199px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    left: -12.5%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    left: -18.5%;
  }
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button::before {
    display: none;
  }
}
.accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
  content: "";
  position: absolute;
  left: 0;
  background-image: none;
  height: 50px;
  width: 50px;
  left: -14.6%;
  background: var(--color-primary);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  z-index: 5;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    left: -66px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    left: -21.6%;
  }
}
@media only screen and (max-width: 767px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    left: -17.6%;
  }
}
@media only screen and (max-width: 575px) {
  .accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::before {
    display: none;
  }
}
.accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button:focus {
  box-shadow: none;
}
.accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-header button::after {
  display: none;
}
.accordion-service-inner.inner .accordion-area .accordion .accordion-item .accordion-body {
  padding: 0;
}

.service-one-inner-four {
  position: relative;
}
.service-one-inner-four a.rts-btn {
  display: block;
  max-width: max-content;
  position: absolute;
  bottom: -57px;
  left: 40px;
  border-radius: 0 0 15px 15px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .service-one-inner-four a.rts-btn {
    bottom: -10%;
  }
}
@media only screen and (max-width: 479px) {
  .service-one-inner-four a.rts-btn {
    bottom: -15%;
  }
}
@media screen and (max-width: 380px) {
  .service-one-inner-four a.rts-btn {
    bottom: -21%;
  }
}
.service-one-inner-four a.rts-btn i {
  margin-left: 5px;
}
.service-one-inner-four a.rts-btn:hover {
  border: 1px solid var(--color-primary);
  background: #fff;
}
.service-one-inner-four .big-thumbnail-area {
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.service-one-inner-four .big-thumbnail-area .thumbnail {
  overflow: hidden;
  display: block;
  border-radius: 15px;
}
.service-one-inner-four .big-thumbnail-area .thumbnail:hover img {
  transform: scale(1.2);
}
.service-one-inner-four .big-thumbnail-area .thumbnail img {
  width: 100%;
  transition: 0.5s;
  border-radius: 15px;
}
.service-one-inner-four .big-thumbnail-area .content {
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 1;
  height: 145px;
  overflow: hidden;
  transition: 0.5s;
  text-align: left;
}
.service-one-inner-four .big-thumbnail-area .content img {
  max-width: 85px;
  height: auto;
  margin-bottom: 30px;
}
.service-one-inner-four .big-thumbnail-area .content .title {
  color: #fff;
  margin-bottom: 10px;
}
.service-one-inner-four .big-thumbnail-area .content p.disc {
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}
.service-one-inner-four .big-thumbnail-area .over_link {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  border-radius: 15px;
}
.service-one-inner-four .big-thumbnail-area img {
  width: 100%;
}
.service-one-inner-four .big-thumbnail-area::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85%;
  display: block;
  z-index: 0;
  content: "";
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 24.52%, rgba(6, 9, 12, 0.85) 87.86%);
  transition: opacity 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
  cursor: pointer;
  border-radius: 15px;
  transition: 0.5s;
}
.service-one-inner-four .big-thumbnail-area:hover::after {
  height: 100%;
  background: linear-gradient(to bottom, rgba(15, 15, 15, 0.01), black 100%);
}
.service-one-inner-four .big-thumbnail-area:hover .content {
  height: 206px;
}
.service-one-inner-four:hover .thumbnail img {
  transform: scale(1.2);
}

.title-service-three p {
  color: var(--color-primary-3);
  margin-bottom: 0;
}
.title-service-three .title {
  margin-top: 10px;
  text-transform: uppercase;
}

.bg-service-h2 {
  margin-top: -200px;
  padding-top: 320px;
  background-size: cover;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 767px) {
  .bg-service-h2 {
    padding-top: 294px;
  }
}

.rts-single-service-h2 {
  padding: 25px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #E4E7EE;
  transition: 0.3s;
}
.rts-single-service-h2 .thumbnail {
  overflow: hidden;
  display: block;
  border-radius: 20px;
}
.rts-single-service-h2 .thumbnail img {
  width: 100%;
  transition: 0.4s;
}
.rts-single-service-h2 .body {
  margin-top: 22px;
}
.rts-single-service-h2 .body a:hover .title {
  color: var(--color-primary-2);
}
.rts-single-service-h2 .body .title {
  margin-bottom: 10px;
  transition: 0.3s;
  font-size: 22px;
}
.rts-single-service-h2 .body p.disc {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 12px;
}
.rts-single-service-h2 .body a.btn-red-more {
  color: #1C2539;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.rts-single-service-h2 .body a.btn-red-more i {
  margin-left: 0;
  opacity: 0;
  transition: 0.3s;
}
.rts-single-service-h2:hover {
  box-shadow: 0px 12px 24px rgba(18, 22, 34, 0.07);
}
.rts-single-service-h2:hover .thumbnail img {
  transform: scale(1.2);
}
.rts-single-service-h2:hover .body a.btn-red-more {
  color: var(--color-primary-2);
}
.rts-single-service-h2:hover .body a.btn-red-more i {
  margin-left: 7px;
  opacity: 1;
}

.navigation-center-bottom {
  display: flex;
  align-items: center;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .navigation-center-bottom.service .swiper-button-next {
    right: 40%;
  }
}
@media only screen and (max-width: 767px) {
  .navigation-center-bottom.service .swiper-button-next {
    right: 40%;
  }
}
@media only screen and (max-width: 575px) {
  .navigation-center-bottom.service .swiper-button-next {
    right: 36%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .navigation-center-bottom.service .swiper-button-prev {
    left: 40%;
  }
}
@media only screen and (max-width: 767px) {
  .navigation-center-bottom.service .swiper-button-prev {
    left: 40%;
  }
}
@media only screen and (max-width: 575px) {
  .navigation-center-bottom.service .swiper-button-prev {
    left: 36%;
  }
}
.navigation-center-bottom .swiper-pagination {
  max-width: fit-content;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  bottom: -23px;
  font-weight: 700;
  font-size: 16px;
  color: #1C2539;
}
.navigation-center-bottom .swiper-pagination .swiper-pagination-current {
  color: var(--color-primary-3);
}
.navigation-center-bottom .swiper-button-next {
  right: 45%;
}
.navigation-center-bottom .swiper-button-next::after {
  font-family: "Font Awesome 5 Pro";
  font-size: 16px;
  color: #1C2539;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(24, 16, 16, 0.06);
  border-radius: 8px;
  transition: 0.3s;
}
.navigation-center-bottom .swiper-button-next:hover::after {
  background: var(--color-primary-3);
  color: #fff;
}
.navigation-center-bottom .swiper-button-prev {
  left: 45%;
}
.navigation-center-bottom .swiper-button-prev::after {
  font-family: "Font Awesome 5 Pro";
  font-size: 16px;
  color: #1C2539;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 10px 20px #1810100f;
  border-radius: 8px;
  transition: 0.3s;
}
.navigation-center-bottom .swiper-button-prev:hover::after {
  background: var(--color-primary-3);
  color: #fff;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .thumbnail.sm-thumb-service img {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .thumbnail.sm-thumb-service img {
    width: 100%;
  }
}

.about-service-width-controler {
  max-width: 87.5%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-service-width-controler {
    max-width: 100%;
  }
}
@media only screen and (max-width: 479px) {
  .about-service-width-controler {
    max-width: 100%;
    margin-right: -7px;
  }
}

.rts-service-area4 .container .title-service-three .pre-title {
  color: var(--color-primary-4);
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: "Red Hat Display", sans-serif;
}
.rts-service-area4 .container .title-service-three .title {
  text-transform: none;
}
@media (max-width: 767px) {
  .rts-service-area4 .container .title-service-three .title {
    margin-bottom: 0;
  }
}
@media (max-width: 991px) {
  .rts-service-area4 .container .service-one-inner-four {
    margin-bottom: 60px;
  }
}
.rts-service-area4 .container .service-one-inner-four .big-thumbnail-area {
  background: #f7f7f7;
  border-radius: 15px;
  padding: 40px;
}
.rts-service-area4 .container .service-one-inner-four .big-thumbnail-area::after {
  display: none;
}
@media (max-width: 991px) {
  .rts-service-area4 .container .service-one-inner-four .big-thumbnail-area {
    padding: 30px;
  }
}
.rts-service-area4 .container .service-one-inner-four .big-thumbnail-area .content {
  position: unset;
  height: auto;
  margin-top: 25px;
}
.rts-service-area4 .container .service-one-inner-four .big-thumbnail-area .content .title {
  color: #1C2539;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  font-family: "Red Hat Display", sans-serif;
}
.rts-service-area4 .container .service-one-inner-four .big-thumbnail-area .content .disc {
  color: #5D666F;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
.rts-service-area4 .container .service-one-inner-four .btn-primary-3 {
  background: var(--color-primary-4);
  bottom: -55px;
  border: none;
}
.rts-service-area4 .container .service-one-inner-four .btn-primary-3:hover {
  background: #E4E7FF;
  color: var(--color-primary-4);
}

.rts-service-area5 {
  margin-top: -150px;
}
@media (max-width: 1200px) {
  .rts-service-area5 {
    margin-top: 50px;
  }
}
.rts-service-area5 .container .service-one-inner-four {
  background: #FFFFFF;
  box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 45px;
  transition: all 0.4s;
}
@media (max-width: 1200px) and (min-width: 991px) {
  .rts-service-area5 .container .service-one-inner-four {
    padding: 35px;
  }
}
@media (max-width: 400px) {
  .rts-service-area5 .container .service-one-inner-four {
    padding: 40px 30px;
  }
}
.rts-service-area5 .container .service-one-inner-four .content {
  margin: 35px 0;
}
.rts-service-area5 .container .service-one-inner-four .btn-primary-3 {
  position: unset;
  background: var(--color-primary-2);
  border-radius: 100px;
  padding: 17px 45px;
  border: none;
}
.rts-service-area5 .container .service-one-inner-four .btn-primary-3:hover {
  color: var(--color-primary-2);
  background: var(--color-gray);
}
.rts-service-area5 .container .service-one-inner-four:hover {
  transform: translateY(-15px);
}

.index-six .rts-client-reviews-h2 {
  padding: 15px;
}
@media only screen and (max-width: 575px) {
  .index-six .about-home-six .thumbnail img.small {
    top: 0;
    right: 30px;
  }
}
@media only screen and (max-width: 575px) {
  .index-six .home-six-about {
    margin-top: 30px;
  }
}
.index-six p.pre-title {
  color: var(--color-primary-5);
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  font-family: var(--font-secondary);
  letter-spacing: 0.1em;
  margin-bottom: 13px;
  text-transform: uppercase;
}
.index-six h2.title {
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  color: #1C2539;
}
@media only screen and (max-width: 767px) {
  .index-six h2.title {
    font-size: 36px;
    line-height: 46px;
  }
}
@media only screen and (max-width: 575px) {
  .index-six h2.title {
    font-size: 26px;
    line-height: 36px;
  }
}
.index-six .single-service-home-six {
  background: #FFFFFF;
  box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.08);
  padding: 40px;
  border-radius: 10px;
  height: 100%;
}
.index-six .single-service-home-six .icon {
  margin-bottom: 40px;
}
.index-six .single-service-home-six .inner .title {
  margin-bottom: 20px;
}
.index-six .single-service-home-six .inner p.disc {
  margin-bottom: 30px;
}
.index-six .single-service-home-six a.rts-btn {
  display: block;
  max-width: max-content;
}
.index-six .single-service-home-six a.rts-btn:hover {
  background: var(--color-gray);
  color: #000;
}

.cta-one-bg {
  background-repeat: no-repeat;
  background-color: #DF0A0A;
  background-blend-mode: multiply;
  overflow: hidden;
  background-position: center;
  object-fit: contain;
  background-size: cover;
}

.rts-cta-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cta-one-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 120px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .cta-one-inner {
    padding: 50px 60px;
  }
}
@media only screen and (max-width: 767px) {
  .cta-one-inner {
    padding: 50px 60px;
    flex-direction: column;
  }
}
.cta-one-inner .cta-left {
  width: 50%;
}
@media only screen and (max-width: 767px) {
  .cta-one-inner .cta-left {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
}
@media only screen and (max-width: 767px) {
  .cta-one-inner .cta-right {
    text-align: center;
    margin-top: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .cta-one-inner .cta-right .rts-btn {
    padding: 13px 20px;
    font-size: 14px;
  }
}
.cta-one-inner .title {
  color: #fff;
  margin-bottom: 0;
  font-size: 40px;
}
@media only screen and (max-width: 1199px) {
  .cta-one-inner .title {
    font-size: 24px;
    line-height: 36px;
  }
}
@media only screen and (max-width: 479px) {
  .cta-one-inner .title {
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
  }
}

.bg-call-to-action-two {
  background-repeat: no-repeat;
  background-color: var(--color-primary-3);
  background-blend-mode: multiply;
  background-position: center;
  object-fit: contain;
  background-size: cover;
}

.cta-two-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 90px 0;
}
@media only screen and (max-width: 767px) {
  .cta-two-wrapper {
    flex-direction: column;
    padding: 45px 0;
  }
}
.cta-two-wrapper .title-area {
  width: 70%;
}
@media only screen and (max-width: 767px) {
  .cta-two-wrapper .title-area {
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
  }
}
.cta-two-wrapper .title-area .title {
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 53px;
}
@media only screen and (max-width: 1199px) {
  .cta-two-wrapper .title-area .title {
    font-size: 30px;
    line-height: 45px;
  }
}
@media only screen and (max-width: 767px) {
  .cta-two-wrapper .title-area .title {
    font-size: 24px;
    line-height: 36px;
  }
}

.cta-bg-h2 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cta-h2-wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.cta-h2-wrapper .icon {
  margin-top: 43px;
}
.cta-h2-wrapper .icon a {
  position: relative;
  z-index: 1;
  font-size: 30px;
  color: var(--color-primary-2);
}
@media only screen and (max-width: 479px) {
  .cta-h2-wrapper .icon a {
    top: 34px;
  }
}
.cta-h2-wrapper .icon a::after {
  position: absolute;
  width: 120px;
  height: 120px;
  content: "";
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 50%;
  z-index: -1;
}
@media only screen and (max-width: 479px) {
  .cta-h2-wrapper .icon a::after {
    width: 80px;
    height: 80px;
  }
}
.cta-h2-wrapper .body {
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cta-h2-wrapper .body p.info {
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #fff;
  margin-bottom: 30px;
}
@media only screen and (max-width: 479px) {
  .cta-h2-wrapper .body p.info {
    margin-bottom: 0;
  }
}
.cta-h2-wrapper .body p.info span {
  font-weight: 800;
}
.cta-h2-wrapper .body a.number {
  font-size: 72px;
  font-weight: 700;
  color: #fff;
  margin-top: 20px;
}
@media only screen and (max-width: 575px) {
  .cta-h2-wrapper .body a.number {
    font-size: 41px;
  }
}
.cta-h2-wrapper .body a.rts-btn {
  display: block;
  max-width: max-content;
  margin: 50px auto 0 auto;
}

.rts-callto-acation-area4 {
  margin-top: 35px;
  background-color: #000000cc;
}
.rts-callto-acation-area4 .container .cta-two-wrapper .title {
  text-transform: none;
}
@media (max-width: 1200px) {
  .rts-callto-acation-area4 .container .cta-two-wrapper .title br {
    display: none;
  }
}
.rts-callto-acation-area4 .container .cta-two-wrapper .btn-secondary-3 {
  color: var(--color-primary-4);
  background-color: #E4E7FF;
}
.rts-callto-acation-area4 .container .cta-two-wrapper .btn-secondary-3:hover {
  background: var(--color-primary-4);
  color: #fff;
}

.rts-callto-acation-area5 {
  background-color: #000000cc;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-position: center;
  object-fit: contain;
  background-size: cover;
}
.rts-callto-acation-area5 .container .cta-two-wrapper .title-area {
  width: 100%;
}
.rts-callto-acation-area5 .container .cta-two-wrapper .title {
  text-transform: none;
  font-size: 36px;
}
@media (max-width: 1200px) {
  .rts-callto-acation-area5 .container .cta-two-wrapper .title br {
    display: none;
  }
}
@media (max-width: 991px) and (min-width: 768px) {
  .rts-callto-acation-area5 .container .cta-two-wrapper .title {
    font-size: 28px;
    line-height: 40px;
  }
}
@media (max-width: 768px) {
  .rts-callto-acation-area5 .container .cta-two-wrapper .title {
    font-size: 28px;
    line-height: 40px;
  }
}
@media (max-width: 450px) {
  .rts-callto-acation-area5 .container .cta-two-wrapper .title {
    font-size: 24px;
    line-height: 30px;
  }
}
@media (max-width: 380px) {
  .rts-callto-acation-area5 .container .cta-two-wrapper .title {
    font-size: 20px;
    line-height: 30px;
  }
}
.rts-callto-acation-area5 .container .cta-two-wrapper .btn-secondary-3 {
  background-color: var(--color-gray);
  color: var(--color-primary-2);
  border-radius: 100px;
}
.rts-callto-acation-area5 .container .cta-two-wrapper .btn-secondary-3:hover {
  background: var(--color-primary-2);
  color: #fff;
}
@media (max-width: 576px) {
  .rts-callto-acation-area5 .container .cta-two-wrapper .btn-secondary-3 {
    padding: 12px 24px;
  }
}

.case-study-area .item {
  position: relative;
  overflow: hidden;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.04);
  margin-bottom: 30px;
  margin-right: 20px;
}
.case-study-area .item:hover .read-more {
  color: #fff;
}
.case-study-area .item:hover .read-more::before {
  background-color: var(--color-primary);
  height: 100%;
  bottom: 0;
}
.case-study-area .item .item-image {
  padding: 25px;
  overflow: hidden;
}
.case-study-area .item .item-image img {
  width: 100%;
}
.case-study-area .item .item-content {
  padding: 0 25px 25px 25px;
}
.case-study-area .item .item-content h6 {
  color: #999;
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 400;
}
.case-study-area .item .item-content .text-heding3 {
  color: #1c2539;
  font-family: "Red Hat Display", Sans-serif;
  font-size: 22px;
  font-weight: 700;
}
.case-study-area .item .item-content p {
  font-size: 16px;
  font-weight: 400;
}
.case-study-area .item .read-more {
  background: #fff;
  border-top: 1px solid #f1f1f1;
  padding: 16px 20px;
  display: block;
  transition: all 0.3s ease 0s;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  z-index: 2;
  color: #999;
}
.case-study-area .item .read-more::before {
  content: "";
  position: absolute;
  background-color: #040404;
  width: 100%;
  height: 0;
  transition: all 0.3s ease 0s;
  left: 0;
  top: 0;
  z-index: -1;
}
.case-study-area .item .read-more span {
  float: right;
}

a.rts-btn.btn-secondary-5 {
  background: #fff;
  border-radius: 30px;
  color: var(--color-primary-5);
  border: 2px solid transparent;
}
a.rts-btn.btn-secondary-5:hover {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.index-six .rts-callto-acation-area4 {
  margin-top: 0;
}

.business-goal-one {
  position: relative;
}
.business-goal-one img.small {
  position: absolute;
  top: 9%;
  transform: translateY(-50%);
  right: 2%;
  animation: jump-2 5s linear infinite;
  z-index: 7;
}
@media only screen and (max-width: 575px) {
  .business-goal-one img.small {
    width: 50%;
    top: 37%;
  }
}

.rts-business-goal {
  margin-top: 50px;
}
.rts-business-goal .single-goal {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
}
.rts-business-goal .single-goal:last-child {
  margin-bottom: 0;
}
.rts-business-goal .single-goal img {
  margin-right: 30px;
}
.rts-business-goal .single-goal .goal-wrapper .title {
  margin-bottom: 5px;
}
.rts-business-goal .single-goal .goal-wrapper p {
  color: #5D666F;
}

.goal-button-wrapper {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 575px) {
  .goal-button-wrapper {
    align-items: flex-start;
    flex-direction: column;
  }
}
.goal-button-wrapper .vedio-icone {
  margin-left: 70px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .goal-button-wrapper .vedio-icone {
    margin-left: 136px;
  }
}
@media only screen and (max-width: 575px) {
  .goal-button-wrapper .vedio-icone {
    margin-left: 29px;
    margin-top: 50px;
  }
}

.rts-business-solution-left {
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 80px;
}
.rts-business-solution-left .success-rate {
  position: absolute;
  background: #F64A00;
  padding: 47px;
  left: -1%;
  bottom: -13%;
  width: 254px;
  height: 167px;
  animation: jump-1 5s linear infinite;
}
@media only screen and (max-width: 767px) {
  .rts-business-solution-left .success-rate {
    width: inherit;
    height: inherit;
    padding: 22px;
    bottom: -10%;
  }
}
.rts-business-solution-left .success-rate .title {
  margin-bottom: 0;
  color: #fff;
}
.rts-business-solution-left .success-rate span {
  font-size: 16px;
  letter-spacing: 0.16em;
  color: #fff;
  font-weight: 500;
}

.rts-business-solution-right {
  padding-left: 50px;
}
@media only screen and (max-width: 767px) {
  .rts-business-solution-right {
    padding-left: 0;
  }
}
.rts-business-solution-right .title-area .sub {
  color: var(--color-primary-3);
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}
.rts-business-solution-right .title-area .title {
  font-size: 60px;
  line-height: 65px;
  text-transform: uppercase;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .rts-business-solution-right .title-area .title {
    font-size: 50px;
  }
}
@media only screen and (max-width: 1199px) {
  .rts-business-solution-right .title-area .title {
    font-size: 36px;
    line-height: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-business-solution-right .title-area .title {
    font-size: 34px;
    line-height: 45px;
  }
}
@media only screen and (max-width: 575px) {
  .rts-business-solution-right .title-area .title {
    font-size: 24px;
    line-height: 40px;
  }
}
.rts-business-solution-right .title-area .title span {
  font-size: 48px;
}
@media only screen and (max-width: 1199px) {
  .rts-business-solution-right .title-area .title span {
    font-size: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-business-solution-right .title-area .title span {
    font-size: 34px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-business-solution-right .title-area .title span {
    font-size: 24px;
  }
}
.rts-business-solution-right .title-area .title span span {
  color: var(--color-primary-3);
}
.rts-business-solution-right .content-area p.disc {
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #5D666F;
}

.single-business-solution-2 {
  margin-left: 38px;
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(24, 16, 16, 0.07);
  padding: 32px;
  position: relative;
  border-left: 8px solid transparent;
  transition: 0.3s;
  margin-bottom: 25px;
}
@media only screen and (max-width: 479px) {
  .single-business-solution-2 {
    padding: 15px 10px;
  }
}
.single-business-solution-2:hover {
  transform: translateY(-5px);
}
.single-business-solution-2.active {
  border-left: 8px solid var(--color-primary-3);
}
.single-business-solution-2:last-child {
  margin-bottom: 0;
}
.single-business-solution-2 .icon {
  position: absolute;
  left: -45px;
  top: 50%;
  transform: translateY(-50%);
}
.single-business-solution-2 .content {
  padding-left: 30px;
}
@media only screen and (max-width: 479px) {
  .single-business-solution-2 .content {
    padding-left: 45px;
  }
}
.single-business-solution-2 .title {
  font-size: 22px;
  margin-bottom: 5px;
}
@media only screen and (max-width: 479px) {
  .single-business-solution-2 .title {
    font-size: 16px;
  }
}
.single-business-solution-2 p.disc {
  font-size: 16px;
  line-height: 26px;
  color: #5D666F;
}
.single-business-solution-2:hover {
  border-color: var(--color-primary-3);
}

.business-case-bg-2 {
  background-position: top center;
  background-repeat: no-repeat;
  width: 100%;
}

.container-cusiness-case-h2 {
  max-width: 1680px;
  margin: 0 auto;
}

.rts-business-case-s-2 {
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 20px;
  width: 100%;
}
.rts-business-case-s-2::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: -64%;
  right: -56%;
  z-index: 0;
  background-repeat: no-repeat;
  transition: 0.3s;
}
.rts-business-case-s-2 .thumbnail {
  border-radius: 20px;
  overflow: hidden;
}
.rts-business-case-s-2 .thumbnail img {
  overflow: hidden;
  transition: 0.3s;
  border-radius: 20px;
}
.rts-business-case-s-2 .inner {
  padding: 35px;
  text-align: center;
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 84%;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  z-index: 10;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-business-case-s-2 .inner {
    padding: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-business-case-s-2 .inner {
    padding: 15px;
  }
}
.rts-business-case-s-2 .inner a:hover .title {
  color: var(--color-primary-2);
}
.rts-business-case-s-2 .inner span {
  color: #5D666F;
  font-size: 16px;
  position: relative;
}
.rts-business-case-s-2 .inner span::after {
  position: absolute;
  content: "";
  height: 58px;
  width: 58px;
  bottom: -85px;
  left: -144px;
  transition: 0.3s;
}
.rts-business-case-s-2 .inner .title {
  margin-bottom: 2px;
  transition: 0.3s;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1C2539;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-business-case-s-2 .inner .title {
    font-size: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-business-case-s-2 .inner .title {
    font-size: 18px;
    margin-bottom: -4px;
  }
}
.rts-business-case-s-2:hover .thumbnail img {
  transform: scale(1.1);
  filter: grayscale(1);
}
.rts-business-case-s-2:hover::after {
  top: -16%;
  right: -56%;
}
.rts-business-case-s-2:hover .inner span::after {
  bottom: -55px;
  left: -111px;
}

.rts-business-goal2 {
  padding-top: 120px;
}
@media (max-width: 767px) {
  .rts-business-goal2 {
    padding-top: 60px;
  }
}
.rts-business-goal2 .container .business-goal-right .rts-title-area::after {
  display: none;
}
.rts-business-goal2 .container .business-goal-right .rts-title-area .pre-title {
  color: var(--color-primary-4);
}
.rts-business-goal2 .container .business-goal-right .single-goal .goal-wrapper .title {
  color: #0B101C;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
}
.rts-business-goal2 .container .business-goal-right .goal-button-wrapper .btn-primary {
  background: var(--color-primary-4);
}
.rts-business-goal2 .container .business-goal-right .goal-button-wrapper .btn-primary:hover {
  background: #E4E7FF !important;
  color: var(--color-primary-4) !important;
}
.rts-business-goal2 .container .business-goal-right .goal-button-wrapper .vedio-icone .video-play-button span {
  border-left-color: var(--color-primary-4);
}
.rts-business-goal2 .container .business-goal-right .goal-button-wrapper .vedio-icone .video-play-button::before {
  border-color: #E4E7FF;
}
.rts-business-goal2 .container .business-goal-right .goal-button-wrapper .vedio-icone .video-play-button::after {
  background: #E4E7FF;
}
.rts-business-goal2 .container .business-goal-right .goal-button-wrapper .vedio-icone .video-play-button .outer-text {
  color: var(--color-primary-4);
}

.rts-business-solution5 {
  padding: 120px 0;
}
@media (max-width: 991px) {
  .rts-business-solution5 {
    padding: 80px 0;
  }
}
@media (max-width: 991px) {
  .rts-business-solution5 .container .first-child {
    order: 2;
  }
}
.rts-business-solution5 .container .rts-business-solution-right {
  padding: 0 40px 0 0;
}
@media (max-width: 576px) {
  .rts-business-solution5 .container .rts-business-solution-right {
    padding: 0;
  }
}
.rts-business-solution5 .container .rts-business-solution-right .title-area .sub {
  color: var(--color-primary-2);
  font-weight: 400;
  letter-spacing: 1px;
}
.rts-business-solution5 .container .rts-business-solution-right .title-area .title {
  text-transform: none;
  margin-top: 10px;
  font-size: 48px;
  line-height: 58px;
}
@media (max-width: 1200px) and (min-width: 991px) {
  .rts-business-solution5 .container .rts-business-solution-right .title-area .title {
    font-size: 42px;
    line-height: 52px;
  }
}
@media (max-width: 576px) {
  .rts-business-solution5 .container .rts-business-solution-right .title-area .title {
    font-size: 40px;
    line-height: 50px;
  }
}
@media (max-width: 400px) {
  .rts-business-solution5 .container .rts-business-solution-right .title-area .title {
    font-size: 32px;
    line-height: 42px;
  }
}
.rts-business-solution5 .container .rts-business-solution-right .content-area {
  margin-right: 100px;
}
@media (max-width: 1200px) and (min-width: 991px) {
  .rts-business-solution5 .container .rts-business-solution-right .content-area {
    margin-right: 0;
  }
}
@media (max-width: 768px) {
  .rts-business-solution5 .container .rts-business-solution-right .content-area {
    margin-right: 0;
  }
}
.rts-business-solution5 .container .rts-business-solution-right .content-area .single-business-solution-2 {
  margin: 0 40px 0 0;
  border-left: 8px solid var(--color-primary-2);
}
@media (max-width: 1200px) and (min-width: 991px) {
  .rts-business-solution5 .container .rts-business-solution-right .content-area .single-business-solution-2 .content {
    padding-left: 10px;
  }
}
@media (max-width: 450px) {
  .rts-business-solution5 .container .rts-business-solution-right .content-area .single-business-solution-2 .content {
    padding-left: 20px;
  }
}
.rts-business-solution5 .container .rts-business-solution-left {
  justify-content: unset;
  margin-bottom: unset;
}
.rts-business-solution5 .container .rts-business-solution-left .thumbnail {
  position: relative;
}
.rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape1 {
  position: absolute;
  top: 0;
  right: 30%;
  width: 55px;
  animation: rotateIt 7s linear infinite;
}
@media (max-width: 1200px) and (min-width: 991px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape1 {
    width: 40px;
    top: 0;
    right: 30%;
  }
}
@media (max-width: 500px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape1 {
    width: 40px;
  }
}
@media (max-width: 400px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape1 {
    width: 30px;
  }
}
.rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape2 {
  position: absolute;
  top: 28%;
  right: 0;
  width: 80px;
  animation: rotateIt 7s linear infinite;
}
@media (max-width: 1200px) and (min-width: 991px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape2 {
    width: 60px;
    right: 0;
    top: 30%;
  }
}
@media (max-width: 500px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape2 {
    width: 50px;
    right: 10px;
  }
}
@media (max-width: 400px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape2 {
    width: 40px;
  }
}
.rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape3 {
  position: absolute;
  top: 0;
  right: 15px;
  width: 100px;
  animation: jump-3 5s linear infinite;
}
@media (max-width: 1200px) and (min-width: 991px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape3 {
    width: 80px;
    right: 0;
    top: -10px;
  }
}
@media (max-width: 768px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape3 {
    width: 80px;
  }
}
@media (max-width: 500px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape3 {
    width: 65px;
    right: 15px;
    top: -10px;
  }
}
@media (max-width: 400px) {
  .rts-business-solution5 .container .rts-business-solution-left .thumbnail .shape3 {
    width: 50px;
  }
}

.rts-business-goal5 {
  padding-top: 120px;
}
.rts-business-goal5 .container {
  max-width: 1400px;
}
@media (max-width: 1200px) {
  .rts-business-goal5 .container .first-child {
    order: 2;
  }
}
.rts-business-goal5 .container .title-area {
  margin-bottom: 80px;
}
.rts-business-goal5 .container .title-area .sub {
  color: var(--color-primary-2);
  letter-spacing: 1px;
}
.rts-business-goal5 .container .title-area .title {
  margin-top: 10px;
}
.rts-business-goal5 .container .content-box {
  padding: 0;
  margin: 0;
}
.rts-business-goal5 .container .content-box.first {
  margin-right: 30px;
}
@media (max-width: 1200px) {
  .rts-business-goal5 .container .content-box.first {
    margin-left: 30px;
    margin-right: 0;
  }
}
@media (max-width: 991px) {
  .rts-business-goal5 .container .content-box.first {
    margin: 0;
  }
}
.rts-business-goal5 .container .content-box.last {
  margin-left: 30px;
}
@media (max-width: 1200px) {
  .rts-business-goal5 .container .content-box.last {
    margin-right: 30px;
    margin-left: 0;
  }
}
@media (max-width: 991px) {
  .rts-business-goal5 .container .content-box.last {
    margin: 0;
  }
}
.rts-business-goal5 .container .content-box .content {
  margin-bottom: 35px;
  background: #FFFFFF;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 25px 35px;
  transition: all 0.3s;
}
@media (max-width: 470px) {
  .rts-business-goal5 .container .content-box .content {
    padding: 20px 25px;
  }
}
.rts-business-goal5 .container .content-box .content:hover {
  background: #1C2539;
}
.rts-business-goal5 .container .content-box .content:hover .main-title {
  color: #fff;
}
.rts-business-goal5 .container .content-box .content:hover .desc {
  color: #71787E;
}
.rts-business-goal5 .container .content-box .content.left {
  transform: translateX(-60px);
  animation: slide-one 10s linear infinite;
}
@media (max-width: 1600px) {
  .rts-business-goal5 .container .content-box .content.left {
    animation: none;
    transform: translateX(0);
  }
}
.rts-business-goal5 .container .content-box .content.one {
  transform: translateX(0);
  animation: slide-one1 10s linear infinite;
}
@media (max-width: 1600px) {
  .rts-business-goal5 .container .content-box .content.one {
    animation: none;
  }
}
.rts-business-goal5 .container .content-box .content.two {
  transform: translateX(0);
  animation: slide-two1 10s linear infinite !important;
}
@media (max-width: 1600px) {
  .rts-business-goal5 .container .content-box .content.two {
    animation: none !important;
  }
}
.rts-business-goal5 .container .content-box .content.right {
  transform: translateX(60px);
  animation: slide-two 10s linear infinite;
}
@media (max-width: 1600px) {
  .rts-business-goal5 .container .content-box .content.right {
    animation: none;
    transform: translateX(0);
  }
}
.rts-business-goal5 .container .content-box .content .main-title {
  margin-bottom: 10px;
  transition: all 0.3s;
}
.rts-business-goal5 .container .content-box .content .desc {
  font-size: 16px;
  line-height: 28px;
  transition: all 0.3s;
}
@media (max-width: 1200px) {
  .rts-business-goal5 .container .business-goal-one {
    margin-bottom: 30px;
  }
}
.rts-business-goal5 .container .business-goal-one .shape {
  position: absolute;
  top: 0;
  right: 20%;
  animation: jump-1 8s linear infinite;
}
@media (max-width: 450px) {
  .rts-business-goal5 .container .business-goal-one .shape {
    top: -10%;
    right: 0;
  }
}

.business-case5 span {
  color: var(--color-primary-2);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.business-case5 .title {
  margin-top: 10px;
}

.button-area-business-groth {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.button-area-business-groth a.rts-btn.btn-primary:hover {
  color: var(--color-primary-5);
  background: var(--color-gray);
}
@media only screen and (max-width: 479px) {
  .button-area-business-groth {
    flex-direction: column;
    align-items: flex-start;
  }
}
.button-area-business-groth .vedio-icone {
  margin-left: 50px;
}
@media only screen and (max-width: 575px) {
  .button-area-business-groth .vedio-icone {
    margin-left: 30px;
    padding-top: 104px;
  }
}
.button-area-business-groth .vedio-icone .video-play-button span {
  border-left: 14px solid var(--color-primary-5);
}
.button-area-business-groth .vedio-icone .outer-text {
  color: var(--color-primary-5);
}

.index-six .rts-gallery-area a.rts-btn.btn-primary:hover {
  color: var(--color-primary-5);
  background: var(--color-gray);
}
.index-six .rts-cta-wrapper .background-cta .cta-input-arae button:hover {
  background: var(--color-gray);
  color: var(--color-primary-5);
}
.index-six .footer-one-single-wized.mid-bg .opening-time-inner .rts-btn.contact-us:hover {
  color: var(--color-primary-5);
  background: var(--color-gray);
}

.counter-bg {
  height: 762px;
  background-size: cover;
  background-repeat: no-repeat;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .counter-bg {
    height: 640px;
  }
}
@media only screen and (max-width: 1199px) {
  .counter-bg {
    height: auto;
  }
}
.counter-bg.bg-2 {
  height: auto;
}

.single-counter {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 575px) {
  .single-counter.two {
    justify-content: flex-start !important;
    padding-left: 0 !important;
    margin-top: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-counter.three {
    justify-content: flex-start !important;
    padding-left: 0 !important;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .single-counter.three {
    padding-left: 0 !important;
    margin-top: 30px !important;
  }
}
@media only screen and (max-width: 575px) {
  .single-counter.three {
    justify-content: flex-start !important;
  }
}
@media only screen and (max-width: 1199px) {
  .single-counter.four {
    justify-content: flex-start !important;
    padding-left: 0 !important;
    margin-top: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-counter.four {
    justify-content: flex-start !important;
    padding-left: 61px !important;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .single-counter.four {
    justify-content: flex-start !important;
    padding-left: 32px !important;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 575px) {
  .single-counter.four {
    justify-content: flex-start !important;
    padding-left: 0 !important;
  }
}
.single-counter img {
  margin-right: 25px;
}
.single-counter .counter-details .title {
  color: #fff;
  margin-bottom: -2px;
  font-weight: 700;
}
.single-counter .counter-details .title span {
  position: relative;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .single-counter .counter-details .title span {
    font-size: 32px;
  }
}
@media only screen and (max-width: 767px) {
  .single-counter .counter-details .title span {
    font-size: 26px;
  }
}
.single-counter .counter-details .title span::after {
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  content: "+";
}
.single-counter .counter-details .title.happy span::after {
  content: "k+";
  right: -60px;
}
@media only screen and (max-width: 767px) {
  .single-counter .counter-details .title.happy span::after {
    right: -40px;
  }
}
.single-counter .counter-details p {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .single-counter .counter-details p {
    font-size: 12px;
  }
}
@media only screen and (max-width: 767px) {
  .single-counter .counter-details p {
    font-size: 16px;
  }
}

.counter-wrapper-two .single-counter {
  position: relative;
}
.counter-wrapper-two .single-counter img {
  margin-right: 0;
  position: absolute;
}
.counter-wrapper-two .single-counter .counter-details {
  padding: 20px;
  box-shadow: 0px 2px 20px #18101012;
  width: 100%;
  padding: 40px 40px 40px 70px;
  margin-left: 60px;
}
@media only screen and (max-width: 1199px) {
  .counter-wrapper-two .single-counter .counter-details {
    padding: 20px 15px 20px 50px;
  }
}
@media only screen and (max-width: 479px) {
  .counter-wrapper-two .single-counter .counter-details {
    padding: 30px 26px 30px 54px;
  }
}
.counter-wrapper-two .single-counter .counter-details .title {
  color: #1C2539;
}
.counter-wrapper-two .single-counter .counter-details .disc {
  color: #1C2539;
}

.counter-5 {
  background: #E9EFFF;
}
.counter-5 .single-counter .counter-details .title {
  color: #000;
}
.counter-5 .single-counter .counter-details p {
  color: #000;
}

.w-g-100 {
  width: 100%;
}

.thumbnail-gallery img {
  object-fit: contain;
  margin-top: -5px;
}

.gallery-bg {
  position: relative;
  margin-top: -23%;
}
@media only screen and (max-width: 1199px) {
  .gallery-bg {
    margin-top: 0;
  }
}

.bg-right-gallery {
  height: 100%;
  object-fit: cover;
  width: 100%;
  background-repeat: no-repeat;
  max-width: 100%;
  background-size: contain;
  padding: 50px;
  text-align: left;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-right-gallery {
    background-size: cover;
    border-radius: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .bg-right-gallery {
    background-size: cover;
    border-radius: 20px;
    background-repeat: no-repeat;
  }
}
@media only screen and (max-width: 575px) {
  .bg-right-gallery {
    padding: 25px;
  }
}
.bg-right-gallery::after {
  content: "";
  height: 350px;
  width: 350px;
  left: -40%;
  position: absolute;
  opacity: 0.1;
  animation: jump-1 2s linear infinite;
}
.bg-right-gallery .icon {
  margin-top: 48px;
}
@media only screen and (max-width: 1400px) {
  .bg-right-gallery .icon {
    margin-top: 0;
  }
}
.bg-right-gallery .icon img {
  max-width: 100px;
}
@media only screen and (max-width: 1199px) {
  .bg-right-gallery .icon img {
    max-width: 56px;
  }
}
.bg-right-gallery .title {
  color: #fff;
  margin-top: 40px;
  margin-bottom: 5px;
}
@media only screen and (max-width: 1199px) {
  .bg-right-gallery .title {
    margin-top: 20px;
    font-size: 20px;
  }
}
.bg-right-gallery span {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.bg-right-gallery p.disc {
  margin-top: 16px;
  color: #B3B7C1;
  margin-bottom: 45px;
  line-height: 26px;
}
@media only screen and (max-width: 1199px) {
  .bg-right-gallery p.disc {
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 24px;
  }
}

.swiper-wrapper.gallery {
  padding-left: 9px;
}
.swiper-wrapper.gallery .swiper-slide {
  background: transparent;
  justify-content: space-between;
}
@media only screen and (max-width: 575px) {
  .swiper-wrapper.gallery .swiper-slide {
    justify-content: center;
  }
}

.swiper.mygallery {
  overflow: visible;
}
.swiper.mygallery .swiper-button-next {
  top: -16%;
  right: 32px;
}
@media only screen and (max-width: 1199px) {
  .swiper.mygallery .swiper-button-next {
    top: -22%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .swiper.mygallery .swiper-button-next {
    top: -12%;
  }
}
@media only screen and (max-width: 767px) {
  .swiper.mygallery .swiper-button-next {
    top: -12%;
  }
}
@media only screen and (max-width: 575px) {
  .swiper.mygallery .swiper-button-next {
    top: -5%;
  }
}
.swiper.mygallery .swiper-button-next::after {
  font-family: "Font Awesome 5 Pro";
  font-size: 16px;
  color: #1C2539;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(24, 16, 16, 0.06);
  border-radius: 8px;
  transition: 0.3s;
}
.swiper.mygallery .swiper-button-next:hover::after {
  background: var(--color-primary);
  color: #fff;
}
.swiper.mygallery .swiper-button-prev {
  top: -16%;
  right: 165px;
  left: auto;
}
@media only screen and (max-width: 1199px) {
  .swiper.mygallery .swiper-button-prev {
    top: -22%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .swiper.mygallery .swiper-button-prev {
    top: -12%;
  }
}
@media only screen and (max-width: 767px) {
  .swiper.mygallery .swiper-button-prev {
    top: -12%;
    right: 115px;
  }
}
@media only screen and (max-width: 575px) {
  .swiper.mygallery .swiper-button-prev {
    top: -5%;
  }
}
.swiper.mygallery .swiper-button-prev::after {
  font-family: "Font Awesome 5 Pro";
  font-size: 16px;
  color: #1C2539;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 10px 20px #1810100f;
  border-radius: 8px;
  transition: 0.3s;
}
.swiper.mygallery .swiper-button-prev:hover::after {
  background: var(--color-primary);
  color: #fff;
}
.swiper.mygallery .swiper-pagination {
  top: -18%;
  left: auto;
  max-width: max-content;
  right: 100px;
  height: max-content;
  font-weight: 700;
  color: #1C2539;
}
@media only screen and (max-width: 1199px) {
  .swiper.mygallery .swiper-pagination {
    top: -25%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .swiper.mygallery .swiper-pagination {
    top: -13%;
  }
}
@media only screen and (max-width: 767px) {
  .swiper.mygallery .swiper-pagination {
    top: -13.5%;
    right: 71px;
  }
}
@media only screen and (max-width: 575px) {
  .swiper.mygallery .swiper-pagination {
    top: -6.5%;
  }
}
.swiper.mygallery .swiper-pagination .swiper-pagination-current {
  color: var(--color-primary);
  font-weight: 700;
}
.swiper.mygallery .swiper-pagination .swiper-pagination-total {
  color: #1C2539;
  font-weight: 700;
}

.tab-button-area-one .nav {
  justify-content: center;
  border-bottom: none;
  margin-left: -20px;
  margin-top: 0;
}
.tab-button-area-one .nav li {
  margin-left: 20px;
  margin-top: 0;
}
.tab-button-area-one .nav li button {
  background: #FFFFFF;
  color: #1C2539;
  padding: 12px 28px;
  border: 1px solid #EDEFF3;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  border-radius: 15px;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
}
@media only screen and (max-width: 479px) {
  .tab-button-area-one .nav li button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
.tab-button-area-one .nav li button.active {
  background: var(--color-primary);
  color: #fff;
}

.rts-product-one {
  padding: 35px 35px 33px 35px;
  border: 1px solid #EDEFF3;
  border-radius: 15px;
}
@media only screen and (max-width: 479px) {
  .rts-product-one {
    padding: 15px;
  }
}
.rts-product-one .thumbnail-area {
  position: relative;
  overflow: hidden;
  border-radius: 19px;
}
.rts-product-one .thumbnail-area::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 133%;
  background: linear-gradient(180deg, rgba(223, 10, 10, 0.55) 0%, rgba(90, 0, 0, 0.352) 100%);
  left: 0;
  top: 0;
  transform: rotate(-45deg) translateY(126%);
  transition: 0.5s;
  z-index: 0;
}
.rts-product-one .thumbnail-area::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 133%;
  background: linear-gradient(180deg, #5a00005a 0%, #df0a0a8c 100%);
  left: 0;
  top: 0;
  transform: rotate(-54deg) translateY(-144%);
  transition: 0.5s;
  z-index: 0;
}
.rts-product-one .thumbnail-area img {
  width: 100%;
}
.rts-product-one .thumbnail-area a.rts-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 5;
}
.rts-product-one .thumbnail-area:hover::after {
  transform: rotate(-53deg) translateY(34%);
}
.rts-product-one .thumbnail-area:hover::before {
  transform: rotate(-54deg) translateY(-117%);
}
.rts-product-one .product-contact-wrapper {
  padding: 30px 0 0 0;
}
.rts-product-one .product-contact-wrapper span {
  margin-bottom: 15px;
}
.rts-product-one .product-contact-wrapper .title {
  margin-bottom: 8px;
  transition: 0.3s;
}
.rts-product-one:hover .thumbnail-area a.rts-btn {
  transform: translate(-50%, -50%) scale(1);
}
.rts-product-one:hover .product-contact-wrapper a .title {
  color: var(--color-primary);
}

.big-bg-porduct-details {
  position: relative;
}
.big-bg-porduct-details img {
  width: 100%;
  border-radius: 16px;
}
.big-bg-porduct-details .project-info {
  position: absolute;
  right: 0;
  bottom: 0;
  background: #fff;
  width: 386px;
  box-shadow: 0px 10px 21px rgba(27, 18, 18, 0.05);
  border-radius: 15px 0 15px 0;
}
@media only screen and (max-width: 1199px) {
  .big-bg-porduct-details .project-info {
    bottom: -66px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .big-bg-porduct-details .project-info {
    position: relative;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 30px;
    margin-top: -33px;
  }
}
@media only screen and (max-width: 767px) {
  .big-bg-porduct-details .project-info {
    position: relative;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 30px;
    margin-top: -33px;
  }
}
.big-bg-porduct-details .project-info .info-head {
  padding: 24px 40px;
  background: var(--color-primary);
  border-radius: 15px 0 0 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .big-bg-porduct-details .project-info .info-head {
    border-radius: 15px 15px 0 0;
  }
}
@media only screen and (max-width: 767px) {
  .big-bg-porduct-details .project-info .info-head {
    border-radius: 15px 15px 0 0;
  }
}
@media only screen and (max-width: 479px) {
  .big-bg-porduct-details .project-info .info-head {
    padding: 12px 14px;
  }
}
.big-bg-porduct-details .project-info .info-head .title {
  color: #fff;
  margin-bottom: 0;
}
@media only screen and (max-width: 479px) {
  .big-bg-porduct-details .project-info .info-head .title {
    font-size: 18px;
  }
}
.big-bg-porduct-details .project-info .info-body {
  padding: 15px 40px;
}
@media only screen and (max-width: 479px) {
  .big-bg-porduct-details .project-info .info-body {
    padding: 15px 10px;
  }
}
.big-bg-porduct-details .project-info .info-body .single-info {
  display: flex;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #E9E9E9;
}
@media only screen and (max-width: 479px) {
  .big-bg-porduct-details .project-info .info-body .single-info {
    padding: 15px 0;
  }
}
.big-bg-porduct-details .project-info .info-body .single-info:last-child {
  border-bottom: none;
}
.big-bg-porduct-details .project-info .info-body .single-info .info-ico i {
  height: 50px;
  width: 50px;
  background: var(--color-primary-alta);
  color: var(--color-primary);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.big-bg-porduct-details .project-info .info-body .single-info .info-details {
  margin-left: 20px;
}
.big-bg-porduct-details .project-info .info-body .single-info .info-details span {
  margin-bottom: 5px;
}
.big-bg-porduct-details .project-info .info-body .single-info .info-details .name {
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 3px;
}

@media only screen and (max-width: 479px) {
  .product-details-main-inner {
    padding: 0 10px;
  }
}

.product-details-main-inner span {
  color: var(--color-primary);
  font-weight: 500;
}
.product-details-main-inner .title {
  margin-bottom: 20px;
}
.product-details-main-inner p.disc {
  font-size: 16px;
  margin-bottom: 25px;
}
.product-details-main-inner p.italic {
  font-size: 20px;
  font-style: italic;
  color: #1C2539;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 30px;
}

.single-project-details-challenge {
  margin-bottom: 20px;
  display: flex;
}
.single-project-details-challenge .details {
  color: #1C2539;
  line-height: 26px;
  font-weight: 400;
  font-size: 16px;
}
.single-project-details-challenge:last-child {
  margin-bottom: 0;
}
.single-project-details-challenge .icon {
  margin-right: 15px;
}
.single-project-details-challenge .icon i {
  width: max-content;
  border-radius: 50%;
  color: var(--color-primary);
  font-size: 19px;
  margin-top: 4px;
}

.business-case-bg {
  background-position: top center;
  background-repeat: no-repeat;
}

.title-area-business-case-3 {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .title-area-business-case-3 {
    flex-direction: column;
    align-items: flex-start;
  }
}
.title-area-business-case-3 a {
  margin-left: auto;
}
@media only screen and (max-width: 767px) {
  .title-area-business-case-3 a {
    margin-left: 0;
  }
}
.title-area-business-case-3 .title-area .title {
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 64px;
  color: #1C2539;
}
.title-area-business-case-3 .title-area span {
  color: var(--color-primary-3);
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 700;
}

.rts-cse-study-3-wrapper {
  width: 100%;
}
.rts-cse-study-3-wrapper .thumbnail {
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
}
.rts-cse-study-3-wrapper .thumbnail img {
  width: 100%;
}
.rts-cse-study-3-wrapper .thumbnail img {
  border-radius: 10px;
  filter: grayscale(0);
}
.rts-cse-study-3-wrapper .thumbnail .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-3);
  background: #fff;
  z-index: 5;
  border-radius: 50%;
  transition: 0.3s;
}
.rts-cse-study-3-wrapper .thumbnail .content {
  position: absolute;
  z-index: 10;
  bottom: 40px;
  background: #fff;
  border-radius: 5px;
  padding: 30px 40px;
  left: 50%;
  transform: translateX(-50%) translateY(134%);
  width: 85%;
  overflow: hidden;
  transition: 0.8s;
}
.rts-cse-study-3-wrapper .thumbnail .content .title {
  margin-bottom: 5px;
  transition: 0.3s;
}
.rts-cse-study-3-wrapper .thumbnail .content .title:hover {
  color: var(--color-primary-3);
}
.rts-cse-study-3-wrapper .thumbnail .content span {
  font-size: 16px;
  font-weight: 400;
  color: #5D666F;
}
.rts-cse-study-3-wrapper .thumbnail .content .content-wrap {
  position: relative;
}
.rts-cse-study-3-wrapper .thumbnail .content .content-wrap::after {
  position: absolute;
  content: "";
  left: -15%;
  bottom: -83%;
  height: 58px;
  width: 58px;
}
.rts-cse-study-3-wrapper .thumbnail:hover img {
  filter: grayscale(1);
}
.rts-cse-study-3-wrapper .thumbnail:hover::after {
  transform: translate(-50%, -50%) scale(1);
  border-radius: 10px;
}
.rts-cse-study-3-wrapper .thumbnail:hover .icon {
  transform: translate(-50%, -50%) scale(1);
}
.rts-cse-study-3-wrapper .thumbnail:hover .content {
  transform: translateX(-50%) translateY(0%);
}

.bg-project-three {
  background-repeat: no-repeat;
}

.title-area-project-w-in .sub {
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.3em;
  color: var(--color-primary-3);
  text-transform: uppercase;
}
.title-area-project-w-in .title {
  font-size: 60px;
  color: #fff;
  line-height: 65px;
  margin-top: 10px;
}
@media only screen and (max-width: 767px) {
  .title-area-project-w-in .title {
    font-size: 26px;
    line-height: 40px;
  }
  .title-area-project-w-in .title br {
    display: none;
  }
}
.title-area-project-w-in .title span {
  color: var(--color-primary-3);
}
.title-area-project-w-in p.disc {
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 50px;
}
.title-area-project-w-in .bg-email {
  background-size: cover;
  margin-right: -2px;
  background-repeat: no-repeat;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .title-area-project-w-in .bg-email {
    background-repeat: no-repeat;
  }
}
.title-area-project-w-in .bg-email .content-wrapper {
  padding: 46.5px 47.5px 45.5px 50px;
}
@media only screen and (max-width: 575px) {
  .title-area-project-w-in .bg-email .content-wrapper {
    padding: 20px;
  }
}
.title-area-project-w-in .bg-email .contact-info {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.title-area-project-w-in .bg-email .contact-info:last-child {
  margin-bottom: 0;
}
.title-area-project-w-in .bg-email .contact-info .discription {
  margin-left: 23px;
}
@media only screen and (max-width: 575px) {
  .title-area-project-w-in .bg-email .contact-info .discription {
    margin-left: 15px;
  }
}
.title-area-project-w-in .bg-email .contact-info .discription span {
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}
.title-area-project-w-in .bg-email .contact-info .discription .title-sm {
  color: #fff;
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 700;
}
@media only screen and (max-width: 575px) {
  .title-area-project-w-in .bg-email .contact-info .discription .title-sm {
    font-size: 20px;
  }
}

.bg-input-project {
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: -192px;
  margin-right: -120px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .bg-input-project {
    margin-left: -114px;
  }
}
@media only screen and (max-width: 1199px) {
  .bg-input-project {
    margin-left: 0;
    margin-right: -120px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-input-project {
    margin-left: 0;
    margin-right: -2px;
  }
}
@media only screen and (max-width: 767px) {
  .bg-input-project {
    margin-right: -2px;
    margin-left: 0px;
  }
}
.bg-input-project .product-form {
  padding: 120px;
  margin-top: -230px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .bg-input-project .product-form {
    padding: 120px 60px;
  }
}
@media only screen and (max-width: 1199px) {
  .bg-input-project .product-form {
    padding: 50px;
    margin-top: 21px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-input-project .product-form {
    margin-top: 40px;
    padding: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .bg-input-project .product-form {
    padding: 25px;
    margin-top: 0;
  }
}
@media only screen and (max-width: 575px) {
  .bg-input-project .product-form {
    padding: 20px;
  }
}
.bg-input-project .product-form input {
  background: #ffff;
  border-radius: 15px;
  height: 55px;
  border: 1px solid transparent;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-input-project .product-form input {
    border-radius: 5px;
  }
}
@media only screen and (max-width: 767px) {
  .bg-input-project .product-form input {
    border-radius: 5px;
  }
}
.bg-input-project .product-form input:focus {
  border: 1px solid var(--color-primary-3);
}
.bg-input-project .product-form textarea {
  background: #ffff;
  border-radius: 15px;
  height: 160px;
  padding: 15px;
  border: 1px solid transparent;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bg-input-project .product-form textarea {
    border-radius: 5px;
  }
}
@media only screen and (max-width: 767px) {
  .bg-input-project .product-form textarea {
    border-radius: 5px;
  }
}
.bg-input-project .product-form textarea:focus {
  border: 1px solid var(--color-primary-3);
}
.bg-input-project .product-form a.rts-btn {
  display: block;
  max-width: max-content;
}

.margin-controlerproject {
  margin-top: 110px;
}
@media only screen and (max-width: 1199px) {
  .margin-controlerproject {
    margin-top: 0;
  }
}

.portfolio-area.style-3 .portfolio-wrapper2 {
  position: relative;
  z-index: 1;
  transition: all 0.4s;
  margin-bottom: 40px;
  margin-right: 15px;
}
.portfolio-area.style-3 .portfolio-wrapper2:hover .img-fluid::before {
  height: 100%;
  bottom: 0;
}
.portfolio-area.style-3 .portfolio-wrapper2:hover .img-fluid .portfolio-content {
  transform: translate(-50%, -50%) scale(1);
}
.portfolio-area.style-3 .portfolio-wrapper2::before {
  pointer-events: none;
}
.portfolio-area.style-3 .portfolio-wrapper2:hover .portfolio-content a {
  transform: scale(1.5);
}
.portfolio-area.style-3 .portfolio-wrapper2:hover .portfolio-text .p-title a {
  text-decoration: underline !important;
}
.portfolio-area.style-3 .portfolio-wrapper2::before {
  background: #0000007A;
}
.portfolio-area.style-3 .portfolio-wrapper2 .img-fluid {
  position: relative;
  transition: all 0.3s;
}
.portfolio-area.style-3 .portfolio-wrapper2 .img-fluid::before {
  content: "";
  position: absolute;
  background-color: var(--color-primary);
  opacity: 0.8;
  width: 100%;
  height: 0;
  top: 0;
  border-radius: 20px;
  transition: all 0.4s;
}
.portfolio-area.style-3 .portfolio-wrapper2 .img-fluid img {
  width: 100%;
}
.portfolio-area.style-3 .portfolio-wrapper2 .img-fluid .portfolio-content {
  position: absolute;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  padding: 15px 30px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: inline-block;
  z-index: 2;
  left: 50%;
  top: 50%;
  transition: all 0.4s;
  transform: translate(-50%, -50%) scale(0);
}
.portfolio-area.style-3 .portfolio-wrapper2 .img-fluid .portfolio-content a {
  font-size: 14px;
  left: 39%;
  bottom: 55%;
  padding: 2px 15px;
  transition: all 0.4s ease-out 0s;
}
.portfolio-area.style-3 .portfolio-wrapper2 .portfolio-text {
  padding: 18px 0 0;
}
.portfolio-area.style-3 .portfolio-wrapper2 .portfolio-text .text .p-category {
  margin-bottom: 10px;
}
.portfolio-area.style-3 .portfolio-wrapper2 .portfolio-text .text .p-category a {
  color: #040404;
  font-size: 14px;
}
.portfolio-area.style-3 .portfolio-wrapper2 .portfolio-text .text .p-title {
  color: #040404;
  font-size: 22px;
  font-weight: 700;
  transition: all 0.4s;
}
@media (max-width: 767px) {
  .portfolio-area.style-3 .portfolio-wrapper2 .portfolio-text .text .p-title {
    font-size: 20px;
  }
}
.portfolio-area.style-3 .portfolio-wrapper2 .portfolio-text .text .p-title:hover {
  color: #ff4969 !important;
}
.portfolio-area.style-4 .item {
  position: relative;
  margin: 0 10px 30px 0;
  transition: all 0.4s;
}
@media (max-width: 768px) {
  .portfolio-area.style-4 .item {
    margin: 0 0 30px 0;
  }
}
.portfolio-area.style-4 .item:hover::before {
  height: 100%;
}
.portfolio-area.style-4 .item:hover .portfolio-wrapper .single-portfolio {
  transform: scale(1);
}
.portfolio-area.style-4 .item:hover .portfolio-wrapper .pf-btn {
  transform: scale(1);
}
.portfolio-area.style-4 .item::before {
  content: "";
  position: absolute;
  background: var(--color-primary);
  opacity: 0.9;
  width: 100%;
  height: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  transition: all 0.3s ease 0s;
  clip-path: polygon(0% -65%, 0% 100%, 99% 100%);
  border-radius: 20px;
}
.portfolio-area.style-4 .item .img-fluid img {
  width: 100%;
}
.portfolio-area.style-4 .item .portfolio-wrapper {
  position: relative;
}
.portfolio-area.style-4 .item .portfolio-wrapper .single-portfolio {
  position: absolute;
  bottom: 10%;
  left: 8%;
  transform: scale(0);
  transition: all 0.4s;
  z-index: 1;
}
.portfolio-area.style-4 .item .portfolio-wrapper .single-portfolio span {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
.portfolio-area.style-4 .item .portfolio-wrapper .single-portfolio .portfolio-title {
  font-size: 22px;
  font-weight: 700;
}
.portfolio-area.style-4 .item .portfolio-wrapper .pf-btn {
  background-color: #fff;
  color: #000;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  border-radius: 50%;
  position: absolute;
  bottom: 12%;
  right: 7%;
  transform: scale(0);
  transition: all 0.4s;
  z-index: 1;
}
.portfolio-area.style-5 .item {
  position: relative;
  margin-bottom: 20px;
  margin-right: 10px;
}
@media (max-width: 768px) {
  .portfolio-area.style-5 .item {
    margin-right: 0;
  }
}
.portfolio-area.style-5 .item:hover::before {
  background: #1c2539;
  opacity: 0.902;
  clip-path: polygon(0 54.6%, 0% 100%, 45.5% 100%);
}
.portfolio-area.style-5 .item:hover::after {
  visibility: visible;
  height: 100%;
}
.portfolio-area.style-5 .item:hover .portfolio-wrapper .single-portfolio {
  top: 8%;
  bottom: unset;
}
.portfolio-area.style-5 .item:hover .portfolio-wrapper .pf-btn {
  transform: scale(1);
}
.portfolio-area.style-5 .item::before {
  content: "";
  position: absolute;
  background-image: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0.70196) 0%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  height: 100%;
  transition: all 0.4s ease 0s;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 20px;
}
.portfolio-area.style-5 .item::after {
  content: "";
  position: absolute;
  background-color: #df0a0a;
  opacity: 0.902;
  clip-path: polygon(100% 0, 100% 100%, 45.5% 100%, 0% 55%, 0 0);
  width: 100%;
  height: 0;
  transition: all 0.4s ease 0s;
  left: 0;
  top: 0;
  border-radius: 20px;
  z-index: 1;
}
.portfolio-area.style-5 .item .portfolio-wrapper .img-fluid img {
  width: 100%;
}
.portfolio-area.style-5 .item .portfolio-wrapper .single-portfolio {
  position: absolute;
  bottom: 10%;
  left: 15%;
  transform: scale(1);
  transition: all 0.4s;
  z-index: 9;
}
.portfolio-area.style-5 .item .portfolio-wrapper .single-portfolio span {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
.portfolio-area.style-5 .item .portfolio-wrapper .single-portfolio .portfolio-title {
  font-size: 22px;
  font-weight: 700;
}
.portfolio-area.style-5 .item .portfolio-wrapper .pf-btn {
  background-color: #fff;
  color: #000;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: block;
  border-radius: 50%;
  position: absolute;
  bottom: 16%;
  left: 15%;
  transform: scale(0);
  transition: all 0.4s;
  z-index: 9;
}

.title-area-client {
  position: relative;
}
.title-area-client p.client-title {
  max-width: max-content;
  margin: auto;
  font-weight: 700;
  color: #1C2539;
  text-transform: uppercase;
}
.title-area-client::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  width: 41%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  margin-top: -14px;
}
@media only screen and (max-width: 1199px) {
  .title-area-client::after {
    width: 38%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .title-area-client::after {
    width: 35%;
  }
}
@media only screen and (max-width: 767px) {
  .title-area-client::after {
    width: 30%;
  }
}
@media only screen and (max-width: 575px) {
  .title-area-client::after {
    display: none;
  }
}
.title-area-client::before {
  content: "";
  position: absolute;
  left: 59%;
  width: 100%;
  height: 2px;
  width: 41%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  margin-top: 15px;
}
@media only screen and (max-width: 1199px) {
  .title-area-client::before {
    left: 62%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .title-area-client::before {
    left: 65%;
    width: 35%;
  }
}
@media only screen and (max-width: 767px) {
  .title-area-client::before {
    left: 69%;
    width: 30%;
  }
}
@media only screen and (max-width: 575px) {
  .title-area-client::before {
    display: none;
  }
}

.client-wrapper-one {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .client-wrapper-one {
    justify-content: center;
  }
}
@media only screen and (max-width: 1199px) {
  .client-wrapper-one {
    justify-content: center;
  }
}
@media only screen and (max-width: 767px) {
  .client-wrapper-one {
    position: relative;
    z-index: 50;
  }
}
.client-wrapper-one a img {
  box-shadow: 0px 10px 30px rgba(33, 5, 5, 0.05);
  border-radius: 15px;
  transition: var(--transition);
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .client-wrapper-one a img {
    margin-right: 10px;
  }
}
@media only screen and (max-width: 1199px) {
  .client-wrapper-one a img {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
.client-wrapper-one a:hover img {
  transform: scale(1.1) translateY(-5px);
}

.client-bg .client-two-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (max-width: 1199px) {
  .client-bg .client-two-wrapper {
    justify-content: center;
    flex-wrap: wrap;
  }
}
.client-bg .client-two-wrapper img {
  cursor: pointer;
  transition: 0.3s;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .client-bg .client-two-wrapper img {
    max-width: 15%;
  }
}
@media only screen and (max-width: 1199px) {
  .client-bg .client-two-wrapper img {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 479px) {
  .client-bg .client-two-wrapper img {
    width: 50%;
  }
}
.client-bg .client-two-wrapper img:hover {
  transform: scale(1.15);
}

.rts-trusted-client2 .container .title-area-client::before {
  background: var(--color-primary-4);
}
.rts-trusted-client2 .container .title-area-client::after {
  background: var(--color-primary-4);
}

.bg-team {
  height: 1029px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .bg-team {
    height: 978px;
  }
}
@media only screen and (max-width: 1499px) {
  .bg-team {
    height: 931px;
  }
}
@media only screen and (max-width: 1399px) {
  .bg-team {
    height: 879px;
  }
}
@media only screen and (max-width: 1199px) {
  .bg-team {
    height: auto;
  }
}

.bg-team-color {
  background: #F6F6F6;
}

.bg-white-feature {
  background: #fff;
  box-shadow: 0px 22px 23px rgba(0, 0, 0, 0.07);
}

.team-single-one-start {
  background: #fff;
  border-radius: 8px;
  transition: 0.3s;
}
.team-single-one-start:hover {
  transform: translateY(-20px);
}
.team-single-one-start .team-image-area a {
  overflow: hidden;
  display: block;
  position: relative;
  border-radius: 8px 8px 0 0;
}
.team-single-one-start .team-image-area a:hover img {
  transform: scale(1.1);
}
.team-single-one-start .team-image-area a img {
  width: 100%;
  transition: 0.3s;
}
.team-single-one-start .team-image-area a .team-social {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.team-single-one-start .team-image-area a .team-social .main i {
  padding: 16px;
  background: #fff;
  border-radius: 50%;
  font-size: 16px;
  line-height: 12px;
  font-weight: 500;
  color: var(--color-primary);
  transition: 0.3s;
}
.team-single-one-start .team-image-area a .team-social:hover .main i {
  background: var(--color-primary);
  color: #fff;
}
.team-single-one-start .team-image-area a .team-social .team-social-one {
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translateY(50px);
  transition: 1s;
  opacity: 0;
}
.team-single-one-start .team-image-area a .team-social .team-social-one i {
  background: #fff;
  border-radius: 60%;
  font-size: 16px;
  line-height: 23px;
  font-weight: 500;
  color: var(--color-primary);
  transition: 0.3s;
  margin-bottom: 10px;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.team-single-one-start .team-image-area a .team-social .team-social-one i:hover {
  background: var(--color-primary);
  color: #fff;
}
.team-single-one-start .team-image-area a .team-social:hover .main {
  opacity: 0;
}
.team-single-one-start .team-image-area a .team-social:hover .team-social-one {
  transform: translateY(-96%);
  z-index: 2;
  opacity: 1;
}
.team-single-one-start .single-details {
  padding: 28px 30px 27px 30px;
}
.team-single-one-start .single-details a .title {
  margin-bottom: 0px;
  transition: 0.3s;
}
.team-single-one-start .single-details a:hover .title {
  color: var(--color-primary);
}
.team-single-one-start .single-details p {
  color: var(--color-primary);
  font-size: 16px;
}

.team-inner-two {
  position: relative;
  width: 100%;
}
.team-inner-two.inner {
  margin-bottom: 100px;
}
.team-inner-two a.thumbnail {
  overflow: hidden;
  display: block;
  border-radius: 15px;
}
.team-inner-two a.thumbnail img {
  width: 100%;
  transition: 0.3s;
}
.team-inner-two a.thumbnail:hover img {
  transform: scale(1.15);
}
.team-inner-two .acquaintance-area {
  position: absolute;
  left: 0;
  bottom: -20%;
  background: #fff;
  border-radius: 0 15px 15px 15px;
  box-shadow: 0px 4px 27px #00000012;
  text-align: center;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team-inner-two .acquaintance-area {
    bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .team-inner-two .acquaintance-area {
    bottom: 0;
  }
}
.team-inner-two .acquaintance-area .header {
  padding: 30px 82px 22px 82px;
  border-bottom: 1px solid #F0F0F0;
}
@media only screen and (max-width: 1199px) {
  .team-inner-two .acquaintance-area .header {
    padding: 20px 62px;
  }
}
.team-inner-two .acquaintance-area .header .title {
  margin-bottom: 5px;
}
@media only screen and (max-width: 1199px) {
  .team-inner-two .acquaintance-area .header .title {
    font-size: 20px;
  }
}
.team-inner-two .acquaintance-area .header span {
  color: var(--color-primary);
  font-weight: 400;
  font-size: 16px;
}
.team-inner-two .acquaintance-area .acquaintance-social {
  padding: 27px 84px 36px 84px;
  margin-right: -30px;
}
@media only screen and (max-width: 1199px) {
  .team-inner-two .acquaintance-area .acquaintance-social {
    padding: 20px 62px;
    margin-right: -30px;
  }
}
.team-inner-two .acquaintance-area .acquaintance-social a {
  position: relative;
  z-index: 1;
  transition: 0.3s;
  margin-right: 30px;
}
.team-inner-two .acquaintance-area .acquaintance-social a i {
  font-size: 14px;
  color: #1C2539;
  transition: 0.3s;
}
.team-inner-two .acquaintance-area .acquaintance-social a::after {
  position: absolute;
  content: "";
  background: #F6F6F6;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: 0.3s;
}
.team-inner-two .acquaintance-area .acquaintance-social a:hover i {
  color: #fff;
}
.team-inner-two .acquaintance-area .acquaintance-social a:hover::after {
  background: var(--color-primary);
}

.home-yellow .team-inner-two .acquaintance-area .header span {
  color: var(--color-primary-3);
}
.home-yellow .team-inner-two .acquaintance-area .acquaintance-social a:hover::after {
  background: var(--color-primary-3);
}
.home-yellow .progress-wrap svg.progress-circle path {
  stroke: var(--color-primary-3);
}
.home-yellow .progress-wrap::after,
.home-yellow .progress-wrap:hover::after {
  border: 2px solid var(--color-primary-3);
}

.details-thumb img {
  width: 100%;
}

.rts-team-area4 {
  background: #fff;
  height: auto;
}
@media (max-width: 767px) {
  .rts-team-area4 {
    padding: 100px 0;
  }
}
.rts-team-area4 .container .rts-title-area .pre-title {
  color: var(--color-primary-4);
}
.rts-team-area4 .container .rts-title-area .title {
  color: #0B101C;
  margin-bottom: 0;
}
.rts-team-area4 .container .rts-title-area::after {
  display: none;
}
.rts-team-area4 .container .mySwiperh1_team {
  padding-bottom: 20px;
}
.rts-team-area4 .container .mySwiperh1_team .team-single-one-start {
  box-shadow: 0px 2px 20px rgba(24, 16, 16, 0.09);
}
.rts-team-area4 .container .mySwiperh1_team .team-single-one-start .team-image-area .team-social:hover .main i {
  background: var(--color-primary-4);
  color: #fff;
}
.rts-team-area4 .container .mySwiperh1_team .team-single-one-start .team-image-area .team-social .main i {
  color: var(--color-primary-4);
}
.rts-team-area4 .container .mySwiperh1_team .team-single-one-start .team-image-area .team-social .team-social-one i {
  color: var(--color-primary-4);
}
.rts-team-area4 .container .mySwiperh1_team .team-single-one-start .team-image-area .team-social .team-social-one i:hover {
  background: var(--color-primary-4);
  color: #fff;
}
.rts-team-area4 .container .mySwiperh1_team .team-single-one-start .single-details a:hover .title {
  color: var(--color-primary-4);
}
.rts-team-area4 .container .mySwiperh1_team .team-single-one-start .single-details p {
  color: var(--color-primary-4);
}

.rts-team-area.style-3 {
  background: #f6f6f6;
  padding-top: 70px;
}
.rts-team-area.style-3 .team-inner-two {
  background: #fff;
  margin-bottom: 15px;
}
.rts-team-area.style-3 .team-inner-two:hover .thumbnail .social {
  right: 0;
}
.rts-team-area.style-3 .team-inner-two .thumbnail {
  border-radius: 0;
  position: relative;
  overflow: hidden;
}
.rts-team-area.style-3 .team-inner-two .thumbnail img {
  width: 100%;
}
.rts-team-area.style-3 .team-inner-two .thumbnail .social {
  position: absolute;
  right: -50px;
  bottom: 0;
  display: inline-grid;
  background: var(--color-primary);
  padding: 12px 0;
  width: 50px;
  text-align: center;
  color: #fff;
  transition: all 0.4s;
}
.rts-team-area.style-3 .team-inner-two .thumbnail .social a {
  margin: 5px 0;
  transition: all 0.4s;
}
.rts-team-area.style-3 .team-inner-two .thumbnail .social a:hover {
  color: #0B101C;
}
.rts-team-area.style-3 .team-inner-two .inner-content {
  padding: 30px;
  text-align: center;
}
.rts-team-area.style-3 .team-inner-two .inner-content .header .title {
  margin-bottom: 5px;
}
.rts-team-area.style-3 .team-inner-two .inner-content .header span {
  color: var(--color-primary);
}
.rts-team-area.style-4 .team-inner-two {
  position: relative;
  width: 100%;
  transition: all 0.6s;
}
.rts-team-area.style-4 .team-inner-two.inner {
  margin-bottom: 100px;
}
.rts-team-area.style-4 .team-inner-two:hover .acquaintance-area .team-desc {
  max-height: 400px;
  transform: scaleY(1);
  transition: all 0.4s, max-height 1.5s;
  padding: 15px 0;
}
.rts-team-area.style-4 .team-inner-two a.thumbnail {
  overflow: hidden;
  display: block;
  border-radius: 15px;
}
.rts-team-area.style-4 .team-inner-two a.thumbnail img {
  width: 100%;
  transition: 0.3s;
}
.rts-team-area.style-4 .team-inner-two a.thumbnail:hover img {
  transform: scale(1.15);
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area {
  position: absolute;
  right: 50%;
  left: unset;
  width: 85%;
  padding: 20px;
  transform: translateX(50%);
  bottom: -20%;
  background: #fff;
  border-radius: 15px;
  transition: all 0.6s;
  box-shadow: 0px 4px 27px #00000012;
  text-align: center;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-team-area.style-4 .team-inner-two .acquaintance-area {
    bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .rts-team-area.style-4 .team-inner-two .acquaintance-area {
    bottom: 0;
  }
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .header {
  padding: 0 0 5px 0;
  border: 0;
}
@media only screen and (max-width: 1199px) {
  .rts-team-area.style-4 .team-inner-two .acquaintance-area .header {
    padding: 20px 62px;
  }
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .header .title {
  font-size: 22px;
  margin-bottom: 5px;
}
@media only screen and (max-width: 1199px) {
  .rts-team-area.style-4 .team-inner-two .acquaintance-area .header .title {
    font-size: 20px;
  }
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .header span {
  color: var(--color-primary);
  font-weight: 400;
  font-size: 16px;
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .team-desc {
  font-size: 14px;
  margin-bottom: 0;
  color: #777;
  position: relative;
  padding: 5px 0;
  z-index: 1;
  max-height: 0;
  opacity: 1;
  line-height: 24px;
  overflow: hidden;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: all 0.8s, max-height 0.8s;
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .team-desc::before {
  content: "";
  position: absolute;
  background: var(--color-primary);
  width: 50px;
  height: 2px;
  right: 50%;
  top: 3px;
  transform: translateX(50%);
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .acquaintance-social {
  padding: 5px 84px 5px 84px;
  margin-right: -30px;
}
@media only screen and (max-width: 1199px) {
  .rts-team-area.style-4 .team-inner-two .acquaintance-area .acquaintance-social {
    padding: 20px 62px;
    margin-right: -30px;
  }
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .acquaintance-social a {
  position: relative;
  z-index: 1;
  transition: 0.3s;
  margin-right: 30px;
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .acquaintance-social a i {
  font-size: 14px;
  color: var(--color-primary);
  transition: 0.3s;
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .acquaintance-social a::after {
  position: absolute;
  content: "";
  background: #F6F6F6;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: 0.3s;
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .acquaintance-social a:hover i {
  color: #fff;
}
.rts-team-area.style-4 .team-inner-two .acquaintance-area .acquaintance-social a:hover::after {
  background: var(--color-primary);
}
.rts-team-area.style-5 .team-inner-two {
  margin-bottom: 30px;
}
.rts-team-area.style-5 .team-inner-two .thumbnail {
  border-radius: 50%;
}
.rts-team-area.style-5 .team-inner-two .team-content {
  text-align: center;
  margin-top: 30px;
}
.rts-team-area.style-5 .team-inner-two .team-content .header .title {
  margin-bottom: 5px;
}
.rts-team-area.style-5 .team-inner-two .team-content .header span {
  color: var(--color-primary);
}
.rts-team-area.style-5 .team-inner-two .team-content .acquaintance-social {
  margin-top: 10px;
}
.rts-team-area.style-5 .team-inner-two .team-content .acquaintance-social a {
  margin-right: 5px;
  background: #fff;
  color: #4a4a4a;
  width: 35px;
  height: 35px;
  display: inline-block;
  line-height: 35px;
  transition: all 0.3s;
}
.rts-team-area.style-5 .team-inner-two .team-content .acquaintance-social a:hover {
  background: var(--color-primary);
  color: #fff;
}

.rts-team-bg-home-6 {
  background-repeat: no-repeat;
  background-size: cover;
}
.rts-team-bg-home-6 .home-six-team h2.title {
  color: #fff;
}

.rts-single-team-h6 {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: block;
  z-index: 1;
  border-radius: 12px;
}
.rts-single-team-h6::after {
  position: absolute;
  content: "";
  width: 333px;
  height: 333px;
  left: 10%;
  top: 60%;
  background: #F64A00;
  border-radius: 50%;
  z-index: 0;
}
@media only screen and (max-width: 767px) {
  .rts-single-team-h6::after {
    left: 0%;
    top: 50%;
  }
}
@media only screen and (max-width: 575px) {
  .rts-single-team-h6::after {
    left: auto;
    top: auto;
    right: -10%;
    bottom: -30%;
  }
}
.rts-single-team-h6 .thumbnail img {
  border-radius: 14px;
  position: relative;
  width: 100%;
}
.rts-single-team-h6 .content {
  position: absolute;
  z-index: 1;
  bottom: 30px;
  right: 30px;
}
.rts-single-team-h6 .content .title {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 5px;
  color: #fff;
}
.rts-single-team-h6 .content span {
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #FFDBCB;
}
.rts-single-team-h6 .social-area {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  z-index: 1;
  transition: 0.3s;
}
.rts-single-team-h6 .social-area ul {
  padding: 0;
  margin: 0;
  display: flex;
}
.rts-single-team-h6 .social-area ul li {
  margin-right: 10px;
}
.rts-single-team-h6 .social-area ul li:last-child {
  margin-right: 0;
}
.rts-single-team-h6 .social-area ul li a {
  width: 40px;
  height: 40px;
  display: block;
  background: #FFFFFF;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rts-single-team-h6 .social-area ul li a i {
  color: #1C2539;
}
.rts-single-team-h6 .social-area ul li a:hover i {
  color: var(--color-primary-5);
}
.rts-single-team-h6:hover .social-area {
  top: 20px;
}

.rts-feature-area {
  position: relative;
  margin-top: -17%;
}
@media only screen and (max-width: 1199px) {
  .rts-feature-area {
    margin-top: 0;
  }
}

.feature-left-area {
  display: flex;
  justify-content: flex-end;
  padding-right: 83px;
  animation: jump-2 5s linear infinite;
}
@media only screen and (max-width: 1199px) {
  .feature-left-area img {
    width: 80%;
    margin-top: 50px;
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 1199px) {
  .feature-left-area {
    justify-content: center;
    margin-top: -50px;
  }
}

.bg-white-feature {
  overflow: hidden;
  position: relative;
  z-index: 1;
  border-bottom: 5px solid var(--color-primary);
  padding: 0 150px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .bg-white-feature {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media only screen and (max-width: 1199px) {
  .bg-white-feature {
    padding: 0 80px !important;
  }
}
@media only screen and (max-width: 767px) {
  .bg-white-feature {
    padding: 0 30px !important;
  }
}
@media only screen and (max-width: 575px) {
  .bg-white-feature {
    padding: 0 15px !important;
  }
}
.bg-white-feature::after {
  position: absolute;
  content: "";
  height: 763px;
  width: 763px;
  left: -15%;
  top: -50%;
  z-index: -1;
  animation: rotateIt 20s linear infinite;
}
@media only screen and (max-width: 1199px) {
  .bg-white-feature::after {
    display: none;
  }
}

@media screen and (max-width: 1366px) {
  .padding-controler {
    padding: 0 !important;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .feature-title {
    font-size: 30px;
  }
}

.feature-one-wrapper {
  display: flex;
  flex-wrap: wrap;
}
@media only screen and (max-width: 1199px) {
  .feature-one-wrapper {
    padding-bottom: 50px;
  }
}

.single-feature-one {
  display: flex;
  align-items: center;
  padding: 15px 29px;
  background: #fff;
  border: 1px solid #EEEEEE;
  border-radius: 15px;
  max-width: max-content;
  margin-right: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.3s;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .single-feature-one {
    padding: 8px 12px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 479px) {
  .single-feature-one {
    margin-right: 15px;
    margin-bottom: 15px;
  }
}
.single-feature-one:hover {
  box-shadow: 0px 9px 18px #1810100d;
}
.single-feature-one i {
  padding: 5px;
  background: var(--color-primary);
  border-radius: 50%;
  color: #fff;
  margin-right: 15px;
  font-size: 14px;
  line-height: 12px;
}
.single-feature-one p {
  color: #1C2539;
  font-weight: 700;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .single-feature-one p {
    font-size: 14px;
  }
}

.rts-test-one-image-inner {
  position: relative;
  z-index: 1;
}
.rts-test-one-image-inner::after {
  position: absolute;
  z-index: -1;
  content: "";
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  left: 13%;
  bottom: -14%;
  animation: jump-1 5s linear infinite;
}
.rts-test-one-image-inner::before {
  position: absolute;
  z-index: -1;
  content: "";
  height: 158px;
  width: 220px;
  background-repeat: no-repeat;
  top: 8%;
  left: -12%;
}

.testimonial-bottom-one {
  max-width: max-content;
  display: flex;
  align-items: center;
}
.testimonial-bottom-one .thumbnail {
  margin-right: 20px;
}
.testimonial-bottom-one .thumbnail img {
  max-width: 80px;
  height: 80px;
}
@media only screen and (max-width: 479px) {
  .testimonial-bottom-one .thumbnail img {
    max-width: 42px;
    height: 42px;
  }
}
.testimonial-bottom-one .details {
  text-align: left;
}
.testimonial-bottom-one .details a .title {
  margin-bottom: 0px;
  transition: 0.3s;
}
.testimonial-bottom-one .details a:hover .title {
  color: var(--color-primary);
}
.testimonial-bottom-one .details span {
  margin-left: 0;
  color: #5D666F;
}

.mySwipertestimonial .swiper-button-next {
  right: 30%;
}
@media only screen and (max-width: 479px) {
  .mySwipertestimonial .swiper-button-next {
    right: 4%;
  }
}
.mySwipertestimonial .swiper-button-next::after {
  font-family: "Font Awesome 5 Pro";
  font-size: 16px;
  color: #1C2539;
  border-radius: 50% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 9px 18px #1810100d;
  border-radius: 8px;
  transition: 0.3s;
  line-height: 16px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.mySwipertestimonial .swiper-button-next:hover::after {
  background: var(--color-primary);
  color: #fff;
}
.mySwipertestimonial .swiper-button-prev {
  left: 57%;
}
@media only screen and (max-width: 479px) {
  .mySwipertestimonial .swiper-button-prev {
    left: 68%;
  }
}
.mySwipertestimonial .swiper-button-prev::after {
  font-family: "Font Awesome 5 Pro";
  font-size: 16px;
  color: #1C2539;
  border-radius: 50% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 9px 18px #1810100d;
  border-radius: 8px;
  transition: 0.3s;
  line-height: 16px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.mySwipertestimonial .swiper-button-prev:hover::after {
  background: var(--color-primary);
  color: #fff;
}
.mySwipertestimonial .swiper-button-next,
.mySwipertestimonial .swiper-button-prev {
  top: 85%;
}
@media only screen and (max-width: 479px) {
  .mySwipertestimonial .swiper-button-next,
.mySwipertestimonial .swiper-button-prev {
    top: 91%;
  }
}

.rts-client-feedback {
  position: relative;
}
.rts-client-feedback::after {
  position: absolute;
  content: "";
  left: 0;
  height: 200px;
  width: 200px;
  top: 3%;
  background-size: cover;
  animation: jump-2 5s linear infinite;
}
@media only screen and (max-width: 1199px) {
  .rts-client-feedback::after {
    display: none;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .rts-client-feedback::after {
    display: none;
  }
}
.rts-client-feedback.inner::after {
  display: none;
}

@media only screen and (max-width: 575px) {
  .title-area.left-right.testimonial-h2 {
    flex-direction: column;
    align-items: flex-start;
  }
}

.bg-customer-feedback {
  background: #F6F6F6;
}

.testimopnial-wrapper-two {
  padding: 50px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 11px 30px rgba(0, 0, 0, 0.02);
}
@media only screen and (max-width: 575px) {
  .testimopnial-wrapper-two {
    padding: 20px;
  }
}
.testimopnial-wrapper-two .test-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.testimopnial-wrapper-two .test-header .thumbnail {
  position: relative;
}
.testimopnial-wrapper-two .test-header .thumbnail::after {
  position: absolute;
  right: -20%;
  content: "";
  top: 50%;
  transform: translateY(-50%);
  height: 35px;
  width: 35px;
}
.testimopnial-wrapper-two .test-header .thumbnail img {
  max-width: 100%;
}
.testimopnial-wrapper-two .test-header .name-desig {
  margin-left: 37px;
}
.testimopnial-wrapper-two .test-header .name-desig .title {
  margin-bottom: 0;
}
.testimopnial-wrapper-two .test-body p {
  color: #5D666F;
  font-size: 16px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-image-one img {
    width: 100%;
  }
}

.bg-client-r-h2 {
  background-position: top center;
  background-repeat: no-repeat;
}

.title-area.left-right {
  display: flex;
  align-items: center;
}
.title-area.left-right .title-left {
  margin-left: 0;
}
.title-area.left-right .title-left span {
  color: #fff !important;
}
.title-area.left-right .title-left .title {
  color: #fff !important;
  margin-top: -12px;
}
.title-area.left-right .title-left .title.inner {
  color: #1C2539 !important;
}
.title-area.left-right .title-left.inner span {
  color: var(--color-primary) !important;
}
.title-area.left-right .button-area {
  margin-left: auto;
}
@media only screen and (max-width: 575px) {
  .title-area.left-right .button-area {
    margin-left: 0;
    margin-top: 25px;
  }
}
.title-area.left-right .button-area.inner .btn-primary-2 {
  background: var(--color-primary);
}
.title-area.left-right .button-area.inner .btn-primary-2:hover {
  color: var(--color-primary);
  background: var(--color-primary-alta);
}
.title-area.inner {
  text-align: center;
  justify-content: center;
  position: relative;
}
.title-area.inner .title-left span {
  color: var(--color-primary) !important;
}
.title-area.inner .title-left .title {
  color: #1C2539 !important;
}
.title-area.inner::after {
  position: absolute;
  content: "01";
  left: 50%;
  top: -42%;
  transform: translateX(-50%);
  color: #ffffff;
  background-color: #000;
  background-size: 100% 100%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.5px transparent;
  font-size: 143px;
  height: 100%;
  max-width: max-content;
  max-height: max-content;
  font-weight: 900;
  z-index: -1;
  display: flex;
  align-items: center;
  opacity: 0.35;
  font-family: var(--font-secondary);
  z-index: -1;
}

.rts-client-reviews-h2 {
  padding: 50px 50px 30px 50px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #E9ECF1;
}
.rts-client-reviews-h2 .review-header {
  display: flex;
  align-items: center;
}
.rts-client-reviews-h2 .review-header .thumbnail {
  position: relative;
}
.rts-client-reviews-h2 .review-header .thumbnail::after {
  position: absolute;
  content: "";
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  width: 40px;
  background-size: cover;
}

.rts-client-reviews-h2 .review-header .discription {
  margin-left: 30px;
}
.rts-client-reviews-h2 .review-header .discription a:hover .title {
  color: var(--color-primary-2);
}
.rts-client-reviews-h2 .review-header .discription .title {
  margin-bottom: 0;
  transition: 0.3s;
}
.rts-client-reviews-h2 .review-body p.disc {
  font-size: 16px;
  line-height: 26px;
  color: #5D666F;
  margin-top: 35px;
  padding-bottom: 30px;
  border-bottom: 2px solid #E9ECF1;
  margin-bottom: 25px;
  text-align: left;
}
.rts-client-reviews-h2 .review-body .body-end {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.rts-client-reviews-h2 .review-body .body-end .star-icon i {
  color: var(--color-primary-2);
}
.rts-client-reviews-h2 .review-body .body-end .star-icon.icon-2 i {
  color: var(--color-primary);
}

.home-blue .pricing-tab-button-area ul.nav li button.active {
  background: var(--color-primary-2);
}

.pricing-wrapper-one.home-two {
  background-image: none;
  border: 1px solid #E9ECF1;
  border-radius: 20px;
  background: #fff;
  padding: 60px;
  transition: 0.3s;
}
@media only screen and (max-width: 1199px) {
  .pricing-wrapper-one.home-two {
    padding: 30px;
  }
}
.pricing-wrapper-one.home-two.active {
  border: 2px solid var(--color-primary-2);
  box-shadow: 0px 17px 39px rgba(6, 33, 101, 0.13);
}
.pricing-wrapper-one.home-two .pricing-body .single-pricing.available .icon i {
  color: #fff;
  background: var(--color-primary-2);
  border-color: var(--color-primary-2);
}
.pricing-wrapper-one.home-two .pricing-header-start {
  border-bottom: 2px solid #E9ECF1;
}
.pricing-wrapper-one.home-two .title {
  margin-bottom: 5px;
}
.pricing-wrapper-one.home-two .pric-area {
  display: flex;
  align-items: flex-start;
}
.pricing-wrapper-one.home-two .pric-area .title {
  color: var(--color-primary-2);
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  min-width: max-content;
}
.pricing-wrapper-one.home-two .pric-area span {
  margin-top: 10px;
  margin-left: 7px;
  color: #1C2539;
  font-weight: 400;
  font-size: 16px;
}
.pricing-wrapper-one.home-two .discription p.disc {
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #5D666F;
}
.pricing-wrapper-one.home-two .pricing-body a.rts-btn {
  display: block;
  max-width: inherit;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  border-radius: 15px;
  border: 1px solid #E9ECF1;
  color: #1C2539;
}
.pricing-wrapper-one.home-two .pricing-body a.rts-btn.active {
  background: var(--color-primary-2);
  color: #fff;
}
.pricing-wrapper-one.home-two .pricing-body a.rts-btn.active:hover {
  display: block;
  max-width: inherit;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  border-radius: 15px;
  border: 1px solid #E9ECF1;
  color: #1C2539;
}
.pricing-wrapper-one.home-two .pricing-body a:hover.rts-btn {
  background: var(--color-primary-2);
  color: #fff;
}

.bg_testimonials-h2 {
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 160px;
}
.bg_testimonials-h2 .swiper-slide {
  border-radius: 15px;
}
.bg_testimonials-h2 .title-area span {
  text-transform: uppercase;
  letter-spacing: 1px;
}

.testimonials-area-h2 span {
  color: #fff;
}
.testimonials-area-h2 .title {
  color: #fff;
  margin-top: 10px;
}

.single-testimonials-h2 {
  background: #fff;
  padding: 50px;
  border-radius: 15px;
  text-align: left;
}
@media (max-width: 500px) {
  .single-testimonials-h2 {
    padding: 15px;
  }
}
.single-testimonials-h2 .body {
  padding-bottom: 20px;
  border-bottom: 1px solid #ECECF2;
}
.single-testimonials-h2 .body .title {
  color: var(--color-heading-1);
}
.single-testimonials-h2 .footer {
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.single-testimonials-h2 .footer .left {
  display: flex;
  align-items: center;
}
.single-testimonials-h2 .footer .left .thumbnail {
  overflow: hidden;
  display: block;
  border-radius: 15px;
}
.single-testimonials-h2 .footer .left .thumbnail img {
  width: 46px;
  transition: 0.3s;
  height: 46px;
}
.single-testimonials-h2 .footer .left .thumbnail:hover img {
  transform: scale(1.2);
}
.single-testimonials-h2 .footer .left .desig {
  margin-left: 15px;
}
@media (max-width: 400px) {
  .single-testimonials-h2 .footer .left .desig {
    margin-left: 7px;
  }
}
.single-testimonials-h2 .footer .left .desig a .title {
  margin-bottom: 2px;
  font-size: 20px;
  transition: 0.3s;
}
@media (max-width: 500px) {
  .single-testimonials-h2 .footer .left .desig a .title {
    font-size: 16px;
  }
}
.single-testimonials-h2 .footer .left .desig a:hover .title {
  color: var(--color-primary-2);
}
.single-testimonials-h2 .footer .left .desig p {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.single-testimonials-h2 .footer .left .desig p span {
  color: var(--color-primary-2);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
}
.single-testimonials-h2 .footer .right .stars-area ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
.single-testimonials-h2 .footer .right .stars-area ul li {
  margin: 0;
}
.single-testimonials-h2 .footer .right .stars-area ul li a i {
  font-weight: 900;
  font-size: 16px;
  line-height: 16px;
  color: var(--color-primary-2);
  margin-left: 5px;
}
@media (max-width: 400px) {
  .single-testimonials-h2 .footer .right .stars-area ul li a i {
    margin: 0;
  }
}

.swiper-pagination2 {
  margin: 0 auto;
  transform: none !important;
  position: absolute;
  text-align: center;
  transition: 0.3s opacity;
  z-index: 10;
  bottom: 100px !important;
}
.swiper-pagination2 .swiper-pagination-bullet {
  margin-right: 7px !important;
  margin-left: 7px !important;
  opacity: 1;
  background: #fff;
  width: 6px;
  height: 6px;
  position: relative;
}
.swiper-pagination2 .swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1px solid #fff;
  border-radius: 50%;
  left: -4px;
  bottom: -4px;
}

.swiper-pagination2 .swiper-pagination-bullet.swiper-pagination-bullet-active-main {
  background: transparent;
  position: relative;
}

.bg-feedback-six {
  background-repeat: no-repeat;
  background-size: cover;
}

.rts-customer-feedback-area-six .rts-client-reviews-h2 .review-body .body-end .star-icon i {
  color: var(--color-primary-5);
}

.rts-customer-feedback-area-six .rts-client-reviews-h2 .review-header .thumbnail::after {
  position: absolute;
  content: "";
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  width: 40px;
  background-size: cover;
}

.single-progress-bar-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.progress-area-h6 .single-progress-inner {
  display: flex;
  z-index: 1;
  position: relative;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .progress-area-h6 .single-progress-inner {
    margin-bottom: 30px;
  }
  .progress-area-h6 .single-progress-inner:last-child {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 767px) {
  .progress-area-h6 .single-progress-inner {
    margin-bottom: 30px;
  }
  .progress-area-h6 .single-progress-inner:last-child {
    margin-bottom: 0;
  }
}
.progress-area-h6 .single-progress-inner::before {
  position: absolute;
  right: -110px;
  height: 100%;
  width: 1px;
  background: #D9D9D9;
  content: "";
  transform: translateY(-123px);
}
@media only screen and (max-width: 1199px) {
  .progress-area-h6 .single-progress-inner::before {
    display: none;
  }
}
.progress-area-h6 .single-progress-inner.before-none::before {
  display: none;
}
.progress-area-h6 .single-progress-inner .progress .progress-bar {
  border-width: 5px;
}
.progress-area-h6 .single-progress-inner .progress.red .progress-bar {
  border-color: var(--color-primary-5);
}
.progress-area-h6 .single-progress-inner .progress.red {
  position: relative;
}
.progress-area-h6 .single-progress-inner .progress.red::before {
  position: absolute;
  content: "";
  left: 68%;
  top: 67%;
  transform: translate(-50%, -50%);
  z-index: -1;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
}

.progress-area-h6 .single-progress-inner .progress::after {
  border: 8px solid #fff;
}
.progress-area-h6 .single-progress-inner .content-inner {
  transform: translateY(-56%);
  margin-left: 20px;
}
@media only screen and (max-width: 479px) {
  .progress-area-h6 .single-progress-inner .content-inner {
    margin-left: 10px;
  }
}
.progress-area-h6 .single-progress-inner .content-inner .title {
  margin-bottom: 0;
}

.pricing-tab-button-area {
  text-align: center;
}
.pricing-tab-button-area .pricing-sub {
  color: #5D666F;
}
.pricing-tab-button-area .pricing-sub strong {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 18px;
}
.pricing-tab-button-area ul.nav {
  justify-content: center;
  align-items: center;
  border: 1px solid #EFEEF2;
  max-width: max-content;
  margin: auto;
  border-radius: 100px;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  margin-top: 25px;
}
.pricing-tab-button-area ul.nav li {
  margin: 0;
}
.pricing-tab-button-area ul.nav li button {
  border: none;
  background: transparent;
  color: var(--color-white);
  border-radius: 100px;
  padding: 12px 25px;
  color: #1C2539;
  font-weight: 500;
}
.pricing-tab-button-area ul.nav li button.active {
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 100px;
}
.pricing-tab-button-area ul.nav li button:hover {
  border: none;
}

@media only screen and (max-width: 1199px) {
  .service-detials-step-1 .thumbnail img {
    width: 100%;
  }
}

@media only screen and (max-width: 1199px) {
  .pl-lg-controler {
    padding-left: 0 !important;
  }
}
@media only screen and (max-width: 575px) {
  .pl-lg-controler {
    padding-left: calc(var(--bs-gutter-x) * 0.5) !important;
  }
}

.pricing-wrapper-one {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 92px 50px 50px 50px;
  position: relative;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .pricing-wrapper-one {
    padding: 92px 35px 50px 35px;
  }
}
@media only screen and (max-width: 479px) {
  .pricing-wrapper-one {
    padding: 26px;
    padding-top: 65px;
  }
}
.pricing-wrapper-one .plane-process {
  position: absolute;
  top: -10%;
  left: 13%;
  background: var(--color-primary);
  padding: 18px 40px;
  text-align: right;
  animation: jump-1 5s linear infinite;
}
.pricing-wrapper-one .plane-process span {
  color: #fff;
  font-size: 16px;
  font-weight: 200;
}
.pricing-wrapper-one .plane-process .title {
  margin-bottom: 0;
  color: #fff;
  margin-top: -9px;
}
.pricing-wrapper-one .pricing-header-start {
  padding-bottom: 7px;
  border-bottom: 1px solid #EAE2E2;
}
.pricing-wrapper-one .pricing-body {
  padding-top: 32px;
}
.pricing-wrapper-one .pricing-body .single-pricing {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.pricing-wrapper-one .pricing-body .single-pricing:last-child {
  margin-bottom: 0;
}
.pricing-wrapper-one .pricing-body .single-pricing .icon {
  margin-right: 15px;
}
.pricing-wrapper-one .pricing-body .single-pricing .icon i {
  border: 1px solid #5D666F;
  padding: 2px;
  border-radius: 50%;
  font-size: 12px;
}
.pricing-wrapper-one .pricing-body .single-pricing .price-details {
  color: #5D666F;
  font-size: 16px;
  font-weight: 400;
}
.pricing-wrapper-one .pricing-body .single-pricing.available .icon i {
  border: 1px solid var(--color-primary);
  background: var(--color-primary);
  color: #FFF;
}
.pricing-wrapper-one .pricing-body .single-pricing.available .price-details {
  color: #1C2539;
  font-weight: 400;
}
.pricing-wrapper-one .pricing-body a.rts-btn {
  display: block;
  max-width: max-content;
  margin-top: 42px;
  font-weight: 700;
  padding: 17px 40px;
}
@media only screen and (max-width: 479px) {
  .pricing-wrapper-one .pricing-body a.rts-btn {
    margin-top: 30px;
  }
}

.pricing-three-title-area {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 575px) {
  .pricing-three-title-area {
    flex-direction: column;
  }
}
.pricing-three-title-area .title-area .sub {
  color: var(--color-primary-3);
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}
.pricing-three-title-area .title-area .title {
  margin-bottom: 0;
  margin-top: 5px;
}
.pricing-three-title-area .pricing-tab-button-area {
  margin-left: auto;
}
@media only screen and (max-width: 575px) {
  .pricing-three-title-area .pricing-tab-button-area {
    margin-left: inherit;
  }
}

.home-yellow .pricing-wrapper-one .pricing-body .single-pricing.available .icon i {
  border-color: var(--color-primary-3);
}
.home-yellow .pricing-wrapper-one .plane-process,
.home-yellow .pricing-wrapper-one .pricing-body .single-pricing.available .icon i,
.home-yellow .pricing-tab-button-area ul.nav li button.active {
  background: var(--color-primary-3);
}

.bg-pricing-bg-h2 {
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-pricing-bg-h2.margin-dec-padding-con {
  margin-top: -222px;
  padding-top: 340px;
}

.pricing-h2 p.offer {
  font-size: 18px;
  font-weight: 400;
  color: #5D666F;
  margin-bottom: 25px;
  margin-top: 40px;
}
.pricing-h2 p.offer span {
  font-weight: 700 !important;
  color: var(--color-primary-2) !important;
}

.rts-blog-area {
  position: relative;
  z-index: 5;
}
.rts-blog-area .title-area span {
  color: var(--color-primary);
  font-weight: 700;
  text-transform: uppercase;
}
.rts-blog-area .title-area .title {
  color: #fff;
}

.single-blog-one-wrapper:hover .thumbnail img {
  filter: grayscale(1);
}
.single-blog-one-wrapper .thumbnail {
  margin-bottom: 36px;
  position: relative;
}
.single-blog-one-wrapper .thumbnail img {
  width: 100%;
  height: auto;
  margin-bottom: 0;
}
.single-blog-one-wrapper .thumbnail .blog-badge {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 5px 31px;
  background: var(--color-primary);
}
.single-blog-one-wrapper .thumbnail .blog-badge span {
  color: #fff;
  display: block;
}
.single-blog-one-wrapper .blog-content p {
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #FFFFFF;
}
.single-blog-one-wrapper .blog-content p span {
  color: var(--color-primary);
  font-weight: 500;
}
.single-blog-one-wrapper .blog-content a .title {
  color: #fff;
  padding-right: 15px;
  margin-bottom: 30px;
  transition: var(--transition);
}
.single-blog-one-wrapper .blog-content a:hover .title {
  color: var(--color-primary);
}
.single-blog-one-wrapper .blog-content a {
  color: #fff;
}
.single-blog-one-wrapper .blog-content a i {
  background: #2B2F39;
  color: #fff;
}
.single-blog-one-wrapper .blog-content a:hover i {
  background: var(--color-primary);
}

.rts-single-wized {
  background: #F6F6F6;
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 40px;
}
.rts-single-wized:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 479px) {
  .rts-single-wized {
    padding: 20px;
  }
}
.rts-single-wized.service {
  border-radius: 0;
}
.rts-single-wized.service .single-categories li a {
  border-radius: 0;
}
.rts-single-wized.download {
  background: #1C2539;
}
.rts-single-wized.download .title {
  color: #fff;
}
.rts-single-wized.download .single-download-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #2E3951;
}
.rts-single-wized.download .single-download-area:first-child {
  padding-top: 0;
}
.rts-single-wized.download .single-download-area:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.rts-single-wized.download .single-download-area .mid {
  margin-right: auto;
  margin-left: 15px;
}
.rts-single-wized.download .single-download-area .mid .title {
  margin-bottom: 0;
  font-size: 18px;
  font-family: var(--font-primary);
}
.rts-single-wized.download .single-download-area .mid span {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
}
.rts-single-wized.download .single-download-area a.rts-btn {
  padding: 11px 15px;
  border-radius: 0;
}
.rts-single-wized.contact {
  background: #1C2539;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
}
@media only screen and (max-width: 479px) {
  .rts-single-wized.contact {
    padding: 25px 20px;
  }
}
@media only screen and (max-width: 479px) {
  .rts-single-wized.contact:last-child {
    margin-bottom: 0;
  }
}
.rts-single-wized.contact .wized-body {
  text-align: center;
}
.rts-single-wized.contact .wized-body .title {
  color: #fff;
  margin-bottom: 30px;
  font-size: 22px;
  line-height: 32px;
}
.rts-single-wized.contact .wized-body a.rts-btn {
  display: block;
  max-width: max-content;
  margin: auto;
}
.rts-single-wized .wized-header .title {
  margin-bottom: 10px;
}
.rts-single-wized .wized-body {
  margin-top: 30px;
}
.rts-single-wized .wized-body .rts-search-wrapper {
  position: relative;
}
.rts-single-wized .wized-body .rts-search-wrapper input {
  background: #fff;
  height: 55px;
  border-radius: 5px;
  padding-right: 70px;
  padding-left: 25px;
  border: 1px solid transparent;
}
.rts-single-wized .wized-body .rts-search-wrapper input:focus {
  border: 1px solid var(--color-primary);
}
.rts-single-wized .wized-body .rts-search-wrapper button {
  position: absolute;
  max-width: max-content;
  height: 55px;
  width: 55px;
  border-radius: 5px;
  background: var(--color-primary);
  display: inline-block;
  padding: 0 19px;
  right: 0;
}
.rts-single-wized .wized-body .rts-search-wrapper button i {
  color: #fff;
  font-size: 16px;
  line-height: 16px;
}
.rts-single-wized .single-categories {
  margin-bottom: 15px;
  padding: 0;
}
.rts-single-wized .single-categories:last-child {
  margin-bottom: 0;
}
.rts-single-wized .single-categories li {
  list-style: none;
}
.rts-single-wized .single-categories li a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background: #fff;
  color: #5D666F;
  font-weight: 500;
  transition: 0.3s;
  border-radius: 5px;
}
.rts-single-wized .single-categories li a i {
  color: var(--color-primary);
  transition: 0.3s;
}
.rts-single-wized .single-categories li a:hover {
  background: var(--color-primary);
  transform: translateY(-5px) scale(1.03);
  color: var(--color-white);
}
.rts-single-wized .single-categories li a:hover i {
  color: #fff;
}
.rts-single-wized .recent-post-single {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.rts-single-wized .recent-post-single:last-child {
  margin-bottom: 0;
}
.rts-single-wized .recent-post-single .thumbnail {
  margin-right: 20px;
  overflow: hidden;
  max-width: max-content;
  width: 100%;
  border-radius: 5px;
}
.rts-single-wized .recent-post-single .thumbnail img {
  min-width: 85px;
  height: auto;
  transition: 0.3s;
}
.rts-single-wized .recent-post-single .thumbnail:hover img {
  transform: scale(1.2);
}
.rts-single-wized .recent-post-single .user {
  display: flex;
  align-items: center;
}
.rts-single-wized .recent-post-single .user span {
  margin-left: 9px;
}
.rts-single-wized .recent-post-single .post-title .title {
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1C2539;
  line-height: 26px;
  margin-top: 5px;
  transition: 0.3s;
}
@media only screen and (max-width: 479px) {
  .rts-single-wized .recent-post-single .post-title .title {
    font-size: 14px;
    line-height: 26px;
    margin-top: 0;
  }
}
.rts-single-wized .recent-post-single .post-title:hover .title {
  color: var(--color-primary);
}
.rts-single-wized .gallery-inner {
  display: flex;
  flex-direction: column;
}
.rts-single-wized .gallery-inner .single-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.rts-single-wized .gallery-inner .single-row a {
  overflow: hidden;
  border-radius: 6px;
}
@media only screen and (max-width: 479px) {
  .rts-single-wized .gallery-inner .single-row a {
    display: block;
    width: 100%;
  }
}
.rts-single-wized .gallery-inner .single-row a img {
  max-width: 97px;
  height: auto;
  transition: 0.3s;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .rts-single-wized .gallery-inner .single-row a img {
    max-width: 80px;
  }
}
@media only screen and (max-width: 1199px) {
  .rts-single-wized .gallery-inner .single-row a img {
    min-width: 269px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-single-wized .gallery-inner .single-row a img {
    min-width: 193px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-single-wized .gallery-inner .single-row a img {
    min-width: 135px;
  }
}
@media only screen and (max-width: 575px) {
  .rts-single-wized .gallery-inner .single-row a img {
    min-width: 140px;
  }
}
@media only screen and (max-width: 479px) {
  .rts-single-wized .gallery-inner .single-row a img {
    min-width: 80px;
  }
}
.rts-single-wized .gallery-inner .single-row a:hover img {
  transform: scale(1.2);
}
.rts-single-wized .gallery-inner .single-row.row-1 {
  margin-bottom: 20px;
}
.rts-single-wized .tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -10px;
}
.rts-single-wized .tags-wrapper a {
  padding: 5px 16px;
  background: #fff;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #1C2539;
  font-size: 14px;
  font-weight: 500;
  transition: 0.3s;
}
.rts-single-wized .tags-wrapper a:hover {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-3px) scale(1.09);
}

.blog-single-post-listing {
  margin-right: 30px;
  border: 1px solid #E6E9F0;
  margin-bottom: 50px;
}
@media only screen and (max-width: 1199px) {
  .blog-single-post-listing {
    margin-right: 0;
  }
}
.blog-single-post-listing.details {
  border-radius: 15px;
}
.blog-single-post-listing.details .thumbnail {
  border-radius: 15px 15px 0 0;
}
.blog-single-post-listing.details .thumbnail.details {
  border-radius: 15px;
  width: 100%;
  max-width: max-content;
}
@media only screen and (max-width: 1199px) {
  .blog-single-post-listing.details .thumbnail.details {
    max-width: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog-single-post-listing.details .thumbnail.details {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing.details .thumbnail.details {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 575px) {
  .blog-single-post-listing.details .thumbnail.details {
    margin-bottom: 0;
  }
}
.blog-single-post-listing.details .rts-quote-area {
  padding: 50px;
  background: #F6F6F6;
  border-radius: 15px;
  margin-bottom: 40px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog-single-post-listing.details .rts-quote-area {
    padding: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing.details .rts-quote-area {
    padding: 10px;
    margin-bottom: 25px;
  }
}
@media only screen and (max-width: 479px) {
  .blog-single-post-listing.details .rts-quote-area {
    margin-top: 15px;
  }
}
.blog-single-post-listing.details .rts-quote-area .title {
  margin-bottom: 25px;
}
@media only screen and (max-width: 479px) {
  .blog-single-post-listing.details .rts-quote-area .title {
    font-size: 16px;
    margin-bottom: 15px;
  }
}
.blog-single-post-listing.details .rts-quote-area .name {
  font-size: 18px;
  color: var(--color-primary);
  font-weight: 700;
}
.blog-single-post-listing.details .rts-quote-area span {
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #5D666F;
}
.blog-single-post-listing.details .check-area-details .single-check {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.blog-single-post-listing.details .check-area-details .single-check i {
  margin-right: 15px;
  color: var(--color-primary);
}
@media only screen and (max-width: 479px) {
  .blog-single-post-listing.details .check-area-details .single-check i {
    margin-top: -26px;
  }
}
.blog-single-post-listing.details .check-area-details .single-check span {
  color: #5D666F;
}
.blog-single-post-listing.details .details-tag {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
@media only screen and (max-width: 479px) {
  .blog-single-post-listing.details .details-tag {
    justify-content: flex-start;
  }
}
.blog-single-post-listing.details .details-tag h6 {
  margin-bottom: 0;
  font-size: 18px;
  margin-right: 15px;
}
.blog-single-post-listing.details .details-tag button {
  padding: 8px 12px;
  background: #F6F6F6;
  max-width: max-content;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  color: #1C2539;
  transition: 0.3s;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .blog-single-post-listing.details .details-tag button:last-child {
    margin-top: 10px;
    margin-left: -2px;
  }
}
.blog-single-post-listing.details .details-tag button:hover {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-2px) scale(1.02);
}
.blog-single-post-listing.details .details-share {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog-single-post-listing.details .details-share {
    justify-content: flex-start;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing.details .details-share {
    justify-content: flex-start;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 575px) {
  .blog-single-post-listing.details .details-share {
    justify-content: flex-start;
    margin-top: 20px;
  }
}
.blog-single-post-listing.details .details-share button {
  max-width: max-content;
  position: relative;
  z-index: 1;
  margin-left: 23px;
  color: #1C2539;
  transition: 0.3s;
  font-size: 14px;
}
.blog-single-post-listing.details .details-share button::after {
  position: absolute;
  content: "";
  background: #F6F6F6;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: 0.3s;
}
.blog-single-post-listing.details .details-share button:hover {
  color: #fff;
  transform: scale(1.2);
}
.blog-single-post-listing.details .details-share button:hover::after {
  background: var(--color-primary);
}
.blog-single-post-listing.details .details-share h6 {
  font-size: 18px;
  margin-bottom: 0;
  margin-right: 15px;
}
.blog-single-post-listing.details .author-area {
  margin-top: 44px;
  display: flex;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid #E6E9F0;
  border-bottom: 1px solid #E6E9F0;
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing.details .author-area {
    align-items: flex-start;
  }
}
@media only screen and (max-width: 575px) {
  .blog-single-post-listing.details .author-area {
    flex-wrap: wrap;
  }
}
.blog-single-post-listing.details .author-area .thumbnail {
  margin-right: 30px;
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing.details .author-area .thumbnail {
    margin-right: 0;
  }
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing.details .author-area .author-details {
    margin-left: 15px;
  }
}
.blog-single-post-listing.details .author-area .author-details h5 {
  margin-bottom: 10px;
}
.blog-single-post-listing.details .author-area .author-details p {
  line-height: 26px;
}
.blog-single-post-listing.inner {
  border: none;
  max-width: 950px;
  margin: 0 auto;
}
.blog-single-post-listing.inner2 .blog-listing-content .rts-quote-area {
  position: relative;
  background: #000;
  padding-top: 120px;
}
.blog-single-post-listing.inner2 .blog-listing-content .rts-quote-area::before {
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translate(-50%, 0);
  font-family: "Font Awesome 5 Pro";
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  background: #fff;
  color: var(--color-primary);
  font-weight: 900;
  font-size: 20px;
}
.blog-single-post-listing.inner2 .blog-listing-content .rts-quote-area .title {
  color: #f7f7f7;
}
.blog-single-post-listing .replay-area-details {
  margin-top: 40px;
}
.blog-single-post-listing .replay-area-details form input {
  height: 55px;
  border-radius: 15px;
  background: #F6F6F6;
  border: 1px solid transparent;
}
.blog-single-post-listing .replay-area-details form input:focus {
  border: 1px solid var(--color-primary);
}
.blog-single-post-listing .replay-area-details form textarea {
  border-radius: 15px;
  background: #F6F6F6;
  height: 140px;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid transparent;
}
.blog-single-post-listing .replay-area-details form textarea:focus {
  border: 1px solid var(--color-primary);
}
.blog-single-post-listing .thumbnail {
  overflow: hidden;
}
.blog-single-post-listing .thumbnail img {
  transition: 0.3s;
  width: 100%;
}
.blog-single-post-listing .thumbnail:hover img {
  transform: scale(1.2);
}
.blog-single-post-listing .blog-listing-content {
  padding: 50px;
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing .blog-listing-content {
    padding: 25px 10px;
  }
}
.blog-single-post-listing .blog-listing-content .user-info {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
}
.blog-single-post-listing .blog-listing-content .user-info .single {
  margin-right: 30px;
  min-width: max-content;
}
@media only screen and (max-width: 767px) {
  .blog-single-post-listing .blog-listing-content .user-info .single {
    margin-right: 5px;
  }
}
@media only screen and (max-width: 575px) {
  .blog-single-post-listing .blog-listing-content .user-info .single {
    margin-right: 5px;
  }
}
.blog-single-post-listing .blog-listing-content .user-info .single i {
  margin-right: 10px;
  color: var(--color-primary);
}
@media only screen and (max-width: 575px) {
  .blog-single-post-listing .blog-listing-content .user-info .single i {
    margin-right: 2px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .blog-single-post-listing .blog-listing-content .user-info .single span {
    font-size: 13px;
  }
}
.blog-single-post-listing .blog-listing-content .blog-title {
  transition: 0.3s;
}
.blog-single-post-listing .blog-listing-content .blog-title .title {
  transition: 0.3s;
  margin-bottom: 16px;
}
.blog-single-post-listing .blog-listing-content .blog-title:hover .title {
  color: var(--color-primary);
}
.blog-single-post-listing .blog-listing-content p.disc {
  font-size: 16px;
  line-height: 26px;
}
@media only screen and (max-width: 479px) {
  .blog-single-post-listing .blog-listing-content p.disc {
    margin-bottom: 15px;
  }
}
.blog-single-post-listing .blog-listing-content a.rts-btn {
  margin-top: 35px;
  display: block;
  max-width: max-content;
}
@media only screen and (max-width: 479px) {
  .blog-single-post-listing .blog-listing-content a.rts-btn {
    margin-top: 20px;
  }
}

.disc.para-1 {
  margin-bottom: 20px;
}

.rts-latest-blog-three .blog-three span {
  color: var(--color-primary-3);
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 16px;
}
.rts-latest-blog-three .blog-three .title {
  text-transform: uppercase;
  margin-top: 7px;
}

.blog-three-wrapepr a.main-thumbnail {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  display: block;
  max-width: max-content;
  border-radius: 10px;
  position: relative;
  z-index: 2;
}
.blog-three-wrapepr a.main-thumbnail .badge-blog {
  position: absolute;
  top: 0;
  left: 0;
  padding: 7px 24px;
  background: var(--color-primary-3);
  color: #fff;
  font-size: 16px;
}
.blog-three-wrapepr a.main-thumbnail img {
  max-width: max-content;
  margin: 0 auto;
  border-radius: 10px;
  transition: 0.3s;
}
.blog-three-wrapepr a.main-thumbnail:hover img {
  transform: scale(1.2);
}
.blog-three-wrapepr .blog-body {
  position: relative;
  margin-top: -30px;
  z-index: 1;
}
.blog-three-wrapepr .blog-body .blog-header {
  background: #F6F6F6;
  border-radius: 10px 10px 0 0;
  padding: 50px 33px 20px 33px;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 575px) {
  .blog-three-wrapepr .blog-body .blog-header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.blog-three-wrapepr .blog-body .blog-header .left {
  display: flex;
  align-items: center;
}
.blog-three-wrapepr .blog-body .blog-header .left i {
  color: var(--color-primary-3);
  font-size: 16px;
}
.blog-three-wrapepr .blog-body .blog-header .left span {
  color: #5D666F;
  margin-left: 7px;
  position: relative;
  margin-bottom: -2px;
  font-size: 16px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .blog-three-wrapepr .blog-body .blog-header .left span {
    font-size: 13px;
  }
}
@media only screen and (max-width: 1199px) {
  .blog-three-wrapepr .blog-body .blog-header .left span {
    font-size: 13px;
  }
}
.blog-three-wrapepr .blog-body .blog-header .right {
  margin-left: 25px;
  display: flex;
  align-items: center;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .blog-three-wrapepr .blog-body .blog-header .right {
    margin-left: 15px;
  }
}
@media only screen and (max-width: 1199px) {
  .blog-three-wrapepr .blog-body .blog-header .right {
    margin-left: 15px;
  }
}
@media only screen and (max-width: 575px) {
  .blog-three-wrapepr .blog-body .blog-header .right {
    margin-left: 0;
  }
}
.blog-three-wrapepr .blog-body .blog-header .right i {
  color: var(--color-primary-3);
  font-size: 16px;
}
.blog-three-wrapepr .blog-body .blog-header .right span {
  color: #5D666F;
  margin-left: 7px;
  position: relative;
  font-size: 16px;
  margin-bottom: -2px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .blog-three-wrapepr .blog-body .blog-header .right span {
    font-size: 13px;
  }
}
@media only screen and (max-width: 1199px) {
  .blog-three-wrapepr .blog-body .blog-header .right span {
    font-size: 13px;
  }
}
.blog-three-wrapepr .blog-body .body {
  padding: 30px 32px 32px 32px;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  border-radius: 0px 0px 10px 10px;
}
@media only screen and (max-width: 1199px) {
  .blog-three-wrapepr .blog-body .body {
    padding: 20px;
  }
}
@media only screen and (max-width: 575px) {
  .blog-three-wrapepr .blog-body .body {
    padding: 20px;
  }
}
.blog-three-wrapepr .blog-body .body a {
  transition: 0.3s;
}
.blog-three-wrapepr .blog-body .body a:hover .title {
  color: var(--color-primary-3);
}
.blog-three-wrapepr .blog-body .body a:hover {
  background: var(--color-primary-3);
  color: #fff;
}
.blog-three-wrapepr .blog-body .body .title {
  font-size: 24px;
  line-height: 34px;
  color: #1C2539;
}
@media only screen and (max-width: 1199px) {
  .blog-three-wrapepr .blog-body .body .title {
    font-size: 18px;
    line-height: 27px;
  }
}
@media only screen and (max-width: 575px) {
  .blog-three-wrapepr .blog-body .body .title {
    font-size: 16px;
    line-height: 26px;
  }
}

.rts-blog-h-2-wrapper {
  padding: 40px;
  border-radius: 30px;
  border: 1px solid #EDEFF3;
}
@media only screen and (max-width: 575px) {
  .rts-blog-h-2-wrapper {
    padding: 15px;
  }
}
.rts-blog-h-2-wrapper .thumbnail {
  overflow: hidden;
  display: block;
  max-width: max-content;
  margin-bottom: 30px;
  border-radius: 30px;
}
.rts-blog-h-2-wrapper .thumbnail img {
  width: 100%;
  transition: 0.5s;
}
.rts-blog-h-2-wrapper .thumbnail:hover img {
  transform: scale(1.1);
}
.rts-blog-h-2-wrapper .body span {
  color: #0B4DF5;
  font-size: 16px;
  font-weight: 500;
}
.rts-blog-h-2-wrapper .body a .title {
  margin-top: 15px;
  transition: 0.3s;
  color: #1C2539;
  font-weight: 700;
  line-height: 40px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-blog-h-2-wrapper .body a .title br {
    display: none;
  }
}
@media only screen and (max-width: 479px) {
  .rts-blog-h-2-wrapper .body a .title {
    font-size: 18px;
    line-height: 29px;
  }
}
.rts-blog-h-2-wrapper .body a:hover .title {
  color: var(--color-primary-2);
}
.rts-blog-h-2-wrapper .body .rts-read-more {
  color: #1C2539;
}
.rts-blog-h-2-wrapper .body .rts-read-more:hover {
  color: var(--color-primary-2);
}
.rts-blog-h-2-wrapper .body .rts-read-more:hover i {
  background: var(--color-primary-2);
  color: #fff;
}
.rts-blog-h-2-wrapper .body .rts-read-more i {
  background: #F5F5F5;
  color: #000;
}

.rts-blog-list-area .pagination {
  margin-top: 10px;
}
.rts-blog-list-area.inner {
  background: var(--color-gray);
}

@media only screen and (max-width: 479px) {
  .thumbnail.details.team {
    margin-bottom: 15px;
  }
}

@media only screen and (max-width: 479px) {
  .thumbnail.details.team {
    margin-bottom: 15px;
  }
}

@media only screen and (max-width: 479px) {
  .thumbnail.details.team {
    margin-top: 20px;
  }
}

@media only screen and (max-width: 767px) {
  .pr_sm-controler--0 {
    padding-right: calc(var(--bs-gutter-x) * 0.5) !important;
  }
}

.rts-blog-area4 .container .title-service-three .pre-title {
  color: var(--color-primary-4);
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.rts-blog-area4 .container .title-service-three .title {
  text-transform: none;
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area {
  background: #fff;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0px 2px 20px rgba(24, 16, 16, 0.09);
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area::after {
  display: none;
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area .content {
  position: unset;
  height: auto;
  margin-top: 25px;
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area .content .title {
  color: #1C2539;
  padding-bottom: 15px;
  border-bottom: 1px solid #E8E8E8;
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area .author-box {
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 25px;
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area .author-box .date {
  margin: 0;
  position: relative;
  font-size: 16px;
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area .author-box .date::before {
  position: absolute;
  font-family: "Font Awesome 5 Pro";
  left: -30px;
  color: var(--color-primary-4);
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area .author-box .author {
  margin-left: 40px;
  position: relative;
  font-size: 16px;
}
.rts-blog-area4 .container .service-one-inner-four .big-thumbnail-area .author-box .author::before {
  position: absolute;
  font-family: "Font Awesome 5 Pro";
  left: -25px;
  color: var(--color-primary-4);
}
.rts-blog-area4.blog-area5 .container .title-service-three .pre-title {
  color: var(--color-primary-2);
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.rts-blog-area4.blog-area5 .container .title-service-three .title {
  text-transform: none;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area {
  background: #f7f7f7;
  border-radius: 15px;
  padding: 0;
  box-shadow: none;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area::after {
  display: none;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .content-box {
  padding: 40px;
  transition: all 0.5s;
  border-radius: 15px;
}
@media (max-width: 500px) {
  .rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .content-box {
    padding: 30px 15px;
  }
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .thumbnail {
  border-radius: 15px 15px 0 0;
  position: relative;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .thumbnail img {
  border-radius: 0;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .thumbnail .date {
  position: absolute;
  background: var(--color-primary-2);
  color: #fff;
  bottom: 0;
  right: 0;
  padding: 7px 25px;
  border-radius: 15px 0 0 0;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .content {
  position: unset;
  height: auto;
  margin: 5px 0;
  transition: all 0.5s;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .content .title {
  color: #1C2539;
  padding-bottom: 0;
  border: none;
  margin-bottom: 15px;
  transition: all 0.5s;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .content .desc {
  margin: 0 0 20px 0;
  transition: all 0.5s;
  font-size: 16px;
  line-height: 26px;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .author-box {
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 0;
  transition: all 0.5s;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .author-box .author {
  margin-left: 0;
  font-size: 14px;
}
@media (max-width: 400px) {
  .rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .author-box .author {
    font-size: 13px;
  }
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .author-box .author span {
  color: var(--color-primary-2);
  transition: all 0.5s;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .author-box .author::before {
  display: none;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .button-area a {
  display: flex;
  align-items: center;
  font-weight: 500;
  width: 150px;
  color: var(--color-primary-2);
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .button-area a i {
  background: var(--color-primary-2);
  color: #fff;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.3s;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area .button-area a i:hover {
  background: #fff;
  color: var(--color-primary-2);
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area.area-5 {
  margin-bottom: 30px;
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area.area-5 .content-box {
  padding: 30px;
}
@media (max-width: 500px) {
  .rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area.area-5 .content-box {
    padding: 30px 15px;
  }
}
.rts-blog-area4.blog-area5 .container .service-one-inner-four .big-thumbnail-area.area-5 .content-box .content .desc {
  margin-bottom: 0;
  font-size: 16px;
}

.rts-inner-blog .blog-details .blog-full {
  max-width: 900px;
  margin: 0 auto;
}
.rts-inner-blog .blog-details .blog-full blockquote {
  margin: 35px 0px;
  padding: 60px;
  padding-top: 85px;
  color: #666;
  position: relative;
  background: var(--color-gray);
  font-weight: normal;
  font-style: italic;
  text-align: left;
  clear: both;
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
  position: relative;
}
.rts-inner-blog .blog-details .blog-full blockquote::before {
  font-size: 35px;
  color: var(--color-primary);
  position: absolute;
  padding-bottom: 0;
  display: inline-block;
  font-family: "Font Awesome 5 Pro";
  font-weight: 400;
  text-align: center;
  top: 45px;
  background: 0 0;
}
.rts-inner-blog .blog-details .blog-full blockquote cite {
  font-size: 15px;
  display: block;
  margin-top: 10px;
}
.rts-inner-blog .blog-details .blog-full blockquote cite::before {
  content: "";
  font-size: 28px;
  color: #ff5421;
  padding-bottom: 0px;
  display: inline-block;
  background: var(--color-primary);
  height: 2px;
  width: 40px;
  font-weight: 400;
  text-align: center;
  top: -4px;
  margin-right: 10px;
  position: relative;
}

.rts-blog-area.style-six .title-area .title {
  color: #0B101C;
}
.rts-blog-area.style-six .single-blog-one-wrapper .blog-content p {
  color: #0B101C;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}
.rts-blog-area.style-six .single-blog-one-wrapper .blog-content p span {
  color: #FA360A;
}
.rts-blog-area.style-six .single-blog-one-wrapper .blog-content a .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #0B101C;
}
.rts-blog-area.style-six .single-blog-one-wrapper .blog-content a.rts-read-more {
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #0B101C;
}
.rts-blog-area.style-six .single-blog-one-wrapper .blog-content a.rts-read-more i {
  background: #ECECEC;
  color: #000;
}
.rts-blog-area.style-six .single-blog-one-wrapper .blog-content a.rts-read-more:hover i {
  background: var(--color-primary-5);
  color: #ffff;
}
.rts-blog-area.style-six .single-blog-one-wrapper .thumbnail .blog-badge {
  background: var(--color-primary-5);
}

.single-circle-progress-inner {
  height: 320px;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  background-size: contain;
  align-items: center;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-circle-progress-inner {
    height: 369px;
  }
}
@media only screen and (max-width: 767px) {
  .single-circle-progress-inner {
    height: 265px;
  }
}
@media only screen and (max-width: 575px) {
  .single-circle-progress-inner {
    height: 495px;
  }
}
@media screen and (max-width: 569px) {
  .single-circle-progress-inner {
    height: 600px;
  }
}
@media screen and (max-width: 510px) {
  .single-circle-progress-inner {
    height: 525px;
  }
}
@media screen and (max-width: 460px) {
  .single-circle-progress-inner {
    height: 490px;
  }
}
@media screen and (max-width: 430px) {
  .single-circle-progress-inner {
    height: 440px;
  }
}
@media screen and (max-width: 390px) {
  .single-circle-progress-inner {
    height: 400px;
  }
}
@media screen and (max-width: 365px) {
  .single-circle-progress-inner {
    height: 330px;
  }
}
.single-circle-progress-inner .title {
  margin-top: 85px;
  color: #fff;
}
@media only screen and (max-width: 767px) {
  .single-circle-progress-inner .title {
    margin-top: 63px;
  }
}
@media screen and (max-width: 569px) {
  .single-circle-progress-inner .title {
    margin-top: 200px !important;
  }
}
@media screen and (max-width: 469px) {
  .single-circle-progress-inner .title {
    margin-top: 160px !important;
  }
}
@media screen and (max-width: 466px) {
  .single-circle-progress-inner .title {
    margin-top: 130px !important;
  }
}
@media screen and (max-width: 350px) {
  .single-circle-progress-inner .title {
    margin-top: 130px !important;
  }
}

.single-circle-progress-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 360px) {
  .single-circle-progress-inner {
    margin-left: 12px;
  }
}
@media screen and (max-width: 340px) {
  .single-circle-progress-inner {
    margin-left: 7px;
  }
}

.progress {
  width: 150px;
  height: 150px !important;
  float: left;
  line-height: 150px;
  background: none;
  margin: 20px;
  box-shadow: none;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-73%);
}

.progress:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 8px solid #434653;
  position: absolute;
  top: 0;
  left: 0;
}

.progress > span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}

.progress .progress-left {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 8px;
  border-style: solid;
  position: absolute;
  top: 0;
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.progress .progress-right {
  right: 0;
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards;
}

.progress .progress-value {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  font-size: 35px;
  color: #fff;
  line-height: 135px;
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
}

.progress.red .progress-bar {
  border-color: red;
}

.progress.red .progress-left .progress-bar {
  animation: loading-2 1.5s linear forwards 1.8s;
}

.progress.yellow .progress-bar {
  border-color: #fdba04;
}

.progress.yellow .progress-right .progress-bar {
  animation: loading-3 1.8s linear forwards;
}

.progress.yellow .progress-left .progress-bar {
  animation: none;
}

@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes loading-2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(125deg);
    transform: rotate(125deg);
  }
}
@keyframes loading-3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
}
.background-contact-appoinment {
  background: #F6F6F6;
}
.background-contact-appoinment .contact-form-area-one {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  background-color: rgba(255, 255, 255, 0);
  padding: 165px 120px 120px 120px;
  margin-left: -26px;
}
@media only screen and (max-width: 575px) {
  .background-contact-appoinment .contact-form-area-one {
    padding: 60px;
  }
}
@media only screen and (max-width: 479px) {
  .background-contact-appoinment .contact-form-area-one {
    padding: 60px 10px 60px 40px;
  }
}
.background-contact-appoinment .contact-form-area-one .title {
  color: #fff;
}
.background-contact-appoinment .contact-form-area-one input {
  background: #212329;
  color: #fff;
}
.background-contact-appoinment .contact-form-area-one input::-webkit-input-placeholder {
  color: #fff !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 21px !important;
}
.background-contact-appoinment .contact-form-area-one textarea {
  color: #fff;
  background: #212329;
}
.background-contact-appoinment .contact-form-area-one textarea::-webkit-input-placeholder {
  color: #fff !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 21px !important;
}

.contact-image-one.appoinment {
  margin-right: -123px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .contact-image-one.appoinment img {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .contact-image-one.appoinment img {
    width: 100%;
  }
}

.rts-contact-area.contact-one.appoinment::after {
  display: none;
}

.appoinment-team {
  padding-bottom: 210px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .appoinment-team {
    padding-bottom: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .appoinment-team {
    padding-bottom: 60px;
  }
}

.rts-faq-area {
  position: relative;
  overflow: hidden;
}
.rts-faq-area::after {
  position: absolute;
  content: "";
  right: -9%;
  top: -33%;
  height: 736px;
  width: 736px;
  background-size: contain;
  z-index: -1;
  animation: rotateIt 20s linear infinite;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-faq-area::after {
    position: absolute;
    content: "";
    right: -22%;
    top: -16%;
    height: 500px;
    width: 500px;
    background-size: contain;
    z-index: -1;
    animation: rotateIt 20s linear infinite;
  }
}
@media only screen and (max-width: 767px) {
  .rts-faq-area::after {
    position: absolute;
    content: "";
    right: -22%;
    top: -10%;
    height: 300px;
    width: 300px;
    background-size: contain;
    z-index: -1;
    animation: rotateIt 20s linear infinite;
  }
}
.rts-faq-area::before {
  position: absolute;
  content: "";
  left: -14%;
  top: 11%;
  width: 698px;
  height: 698px;
  background-size: contain;
  z-index: -1;
  animation: jump-2 5s linear infinite;
}
.rts-faq-area .faq-thumbnail img {
  width: 100%;
  animation: jump-2 5s linear infinite;
}
@media only screen and (max-width: 479px) {
  .rts-faq-area .faq-thumbnail img {
    margin-bottom: 30px;
  }
}
.rts-faq-area.inner {
  background-color: #fff;
}
.rts-faq-area.inner::before {
  display: none;
}
.rts-faq-area.inner::after {
  display: none;
}
.rts-faq-area.inner2 {
  background-color: var(--color-gray);
}

.accordion-area .title-area {
  margin-bottom: 50px;
}
.accordion-area .title-area span {
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
}
.accordion-area .title-area .title {
  margin-bottom: 0;
}
.accordion-area.inner {
  max-width: 700px;
  margin: 0 auto;
}

.accordion-one-inner .accordion-item {
  box-shadow: 0px 7px 18px rgba(24, 16, 16, 0.05);
  margin-bottom: 20px;
  border: none;
}
.accordion-one-inner .accordion-item .accordion-header button {
  font-size: 18px;
  color: #1C2539;
  font-weight: 700;
  padding: 29px 40px;
}
@media only screen and (max-width: 575px) {
  .accordion-one-inner .accordion-item .accordion-header button {
    padding: 13px 15px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 479px) {
  .accordion-one-inner .accordion-item .accordion-header button {
    display: flex;
    align-items: flex-start;
  }
}
.accordion-one-inner .accordion-item .accordion-header button::after {
  background-image: none;
  font-family: "Font Awesome 5 Pro" !important;
  transition: 0.3s;
  color: var(--color-primary);
}
.accordion-one-inner .accordion-item .accordion-header button span {
  color: var(--color-primary);
  margin-right: 5px;
  min-width: max-content;
}
.accordion-one-inner .accordion-item .accordion-header button:focus {
  box-shadow: none;
}
.accordion-one-inner .accordion-item .accordion-header .accordion-button:not(.collapsed) {
  box-shadow: none;
  background: #fff;
}
.accordion-one-inner .accordion-item .accordion-header .accordion-button:not(.collapsed)::after {
  background-image: none;
  font-family: "Font Awesome 5 Pro" !important;
  transform: rotate(0);
  transition: 0.3s;
}
.accordion-one-inner .accordion-item .accordion-body {
  padding: 0px 40px 40px 40px;
}
@media only screen and (max-width: 479px) {
  .accordion-one-inner .accordion-item .accordion-body {
    font-size: 14px;
    line-height: 24px;
    padding: 20px;
    padding-top: 0;
  }
}
.accordion-one-inner.inner .accordion-item {
  box-shadow: none !important;
  border: 1px solid #9993;
  border-radius: 15px;
  background-color: var(--color-gray);
}
.accordion-one-inner.inner .accordion-item .accordion-header button {
  border-radius: 15px;
  background-color: var(--color-gray);
}
.accordion-one-inner.inner .accordion-item .accordion-button:not(.collapsed) {
  box-shadow: none;
  background: var(--color-gray);
}
.accordion-one-inner.inner .accordion-item .accordion-button:not(.collapsed)::after {
  background-image: none;
  font-family: "Font Awesome 5 Pro" !important;
  transform: rotate(0);
  transition: 0.3s;
}
.accordion-one-inner.inner2 .accordion-item {
  border: none;
  box-shadow: 0px 7px 18px rgba(24, 16, 16, 0.05) !important;
  border-radius: 15px;
}
.accordion-one-inner.inner2 .accordion-item .accordion-header button {
  font-size: 18px;
  border-radius: 15px;
  background-color: #fff;
  font-weight: 700;
  padding: 29px 40px;
}
@media only screen and (max-width: 575px) {
  .accordion-one-inner.inner2 .accordion-item .accordion-header button {
    padding: 13px 15px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 479px) {
  .accordion-one-inner.inner2 .accordion-item .accordion-header button {
    display: flex;
    align-items: flex-start;
  }
}
.accordion-one-inner.inner2 .accordion-item .accordion-header button::after {
  background-image: none;
  font-family: "Font Awesome 5 Pro" !important;
  transition: 0.3s;
  color: var(--color-primary);
}
.accordion-one-inner.inner2 .accordion-item .accordion-header button span {
  color: var(--color-primary);
  margin-right: 5px;
  min-width: max-content;
}
.accordion-one-inner.inner2 .accordion-item .accordion-header button:focus {
  box-shadow: none;
}
.accordion-one-inner.inner2 .accordion-item .accordion-header .accordion-button:not(.collapsed) {
  box-shadow: none;
  background: var(--color-primary);
  color: #fff;
  border-radius: 15px 15px 0 0;
}
.accordion-one-inner.inner2 .accordion-item .accordion-header .accordion-button:not(.collapsed)::after {
  background-image: none;
  font-family: "Font Awesome 5 Pro" !important;
  transform: rotate(0);
  transition: 0.3s;
  color: #fff;
}
.accordion-one-inner.inner2 .accordion-item .accordion-header .accordion-button:not(.collapsed) span {
  color: #fff;
}
.accordion-one-inner.inner2 .accordion-item .accordion-body {
  padding: 0px 40px 40px 40px;
  color: #f9f9f9;
  background: var(--color-primary);
}
@media only screen and (max-width: 479px) {
  .accordion-one-inner.inner2 .accordion-item .accordion-body {
    font-size: 14px;
    line-height: 24px;
    padding: 20px;
    padding-top: 0;
  }
}

.tab-content > .tab-pane {
  display: none;
  transition: 0.3s;
}

.tab-content > .active {
  display: block;
  transition: 0.3s;
}

.tab-content {
  transition: 0.3s;
}

.faq-two-inner .title-area-faq .sub {
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.3em;
}
.faq-two-inner .title-area-faq span.sm-title {
  font-size: 40px;
}
@media only screen and (max-width: 575px) {
  .faq-two-inner .title-area-faq span.sm-title {
    font-size: 30px;
  }
}
@media only screen and (max-width: 479px) {
  .faq-two-inner .title-area-faq span.sm-title {
    font-size: 20px;
  }
}
.faq-two-inner .title-area-faq span.sm-title span {
  color: var(--color-primary);
  font-weight: 600;
}
.faq-two-inner .title-area-faq .title {
  color: #fff;
  text-transform: uppercase;
  margin-top: 5px;
}
.faq-two-inner .faq-accordion-area {
  margin-top: 47px;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item {
  background: transparent;
  margin-bottom: 30px;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item:last-child {
  margin-bottom: 0;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button {
  border: 1px solid #414857;
  background: transparent;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  height: 60px;
  align-items: center;
  display: flex;
  padding: 0 35px;
}
@media only screen and (max-width: 575px) {
  .faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button {
    font-size: 14px;
  }
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true] {
  border: 1px solid transparent;
  background: #fff;
  color: #1C2539;
  border-radius: 5px 5px 0 0;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button[aria-expanded=true]::after {
  font-family: "Font Awesome 5 Pro" !important;
  background-image: none;
  top: -5px;
  position: relative;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button span {
  color: var(--color-primary);
  margin-right: 10px;
  min-width: max-content;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button:focus {
  box-shadow: none;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button::after {
  font-family: "Font Awesome 5 Pro" !important;
  background-image: none;
  top: -5px;
  position: relative;
  transform: none;
  color: var(--color-primary);
}
.faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header .accordion-button:not(.collapsed) {
  box-shadow: none;
}
.faq-two-inner .faq-accordion-area .accordion .accordion-body {
  background: #fff;
  border-radius: 0 0 5px 5px;
  padding: 10px 35px 35px 35px;
}

.thumbnail-faq-four {
  padding-left: 30px;
}

.home-yellow .faq-two-inner .title-area-faq .sub,
.home-yellow .faq-two-inner .title-area-faq span.sm-title span,
.home-yellow .faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button span,
.home-yellow .faq-two-inner .faq-accordion-area .accordion .accordion-item .accordion-header button::after {
  color: var(--color-primary-3);
}

.rts-contact-area.contact-one {
  position: relative;
  z-index: 1;
}
.rts-contact-area.contact-one::after {
  position: absolute;
  content: "";
  right: 10%;
  top: -8%;
  height: 190px;
  width: 190px;
  z-index: -24;
  animation: rotateIt 15s linear infinite;
}

.contact-form-area-one {
  padding: 120px 100px;
  background: #fff;
  box-shadow: 0px 21px 46px #0000000a;
}
@media only screen and (max-width: 767px) {
  .contact-form-area-one {
    padding: 25px;
  }
}

.contact-form-area-one form {
  margin-top: 45px;
}
.contact-form-area-one form input {
  height: 55px;
  background: #F7F7F7;
  margin-bottom: 20px;
  border-radius: 15px;
  padding: 0 25px;
  border: 1px solid transparent;
}
.contact-form-area-one form input:focus {
  border: 1px solid var(--color-primary);
}
.contact-form-area-one form textarea {
  border-radius: 15px;
  background: #F7F7F7;
  height: 150px;
  padding: 15px 25px;
  border: 1px solid transparent;
}
.contact-form-area-one form textarea:focus {
  border: 1px solid var(--color-primary);
}
.contact-form-area-one form .name-email {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (max-width: 767px) {
  .contact-form-area-one form .name-email {
    flex-direction: column;
  }
}
.contact-form-area-one form .name-email input {
  width: 48.8%;
}
@media only screen and (max-width: 767px) {
  .contact-form-area-one form .name-email input {
    width: 100%;
    display: block;
  }
}
.contact-form-area-one .rts-btn {
  display: block;
  max-width: max-content;
  margin-top: 30px;
}

.contact-form-area-one .pre-title {
  letter-spacing: 0.1em;
}
.contact-form-area-one .error {
  color: var(--color-primary);
}
.contact-form-area-one .success {
  color: green;
  margin-bottom: 15px;
}

.contact-map-area-fluid {
  position: relative;
}
.contact-map-area-fluid .contact-map {
  width: 100%;
  height: 580px;
}
.contact-map-area-fluid .location {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  max-width: 100px;
  height: auto;
}

.rts-contact-fluid {
  box-shadow: 0px 24px 39px rgba(0, 0, 0, 0.05);
}
.rts-contact-fluid .form-wrapper {
  width: 80%;
  margin: auto;
}
@media only screen and (max-width: 575px) {
  .rts-contact-fluid .form-wrapper {
    width: 90%;
  }
}
.rts-contact-fluid .form-wrapper .error {
  color: var(--color-primary);
  margin-bottom: 15px;
}
.rts-contact-fluid .form-wrapper .success {
  color: green;
  margin-bottom: 15px;
}

.rts-contact-fluid .form-wrapper form .name-email {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (max-width: 767px) {
  .rts-contact-fluid .form-wrapper form .name-email {
    flex-direction: column;
  }
}
.rts-contact-fluid .form-wrapper form .name-email input {
  width: 48.8%;
}
@media only screen and (max-width: 767px) {
  .rts-contact-fluid .form-wrapper form .name-email input {
    width: 100%;
  }
}
.rts-contact-fluid .form-wrapper input {
  background: #F6F6F6;
  height: 55px;
  border-radius: 15px;
  margin-bottom: 25px;
  border: 1px solid transparent;
}
.rts-contact-fluid .form-wrapper input:focus {
  border: 1px solid var(--color-primary);
}
.rts-contact-fluid .form-wrapper textarea {
  height: 150px;
  background: #F6F6F6;
  border-radius: 15px;
  padding: 15px 15px;
  border: 1px solid transparent;
}
.rts-contact-fluid .form-wrapper textarea:focus {
  border: 1px solid var(--color-primary);
}
.rts-contact-fluid .rts-btn {
  display: block;
  max-width: max-content;
  margin: auto;
  margin-top: 30px;
}

.onepage.two .rts-contact-fluid .form-wrapper {
  width: 100%;
}

.onepage.two .rts-contact-fluid {
  box-shadow: none;
}
.onepage.two .rts-title-area p.pre-title {
  font-size: 18px;
  color: #5D666F !important;
  font-weight: 500 !important;
}
.onepage.two .rts-title-area.contact-fluid::after {
  content: "09";
  left: 49%;
  transform: translateX(-50%);
  z-index: -1;
  height: 109px;
  top: -40%;
  min-width: max-content;
}

.contact-four::before {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  left: -2%;
  bottom: 10%;
  animation: rotateIt 15s linear infinite;
}
@media (max-width: 768px) {
  .contact-four::before {
    display: none;
  }
}
.contact-four::after {
  background-repeat: no-repeat;
  background-size: cover;
  right: 8% !important;
  top: 20% !important;
}
.contact-four .container .contact-image-one img {
  width: 100%;
}
@media (max-width: 767px) {
  .contact-four .container .contact-form-area-one {
    padding-top: 50px;
  }
}
.contact-four .container .contact-form-area-one .rts-title-area::after {
  display: none;
}
.contact-four .container .contact-form-area-one .rts-title-area .pre-title {
  color: var(--color-primary-4);
}
.contact-four .container .contact-form-area-one .btn-primary {
  background: var(--color-primary-4);
}
.contact-four .container .contact-form-area-one .btn-primary:hover {
  color: var(--color-primary-4);
  background: #E4E7FF;
}
.contact-four .container .contact-form-area-one form input:focus {
  border-color: var(--color-primary-4);
}
.contact-four .container .contact-form-area-one form textarea:focus {
  border-color: var(--color-primary-4);
}

.index-six .rts-contact-fluid .rts-btn:hover {
  color: var(--color-primary-5);
  background: var(--color-gray);
}

.bg-light-white {
  background: #F7F7F7;
}

.rts-map-area {
  position: relative;
}
.rts-map-area::after {
  position: absolute;
  content: "";
  height: 105px;
  width: 105px;
  left: 53px;
  top: -11%;
  background-size: cover;
  animation: rotateIt 10s linear infinite;
}

@media only screen and (max-width: 767px) {
  .contact-image-one img {
    width: 100%;
  }
}

.mapdetails-inner-one {
  margin-left: 305px;
  display: flex;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .mapdetails-inner-one {
    margin-left: 200px;
  }
}
@media only screen and (max-width: 1199px) {
  .mapdetails-inner-one {
    margin-left: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mapdetails-inner-one {
    padding: 30px 0;
  }
}
@media only screen and (max-width: 767px) {
  .mapdetails-inner-one {
    margin-left: 100px;
    padding: 30px 0;
  }
}
@media only screen and (max-width: 575px) {
  .mapdetails-inner-one {
    margin-left: 0;
  }
}
.mapdetails-inner-one .single-wized {
  margin-right: 63px;
  width: 41%;
}
@media only screen and (max-width: 575px) {
  .mapdetails-inner-one .single-wized {
    margin-right: 30px;
  }
}
.mapdetails-inner-one .single-wized:last-child {
  margin-right: 0;
}
.mapdetails-inner-one .single-wized .title {
  position: relative;
  margin-bottom: 40px;
  min-width: max-content;
}
.mapdetails-inner-one .single-wized .title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: var(--color-primary);
}
.mapdetails-inner-one .single-wized:first-child {
  border-right: 1px solid #E4E4E4;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .mapdetails-inner-one .single-wized:first-child {
    border: none;
  }
}
@media only screen and (max-width: 767px) {
  .mapdetails-inner-one .single-wized:first-child {
    border: none;
  }
}
@media only screen and (max-width: 575px) {
  .mapdetails-inner-one .single-wized:first-child {
    border-right: none;
  }
}
.mapdetails-inner-one.inner {
  max-width: 700px;
  margin: 0 auto;
}

.mapdetails-inner-one {
  display: flex;
}
@media only screen and (max-width: 575px) {
  .mapdetails-inner-one {
    flex-direction: column;
  }
}
@media only screen and (max-width: 575px) {
  .mapdetails-inner-one .left-area {
    margin-bottom: 30px;
  }
}
.mapdetails-inner-one .left-area .details p {
  margin-bottom: 3px;
  color: #5D666F;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
}
.mapdetails-inner-one .left-area .details a.number {
  font-size: 16px;
  font-weight: 700;
  color: #1C2539;
  margin-bottom: 30px;
}
.mapdetails-inner-one .left-area .details p.time-header {
  margin-top: 30px;
  margin-bottom: 5px;
  color: #5D666F;
}
.mapdetails-inner-one .left-area .details p.time {
  color: #1C2539;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
}
.mapdetails-inner-one .right-area .details p {
  margin-bottom: 3px;
  color: #5D666F;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
}
.mapdetails-inner-one .right-area .details a {
  color: #1C2539;
  font-size: 16px;
  font-weight: 700;
}
.mapdetails-inner-one .right-area .details p.headoffice {
  margin-top: 24px;
}
.mapdetails-inner-one .right-area .details p.office {
  color: #1C2539;
  font-weight: 700;
}

.team-details-support-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.team-details-support-wrapper i {
  height: 60px;
  width: 60px;
  border-radius: 15px;
  border: 1px solid #EDEDED;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: var(--color-primary);
}
.team-details-support-wrapper .support-innner {
  margin-left: 20px;
}
.team-details-support-wrapper .support-innner span {
  margin-bottom: 5px;
  color: #5D666F;
  font-size: 16px;
  font-weight: 400;
}
.team-details-support-wrapper .support-innner a .title {
  margin-bottom: 0;
  transition: 0.3s;
}
@media only screen and (max-width: 479px) {
  .team-details-support-wrapper .support-innner a .title {
    font-size: 14px;
  }
}
.team-details-support-wrapper .support-innner a:hover .title {
  color: var(--color-primary);
}

p.disc {
  font-size: 16px;
  line-height: 26px;
}

.details-right-inner .title-area {
  margin-bottom: 16px;
}
.details-right-inner .title-area span {
  color: #5D666F;
  font-weight: 500;
  font-size: 16px;
}
.details-right-inner .title-area .title {
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 40px;
}
.details-right-inner p.disc {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 33px;
  color: #5D666F;
}
.details-right-inner .rts-btn {
  margin-top: 30px;
  display: block;
  max-width: max-content;
}

.single-about-skill-inner .title {
  position: relative;
  margin-bottom: 40px;
}
.single-about-skill-inner .title::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #F1F1F1;
}

.rts-progress-one-wrapper .meter {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  display: block;
  height: 8px;
  margin-bottom: 10px;
  position: relative;
}
.rts-progress-one-wrapper .meter > span {
  display: block;
  height: 100%;
  background-color: #DF0A0A;
  position: relative;
  overflow: hidden;
  transition: width 2s ease-out;
}
.rts-progress-one-wrapper .orange > span {
  background-color: #DF0A0A;
}
.rts-progress-one-wrapper .red > span {
  background-color: #DF0A0A;
}
.rts-progress-one-wrapper .cadetblue > span {
  background-color: #DF0A0A;
}

.rts-progress-one-wrapper .single-progress {
  margin-bottom: 20px;
  border-bottom: 1px solid #F1F1F1;
}
.rts-progress-one-wrapper .progress-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.rts-progress-one-wrapper .progress-top p {
  margin-bottom: 0;
  color: #DF0A0A;
  font-weight: 500;
  font-size: 16px;
}
.rts-progress-one-wrapper .progress-top .persectage {
  color: #DF0A0A;
  font-weight: 500;
  font-size: 16px;
}

.education-skill-wrapper {
  display: flex;
  box-shadow: 0px 13px 21px rgba(0, 0, 0, 0.03);
  flex-wrap: wrap;
}
.education-skill-wrapper .number-area {
  position: absolute;
  height: 60px;
  width: 60px;
  background: var(--color-primary);
  border-radius: 50%;
  left: -4%;
  top: -10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.education-skill-wrapper .number-area p {
  font-size: 22px;
  color: #fff;
  margin-left: auto;
  margin-top: auto;
  margin-right: 12px;
  margin-bottom: 8px;
}
.education-skill-wrapper .number-area p span {
  font-size: 12px;
  color: #fff;
  margin-left: -3px;
}
.education-skill-wrapper .single-skill {
  padding: 30px 60px;
  border: 1px solid #F1F1F1;
  width: 50%;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  background: #fff;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .education-skill-wrapper .single-skill {
    padding: 30px 11px 30px 50px;
  }
}
@media only screen and (max-width: 1199px) {
  .education-skill-wrapper .single-skill {
    padding: 30px 10px 30px 40px;
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .education-skill-wrapper .single-skill {
    padding: 30px 10px 30px 50px;
  }
}
.education-skill-wrapper .single-skill .experience {
  margin-bottom: 3px;
}
.education-skill-wrapper .single-skill .date span {
  color: var(--color-primary);
}
.education-skill-wrapper .single-skill:hover {
  transform: scale(1.05);
}

.single-contact-one-inner {
  background: #FFFFFF;
  border: 1px solid #F0F0F0;
  border-radius: 15px;
  height: 100%;
}
.single-contact-one-inner .thumbnail {
  display: block;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}
.single-contact-one-inner .thumbnail img {
  width: 100%;
  transition: 0.3s;
}
.single-contact-one-inner .thumbnail:hover img {
  transform: scale(1.1);
}
.single-contact-one-inner .content {
  display: flex;
  align-items: center;
  padding: 40px;
  background-color: var(--color-primary-alta);
}
@media only screen and (max-width: 767px) {
  .single-contact-one-inner .content {
    padding: 15px;
  }
}
.single-contact-one-inner .content .icone {
  margin-right: 20px;
}
.single-contact-one-inner .content .info span {
  margin-bottom: 0;
  color: var(--color-primary);
  font-weight: 500;
}
.single-contact-one-inner .content .info a h5 {
  margin-bottom: 0;
  transition: 0.3s;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single-contact-one-inner .content .info a h5 {
    font-size: 18px;
  }
}
@media only screen and (max-width: 767px) {
  .single-contact-one-inner .content .info a h5 {
    font-size: 18px;
  }
}
.single-contact-one-inner .content .info a:hover h5 {
  color: var(--color-primary);
}

.working-process-bg {
  max-width: 1680px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.rts-working-process-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rts-working-process-1 .inner {
  width: 192px;
  height: 192px;
  border: 2px dashed #0b4df52f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 33px;
  transition: 0.3s;
  position: relative;
}
.rts-working-process-1 .inner.two::after {
  content: "02";
}
.rts-working-process-1 .inner.three::after {
  content: "03";
}
.rts-working-process-1 .inner.four::after {
  content: "04";
}
.rts-working-process-1 .inner::after {
  position: absolute;
  right: 5px;
  top: 7px;
  content: "01";
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-primary-2);
  color: #fff;
  transform: scale(0);
  transition: 0.3s;
}
.rts-working-process-1 .inner .icon {
  height: 144px;
  width: 144px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rts-working-process-1 .content .title {
  margin-bottom: 7px;
}
.rts-working-process-1.process-lg .inner {
  width: 245px;
  height: 245px;
}
.rts-working-process-1.process-lg .inner::after {
  width: 60px;
  height: 60px;
}
.rts-working-process-1.process-lg .inner .icon {
  width: 193.03px;
  height: 193.03px;
}
.rts-working-process-1:hover .inner {
  border: 2px dashed var(--color-primary-2);
}
.rts-working-process-1:hover .inner::after {
  transform: scale(1);
}

.rts-service-areah2-im-3 .image-area {
  position: relative;
  margin-bottom: 120px;
  margin-top: 30px;
}
@media only screen and (max-width: 479px) {
  .rts-service-areah2-im-3 .image-area {
    margin-bottom: 80px;
  }
}
.rts-service-areah2-im-3 .image-area .ratio-area {
  position: absolute;
  top: 60px;
  left: 60px;
}
@media only screen and (max-width: 479px) {
  .rts-service-areah2-im-3 .image-area .ratio-area {
    top: 30px;
    left: 30px;
  }
}
.rts-service-areah2-im-3 .image-area .ratio-area .ratio {
  color: #fff;
  margin-bottom: 0px;
  font-size: 40px;
  font-weight: 700;
}
.rts-service-areah2-im-3 .image-area .ratio-area span {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}
@media only screen and (max-width: 479px) {
  .rts-service-areah2-im-3 .image-area .ratio-area span {
    font-size: 16px;
  }
}
.rts-service-areah2-im-3 .image-area img {
  border-radius: 20px;
}
.rts-service-areah2-im-3 .image-area img.two {
  position: absolute;
  z-index: 5;
  top: -10%;
  left: 40%;
  animation: jump-1 5s linear infinite;
}
.rts-service-areah2-im-3 .image-area img.three {
  position: absolute;
  left: 18%;
  top: 38%;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .rts-service-areah2-im-3 .image-area img.three {
    width: 85%;
  }
}

.working-process-area2 {
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.working-process-area2 .container .title-area span {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
}
.working-process-area2 .container .title-area .title {
  color: #fff;
}
.working-process-area2 .container .rts-working-process-1 .inner {
  border-color: #5264f330;
}
.working-process-area2 .container .rts-working-process-1 .inner::after {
  background: var(--color-primary-4);
}
.working-process-area2 .container .rts-working-process-1:hover .inner {
  border-color: var(--color-primary-4);
}
.working-process-area2 .container .rts-working-process-1 .content .title {
  color: #fff;
}

.working-process-area2.home-6 .rts-working-process-1 .inner {
  border-color: #fa360a25;
}

.working-process-area2.home-6 .container .rts-working-process-1:hover .inner {
  border-color: var(--color-primary-5);
}

.working-process-area2.home-6 .container .rts-working-process-1 .inner::after {
  background: var(--color-primary-5);
}

.progress-wrap {
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  border-radius: 50px;
  z-index: 10000;
  opacity: 1;
  visibility: hidden;
  transform: translateY(15px);
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.progress-wrap.active-progress {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.progress-wrap::after {
  position: absolute;
  font-family: "unicons";
  text-align: center;
  line-height: 46px;
  font-size: 24px;
  color: var(--color-primary);
  left: 0;
  top: 0;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  z-index: 1;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  border: 2px solid var(--color-primary);
  box-shadow: none;
  border-radius: 50% !important;
  border-radius: 5px;
}

.progress-wrap:hover::after {
  opacity: 1;
  border: 2px solid var(--color-primary);
}

.progress-wrap::before {
  position: absolute;
  font-family: "unicons";
  text-align: center;
  line-height: 46px;
  font-size: 24px;
  opacity: 0;
  background: var(--color-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  left: 0;
  top: 0;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  z-index: 2;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.progress-wrap:hover::before {
  opacity: 0;
}

.progress-wrap svg path {
  fill: none;
}

.progress-wrap svg {
  color: #df0a0a;
  border-radius: 50%;
  background: #fff;
}

.progress-wrap svg.progress-circle path {
  stroke: #df0a0a;
  stroke-width: 34px;
  box-sizing: border-box;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.home-blue .progress-wrap svg.progress-circle path {
  stroke: var(--color-primary-2);
}
.home-blue .progress-wrap::after {
  border-color: var(--color-primary-2);
  box-shadow: 0px 3px 20px 6px #0742e952;
  color: var(--color-primary-2);
}

.home-blue2 .progress-wrap svg.progress-circle path {
  stroke: var(--color-primary-2);
}
.home-blue2 .progress-wrap::after {
  border-color: var(--color-primary-2);
  box-shadow: 0px 3px 20px 6px #0742e952;
  color: var(--color-primary-2);
}

.home-violet .progress-wrap svg.progress-circle path {
  stroke: var(--color-primary-4);
}
.home-violet .progress-wrap::after {
  border-color: var(--color-primary-4);
  box-shadow: 0px 3px 20px 6px #0742e952;
  color: var(--color-primary-4);
}

/* Loader Styles start here */
.loader-wrapper {
  --line-width: 3px;
  --curtain-color: #ffffff;
  --outer-line-color: var(--color-primary-4);
  --middle-line-color: var(--color-primary-3);
  --inner-line-color: #cf1414;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.loader {
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: var(--line-width) solid transparent;
  border-top-color: var(--outer-line-color);
  border-radius: 100%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  z-index: 1001;
}

.loader:before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  border: var(--line-width) solid transparent;
  border-top-color: var(--inner-line-color);
  border-radius: 100%;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}

.loader:after {
  content: "";
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  bottom: 14px;
  border: var(--line-width) solid transparent;
  border-top-color: var(--middle-line-color);
  border-radius: 100%;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.loader-wrapper .loader-section {
  position: fixed;
  top: 0;
  background: var(--curtain-color);
  width: 51%;
  height: 100%;
  z-index: 1000;
}

.loader-wrapper .loader-section.section-left {
  left: 0;
}

.loader-wrapper .loader-section.section-right {
  right: 0;
}

/* Loaded Styles */
.loaded .loader-wrapper .loader-section.section-left {
  transform: translateX(-100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded .loader-wrapper .loader-section.section-right {
  transform: translateX(100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded .loader {
  opacity: 0;
  transition: all 0.3s ease-out;
}

.loaded .loader-wrapper {
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.3s 1s ease-out;
}

.background-cta {
  background-repeat: no-repeat;
  background-color: #DF0A0A;
  background-blend-mode: multiply;
  overflow: hidden;
  border-radius: 100px;
  background-position: center;
  object-fit: contain;
  background-size: cover;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .background-cta {
    border-radius: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .background-cta {
    border-radius: 10px;
  }
}

.rts-cta-wrapper .background-cta .cta-left-wrapepr {
  margin-left: 80px;
  padding: 45px 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-cta-wrapper .background-cta .cta-left-wrapepr {
    padding-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-cta-wrapper .background-cta .cta-left-wrapepr {
    padding-bottom: 10px;
    padding-top: 20px;
  }
}
@media only screen and (max-width: 575px) {
  .rts-cta-wrapper .background-cta .cta-left-wrapepr {
    margin: 0;
    text-align: center;
  }
}
.rts-cta-wrapper .background-cta .cta-left-wrapepr p {
  margin-bottom: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  font-family: var(--font-secondary);
}
@media only screen and (max-width: 479px) {
  .rts-cta-wrapper .background-cta .cta-left-wrapepr p {
    font-size: 14px;
  }
}
.rts-cta-wrapper .background-cta .cta-left-wrapepr .title {
  color: #fff;
  margin-bottom: 0;
  margin-top: -5px;
}
@media only screen and (max-width: 479px) {
  .rts-cta-wrapper .background-cta .cta-left-wrapepr .title {
    font-size: 18px;
  }
}
.rts-cta-wrapper .background-cta .cta-input-arae {
  padding: 60px 0;
  position: relative;
}
@media screen and (max-width: 996px) {
  .rts-cta-wrapper .background-cta .cta-input-arae {
    padding-top: 0;
    margin-left: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .rts-cta-wrapper .background-cta .cta-input-arae {
    padding-bottom: 20px;
  }
}
@media only screen and (max-width: 575px) {
  .rts-cta-wrapper .background-cta .cta-input-arae {
    margin-left: 20px;
    padding-bottom: 30px;
  }
}
.rts-cta-wrapper .background-cta .cta-input-arae input {
  background: #FFFFFF;
  border-radius: 100px;
  height: 55px;
  width: 547px;
  color: #000;
  padding: 0 186px 0 25px;
}
@media screen and (max-width: 1400px) {
  .rts-cta-wrapper .background-cta .cta-input-arae input {
    width: 64%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .rts-cta-wrapper .background-cta .cta-input-arae input {
    width: 64%;
  }
}
@media only screen and (max-width: 767px) {
  .rts-cta-wrapper .background-cta .cta-input-arae input {
    padding-right: 50px;
  }
}
@media only screen and (max-width: 575px) {
  .rts-cta-wrapper .background-cta .cta-input-arae input {
    height: 45px;
  }
}
@media only screen and (max-width: 479px) {
  .rts-cta-wrapper .background-cta .cta-input-arae input {
    border-radius: 5px;
  }
}
.rts-cta-wrapper .background-cta .cta-input-arae button {
  position: absolute;
  border-radius: 100px;
  max-width: max-content;
  right: 90px;
}
@media only screen and (max-width: 575px) {
  .rts-cta-wrapper .background-cta .cta-input-arae button {
    padding: 12px;
    right: 20px;
    margin-left: 0;
  }
}
@media only screen and (max-width: 479px) {
  .rts-cta-wrapper .background-cta .cta-input-arae button {
    border-radius: 5px;
    font-size: 12px;
  }
}

.footer-one-single-wized.mid-bg {
  background: linear-gradient(180deg, #0E1422 -4.66%, #212631 100%);
  border-radius: 15px;
  padding: 40px;
  margin-top: -40px;
  margin: -40px 30px 0 30px;
}
@media only screen and (max-width: 767px) {
  .footer-one-single-wized.mid-bg {
    margin-left: 0;
    margin-top: 30px;
    margin-bottom: 50px;
  }
}
@media only screen and (max-width: 575px) {
  .footer-one-single-wized.mid-bg {
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 479px) {
  .footer-one-single-wized.mid-bg {
    margin-right: 0;
    padding: 10px;
  }
}
.footer-one-single-wized.mid-bg .opening-time-inner .single-opening {
  display: flex;
  justify-content: space-between;
}
.footer-one-single-wized.mid-bg .opening-time-inner .single-opening p {
  margin-bottom: 15px;
  color: #fff;
  font-family: var(--font-primary);
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer-one-single-wized.mid-bg .opening-time-inner .single-opening p {
    font-size: 14px;
  }
}
.footer-one-single-wized.mid-bg .opening-time-inner .rts-btn.contact-us {
  display: block;
  max-width: max-content;
}
@media only screen and (max-width: 479px) {
  .footer-one-single-wized.mid-bg .opening-time-inner .rts-btn.contact-us {
    padding: 12px 22px;
  }
}
.footer-one-single-wized .wized-title {
  margin-bottom: 25px;
}
.footer-one-single-wized .wized-title .title {
  color: #fff;
  margin-bottom: 10px;
}
.footer-one-single-wized .quick-link-inner {
  display: flex;
}
@media only screen and (max-width: 479px) {
  .footer-one-single-wized .quick-link-inner {
    flex-direction: column;
  }
}
.footer-one-single-wized .quick-link-inner .links {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.footer-one-single-wized .quick-link-inner .links.margin-left-70 {
  margin-left: 70px;
}
@media only screen and (max-width: 479px) {
  .footer-one-single-wized .quick-link-inner .links.margin-left-70 {
    margin-left: 0;
  }
}
.footer-one-single-wized .quick-link-inner .links li {
  margin-top: 0;
}
.footer-one-single-wized .quick-link-inner .links li a {
  color: #8B8F99;
  transition: var(--transition);
  position: relative;
  max-width: max-content;
}
.footer-one-single-wized .quick-link-inner .links li a::after {
  position: absolute;
  content: "";
  width: 0%;
  height: 1px;
  background: var(--color-primary);
  left: 29px;
  bottom: 0;
  transition: 0.3s;
}
.footer-one-single-wized .quick-link-inner .links li a i {
  margin-right: 12px;
  transition: 0.3s;
}
.footer-one-single-wized .quick-link-inner .links li a:hover {
  color: var(--color-primary);
}
.footer-one-single-wized .quick-link-inner .links li a:hover::after {
  position: absolute;
  width: 76%;
}
.footer-one-single-wized .quick-link-inner .links li a:hover i {
  color: #fff;
}
.footer-one-single-wized .post-wrapper .single-footer-post {
  display: flex;
  align-items: flex-start;
}
.footer-one-single-wized .post-wrapper .single-footer-post .left-thumbnail {
  margin-right: 20px;
  display: block;
  overflow: hidden;
  border-radius: 15px;
}
.footer-one-single-wized .post-wrapper .single-footer-post .left-thumbnail img {
  width: 130px;
  height: auto;
  transition: var(--transition);
}
.footer-one-single-wized .post-wrapper .single-footer-post .left-thumbnail:hover img {
  transform: scale(1.2);
}
.footer-one-single-wized .post-wrapper .single-footer-post .post-right p {
  margin-bottom: 0;
  color: #8B8F99;
  font-size: 14px;
  margin-top: -6px;
}
.footer-one-single-wized .post-wrapper .single-footer-post .post-right a .title {
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  margin-bottom: 0;
  transition: var(--transition);
}
.footer-one-single-wized .post-wrapper .single-footer-post .post-right a:hover .title {
  color: var(--color-primary);
}
.footer-one-single-wized .post-wrapper .single-footer-post .post-right a {
  max-width: max-content;
  padding-left: 0;
  color: #DF0A0A;
  display: flex;
  align-items: center;
  margin-top: -1px;
}
.footer-one-single-wized .post-wrapper .single-footer-post .post-right a i {
  margin-left: 6px;
  margin-bottom: -4px;
  position: relative;
  transition: var(--transition);
}
.footer-one-single-wized .post-wrapper .single-footer-post .post-right a.red-more {
  display: block;
  max-width: max-content;
}
.footer-one-single-wized .post-wrapper .single-footer-post .post-right a.red-more:hover i {
  margin-left: 15px;
}

.footer-one .rts-copyright-area {
  border-top: 1px solid #21293D;
  padding: 30px 0;
}
.footer-one .rts-copyright-area p {
  font-size: 16px;
  color: #fff;
}

.support-team {
  display: flex;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid #EEEEEE;
  margin-top: 10px;
}
.support-team .thumbnail {
  display: block;
  overflow: hidden;
  border-radius: 20px;
}
.support-team .thumbnail img {
  border-radius: 20px;
  transition: 0.3s;
}
.support-team .thumbnail:hover img {
  transform: scale(1.1);
}
.support-team .details {
  margin-left: 15px;
}
.support-team .details a .title {
  transition: 0.3s;
}
.support-team .details a:hover .title {
  color: var(--color-primary-2);
}
.support-team .details .title {
  margin-bottom: 0;
  margin-top: 5px;
}

.footer-bg-2 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.footer-three .copyright-area {
  border-top: 1px solid #E2E2E2;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #1C2539;
}
.footer-three .copyright-area P {
  color: #1C2539;
  flex-wrap: 400;
  font-size: 16px;
}

@media only screen and (max-width: 575px) {
  .rts-footer-area.footer-three.rts-section-gapTop.footer-bg-2 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media only screen and (max-width: 1199px) {
  .footer-three-single-wized.left {
    padding-right: 54px;
  }
}

.footer-three-single-wized.mid-left {
  padding-left: 15px;
}
@media only screen and (max-width: 1199px) {
  .footer-three-single-wized.mid-left {
    padding-left: 0;
    margin-left: -67px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer-three-single-wized.mid-left {
    margin-left: 5px;
  }
}
@media only screen and (max-width: 767px) {
  .footer-three-single-wized.mid-left {
    margin-left: 5px;
  }
}
.footer-three-single-wized.mid-right {
  margin-left: -38px;
  margin-right: 37px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer-three-single-wized.mid-right {
    margin-left: 0;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .footer-three-single-wized.mid-right {
    margin-left: 0;
    margin-top: 30px;
  }
}
.footer-three-single-wized.mid-right .body p {
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 33px;
}
.footer-three-single-wized.mid-right .body .update-wrapper .email-footer-area {
  display: flex;
  position: relative;
}
.footer-three-single-wized.mid-right .body .update-wrapper .email-footer-area input {
  height: 55px;
  border: 1px solid #E3E3E3;
  border-radius: 8px;
  padding-right: 60px;
}
.footer-three-single-wized.mid-right .body .update-wrapper .email-footer-area input:focus {
  border: 1px solid var(--color-primary-3);
}
.footer-three-single-wized.mid-right .body .update-wrapper .email-footer-area button {
  height: 55px;
  width: 55px;
  border-radius: 8px;
  background: var(--color-primary-3);
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
}
.footer-three-single-wized.mid-right .body .update-wrapper .note-area p {
  color: #5D666F;
  margin-top: 25px;
  font-weight: 400;
}
.footer-three-single-wized.mid-right .body .update-wrapper .note-area p span {
  color: var(--color-primary-3);
}
.footer-three-single-wized.left a.logo_footer {
  padding-bottom: 25px;
  display: block;
}
.footer-three-single-wized.left p.disc {
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 26px;
}
.footer-three-single-wized.right .footer-gallery-inner {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.footer-three-single-wized.right .footer-gallery-inner a {
  overflow: hidden;
  max-width: max-content;
  height: 90px;
  width: 90px;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.footer-three-single-wized.right .footer-gallery-inner a img {
  max-width: 90px;
  transition: 0.3s;
}
.footer-three-single-wized.right .footer-gallery-inner a:hover img {
  transform: scale(1.2);
}
.footer-three-single-wized .title {
  font-size: 22px;
}
.footer-three-single-wized .body .info-wrapper .single {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.footer-three-single-wized .body .info-wrapper .single:last-child {
  margin-bottom: 0;
}
.footer-three-single-wized .body .info-wrapper .single:last-child .icon {
  position: relative;
  margin-top: -20px;
}
.footer-three-single-wized .body .info-wrapper .single .icon {
  margin-right: 25px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.footer-three-single-wized .body .info-wrapper .single .icon li {
  list-style: none;
  position: relative;
  z-index: 1;
  color: var(--color-primary-3);
}
.footer-three-single-wized .body .info-wrapper .single .icon li i {
  font-size: 14px;
}
.footer-three-single-wized .body .info-wrapper .single .icon li::after {
  position: absolute;
  content: "";
  height: 35px;
  width: 35px;
  background: #FFFFFF;
  box-shadow: 0px 9px 18px #1810100d;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  border-radius: 50%;
}
.footer-three-single-wized .body .info-wrapper .single .info span {
  display: block;
  color: #5D666F;
  font-size: 15px;
  font-weight: 400;
}
.footer-three-single-wized .body .info-wrapper .single .info a {
  color: #1C2539;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;
  line-height: 22px;
}
.footer-three-single-wized .body .info-wrapper .single .info a:hover {
  color: var(--color-primary-3);
}

.footer-bg-two {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 92%;
  margin: auto;
  border-radius: 80px;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  .footer-bg-two {
    max-width: 98%;
  }
}
@media only screen and (max-width: 1199px) {
  .footer-bg-two {
    max-width: 98%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer-bg-two {
    padding: 30px;
    border-radius: 0;
    max-width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .footer-bg-two {
    padding: 30px;
    border-radius: 0;
    max-width: 100%;
  }
}
@media only screen and (max-width: 575px) {
  .footer-bg-two {
    padding: 10px;
  }
}

.footer-two-single-wized.two {
  padding-left: 27px;
}
@media only screen and (max-width: 767px) {
  .footer-two-single-wized.two {
    padding-left: 0;
  }
}

.footer-two-single-wized.right {
  margin-top: 77px;
}
@media only screen and (max-width: 767px) {
  .footer-two-single-wized.right {
    margin-top: 0;
  }
}
.footer-two-single-wized.left .title {
  font-size: 36px;
  color: #1C2539;
  line-height: 46px;
}
.footer-two-single-wized.left .title span {
  font-weight: 300;
}
.footer-two-single-wized.left p.disc {
  font-size: 16px;
  color: #5D666F;
  line-height: 26px;
}
.footer-two-single-wized.left a.rts-btn:hover {
  background: #ffff;
  box-shadow: 0px 2px 20px rgba(24, 16, 16, 0.07);
}
.footer-two-single-wized .wized-title-area .wized-title {
  margin-bottom: 4px;
}
.footer-two-single-wized .wized-2-body ul {
  list-style: none;
  padding-left: 0;
}
.footer-two-single-wized .wized-2-body ul li a {
  color: #5D666F;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  transition: 0.3s;
}
.footer-two-single-wized .wized-2-body ul li a i {
  font-size: 14px;
  margin-right: 10px;
}
.footer-two-single-wized .wized-2-body ul li a:hover {
  color: var(--color-primary-2);
}
.footer-two-single-wized .contact-info-1 {
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;
}
.footer-two-single-wized .contact-info-1 .icon i {
  position: relative;
  z-index: 1;
  font-size: 14px;
  color: var(--color-primary-2);
}
.footer-two-single-wized .contact-info-1 .icon i::after {
  position: absolute;
  content: "";
  z-index: -1;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  height: 35px;
  width: 35px;
}
.footer-two-single-wized .contact-info-1 .disc {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.footer-two-single-wized .contact-info-1 .disc span {
  color: #5D666F;
  font-size: 16px;
  font-weight: 400;
}
.footer-two-single-wized .contact-info-1 .disc a {
  color: #1C2539;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
}
.footer-two-single-wized .contact-info-1 .disc a:hover {
  color: var(--color-primary-2);
}

.contact-info-1 {
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;
}
.contact-info-1 .icon i {
  position: relative;
  z-index: 1;
  font-size: 14px;
  color: var(--color-primary-2);
}
.contact-info-1 .icon i::after {
  position: absolute;
  content: "";
  z-index: -1;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
  height: 35px;
  width: 35px;
}
.contact-info-1 .disc {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.contact-info-1 .disc span {
  color: #5D666F;
  font-size: 16px;
  font-weight: 400;
}
.contact-info-1 .disc a {
  color: #1C2539;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
}
.contact-info-1 .disc a:hover {
  color: var(--color-primary-2);
}

.rts-copy-right .copyright-h-2-wrapper {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .rts-copy-right .copyright-h-2-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.rts-copy-right .copyright-h-2-wrapper p.disc {
  margin-bottom: 0;
  color: #1C2539;
  font-weight: 500;
}
@media only screen and (max-width: 767px) {
  .rts-copy-right .copyright-h-2-wrapper p.disc {
    text-align: center;
    font-size: 12px;
  }
}
.rts-copy-right .copyright-h-2-wrapper .right {
  margin-left: auto;
}
@media only screen and (max-width: 767px) {
  .rts-copy-right .copyright-h-2-wrapper .right {
    margin-left: inherit;
  }
}
.rts-copy-right .copyright-h-2-wrapper .right ul {
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 0;
  margin: 0;
}
.rts-copy-right .copyright-h-2-wrapper .right ul li {
  margin-left: 30px;
  margin-top: 0;
  margin-bottom: 0;
}
.rts-copy-right .copyright-h-2-wrapper .right ul li:first-child {
  margin-left: 0%;
}
.rts-copy-right .copyright-h-2-wrapper .right ul li a {
  color: #1C2539;
  font-weight: 500;
  font-size: 16px;
  transition: 0.3s;
}
@media only screen and (max-width: 767px) {
  .rts-copy-right .copyright-h-2-wrapper .right ul li a {
    font-size: 12px;
  }
}
.rts-copy-right .copyright-h-2-wrapper .right ul li a:hover {
  color: var(--color-primary-2);
}
.rts-copy-right .copyright-h-2-wrapper p {
  margin-left: 0;
}

.margin-left-65 {
  margin-left: 65px;
}
@media only screen and (max-width: 1199px) {
  .margin-left-65 {
    margin-left: 0;
  }
}

@media only screen and (max-width: 479px) {
  .footer-one-single-wized {
    padding: 0 10px;
  }
}

.footer-four {
  background: #10151F;
}
.footer-four .footer-three-single-wized .title {
  color: #fff;
}
.footer-four .footer-three-single-wized .disc {
  color: #848C95;
}
.footer-four .footer-three-single-wized .social-three-wrapper li a {
  color: #fff;
}
.footer-four .footer-three-single-wized .social-three-wrapper li a::after {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  opacity: 0.05;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
}
.footer-four .footer-three-single-wized .social-three-wrapper li a:hover::after {
  background: var(--color-primary-4);
  opacity: 1;
}
.footer-four .footer-three-single-wized .body .info-wrapper .single .icon li {
  color: #fff;
}
.footer-four .footer-three-single-wized .body .info-wrapper .single .icon li::after {
  width: 35px;
  height: 35px;
  opacity: 0.05;
  box-shadow: 0px 9px 18px rgba(24, 16, 16, 0.05);
}
.footer-four .footer-three-single-wized .body .info-wrapper .single .info span {
  color: #848C95;
}
.footer-four .footer-three-single-wized .body .info-wrapper .single .info a {
  color: #fff;
}
.footer-four .footer-three-single-wized .body .update-wrapper .email-footer-area input {
  border: 1px solid #262D39;
}
.footer-four .footer-three-single-wized .body .update-wrapper .email-footer-area input:focus {
  border-color: var(--color-primary-4);
}
.footer-four .footer-three-single-wized .body .update-wrapper .email-footer-area button {
  background: var(--color-primary-4);
}
.footer-four .footer-three-single-wized .body .update-wrapper .note-area p span {
  color: var(--color-primary-4);
}
.footer-four .copyright-area {
  border: none;
}
.footer-four .copyright-area .disc {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #848C95;
}

.footer-five .rts-cta-wrapper .background-cta {
  background-color: var(--color-primary-2);
}
.footer-five .rts-cta-wrapper .background-cta .cta-input-arae .btn-primary {
  background: var(--color-primary-2);
}
.footer-five .rts-cta-wrapper .background-cta .cta-input-arae .btn-primary:hover {
  background: var(--color-gray);
  color: var(--color-primary-2);
}
.footer-five .footer-one-single-wized .quick-link-inner .links li a:hover {
  color: var(--color-primary-2);
}
.footer-five .footer-one-single-wized .quick-link-inner .links li a::after {
  background: var(--color-primary-2);
}
.footer-five .footer-one-single-wized.mid-bg .opening-time-inner .btn-primary {
  background: var(--color-primary-2);
}
.footer-five .footer-one-single-wized.mid-bg .opening-time-inner .btn-primary:hover {
  background: var(--color-gray);
  color: var(--color-primary-2);
}
.footer-five .footer-one-single-wized .single-footer-post .post-right a .title:hover {
  color: var(--color-primary-2);
}
.footer-five .footer-one-single-wized .single-footer-post .post-right .red-more {
  color: var(--color-primary-2);
}
  `}
      </style>
      <script>{`

    `}</script>
    </Helmet>
  );
};

export default DashboardHelmet;
