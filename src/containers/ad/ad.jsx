import { React } from "react";
export function createBaitElement() {
  const bait = document.createElement("div");
  bait.setAttribute(
      "class",
      "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links advertisement ad-text adSense adBlock adContent adBanner"
  );
  bait.setAttribute(
      "style",
      "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"
  );
  return bait;
}

export function doesElementIsBlocked(elem: HTMLDivElement) {
  if (
      elem.offsetParent === null ||
      elem.offsetHeight === 0 ||
      elem.offsetLeft === 0 ||
      elem.offsetTop === 0 ||
      elem.offsetWidth === 0 ||
      elem.clientHeight === 0 ||
      elem.clientWidth === 0
  ) {
      return true;
  }
  if (window.getComputedStyle !== undefined) {
      const elemCS = window.getComputedStyle(elem, null);
      if (
          elemCS &&
          (elemCS.getPropertyValue("display") === "none" ||
              elemCS.getPropertyValue("visibility") === "hidden")
      ) {
          return true;
      }
  }
  return false;
}

 function detectDomAdblocker() {
  // that's a legacy Ad Block Plus check I suppose ?
  // I don't think this attribute is set anymore, but I am keeping it anyway
  if (window.document.body.getAttribute("abp") !== null) {
      return true;
  }
  // try to lure adblockers into a trap
  const bait = createBaitElement();
  window.document.body.appendChild(bait);
  const detected = doesElementIsBlocked(bait);
  window.document.body.removeChild(bait);
  return detected;
}

const GAds = () => {
  return (
      <ins
        class="adsbygoogle"
        style={{ display: "block", textAlign: "center", height: "20px" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-5853436854129836"
        data-ad-slot="5119060461"
      ></ins>
  );
};

export default GAds;
