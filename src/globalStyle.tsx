import { createGlobalStyle } from "styled-components";
import YeongdeokSea from "./assets/fonts/Yeongdeok Sea.ttf";
import YeongdeokSeaWoff from "./assets/fonts/Yeongdeok Sea.woff";
import GmarketSans from "./assets/fonts/GmarketSansTTFMedium.ttf";
import GmarketSansWoff from "./assets/fonts/GmarketSansTTFMedium.woff";
import KyoboHand from "./assets/fonts/KyoboHandwriting2019.ttf";

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;

  @font-face {
    font-family: "Yeongdeok Sea";
    font-weight: normal;
    src: url(${YeongdeokSea}) format("truetype"), url(${YeongdeokSeaWoff}) format("woff");
  }

  @font-face {
    font-family: "Gmarket Sans";
    font-weight: normal;
    src: url(${GmarketSans}) format("truetype"), url(${GmarketSansWoff}) format("woff");
  }
	@font-face {
	font-family: "KyoboHand";
	font-weight: normal;
	src: url(${KyoboHand}) format("truetype");
	}

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
